export function usePatchItems() {
  const ds = useDataStore()
  const ans = useAnalysisStore()
  const games = computed (() => {
    return ans.patchGames || ds.currentPatch
  })
  const itemStats = new Map<number, { games: number, wins: number, losses: number, winrate: number }>()

  games.value.forEach(({ items, win }) => {
    items.forEach((item) => {
      if (!itemStats.has(item)) {
        itemStats.set(item, { games: 0, wins: 0, losses: 0, winrate: 0 })
      }

      const stats = itemStats.get(item)!
      stats.games++
      win ? stats.wins++ : stats.losses++
      stats.winrate = (stats.wins / stats.games) * 100
    })
  })

  const globalWinrate = computed(() => {
    const totalWins = [...itemStats.values()].reduce((sum, item) => sum + item.wins, 0)
    const totalGames = [...itemStats.values()].reduce((sum, item) => sum + item.games, 0)
    return totalGames ? totalWins / totalGames : 0 // Global average winrate
  })

  const bayesianItems = computed(() => {
    const m = 500 // Constant that controls smoothing effect

    return [...itemStats.entries()]
      .map(([item, stats]) => ({
        item, // Item ID
        name: ds.items.find(i => i.id === item)?.name || null, // Get item name from ID
        games: stats.games,
        wins: stats.wins,
        losses: stats.losses,
        winrate: stats.winrate,
        bayesianWinrate: (stats.wins + m * globalWinrate.value) / (stats.games + m) * 100, // Bayesian Winrate
      }))
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate) // Sort by highest adjusted winrate
  })

  return bayesianItems
}