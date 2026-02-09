//
import { getEmptyAccount } from "#shared/schema"
import type { AccountData } from "#shared/types"

export async function accountUpdate(account: Partial<AccountData>) {
  const data = await $fetch("/api/supabase/update/account", {
    body: account,
    headers: useRequestHeaders(["cookie"]),
    method: "POST",
  })
  const toast = useToast()
  console.log("📎 - accountUpdate - data:", data)

  if (!data) {
    sendErrorToast()
  } else {
    as().account ??= getEmptyAccount() as unknown as AccountData
    const next = Object.assign(as().account as AccountData, data as AccountData)
    as().account = next
    toast.add({
      color: "neutral",
      title: "Welcome back!",
      description: `Great to see you, ${
        as().account?.name ?? as().account?.username ?? "Summoner"
      }!`,
      icon: "tick",
    })
  }
}
