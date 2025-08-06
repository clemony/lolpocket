export function getChampionStatsMap(
  matches: SimplifiedMatchData[],
): Map<string, ChampionStats> {
  const map = new Map<string, ChampionStats>()

  matches.forEach((match, index) => {
    const champ = match.championName
    if (!champ)
      return

    if (!map.has(champ)) {
      map.set(champ, {
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

    const stats = map.get(champ)!
    stats.games++
    match.win ? stats.wins++ : stats.losses++
    stats.kills += match.kills
    stats.deaths += match.deaths
    stats.assists += match.assists
    stats.killParticipation += match.killParticipation
    stats.matchIndexes.push(index)
    stats.gameVersions.push(match.gameVersion.toString())
    stats.winrate = (stats.wins / stats.games) * 100
  })

  return map
}

export function useBasicChampionStats(matches: SimplifiedMatchData[]) {
  const stats = computed(() => getChampionStatsMap(matches))
  return computed(() => Array.from(stats.value.values()))
}

export function useBayesianChampionStats(matches: SimplifiedMatchData[]) {
  const ix = useIndexStore()

  const baseStats = computed(() => getChampionStatsMap(matches))

  return computed<BayesianChampionStats[]>(() => {
    const statsList = Array.from(baseStats.value.values())
    const totalGames = statsList.reduce((sum, s) => sum + s.games, 0)
    const globalWinrate
      = statsList.reduce((sum, s) => sum + s.wins, 0) / totalGames || 0

    return statsList
      .map((stats) => {
        const adjustedWeight = stats.games ** 0.7
        const confidence = adjustedWeight / (adjustedWeight + 15)
        const bayesianWinrate
          = ((1 - confidence) * globalWinrate
            + confidence * (stats.wins / stats.games))
          * 100

        return {
          ...stats,
          bayesianWinrate,
          kda: Number(
            ((stats.kills + stats.assists) / Math.max(1, stats.deaths)).toFixed(
              2,
            ),
          ),
          avgKills: Number((stats.kills / stats.games).toFixed(2)),
          avgDeaths: Number((stats.deaths / stats.games).toFixed(2)),
          avgAssists: Number((stats.assists / stats.games).toFixed(2)),
          avgKp: Number(
            ((stats.killParticipation / stats.games) * 100).toFixed(2),
          ),
        }
      })
      .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate)
  })
}
