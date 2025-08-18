// useItemFilter.ts
import { akaLookup } from '~/appdata/filters/item-aka'
import { itemFilters } from '~/appdata/filters/item-filters'

export function useItemFilter(filters: ItemFilter) {
  const ix = useIndexStore()
  const queryRef = computed(() => filters.query || '')
  const debouncedQuery = refDebounced(queryRef, 200)

  const filtered = computed(() => {
    const query = debouncedQuery.value.toLowerCase()
    const allIds = ix.items.map(i => i.id)
    let matchedIds: Set<number> = new Set(allIds)

    const hasAnyFilters = Boolean(
      filters.query
      || filters.stats?.length
      || filters.tags
      || filters.rank
      || filters.map
      || filters.purchasable === false,
    )

    if (filters.stats?.length) {
      for (const stat of filters.stats) {
        const ids = itemFilters.stats[stat] ?? []
        matchedIds = new Set(ids.filter(id => matchedIds.has(id)))
      }
    }

    if (filters.tags) {
      const tagIds = itemFilters.tags[filters.tags] ?? []
      matchedIds = new Set(tagIds.filter(id => matchedIds.has(id)))
    }

    if (filters.rank) {
      const rankIds = itemFilters.rank[filters.rank] ?? []
      matchedIds = new Set(rankIds.filter(id => matchedIds.has(id)))
    }

    if (filters.map) {
      const mapIds = itemFilters.maps[filters.map] ?? []
      matchedIds = new Set(mapIds.filter(id => matchedIds.has(id)))
    }

    if (filters.purchasable === true) {
      const unpurchasableSet = new Set(itemFilters.unpurchasable)
      matchedIds = new Set(
        [...matchedIds].filter(id => !unpurchasableSet.has(id)),
      )
    }

    // Optional: Add fuzzy text match filtering
    if (query) {
      matchedIds = new Set(
        [...matchedIds].filter((id) => {
          const item = ix.itemById(id)
          if (!item)
            return false

          const name = item.name.toLowerCase()
          const akas = akaLookup[item.name.toLowerCase()] || []
          return (
            name.includes(query)
            || akas.some(aka => aka.toLowerCase().includes(query))
          )
        }),
      )
    }

    return matchedIds
  })
  return {
    filtered: computed(() => Array.from(filtered.value)),
  }
}
