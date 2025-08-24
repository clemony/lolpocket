import { appTaglines } from 'appdata/content/taglines'
import * as v from 'valibot'
import { toast } from 'vue-sonner'

interface UserProfileResponse {
  account: Account | null
  settings: Settings | null
  public: PublicData | null
}

export async function hydrateUser() {
  const client = useSupabaseClient()
  const user = useSupabaseUser().value

  const as = useAccountStore()

  console.log('Authenticated user: ', user)

  if (!user)
    throw new Error('hydrateUser: no logged-in user')

  // eslint-disable-next-line node/prefer-global/process
  if (!process.client) {
    console.warn('hydrateUser should only run client-side')
    return
  }

  try {
    const { data, error } = await client
      .rpc('get_user_profile')
      .single<UserProfileResponse>()

    console.log('RPC Result:', { data, error })

    if (error) {
      console.error('hydrateUser RPC error:', error)
      return
    }

    if (data) {
      // Safe parse & fallback to defaults
      const accountParse = v.safeParse(AccountSchema, data.account ?? getEmptyAccount())
      const settingsParse = v.safeParse(SettingsSchema, data.settings ?? getEmptySettings())
      const publicParse = v.safeParse(PublicDataSchema, data.public ?? getEmptyPublicData())

      if (!accountParse.success) {
        console.warn('Account parse failed, using defaults:', accountParse.issues)
      }
      if (!settingsParse.success) {
        console.warn('Settings parse failed, using defaults:', settingsParse.issues)
      }
      if (!publicParse.success) {
        console.warn('PublicData parse failed, using defaults:', publicParse.issues)
      }

      // Commit validated & defaulted data to store
      as.account = accountParse.success ? accountParse.output : getEmptyAccount()
      as.settings = settingsParse.success ? settingsParse.output : getEmptySettings()
      as.publicData = publicParse.success ? publicParse.output : getEmptyPublicData()
    }
  }
  catch (err) {
    console.error('Unexpected error in hydrateUser:', err)
  }

  if (as.account?.puuid) {
    useAccountUpdate(as.account.puuid, as.account.regionGroup)
  }

  as.loggedIn = true

  toast.success('Welcome back!', {
    description: `Great to see you, ${
      as.account?.name ?? as.account?.username ?? 'Summoner'
    }! ${getRandom(appTaglines)}`,
  })

  as.$persist()
}
