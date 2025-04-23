import { storeToRefs } from 'pinia'

export function useMatchItems() {
  const ms = useMatchStore()
  const ds = useDataStore()
  const { matches } = storeToRefs(ms)

  const itemStats = new Map<number, {
    games: number
    wins: number
    losses: number
    winrate: number
    matchIndexes: number[]
    gameVersions: string[]
  }>()

  const bayesianItems = ref<any[]>([])

  watchEffect(() => {
    if (!matches.value.length) {
      bayesianItems.value = []
      return
    }

    itemStats.clear()

    matches.value.forEach((match, index) => {
      const { win, gameVersion } = match

      const items = [
        match.item0,
        match.item1,
        match.item2,
        match.item3,
        match.item4,
        match.item5,
        match.item6,
      ]

      items.forEach((itemId) => {
        if (!itemId || itemId === 0)
          return

        if (!itemStats.has(itemId)) {
          itemStats.set(itemId, {
            games: 0,
            wins: 0,
            losses: 0,
            winrate: 0,
            matchIndexes: [],
            gameVersions: [],
          })
        }

        const stat = itemStats.get(itemId)!
        stat.games++
        win ? stat.wins++ : stat.losses++
        stat.matchIndexes.push(index)
        stat.gameVersions.push(gameVersion)
        stat.winrate = (stat.wins / stat.games) * 100
      })
    })

    const totalGames = [...itemStats.values()].reduce((sum, s) => sum + s.games, 0)
    const globalWinrate = [...itemStats.values()].reduce((sum, s) => sum + s.wins, 0) / totalGames || 0

    bayesianItems.value = [...itemStats.entries()]
      .map(([itemId, stats]) => {
        const adjustedWeight = stats.games ** 0.7
        const confidence = adjustedWeight / (adjustedWeight + 15)
        const bayesianWinrate = ((1 - confidence) * globalWinrate + confidence * (stats.wins / stats.games)) * 100

        return {
          item: ds.items.find(i => i.id == itemId),
          games: stats.games,
          win: stats.wins,
          loss: stats.losses,
          winrate: stats.winrate,
          bayesianWinrate,
          matchIndexes: stats.matchIndexes,
          gameVersions: stats.gameVersions,
        }
      })
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate)
  })

  return { bayesianItems }
}