import type { Settings } from "#shared/types"
import { sendErrorToast } from "~/utils/ui/toasts"

export async function settingsUpdate(settings: Partial<Settings>) {
  try {
    const data = await $fetch<Settings>("/api/supabase/settings.update", {
      body: { settings },
      headers: useRequestHeaders(["cookie"]),
      method: "POST",
    })

    user().settings = data
    return data
  } catch (error) {
    console.error("Failed to update settings", error)
    sendErrorToast()
    throw error
  }
}
