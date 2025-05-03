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
       const matchesStats = filters.stats && filters.stats[0] ? filters.stats.some(stat => item.stats[stat])  : true
      const matchesRank = filters.rank ? item.rank.includes(filters.rank) : true
      const matchesTags = filters.tags ? item.tags?.includes(filters.tags) : true
      const matchesQuery = filters.query ? item.name.toLowerCase().includes(filters.query.toLowerCase()) : true

      return matchesStats && matchesPurchasable && matchesRank && matchesTags && matchesQuery
    })
  })

  return {
    filteredItems,
  }
}




