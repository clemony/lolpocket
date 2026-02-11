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
    as().account ??= getEmptyAccount() as unknown as AccountData
    Object.assign(as().account as AccountData, account as AccountData)
  } else {
    sendErrorToast("Unable to load account data. Please try logging in again.")
  }
  progress.value = 50
  as().settings = (settings ?? getEmptySettings()) as Settings
  progress.value = 60
  ps().pockets = pockets ?? []
  progress.value = 70

  // Object.assign(as().account, account)
  if (account) acc().setAccount(account as AccountData)
  progress.value = 80
  console.log("🥸 - findSummoner - acc():", acc().accounts)

  const summoner =
    account?.puuid ? await ss().ensureSummoner({ puuid: account.puuid }) : null

  if (summoner) {
    Object.assign(as().account as AccountData, summoner)
  }
  progress.value = 90
  progress.value = 100

  toast.add({
    title: "Welcome back!",
    description: `Great to see you, ${
      as().account?.name ?? as().account?.username ?? "Summoner"
    }!`,
    icon: "party",
  })

  return { progress }
}
