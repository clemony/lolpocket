import type { AccountData, Settings } from "#shared/types"
//
import { getEmptyAccount, getEmptySettings } from "#shared/schema"
import { getSummonerIcon } from "~/domain/utils/img"
import { sendErrorToast } from "~/utils/ui/toasts"

export async function accountFetch() {
  const progress = ref<number>(0)
  const toast = useToast()

  const client = useSupabaseClient()
  const { settings, account, pockets } = await $fetch<UserProfileResponse>(
    "/api/supabase/account.fetch",
    {
      headers: useRequestHeaders(["cookie"])
    }
  )

  progress.value = 40

  if (account) {
    user().account ??= getEmptyAccount() as unknown as AccountData
    Object.assign(user().account as AccountData, account as AccountData)
  } else {
    sendErrorToast("Unable to load account data. Please try logging in again.")
  }
  progress.value = 50
  user().settings = (settings ?? getEmptySettings()) as Settings
  usePockets().pockets = pockets ?? []
  progress.value = 60

  if (account) summonerAccounts().setAccount(account as AccountData)
  progress.value = 70

  let summoner: Summoner | null = null
  if (account?.puuid) {
    try {
      summoner = await summonerStore().ensureSummoner({ puuid: account.puuid })
    } catch (err) {
      console.warn("Failed to resolve summoner during account fetch", err)
    }
  }

  if (summoner) {
    Object.assign(user().account as AccountData, summoner)
  }
  progress.value = 80

  const authUser = await client.auth.getUser()
  const getIdentities = await client.auth.getUserIdentities()

  const identities = computed<
    Record<ProviderKey<string>, ProviderIdentity | null>
  >(() => {
    const discord =
      getIdentities.data?.identities.find((i) => i.provider === "discord") ??
      null
    const google = getIdentities.data?.identities.find(
      (i) => i.provider === "google"
    )

    const twitch = getIdentities.data?.identities.find(
      (i) => i.provider === "twitch"
    )

    return {
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
            provider: discord?.provider,
            avatar: discord?.identity_data?.avatar_url,
            name:
              discord?.identity_data?.custom_claims?.global_name ||
              discord?.identity_data?.full_name,
            description: discord?.identity_data?.email
          }
        : null,
      twitch: twitch
        ? {
            provider: twitch?.provider,
            avatar: twitch?.identity_data?.avatar_url,
            name: twitch?.identity_data?.full_name,
            description: twitch?.identity_data?.email
          }
        : null,
      google: google
        ? {
            provider: google?.provider,
            avatar: google?.identity_data?.avatar_url,
            name: google?.identity_data?.full_name,
            description: google?.identity_data?.email
          }
        : null
    }
  })

  progress.value = 90

  user().identities = identities.value
  progress.value = 100

  toast.add({
    orientation: "horizontal",
    title: "Welcome back!",
    description: `Great to see you, ${
      user().account?.name ?? user().account?.username ?? "Summoner"
    }!`,
    icon: "party"
  })

  return { progress }
}
