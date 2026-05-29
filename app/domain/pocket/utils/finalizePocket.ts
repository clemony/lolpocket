import { heyGoodJob } from "~/domain/about/ui/good-job"

export async function finalizePocket(p: Pocket) {
  /*   const sbu = useSupabaseUser()
  if (sbu.value?.role === "authenticated") {
    const error = await $fetch("/api/supabase/update/pocket", {
      body: p,
      headers: useRequestHeaders(["cookie"]),
      method: "POST"
    })

    if (error) {
      sendErrorToast()
      return
    }
  }
 */
  pocketStore().pockets.push(p)
  if (pocketStore().pockets.some((pocket: Pocket) => pocket.key === p.key)) {
    const toast = useToast()

    toast.add({
      color: "neutral",
      orientation: "horizontal",
      title: `Created ${p.label}!`,
      description: `${getRandom(heyGoodJob)}, ${
        user().account?.username || user().summoner?.name || "Summoner"
      }`,
      icon: "tick"
    })
  } else {
    sendErrorToast()
  }
}
