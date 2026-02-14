import { maybeRunCleanup } from "~/composables"
/* This code snippet is defining a Nuxt plugin that performs some cleanup operations based on the
user's account PUUID (Player Universally Unique Identifier). Here is a breakdown of what the code is
doing: */

export default defineNuxtPlugin(() => {
  /* if (!import.meta.client) return */

  // Always run once immediately (logged-out cleanup)
  maybeRunCleanup()

  let stop: (() => void) | undefined

  stop = watch(
    () => user().account?.puuid,
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
