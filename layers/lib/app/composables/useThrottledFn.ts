export function throttleFunction<T extends (...args: any[]) => any>(
  fn: T,
  wait = 60_000,
  puuid: string,
  action = 'default'
) {
  const isLoading = ref(false)
  const now = () => Date.now()

  const timeRemaining = computed(() => {
    const e = entry.value
    if (!e) return 0
    return Math.max(0, e.wait - (now() - e.timestamp))
  })
  if (!cds()) return

  const entry = computed(() => cds().get(puuid, action))

  const cooldown = computed(() => {
    const seconds = Math.floor(timeRemaining.value / 1000)
    if (seconds <= 0) return null

    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    const formatted = `${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`

    return {
      formatted,
      percent: (seconds / (wait / 1000)) * 100,
      seconds,
    }
  })

  const throttled = useThrottleFn(
    async (...args: Parameters<T>) => {
      if (isLoading.value || timeRemaining.value > 0) return

      isLoading.value = true
      try {
        await fn(...args)
        cds().set(puuid, action, wait) // set cooldown
      }
      catch (err) {
        console.error('🛑 Throttled function error:', toRaw(err))
      }
      finally {
        isLoading.value = false
      }
    },
    wait,
    false,
    true
  )

  return {
    cooldown,
    entry,
    isLoading,
    throttled,
    timeRemaining,
  }
}
