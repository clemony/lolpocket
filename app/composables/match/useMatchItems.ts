export function useMatchItems(puuid: string, matches: MatchData[]) {
  // TODO probably fix

  const player = matches.map(m => ({
    data: m.participants.find(p => p.puuid === as().account.puuid),
    patch: m.gamePatch,
  }))

  const itemStats = new Map<
    number,
    {
      games: number
      wins: number
      losses: number
      winrate: number
      matchIndexes: number[]
      gamePatches: number[]
    }
  >()

  const bayesianItems = ref<any[]>([])

  watchEffect(() => {
    if (!matches.length) {
      bayesianItems.value = []
      return
    }

    itemStats.clear()

    player.forEach((match, index) => {
      const { data, patch } = match

      const items = [
        data.item0,
        data.item1,
        data.item2,
        data.item3,
        data.item4,
        data.item5,
        data.item6,
      ]

      items.forEach((itemId) => {
        if (!itemId || itemId === 0)
          return

        if (!itemStats.has(itemId)) {
          itemStats.set(itemId, {
            gamePatches: [],
            games: 0,
            losses: 0,
            matchIndexes: [],
            winrate: 0,
            wins: 0,
          })
        }

        const stat = itemStats.get(itemId)!
        stat.games++
        data.win ? stat.wins++ : stat.losses++
        stat.matchIndexes.push(index)
        stat.gamePatches.push(patch)
        stat.winrate = (stat.wins / stat.games) * 100
      })
    })

    const totalGames = [...itemStats.values()].reduce(
      (sum, s) => sum + s.games,
      0
    )
    const globalWinrate
      = [...itemStats.values()].reduce((sum, s) => sum + s.wins, 0)
        / totalGames || 0

    bayesianItems.value = [...itemStats.entries()]
      .map(([itemId, stats]) => {
        const adjustedWeight = stats.games ** 0.7
        const confidence = adjustedWeight / (adjustedWeight + 15)
        const bayesianWinrate
          = ((1 - confidence) * globalWinrate
            + confidence * (stats.wins / stats.games))
          * 100

        return {
          bayesianWinrate,
          gamePatches: stats.gamePatches,
          games: stats.games,
          item: ix().itemNameById(itemId),
          loss: stats.losses,
          matchIndexes: stats.matchIndexes,
          win: stats.wins,
          winrate: stats.winrate,
        }
      })
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate)
  })

  return { bayesianItems }
}
