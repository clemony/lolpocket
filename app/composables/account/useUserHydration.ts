import { appTaglines } from '#shared/appdata/content/taglines'
import * as v from 'valibot'
import { getRandom } from '~/utils/get/getRandom'

interface UserProfileResponse {
  account: Account | null
  pockets: Pocket[] | null
  public: PublicData | null
  settings: Settings | null
}

interface UserProfileResponse {
  account: Account | null
  public: PublicData | null
  settings: Settings | null
  user_pockets: Pocket[] | null // <- updated key to match RPC
}
export async function hydrateUser(progress?: Ref<number>) {
  const client = useSupabaseClient()
  const user = useSupabaseUser().value

  if (!user)
    throw new Error('hydrateUser: no logged-in user')

  try {
    progress && (progress.value = 10)

    const { data, error } = await client
      .rpc('get_user_profile')
      .single<UserProfileResponse>()

    progress && (progress.value = 40)

    if (error) {
      console.error('hydrateUser RPC error:', error)
      return
    }

    if (data) {
      console.log('🌱 - hydrateUser - data:', data)
      const accountParse = v.safeParse(
        AccountSchema,
        data.account ?? getEmptyAccount()
      )
      const settingsParse = v.safeParse(
        SettingsSchema,
        data.settings ?? getEmptySettings()
      )
      const publicParse = v.safeParse(
        PublicDataSchema,
        data.public ?? getEmptyPublicData()
      )

      progress && (progress.value = 70)

      as().account
        = accountParse.success ? accountParse.output : getEmptyAccount()
      as().settings
        = settingsParse.success ? settingsParse.output : getEmptySettings()
      as().publicData
        = publicParse.success ? publicParse.output : getEmptyPublicData()

      const results = data.user_pockets.map(p => v.safeParse(PocketSchema, p))
      results.forEach((r, i) => {
        if (!r.success) {
          console.warn(`Pocket ${i} failed validation:`, r.issues)
        }
      })

      let validatedPockets: Pocket[] = []
      if (Array.isArray(data.user_pockets)) {
        validatedPockets = data.user_pockets
          .map(p => v.safeParse(PocketSchema, p))
          .filter(p => p.success)
          .map(p => (p as { success: true, output: Pocket }).output)
      }
      ps().pockets = validatedPockets
      console.log('🌱 - hydrateUser - ps().pockets:', ps().pockets)
    }

    progress && (progress.value = 100)
  }
  catch (err) {
    console.error('Unexpected error in hydrateUser:', err)
  }

  if (as().account?.puuid) {
    // useAccountUpdate(as().account.puuid, as().account.regionGroup)
  }

  as().loggedIn = true
  navigateTo('/nexus')

  toast({
    title: 'Welcome back!',
    description: `Great to see you, ${
      as().account?.name ?? as().account?.username ?? 'Summoner'
    }! ${getRandom(appTaglines)}`,
  })

  as().$persist()
}
