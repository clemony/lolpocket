export function useItemFilter(rawItems: Record<string, ItemLite> | ItemLite[], filters: ItemFilter) {
  const filteredItems = ref<ItemLite[]>([])

  const items = computed(() =>
    Array.isArray(rawItems)
      ? rawItems
      : Object.values(rawItems ?? {}),
  )

  console.log('💠 - filteredItems.value=items.value.filter - value:')
  watchEffect(() => {
    filteredItems.value = items.value.filter((item) => {
      const matchesPurchasable = filters.purchasable ? item.purchasable == true : true
      const matchesRank = filters.rank ? item.rank.includes(filters.rank) : true
      const matchesTags = filters.tags ? item.tags?.includes(filters.tags) : true
      const matchesQuery = filters.query ? item.name.toLowerCase().includes(filters.query.toLowerCase()) : true

      return matchesPurchasable && matchesRank && matchesTags && matchesQuery
    })
  })

  return {
    filteredItems,
  }
}