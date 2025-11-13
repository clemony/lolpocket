import { toast } from "~/base/notification/toast/use-toast"
import { getRandom } from "~/utils/helpers/getRandom"
export async function useHydrateUser(progress?: Ref<number>) {
  const { data, success } = await $fetch("/api/supabase/account.fetch", {
    headers: useRequestHeaders(["cookie"]),
  })
  console.log("📎 - useHydrateUser - data:", data)
  console.log("📎 - useHydrateUser - success:", success)
  progress && (progress.value = 70)
  if (!success) {
    sendErrorToast()
    return
  } else {
    progress && (progress.value = 100)
    as().account = data.account
    as().settings = data.settings
    ps().pockets = data.pockets
    as().loggedIn = true
    navigateTo("/nexus")

    toast({
      title: "Welcome back!",
      color: "neutral",
      icon: "tick",
      description: `Great to see you, ${
        as().account?.name ?? as().account?.username ?? "Summoner"
      }!`,
    })

    ps().$persist
  }
}
