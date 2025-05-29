// useItemFilter.ts
export function useItemFilter(filters: ItemFilter) {
  const { data: rawItems, pending, error } = useFetch<ItemLite[]>('/api/items-lite', {
    key: 'items-lite',
    server: false,
    default: () => [], // ensures it's safe to read before data arrives
    immediate: true, // fetch as soon as possible
  })

  const queryRef = computed(() => filters.query || '')
  const debouncedQuery = refDebounced(queryRef, 200)

  const filtered = computed(() => {
    return Object.values(rawItems.value).filter((item) => {
      const matchesQuery = debouncedQuery.value
        ? item.name.toLowerCase().includes(debouncedQuery.value.toLowerCase())
        : true

      const matchesPurchasable = filters.purchasable ? item.purchasable !== false : true
      const matchesStats = filters.stats?.every(stat => item.stats[stat]) ?? true
      const matchesRank = filters.rank ? item.rank.includes(filters.rank) : true
      const matchesTags = filters.tags ? item.tags?.includes(filters.tags) : true
      const matchesMaps = filters.map ? item.maps.includes(filters.map) : true

      return matchesStats && matchesMaps && matchesPurchasable && matchesRank && matchesTags && matchesQuery
    })
  })

  const itemIds = computed(() => Object.values(rawItems.value).map(i => i.id))
  const filteredIds = computed (() => Object.values(filtered.value).map(i => i.id))

  return {
    itemIds,
    filtered,
    filteredIds,
    rawItems,
    pending,
    error,
  }
}