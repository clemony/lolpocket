export async function useMatchChampions(puuid: string, matches: MatchData[]) {
  const championStats = new Map<
    number,
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
      gamePatches: number[]
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
      const player = match.participants.find(p => p.puuid == puuid)
      const champ = player?.championId
      if (!champ)
        return

      if (!championStats.has(champ)) {
        championStats.set(champ, {
          name: ix().champNameById(champ),
          id: champ,
          games: 0,
          wins: 0,
          losses: 0,
          winrate: 0,
          kills: 0,
          deaths: 0,
          assists: 0,
          killParticipation: 0,
          matchIndexes: [],
          gamePatches: [],
        })
      }

      const stats = championStats.get(champ)!
      stats.games++
      player.win ? stats.wins++ : stats.losses++
      stats.kills += player.kills
      stats.deaths += player.deaths
      stats.assists += player.assists
      stats.killParticipation += player.challenges.killParticipation
      stats.matchIndexes.push(index)
      stats.gamePatches.push(match.gamePatch)
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
      .map(([championId, stats]) => {
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
          return ix().championByKey(ix().champKeyById(championId))
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
          gamePatches: stats.gamePatches,
        }
      })
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate)
  })

  return { bayesianChampions }
}
