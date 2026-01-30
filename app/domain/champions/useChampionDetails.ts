// ~/composables/useChampionDetails.ts
export function useChampionDetails(key: Ref<string> | (() => string) | string) {
  return useFetch<Champion>(
    () => {
      const resolvedKey
        = typeof key === 'function'
          ? key()
          : isRef(key)
            ? key.value
            : key
      return `/api/champions/${resolvedKey}`
    },
    {
      key: () => {
        const resolvedKey
          = typeof key === 'function'
            ? key()
            : isRef(key)
              ? key.value
              : key
        return `champion-${resolvedKey}`
      },
      lazy: false,
      server: false,
    }
  )
}
