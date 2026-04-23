import type { UseRefHistoryReturn } from "@vueuse/core"
import type { ShallowRef } from "vue"

export function updateEmail(
  email: ShallowRef<string>,
  emailHistory: ShallowRef<string[]>
) {
  if (
    emailHistory.value.length > 1 &&
    emailHistory.value[0] !== user().identities?.email?.name
  ) {
    const client = useSupabaseClient()
  }
}

export async function saveAccount(
  params: Record<string, UseRefHistoryReturn<string, string>>
) {
  try {
    await accountUpdate(
      {
        username: params.username?.last.value.snapshot.trim() || undefined
      },
      { silent: true }
    )

    useToast().add({
      color: "neutral",
      title: "Account updated",
      description: "Your username has been saved.",
      icon: "tick"
    })
  } catch (error) {
    console.error("Failed to save username", error)
    sendErrorToast()
  }
}

export async function saveProfile(
  params: Record<string, UseRefHistoryReturn<string, string>>
) {
  try {
    await accountUpdate(
      {
        splash: user().account?.splash ?? null,
        title: user().account?.title ?? null
      },
      { silent: true }
    )

    useToast().add({
      color: "neutral",
      title: "Profile updated",
      description: "Your profile changes have been saved.",
      icon: "tick"
    })
  } catch (error) {
    console.error("Failed to save profile", error)
    sendErrorToast()
  }
}
