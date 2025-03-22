export function usePatchItems(patchGames) {
  const ds = useDataStore()

  const itemStats = new Map()
  const bayesianItems = ref([]) // ✅ Use a ref to prevent early execution

  // Ensure patchGames is reactive
  watchEffect(() => {
    if (!patchGames.value || patchGames.value.length === 0) {
      console.log(' -- No patch games, returning')
      bayesianItems.value = [] // Ensure it's empty when there's no data
      return
    }

    itemStats.clear()
    patchGames.value.forEach(({ items, win }) => {
      items.forEach((item) => {
        if (!itemStats.has(item)) {
          itemStats.set(item, { games: 0, wins: 0, losses: 0, winrate: 0 })
        }
        const stats = itemStats.get(item)
        stats.games++
        win ? stats.wins++ : stats.losses++
        stats.winrate = (stats.wins / stats.games) * 100
      })
    })

    // ✅ Now update bayesianItems after itemStats is built
    const m = 500
    const globalWinrate
      = [...itemStats.values()].reduce((sum, i) => sum + i.wins, 0)
        / [...itemStats.values()].reduce((sum, i) => sum + i.games, 0) || 0

    bayesianItems.value = [...itemStats.entries()]
      .filter(([item]) => item !== 0) // ✅ Remove items with ID 0 before processing
      .map(([item, stats]) => ({
        item: ds.SRitems.find(i => i.id == item),
        games: stats.games,
        win: stats.wins,
        loss: stats.losses,
        winrate: stats.winrate,
        bayesianWinrate: ((stats.wins + m * globalWinrate) / (stats.games + m)) * 100,
      }))
  })

  return { bayesianItems }
}