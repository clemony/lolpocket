import { toast } from "~/composables/utils/useToast"

export async function accountFetch(progress?: Ref<number>) {
  const { data, error } = await $fetch("/api/supabase/account_fetch", {
    headers: useRequestHeaders(["cookie"]),
  })

  progress && (progress.value = 70)
  if (error) {
    sendErrorToast()
  } else {
    progress && (progress.value = 100)
    as().sb = data.account
    as().settings = data.settings
    ps().pockets = data.pockets
    navigateTo("/nexus")

    toast({
      title: "Welcome back!",
      color: "neutral",
      description: `Great to see you, ${
        as().account?.name ?? as().account?.username ?? "Summoner"
      }!`,
      icon: "tick",
    })

    ps().$persist
  }
}
