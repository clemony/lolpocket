export function usePatchchampions() {
  const ds = useDataStore()
  const ans = useAnalysisStore()
  const games = computed (() => {
    return ans.patchGames || ds.currentPatch
  })
  const championStats = new Map<number, { games: number, wins: number, losses: number, winrate: number }>()

  games.value.forEach(({ champions, win }) => {
    champions.forEach((champion) => {
      if (!championStats.has(champion)) {
        championStats.set(champion, { games: 0, wins: 0, losses: 0, winrate: 0 })
      }

      const stats = championStats.get(champion)!
      stats.games++
      win ? stats.wins++ : stats.losses++
      stats.winrate = (stats.wins / stats.games) * 100
    })
  })

  const globalWinrate = computed(() => {
    const totalWins = [...championStats.values()].reduce((sum, champion) => sum + champion.wins, 0)
    const totalGames = [...championStats.values()].reduce((sum, champion) => sum + champion.games, 0)
    return totalGames ? totalWins / totalGames : 0 // Global average winrate
  })

  const bayesianchampions = computed(() => {
    const m = 500 // Constant that controls smoothing effect

    return [...championStats.entries()]
      .map(([champion, stats]) => ({
        champion, // champion ID
        name: ds.champions.find(i => i.key === champion)?.name || null, // Get champion name from ID
        games: stats.games,
        wins: stats.wins,
        losses: stats.losses,
        winrate: stats.winrate,
        bayesianWinrate: (stats.wins + m * globalWinrate.value) / (stats.games + m) * 100, // Bayesian Winrate
      }))
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate) // Sort by highest adjusted winrate
  })

  return bayesianchampions
}