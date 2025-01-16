export const useItemFilter = () => {
  const ts = useTempStore()
  const as = useAccountStore()
  const ds = useDataStore()

  const items = [...(ds.SRitems || [])]
  let filtered = [...items]
  console.log('💠 - filteredItems - filtered:', filtered)
  // Apply your filtering logic
  if (ts.browseItemStats.length) {
    ts.browseItemStats.forEach((stat) => {
      filtered = filtered.filter((item) => Object.keys(item.stats ? item.stats : '').includes(stat))
    })
  }

  if (ts.browseItemCats.length) {
    ts.browseItemCats.forEach((cat) => {
      filtered = filtered.filter((item) => Object.keys(item.menu ? item.menu : '').includes(cat))
    })
  }

  if (ts.browseItemTypes && ts.browseItemTypes !== 'Favorites') {
    filtered = filtered.filter((item) => item.type.includes(ts.browseItemTypes))
  }

  if (ts.browseItemTypes && ts.browseItemTypes === 'Favorites') {
    filtered = filtered.filter((item) => as.favoriteItems.includes(item))
  }

  if (ts.biSearchResult) filtered = filtered.filter((item) => ts.biSearchResult.includes(item))
  return filtered
}
