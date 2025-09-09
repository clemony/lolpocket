// plugins/loading.client.ts
export default defineNuxtPlugin(() => {
/*   const indicator = useLoadingIndicator()
  const router = useRouter()

  let pendingRequests = 0
  let navigationInProgress = false
  let finishTimer: ReturnType<typeof setTimeout> | null = null
  const FINISH_DELAY = 200

  function start() {
    if (finishTimer) {
      clearTimeout(finishTimer)
      finishTimer = null
    }
    indicator.start()
  }

  function stop() {
    if (!navigationInProgress && pendingRequests === 0) {
      finishTimer = setTimeout(() => {
        indicator.finish()
      }, FINISH_DELAY)
    }
  }

  // Track navigation
  router.beforeEach(() => {
    navigationInProgress = true
    start()
  })
  router.afterEach(() => {
    navigationInProgress = false
    stop()
  })

  // Patch useFetch
  const originalUseFetch = useFetch
  function patchedUseFetch<T>(
    ...args: Parameters<typeof originalUseFetch<T>>
  ): ReturnType<typeof originalUseFetch<T>> {
    pendingRequests++
    start()
    const result = originalUseFetch<T>(...args)
    watch(
      result.pending,
      (isPending) => {
        if (!isPending) {
          pendingRequests = Math.max(0, pendingRequests - 1)
          stop()
        }
      },
      { immediate: true },
    )
    return result
  }

  // Patch useAsyncData
  const originalUseAsyncData = useAsyncData
  function patchedUseAsyncData<T, E = Error>(
    ...args: Parameters<typeof originalUseAsyncData<T, E>>
  ): ReturnType<typeof originalUseAsyncData<T, E>> {
    pendingRequests++
    start()
    const result = originalUseAsyncData<T, E>(...args)
    watch(
      result.pending,
      (isPending) => {
        if (!isPending) {
          pendingRequests = Math.max(0, pendingRequests - 1)
          stop()
        }
      },
      { immediate: true },
    )
    return result
  } */
})
