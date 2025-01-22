export const useItemFilter = () => {
  const ts = useTempStore()
  const as = useAccountStore()
  const ds = useDataStore()

  const items = ds.SRitems || []
  let filtered = [...items]

  //console.log('💠 - filteredItems - filtered:', filtered)
  // Apply your filtering logic
  if (ts.filterItemStats.length) {
    ts.filterItemStats.forEach((stat) => {
      filtered = filtered.filter((item) => Object.keys(item.stats ? item.stats : '').includes(stat))
    })
  }

  if (ts.filterItemCats.length) {
    ts.filterItemCats.forEach((cat) => {
      filtered = filtered.filter((item) => Object.keys(item.menu ? item.menu : '').includes(cat))
    })
  }

  if (ts.filterItemTypes && ts.filterItemTypes !== 'Favorites') {
    filtered = filtered.filter((item) => item.type.includes(ts.filterItemTypes))
  }

  if (ts.filterItemTypes && ts.filterItemTypes === 'Favorites') {
    filtered = filtered.filter((item) => as.favoriteItems.includes(item))
  }

  if (ts.itemSearchResult) filtered = filtered.filter((item) => ts.itemSearchResult.includes(item))
  return filtered
}
