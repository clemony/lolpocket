import type { Session } from "@supabase/supabase-js"
import { jwtDecode } from "jwt-decode"
import { toast } from "vue-sonner"

export function useAuth() {}

export async function hydrateUser(session: Session) {
  const as = useAccountStore()
  const decoded = jwtDecode<AuthRoleJwtPayload>(session.access_token)

  if (!session.user) {
    throw new Error("hydrateUser: session.user is null or undefined")
  }

  if (!decoded.app_metadata?.user_role) {
    throw new Error("hydrateUser: user_role is null or undefined")
  }

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

  if (needsRiotData) {
    const summoner = await fetchSummonerData(session.user.id)
    if (summoner) {
      Object.assign(as.userAccount.riot, summoner)
    }
  }

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
    .select('"name", "tag",  "puuid"')
    .eq("user_id", userId)
    .single()

  if (error) {
    console.error("Summoner fetch failed:", error)
    return null
  }

  return data
}

export async function useSignOut() {
  const accountStore = useAccountStore()
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  accountStore.currentSession = {
    session: null,
    accessToken: null,
    refreshToken: null,
  }

  await supabaseClient.auth.signOut()
  router.push("/")
  toast.success("Successfully logged out")
}
