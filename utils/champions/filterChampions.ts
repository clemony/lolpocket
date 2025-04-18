export const filteredChampions = computed(() => {
  const as = useAccountStore()
  const cs = useChampStore()
  const ds = useDataStore()
  cs.selectedChampion = ref()
  let filtered = [...ds.champions]
  const includedChampions = new Set()

  /*   if (cs.filterChampionClass && cs.filterChampionClass.length > 0) {
    filtered = filtered.filter((champion) => {
      return cs.filterChampionClass.some((className) => {
        const category = championClasses.find(cat => cat.id === className)
        if (category?.champions.includes(champion.name)) {
          if (!includedChampions.has(champion.name)) {
            includedChampions.add(champion.name)
            return true
          }
        }
        return false
      })
    })
  } */

  /*    if (cs.filterChampionTypes && cs.filterChampionTypes !== 'Favorites') {
        filtered = filtered.filter(
            (champion) =>
                champion.external_positions.toLowerCase() ==
                cs.filterChampionTypes
        )
    } */

  if (cs.filterChampionTypes && cs.filterChampionTypes === 'Favorites') {
    filtered = filtered.filter(champion => as.favoriteChamps.includes(champion))
  }

  if (cs.sortChampsAZ) {
    if (cs.sortChampsAZ === 'az') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (cs.sortChampsAZ === 'za') {
      filtered = filtered.sort((a, b) => b.name.localeCompare(a.name))
    }
  }

  if (cs.filterFavoriteChamps === true && as.favoriteChamps.length > 0) {
    filtered = filtered.filter(champion => as.favoriteChamps.some(favoriteChampion => favoriteChampion.name === champion.name))
  }

  return filtered
})
