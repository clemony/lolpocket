// ~/composables/useStaticData.ts

interface StaticFetchOptions<T> {
  key?: string
  pick?: (keyof T)[]
  lazy?: boolean
  server?: boolean
  default?: () => T
  transform?: (data: T) => T
}

export function useStaticData() {
  const fetchItemIndex = (opts: StaticFetchOptions<ItemIndex[]> = {}) =>
    useFetch('/api/item-index', {
      key: opts.key ?? 'item-index',
      lazy: opts.lazy,
      server: opts.server,
      default: opts.default,
      transform: opts.transform,
    })

  const fetchChampionIndex = (opts: StaticFetchOptions<ChampionIndex[]> = {}) =>
    useFetch('/api/champion-index', {
      key: opts.key ?? 'champion-index',
      lazy: opts.lazy,
      server: opts.server,
      default: opts.default,
      transform: opts.transform,
    })

  return {
    fetchItemIndex,
    fetchChampionIndex,
  }
}