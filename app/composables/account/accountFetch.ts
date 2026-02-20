import type { AccountData, Settings } from "#shared/types"
//
import { getEmptyAccount, getEmptySettings } from "#shared/schema"

export async function accountFetch() {
  const progress = ref<number>(0)
  const toast = useToast()
  const { settings, account, pockets } = await $fetch<UserProfileResponse>(
    "/api/supabase/fetch/account",
    {
      headers: useRequestHeaders(["cookie"]),
    }
  )

  console.log("🥸 - accountFetch - account:", account)
  progress.value = 40

  if (account) {
    user().account ??= getEmptyAccount() as unknown as AccountData
    Object.assign(user().account as AccountData, account as AccountData)
  } else {
    sendErrorToast("Unable to load account data. Please try logging in again.")
  }
  progress.value = 50
  user().settings = (settings ?? getEmptySettings()) as Settings
  progress.value = 60
  usePockets().pockets = pockets ?? []
  progress.value = 70

  // Object.assign(user().account, account)
  if (account) summonerAccounts().setAccount(account as AccountData)
  progress.value = 80
  console.log(
    "🥸 - findSummoner - summonerAccounts():",
    summonerAccounts().accounts
  )

  const summoner = account?.puuid
    ? await sSummoner().ensureSummoner({ puuid: account.puuid })
    : null

  if (summoner) {
    Object.assign(user().account as AccountData, summoner)
  }
  progress.value = 90
  progress.value = 100

  toast.add({
    title: "Welcome back!",
    description: `Great to see you, ${
      user().account?.name ?? user().account?.username ?? "Summoner"
    }!`,
    icon: "party",
  })

  return { progress }
}
