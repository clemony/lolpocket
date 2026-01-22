export async function accountFetch() {
  const progress = ref<number>(0)
  const toast = useToast()
  const { account, settings, pockets } = await $fetch<UserProfileResponse>(
    "/api/supabase/fetch/account",
    {
      headers: useRequestHeaders(["cookie"]),
    }
  )

  console.log("🥸 - accountFetch - account:", account)
  progress.value = 40

  if (account) {
    as().account ??= {} as AccountData
    Object.assign(as().account, account)
  } else
    sendErrorToast("Unable to load account data. Please try logging in again.")
  progress.value = 50
  as().settings = settings
  progress.value = 60
  ps().pockets = pockets
  progress.value = 70

  // Object.assign(as().account, account)
  acc().setAccount(account)
  progress.value = 80
  console.log("🥸 - findSummoner - acc():", acc().accounts)

  const summoner = await ss().ensureSummoner({ puuid: account.puuid })

  if (summoner) {
    Object.assign(as().account, summoner)
  }
  progress.value = 90
  as().$persist
  progress.value = 100

  toast.add({
    title: "Welcome back!",
    description: `Great to see you, ${
      as().account?.name ?? as().account?.username ?? "Summoner"
    }!`,
    icon: "party",
  })

  ps().$persist

  return { progress }
}
