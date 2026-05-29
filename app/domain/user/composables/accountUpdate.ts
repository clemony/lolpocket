//
import { getEmptyAccount } from "#shared/schema"
import { sendErrorToast } from "~/utils/ui/toasts"

export async function accountUpdate(
  account: Partial<Account>,
  options: {
    silent?: boolean
    message?: string
  } = {}
) {
  try {
    const data = await $fetch<Account | null>("/api/supabase/account.update", {
      body: account,
      headers: useRequestHeaders(["cookie"]),
      method: "POST"
    })

    if (!data) return user().account

    user().account = {
      ...(getEmptyAccount() as unknown as Account),
      ...(user().account ?? {}),
      ...data
    }

    if (!options.silent) {
      const toast = useToast()

      toast.add({
        color: "neutral",
        orientation: "horizontal",
        title: "Success!",
        description: "Your account changes have been saved.",
        icon: "i-check-fill"
      })
    }
    return user().account
  } catch (error) {
    console.error("Failed to update account", error)
    sendErrorToast()
    throw error
  }
}
