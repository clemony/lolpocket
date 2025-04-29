export function filterItems() {
  const is = useItemStore()
  const as = useAccountStore()
  const ds = useDataStore()

  const items = ds.items || []
  let filtered = [...items]

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
    filtered = filtered.filter(item => item.tags.includes(is.filterItemTypes))
  }

  if (is.filterItemTypes && is.filterItemTypes === 'Favorites') {
    filtered = filtered.filter(item => as.favoriteItems.includes(item))
  }

  if (is.dbItemTiers != null) {
    filtered = typeof is.dbItemTiers == 'number' ? filtered.filter(item => is.dbItemTiers == item.tier) : filtered.filter(item => item.tags.includes(is.dbItemTiers))
  }
  if (is.itemSearchResult)
    filtered = filtered.filter(item => is.itemSearchResult.includes(item))

  return filtered
}

export function filterDbItems() {
  const is = useItemStore()
  const ds = useDataStore()

  const items = ds.items.map((item) => {
    const stats = { ...(item.stats || {}) }

    // Merge msflat into ms
    if (stats.msflat) {
      stats.ms = (stats.ms || 0) + stats.msflat
      delete stats.msflat
    }

    // Merge mpenflat into mpen
    if (stats.mpenflat) {
      stats.mpen = (stats.mpen || 0) + stats.mpenflat
      delete stats.mpenflat
    }

    return {
      ...item,
      stats,
    }
  })

  let filtered = [...items]
  if (is.itemDBHideNoBuy) {
    filtered = filtered.filter(item => item.gold.purchasable)
  }

  if (is.dbItemRoles) {
    filtered = filtered.filter(item => item.menu && item.menu[is.dbItemRoles])
  }

  if (is.dbItemTiers != null) {
    filtered = typeof is.dbItemTiers == 'number' ? filtered.filter(item => is.dbItemTiers == item.tier) : filtered.filter(item => item.tags.includes(is.dbItemTiers))
  }
  if (is.dbItemStats.length && is.dbItemStats.length > 1) {
    filtered = filtered.filter((item) => {
      const stats = item.stats || {}
      return is.dbItemStats.some((stat) => {
        const val = stats[stat]
        return val !== undefined && val !== null && val !== 0
      })
    })
  }

  if (is.dbItemSearchResult) {
    const map = is.dbItemSearchResult.map(i => i.id)
    filtered = filtered.filter(item => map.includes(item.id))
  }

  return filtered
}
