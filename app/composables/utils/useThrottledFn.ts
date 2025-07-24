export function throttleFunction<T extends (...args: any[]) => any>(
  fn: T,
  wait = 60_000,
) {
  const lastCalled = ref<number | null>(null)
  const isLoading = ref(false)

  const timeRemaining = computed(() => {
    if (!lastCalled.value)
      return 0
    return Math.max(0, wait - (Date.now() - lastCalled.value))
  })

  const throttled = useThrottleFn(
    async (...args: Parameters<T>) => {
      if (isLoading.value || timeRemaining.value > 0)
        return

      isLoading.value = true
      try {
        await fn(...args)
        lastCalled.value = Date.now()
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
    isLoading,
    timeRemaining,
    lastCalled,
  }
}
