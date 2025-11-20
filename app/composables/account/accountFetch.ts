import { toast } from "~/composables/utils/useToast"

export async function accountFetch(progress?: Ref<number>) {
  const { data, error } = await $fetch("/supabase/fetch/account", {
    headers: useRequestHeaders(["cookie"]),
  })
  console.log("📎 - accountFetch - data:", data)

  progress && (progress.value = 70)
  if (error) {
    sendErrorToast()
  } else {
    console.log("📎 - accountFetch - data:", data)
    progress && (progress.value = 100)
    as().sb = data.account
    as().settings = data.settings
    ps().pockets = data.pockets

    Object.assign(as().account, data.account)

    const summoner = await ss().ensureSummoner({ puuid: data.account.puuid })

    if (summoner) {
      console.log("🥸 - accountFetch - summoner:", summoner)
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
}
