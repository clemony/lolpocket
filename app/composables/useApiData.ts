// ~/composables/useStaticData.ts
import { useAsyncData, useFetch, useNuxtData } from '#app'
import { useDebounceFn } from '@vueuse/core'

interface StaticFetchOptions<T> {
  key?: string
  pick?: (keyof T)[]
  lazy?: boolean
  server?: boolean
  default?: () => T
  transform?: (data: T) => T
}

export function useStaticData() {
  // Cache keys to avoid refetching
  const fetchItemsLite = (opts: StaticFetchOptions<ItemLite[]> = {}) =>
    useFetch('/api/items-lite.json', {
      key: opts.key ?? 'items-lite',
      // pick: opts.pick,
      lazy: opts.lazy,
      server: opts.server,
      default: opts.default,
      transform: opts.transform,
    })

  // const fetchItem = (id: number, opts: StaticFetchOptions<Item> = {}) =>
  //   useAsyncData(`item-${id}`, () => $fetch(`/api/items/${id}.json`), {
  //     pick: opts.pick,
  //     default: opts.default,
  //     transform: opts.transform,
  //   })

  const fetchChampionsLite = (opts: StaticFetchOptions<ChampionLite[]> = {}) =>
    useFetch('/api/champions-lite.json', {
      key: opts.key ?? 'champions-lite',
      // pick: opts.pick,
      lazy: opts.lazy,
      server: opts.server,
      default: opts.default,
      transform: opts.transform,
    })

  const fetchSpells = (opts: StaticFetchOptions<Spell[]> = {}) =>
    useFetch('/api/champions-lite.json', {
      key: opts.key ?? 'champions-lite',
      // pick: opts.pick,
      lazy: opts.lazy,
      server: opts.server,
      default: opts.default,
      transform: opts.transform,
    })

  // Optional: debounced versions for large datasets
  const debouncedFetchItemsLite = useDebounceFn(fetchItemsLite, 300)
  const debouncedFetchChampionsLite = useDebounceFn(fetchChampionsLite, 300)

  return {
    fetchItemsLite,
    // fetchItem,
    fetchChampionsLite,
    debouncedFetchItemsLite,
    debouncedFetchChampionsLite,
  }
}