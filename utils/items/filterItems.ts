export function filterItems() {
  const is = useItemStore()
  const as = useAccountStore()
  const ds = useDataStore()

  const items = ds.SRitems || []
  let filtered = [...items]

  // console.log('💠 - filteredItems - filtered:', filtered)
  // Apply your filtering logic
  if (is.filterItemStats.length) {
    is.filterItemStats.forEach((stat) => {
      filtered = filtered.filter(item => Object.keys(item.stats ? item.stats : '').includes(stat.id))
    })
  }

  if (is.filterItemCats.length) {
    is.filterItemCats.forEach((cat) => {
      filtered = filtered.filter(item => Object.keys(item.menu ? item.menu : '').includes(cat))
    })
  }

  if (is.filterItemTypes && is.filterItemTypes !== 'Favorites') {
    filtered = filtered.filter(item => item.type.includes(is.filterItemTypes))
  }

  if (is.filterItemTypes && is.filterItemTypes === 'Favorites') {
    filtered = filtered.filter(item => as.favoriteItems.includes(item))
  }

  if (is.itemSearchResult)
    filtered = filtered.filter(item => is.itemSearchResult.includes(item))
  return filtered
}
