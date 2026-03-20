import type { MaybeRefOrGetter } from "vue"

export function useCooldown(
  puuid: MaybeRefOrGetter<string>,
  action: string,
  wait: number
) {
  const now = ref(Date.now())

  useIntervalFn(() => {
    now.value = Date.now()
  }, 1000)

  const entry = computed(() => {
    const key = toValue(puuid)
    if (!key)
      return null

    return cds().get(key, action)
  })

  const timeRemaining = computed(() => {
    if (!entry.value) return 0
    return Math.max(0, entry.value.wait - (now.value - entry.value.timestamp))
  })

  const cooldown = computed(() => {
    const seconds = Math.floor(timeRemaining.value / 1000)
    return seconds > 0
      ? {
          percent: (seconds / (wait / 1000)) * 100,
          seconds,
        }
      : null
  })

  return {
    cooldown,
    entry,
    timeRemaining,
  }
}
