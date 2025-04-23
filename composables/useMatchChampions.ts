export function useMatchChampions(queueFilter: Ref<number> = ref(0)) {
  const ms = useMatchStore()
  const ds = useDataStore()
  const { matches } = storeToRefs(ms)

  const championStats = new Map<string, {
    games: number
    wins: number
    losses: number
    winrate: number
    matchIndexes: number[]
    gameVersions: string[]
  }>()

  const bayesianChampions = ref<any[]>([])

  watchEffect(() => {
    if (!matches.value.length) {
      bayesianChampions.value = []
      return
    }

    championStats.clear()

    const filteredMatches = matches.value.filter(match =>
      queueFilter.value === 0 || match.queueId === queueFilter.value
    )

    filteredMatches.forEach((match, index) => {
      const champ = match.championName
      if (!champ) return

      if (!championStats.has(champ)) {
        championStats.set(champ, {
          games: 0,
          wins: 0,
          losses: 0,
          winrate: 0,
          matchIndexes: [],
          gameVersions: [],
        })
      }

      const stats = championStats.get(champ)!
      stats.games++
      match.win ? stats.wins++ : stats.losses++
      stats.matchIndexes.push(index)
      stats.gameVersions.push(match.gameVersion)
      stats.winrate = (stats.wins / stats.games) * 100
    })

    const totalGames = [...championStats.values()].reduce((sum, s) => sum + s.games, 0)
    const globalWinrate = [...championStats.values()].reduce((sum, s) => sum + s.wins, 0) / totalGames || 0

    bayesianChampions.value = [...championStats.entries()]
      .map(([championName, stats]) => {
        const adjustedWeight = stats.games ** 0.7
        const confidence = adjustedWeight / (adjustedWeight + 15)
        const bayesianWinrate = ((1 - confidence) * globalWinrate + confidence * (stats.wins / stats.games)) * 100

        return {
          champion: ds.champions.find(c => c.id === championName || c.name === championName),
          games: stats.games,
          wins: stats.wins,
          losses: stats.losses,
          winrate: stats.winrate,
          bayesianWinrate,
          matchIndexes: stats.matchIndexes,
          gameVersions: stats.gameVersions,
        }
      })
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate)
  })

  return { bayesianChampions }
}