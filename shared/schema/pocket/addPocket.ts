import { toast } from "~/base/notification/toast/use-toast"
import { heyGoodJob } from "~~/shared/data/good-job"
import { newPocket } from "./newPocket"

export async function addPocket(randomize?: boolean) {
  const p = randomize ? newRandomPocket() : newPocket()

  if (p) {
    console.log("📎 - addPocket - p:", p)
    const post = await $fetch("/api/supabase/pocket.upsert", {
      body: p,
      headers: useRequestHeaders(["cookie"]),
      method: "POST",
    })
    console.log("📎 - addPocket - post:", post)

    if (post.success) {
      ps().pockets.push(p)

      toast({
        color: "neutral",
        icon: "tick",
        title: `Created ${p.name}!`,
        description: `${getRandom(heyGoodJob)}, ${as().account.username || as().account.name}`,
      })
    } else {
      sendErrorToast()
    }
  }
}
