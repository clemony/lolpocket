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
    Object.assign(as().account, data.account)
    Object.assign(as().settings, data.settings)
    Object.assign(ps().pockets, data.pockets)
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
