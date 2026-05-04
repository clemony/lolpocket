import type {
  ProviderIdentity,
  ProviderKey,
  UserProfileResponse
} from "#shared/types"
//
import { getEmptyAccount, getEmptySettings } from "#shared/schema"
import { getSummonerIcon } from "~/domain/utils/img"
import { sendErrorToast } from "~/utils/ui/toasts"

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value)

const isUserProfileResponse = (
  value: unknown
): value is UserProfileResponse => {
  if (!isRecord(value)) return false

  const hasAccount =
    "account" in value && (isRecord(value.account) || value.account === null)
  const hasSettings =
    "settings" in value && (isRecord(value.settings) || value.settings === null)
  const hasPockets =
    "pockets" in value &&
    (Array.isArray(value.pockets) || value.pockets === null)
  const hasInbox =
    !("inbox" in value) || isRecord(value.inbox) || value.inbox === null

  return hasAccount && hasSettings && hasPockets && hasInbox
}

const invalidAccountFetchError = (response: unknown) => {
  console.error("Invalid account fetch response", response)
  user().clearAccount()
  sendErrorToast("Unable to load account data. Please try logging in again.")

  if (response instanceof Error) return response
  return new Error("Invalid account fetch response")
}

const createAccount = (account: Account): Account => ({
  ...(getEmptyAccount() as unknown as Account),
  ...account
})

export async function accountFetch() {
  const progress = ref<number>(0)
  const toast = useToast()

  const client = useSupabaseClient()
  let response: unknown

  try {
    response = await $fetch<unknown>("/api/supabase/account.fetch", {
      headers: useRequestHeaders(["cookie"])
    })
  } catch (error) {
    console.error("Failed to fetch account data", error)
    sendErrorToast("Unable to load account data. Please try logging in again.")
    throw error
  }

  if (!isUserProfileResponse(response)) {
    throw invalidAccountFetchError(response)
  }

  const { settings, account, inbox, pockets } = response

  progress.value = 40

  if (account) {
    user().account = createAccount(account)
    user().summoner = undefined
  } else {
    user().clearAccount()
    sendErrorToast("Unable to load account data. Please try logging in again.")
  }
  progress.value = 50
  if (account) user().setInbox(inbox)
  user().settings = (settings ?? getEmptySettings()) as Settings
  pocketStore().pockets = pockets ?? []
  user().migrateAccountSplashUrlToSkinKey()
  pocketStore().migrateSplashUrlsToSkinKeys()
  progress.value = 60

  if (account) publicUsers().setAccount(account)
  progress.value = 70

  let summoner: Summoner | null = null
  if (account?.puuid) {
    try {
      summoner = await summonerStore().ensureSummoner({ puuid: account.puuid })
    } catch (err) {
      console.warn("Failed to resolve summoner during account fetch", err)
    }
  }

  if (account && summoner) {
    user().summoner = summoner
  }
  progress.value = 80

  const authUser = await client.auth.getUser()
  const getIdentities = await client.auth.getUserIdentities()

  const discord =
    getIdentities.data?.identities.find((i) => i.provider === "discord") ?? null
  const google =
    getIdentities.data?.identities.find((i) => i.provider === "google") ?? null

  const twitch =
    getIdentities.data?.identities.find((i) => i.provider === "twitch") ?? null

  const identities: Record<ProviderKey<string>, ProviderIdentity | null> = {
    email: {
      provider: "email",
      avatar: "",
      name: authUser.data.user?.email ?? "",
      description: authUser.data.user?.email_confirmed_at?.toString() ?? ""
    },
    riot:
      account && summoner
        ? {
            provider: "riot",
            avatar: getSummonerIcon(summoner.icon),
            name: summoner.name,
            description: summoner.tag ? `#${summoner.tag}` : ""
          }
        : null,
    discord: discord
      ? {
          provider: discord.provider,
          avatar: discord.identity_data?.avatar_url ?? "",
          name:
            discord.identity_data?.custom_claims?.global_name ||
            discord.identity_data?.full_name ||
            "",
          description: discord.identity_data?.email ?? ""
        }
      : null,
    twitch: twitch
      ? {
          provider: twitch.provider,
          avatar: twitch.identity_data?.avatar_url ?? "",
          name: twitch.identity_data?.full_name ?? "",
          description: twitch.identity_data?.email ?? ""
        }
      : null,
    google: google
      ? {
          provider: google.provider,
          avatar: google.identity_data?.avatar_url ?? "",
          name: google.identity_data?.full_name ?? "",
          description: google.identity_data?.email ?? ""
        }
      : null
  }

  progress.value = 90

  user().identities = identities
  progress.value = 100

  toast.add({
    orientation: "horizontal",
    title: "Welcome back!",
    description: `Great to see you, ${
      user().summoner?.name ?? user().account?.username ?? "Summoner"
    }!`,
    icon: "party"
  })

  return { progress }
}
