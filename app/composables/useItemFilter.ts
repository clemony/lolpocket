export function useItemFilter(rawItems: Record<string, ItemLite> | ItemLite[], filters: ItemFilter) {
  const filteredItems = ref<ItemLite[]>([])

  const items = computed(() =>
    Array.isArray(rawItems)
      ? rawItems
      : Object.values(rawItems ?? {}),
  )

  watchEffect(() => {
    filteredItems.value = items.value.filter((item) => {
      const matchesPurchasable = filters.purchasable ? item.purchasable != false  : true
      const matchesStats = filters.stats
  ? filters.stats.every((statKey) => item.stats[statKey])
  : true
      const matchesRank = filters.rank ? item.rank.includes(filters.rank) : true
      const matchesTags = filters.tags ? item.tags?.includes(filters.tags) : true
      const matchesMaps = filters.map  ? item.maps.includes(filters.map)  : true
      const matchesQuery = filters.query ? item.name.toLowerCase().includes(filters.query.toLowerCase()) : true

      return matchesStats && matchesMaps && matchesPurchasable && matchesRank && matchesTags && matchesQuery
    })
  })

  return {
    filteredItems,
  }
}




