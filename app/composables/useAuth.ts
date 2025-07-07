import type { Session } from "@supabase/supabase-js"
import { jwtDecode } from "jwt-decode"
import { toast } from "vue-sonner"

export function useAuth() {
  const client = useSupabaseClient()
  const router = useRouter()
  const route = useRoute()
  const as = useAccountStore()

  client.auth.onAuthStateChange(async (event, session) => {
    console.log("💠 Auth change:", event)

    if (event === "INITIAL_SESSION" && session) {
      console.log(
        `💠 - client.auth.onAuthStateChange - "INITIAL_SESSION":`,
        "INITIAL_SESSION"
      )
      await hydrateUser(session)
    } else if (event === "SIGNED_OUT") {
      as.resetUserAccount()
      if (route.path !== "/") router.push("/")
      else location.reload()
      toast.success("Successfully logged out")
    } else if (event === "SIGNED_IN" && session) {
      const { data } = await client.auth.setSession({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      })

      if (data.session) {
        await hydrateUser(data.session)
      }
    }
  })
}

async function hydrateUser(session: Session) {
  const as = useAccountStore()
  const decoded = jwtDecode<AuthRoleJwtPayload>(session.access_token)

  const name =
    session.user.user_metadata?.custom_claims?.global_name ??
    session.user.user_metadata?.name ??
    "Summoner"

  as.userAccount = {
    ...as.userAccount,
    name,
    role: decoded.app_metadata.user_role as AccountRole,
    id: session.user.id,
  }

  const needsRiotData = !as.userAccount.riot.puuid

  const summoner = await fetchSummonerData(session.user.id)
  if (summoner) {
    Object.assign(as.userAccount.riot, summoner)
  }

  const { fetchSummoner } = useSummoner(as.userAccount.riot.puuid)
  fetchSummoner()

  as.currentSession = {
    session,
    accessToken: session.access_token,
    refreshToken: session.refresh_token,
  }

  as.$persist
}

async function fetchSummonerData(
  userId: string
): Promise<Partial<Summoner> | null> {
  const client = useSupabaseClient()
  const { data, error } = await client
    .from("user_data")
    .select('"name", "tag", "profileIcon", "level", "region", "puuid"')
    .eq("user_id", userId)
    .single()

  if (error) {
    console.error("Summoner fetch failed:", error)
    return null
  }

  return data
}

export async function useSignOut() {
  const client = useSupabaseClient()
  await client.auth.signOut()
}
