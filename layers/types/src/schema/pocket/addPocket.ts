import { sendErrorToast } from "@constants"
import { heyGoodJob } from "~/domain/lp/ui/good-job"
import { newPocket } from "./newPocket"

export async function addPocket(randomize?: boolean) {
  const p = randomize ? newRandomPocket() : newPocket()

  const toast = useToast()
  if (p) {
    console.log("📎 - addPocket - p:", p)
    const data = await $fetch("/api/supabase/update/pocket", {
      body: p,
      headers: useRequestHeaders(["cookie"]),
      method: "POST",
    })

    if (data) {
      ps().pockets.push(p)

      toast.add({
        title: `Created ${p.name}!`,
        color: "neutral",
        description: `${getRandom(heyGoodJob)}, ${as().account.username || as().account.name}`,
        icon: "tick",
      })
    } else {
      sendErrorToast()
    }
  }
}
