export async function useMatchChampions(matches: SimplifiedMatchData[]) {
  const ix = useIndexStore()
  const championStats = new Map<
    string,
    {
      name: string
      id: number
      games: number
      wins: number
      losses: number
      winrate: number
      kills: number
      deaths: number
      assists: number
      killParticipation: number
      matchIndexes: number[]
      gameVersions: number[]
    }
  >()

  const bayesianChampions = ref<any[]>([])

  watchEffect(() => {
    if (!matches?.length) {
      bayesianChampions.value = []
      return
    }

    championStats.clear()

    matches.forEach((match, index) => {
      const champ = match.championName
      if (!champ)
        return

      if (!championStats.has(champ)) {
        championStats.set(champ, {
          name: champ,
          id: match.championId,
          games: 0,
          wins: 0,
          losses: 0,
          winrate: 0,
          kills: 0,
          deaths: 0,
          assists: 0,
          killParticipation: 0,
          matchIndexes: [],
          gameVersions: [],
        })
      }

      const stats = championStats.get(champ)!
      stats.games++
      match.win ? stats.wins++ : stats.losses++
      stats.kills += match.kills
      stats.deaths += match.deaths
      stats.assists += match.assists
      stats.killParticipation += match.killParticipation
      stats.matchIndexes.push(index)
      stats.gameVersions.push(match.gameVersion)
      stats.winrate = (stats.wins / stats.games) * 100
    })

    const totalGames = [...championStats.values()].reduce(
      (sum, s) => sum + s.games,
      0,
    )
    const globalWinrate
      = [...championStats.values()].reduce((sum, s) => sum + s.wins, 0)
        / totalGames || 0

    bayesianChampions.value = [...championStats.entries()]
      .map(([championName, stats]) => {
        const adjustedWeight = stats.games ** 0.7
        const confidence = adjustedWeight / (adjustedWeight + 15)
        const bayesianWinrate
          = ((1 - confidence) * globalWinrate
            + confidence * (stats.wins / stats.games))
          * 100
        const kda = (stats.kills + stats.assists) / Math.max(1, stats.deaths)
        const avgKP = stats.killParticipation / stats.games
        const avgKills = stats.kills / stats.games
        const avgDeaths = stats.deaths / stats.games
        const avgAssists = stats.assists / stats.games
        const champion = computed(() => {
          return ix.championByKey(championName)
        })

        return {
          champion: stats.name,
          championId: champion.value.id,
          games: stats.games,
          wins: stats.wins,
          losses: stats.losses,
          winrate: stats.winrate,
          bayesianWinrate,
          kda: Number(kda.toFixed(2)),
          avgKills: Number(avgKills.toFixed(2)),
          avgDeaths: Number(avgDeaths.toFixed(2)),
          avgAssists: Number(avgAssists.toFixed(2)),
          avgKp: Number((avgKP * 100).toFixed(2)),
          matchIndexes: stats.matchIndexes,
          gameVersions: stats.gameVersions,
        }
      })
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate)
  })

  return { bayesianChampions }
}
