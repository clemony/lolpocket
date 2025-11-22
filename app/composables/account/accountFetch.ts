import { toast } from "~/composables/utils/useToast"

export async function accountFetch(progress?: Ref<number>) {
  const { account, settings, pockets } = await $fetch<UserProfileResponse>(
    "/api/supabase/fetch/account",
    {
      headers: useRequestHeaders(["cookie"]),
    }
  )

  progress && (progress.value = 70)
  /*   if (error) {
    sendErrorToast()
  } else { */
  progress && (progress.value = 100)
  as().sb = account
  as().settings = settings
  ps().pockets = pockets

  Object.assign(as().account, account)
  acc().setAccount(account)
  console.log("🥸 - findSummoner - acc():", acc().accounts)

  const summoner = await ss().ensureSummoner({ puuid: account.puuid })

  if (summoner) {
    Object.assign(as().account, summoner)
  }
  as().$persist
  navigateTo("/nexus")

  toast({
    title: "Welcome back!",
    description: `Great to see you, ${
      as().account?.name ?? as().account?.username ?? "Summoner"
    }!`,
    icon: "party",
  })

  ps().$persist
}
