import { sendErrorToast } from "~/utils/ui/toasts"

export async function settingsUpdate(
  settings: Partial<Settings>,
  options: {
    silent?: boolean
    message?: string
  } = {}
) {
  try {
    const data = await $fetch<Settings>("/api/supabase/settings.update", {
      body: { settings },
      headers: useRequestHeaders(["cookie"]),
      method: "POST"
    })

    const store = user()
    if (store.settings) Object.assign(store.settings, data)
    else store.settings = data

    if (!options.silent) {
      const toast = useToast()

      toast.add({
        color: "neutral",
        orientation: "horizontal",
        title: "Success!",
        description:
          options.message || "Your account settings have been updated.",
        icon: "i-check-fill"
      })
    }
    return store.settings
  } catch (error) {
    console.error("Failed to update settings", error)
    sendErrorToast()
    throw error
  }
}
