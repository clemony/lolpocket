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
  const toast = useToast()
  try {
    const data = await $fetch<Account | null>("/api/supabase/account.update", {
      body: account,
      headers: useRequestHeaders(["cookie"]),
      method: "POST"
    })
    console.log("📎 - accountUpdate - data:", data)

    if (!data) return user().account

    user().account ??= getEmptyAccount() as unknown as AccountData
    const next = Object.assign(
      user().account as AccountData,
      data as AccountData
    )
    user().account = next
    if (!options.silent) {
      toast.add({
        color: "neutral",
        title: "Account updated",
        description: `Saved changes for ${
          user().account?.name ?? user().account?.username ?? "Summoner"
        }.`,
        icon: "tick"
      })
    }

    return next
  } catch (error) {
    console.error("Failed to update account", error)
    sendErrorToast()
    throw error
  }
}
