export function useCooldown(puuid: string, action: string, wait: number) {
  const store = useCooldownStore()
  const now = ref(Date.now())

  useIntervalFn(() => {
    now.value = Date.now()
  }, 1000)

  const entry = computed(() => store.get(puuid, action))

  const timeRemaining = computed(() => {
    if (!entry.value)
      return 0
    return Math.max(0, entry.value.wait - (now.value - entry.value.timestamp))
  })

  const cooldown = computed(() => {
    const seconds = Math.floor(timeRemaining.value / 1000)
    return seconds > 0
      ? {
          seconds,
          percent: (seconds / (wait / 1000)) * 100,
        }
      : null
  })

  return {
    cooldown,
    timeRemaining,
    entry,
  }
}