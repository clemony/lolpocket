export function throttleFunction<T extends (...args: any[]) => any>(
  fn: T,
  wait = 60_000,
  puuid: string,
  action = 'default',
) {
  const store = useCooldownStore()
  const isLoading = ref(false)
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
    if (seconds <= 0)
      return null

    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    const formatted = `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`

    return {
      seconds,
      percent: (seconds / (wait / 1000)) * 100,
      formatted,
    }
  })

  const throttled = useThrottleFn(
    async (...args: Parameters<T>) => {
      if (isLoading.value || timeRemaining.value > 0)
        return

      isLoading.value = true
      try {
        await fn(...args)
        store.set(puuid, action, wait) // set cooldown
      }
      catch (err) {
        console.error('🛑 Throttled function error:', err)
      }
      finally {
        isLoading.value = false
      }
    },
    wait,
    false,
    true,
  )

  return {
    throttled,
    cooldown,
    isLoading,
    timeRemaining,
    entry,
  }
}