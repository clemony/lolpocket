// useItemFilterProvider.ts
import { itemAkaLookup } from '#shared/appdata/filters/item-aka'
import { itemFilters } from '#shared/appdata/filters/item-filters'

export const ItemFilterKey = Symbol('ItemFilter')

export function useItemFilterProvider() {
  // --- FILTER STATE ---
  const filters = ref<ItemFilter>({
    map: 11,
    purchasable: true,
    query: '',
    rank: 'all',
    stats: [],
    tags: [],
  })

  // --- HELPERS ---
  function setFilter<K extends keyof ItemFilter>(key: K, value: ItemFilter[K]) {
    filters.value[key] = value
  }

  function clearFilters() {
    filters.value = {
      map: null,
      purchasable: null,
      query: '',
      rank: null,
      stats: [],
      tags: null,
    }
  }

  // --- FILTER LOGIC ---
  const queryRef = computed(() => filters.value.query || '')

  const debouncedQuery = refDebounced(queryRef, 200)

  function intersect(
    matched: Set<number>,
    ids: number[] | undefined
  ): Set<number> {
    if (!ids || ids.length === 0)
      return matched
    return new Set(ids.filter(id => matched.has(id)))
  }

  const filtered = computed(() => {
    const query = debouncedQuery.value.toLowerCase()
    const allIds = ix().items.map(i => i.id)
    let matchedIds: Set<number> = new Set(allIds)

    // pipeline
    if (filters.value.stats.length > 0) {
      for (const stat of filters.value.stats) {
        matchedIds = intersect(matchedIds, itemFilters.stats[stat])
      }
    }

    if (filters.value.tags.length > 0) {
      for (const tag of filters.value.tags) {
        matchedIds = intersect(matchedIds, itemFilters.tags[tag])
      }
    }

    if (filters.value.rank !== 'all') {
      matchedIds = intersect(matchedIds, itemFilters.rank[filters.value.rank])
    }

    if (filters.value.map !== 0) {
      matchedIds = intersect(matchedIds, itemFilters.maps[filters.value.map])
    }

    if (filters.value.purchasable) {
      const unpurchasableSet = new Set(itemFilters.unpurchasable)
      matchedIds = new Set(
        [...matchedIds].filter(id => !unpurchasableSet.has(id))
      )
    }

    if (query) {
      matchedIds = new Set(
        [...matchedIds].filter((id) => {
          const item = ix().itemById(id)
          if (!item)
            return false

          const name = item.name.toLowerCase()
          const akas = itemAkaLookup[item.name.toLowerCase()] || []
          return (
            name.includes(query)
            || akas.some(aka => aka.toLowerCase().includes(query))
          )
        })
      )
    }

    return Array.from(matchedIds)
  })

  const state = {
    clearFilters,
    filtered,
    filters,
    setFilter,
  }

  provide(ItemFilterKey, state)

  return state
}
