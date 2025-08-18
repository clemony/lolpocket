import type { Session } from '@supabase/supabase-js'
import { appTaglines } from 'appdata/content/taglines'
import { jwtDecode } from 'jwt-decode'
import { toast } from 'vue-sonner'

export async function useAuth(event, session: Session) {
  const client = useSupabaseClient()

  if (event === 'INITIAL_SESSION' && session) {
    await hydrateUser(session)
  }
  else if (event === 'SIGNED_OUT') {
    as().resetUserAccount()
    reloadNuxtApp({ path: '/' })
  }
  else if (event === 'SIGNED_IN' && session) {
    const { data } = await client.auth.setSession({
      access_token: session.access_token,
      refresh_token: session.refresh_token,
    })
    if (data.session) {
      await hydrateUser(data.session)
    }
    await reloadNuxtApp({ path: '/nexus' })

    toast.success('Welcome back!', {
      description: `Great to see you, ${as().account}`,
    })
  }
}

export async function hydrateUser(session: Session) {
  const as = useAccountStore()
  const decoded = jwtDecode<AuthRoleJwtPayload>(session.access_token)

  if (!session.user) {
    throw new Error('hydrateUser: session.user is null or undefined')
  }

  if (!decoded.app_metadata?.user_role) {
    throw new Error('hydrateUser: user_role is null or undefined')
  }

  const name
    = session.user.user_metadata?.custom_claims?.global_name
      ?? session.user.user_metadata?.name
      ?? 'Summoner'

  as.userAccount = {
    ...as.userAccount,
    name,
    role: decoded.app_metadata.user_role as AccountRole,
    uuid: session.user.id,
  }

  /*   as.fetchPublicData(as.userAccount.riot.puuid) */

  as.$persist
}

async function fetchSummonerData(
  userId: string,
): Promise<Partial<Summoner> | null> {
  const client = useSupabaseClient()
  const { data, error } = await client
    .from('user_account')
    .select('"name", "tag",  "puuid", "region"')
    .eq('user_id', userId)
    .single()

  if (error) {
    console.error('Summoner fetch failed:', error)
    return null
  }

  return data
}

export async function useSignOut() {
  const supabaseClient = useSupabaseClient()

  await supabaseClient.auth.signOut()
  await reloadNuxtApp({ path: '/nexus' })
  toast.success('Successfully logged out')
}
