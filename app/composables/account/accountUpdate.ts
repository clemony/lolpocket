import { toast } from "~/composables/utils/useToast"

export async function accountUpdate(account) {
  const data = await $fetch("/api/supabase/account_update", {
    headers: useRequestHeaders(["cookie"]),
    body: account,
    method: "POST",
  })

  console.log("📎 - accountUpdate - data:", data)

  if (!data) {
    sendErrorToast()
  } else {
    as().sb = Object.values(data) as unknown as AccountSchema
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
