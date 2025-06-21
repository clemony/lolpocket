// export function useCachedFetch<ResT, DataT>(
//   key: string,
//   url: string,
//   refTarget: Ref,
//   options?: {
//     lazy?: boolean
//     server?: boolean
//   },
// ) {
//   const { lazy = false, server = true } = options || {}

//   return useFetch(url, {
//     key,
//     lazy,
//     server,
//     getCachedData(cacheKey, nuxt, _ctx) {
//       const cached
//         = nuxt.payload?.data?.[cacheKey]
//           ?? nuxt.static?.data?.[cacheKey]

//       if (cached) {
//         refTarget.value = cached
//         return cached
//       }

//       return undefined
//     },
//     onResponse({ response }) {
//       refTarget.value = response._data
//     },
//   })
// }

export function useCachedFetch<T>(
  key: string,
  url: string,
  refTarget: Ref<T>,
  options?: {
    lazy?: boolean
    server?: boolean
  },
) {
  const { lazy = false, server = true } = options || {}
  const nuxtApp = useNuxtApp()
  const dataStore = useDataStore()

  // 1. Skip fetch if already populated
  if (Array.isArray(refTarget.value) && refTarget.value.length > 0) {
    console.log(`⏩ Skipping ${key}, already populated`)
    return
  }

  const { data, refresh } = useFetch<T>(url, {
    key,
    lazy,
    server,
    getCachedData: (key, nuxtApp) => {
      const cached = nuxtApp.payload?.data?.[key] ?? nuxtApp.static?.data?.[key]
      if (cached) {
        console.log(`🧠 Loaded ${key} from Nuxt cache`)
        refTarget.value = cached
        return cached
      }
      return undefined
    },
    onResponse({ response }) {
      console.log(`🌐 Set ${key} after fetch`)
      refTarget.value = response._data
    },
  })

  // 2. Refetch when currentPatch changes
  watch(
    () => dataStore.currentPatch,
    (patch, oldPatch) => {
      if (patch !== oldPatch) {
        console.log(`🔁 Patch changed: ${oldPatch} → ${patch}. Refetching ${key}`)
        refresh()
      }
    },
    { immediate: false },
  )

  return data
}