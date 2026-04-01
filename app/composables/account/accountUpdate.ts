import type { AccountData } from "#shared/types"
//
import { getEmptyAccount } from "#shared/schema"
import { sendErrorToast } from "~/utils/ui/toasts"

export async function accountUpdate(
  account: Partial<AccountData>,
  options: {
    silent?: boolean
  } = {}
) {
  const data = await $fetch("/api/supabase/update/account", {
    body: account,
    headers: useRequestHeaders(["cookie"]),
    method: "POST"
  })
  const toast = useToast()
  console.log("📎 - accountUpdate - data:", data)

  if (!data) {
    sendErrorToast()
  } else {
    user().account ??= getEmptyAccount() as unknown as AccountData
    const next = Object.assign(
      user().account as AccountData,
      data as AccountData
    )
    user().account = next
    if (!options.silent) {
      toast.add({
        color: "neutral",
        title: "Welcome back!",
        description: `Great to see you, ${
          user().account?.name ?? user().account?.username ?? "Summoner"
        }!`,
        icon: "tick"
      })
    }
  }
}
