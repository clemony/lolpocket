import { maybeRunCleanup } from "~/composables"

export default defineNuxtPlugin(() => {
  if (!process.client) return

  // Always run once immediately (logged-out cleanup)
  maybeRunCleanup()

  let stop: (() => void) | undefined

  stop = watch(
    () => as().account?.puuid,
    (puuid) => {
      if (!puuid) return

      maybeRunCleanup(puuid)

      // ✅ Safe now — stop is already assigned
      stop?.()
      stop = undefined
    },
    { immediate: true }
  )
})
