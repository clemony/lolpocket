export function useBayesianChampionStats(matches: MatchData[], puuid) {
  /*  const statsList = Object.values(useChampionStats(puuid, null))
  const totalGames = statsList.reduce((sum, s) => sum + s.games, 0)
  const globalWinrate
    = statsList.reduce((sum, s) => sum + s.wins, 0) / totalGames || 0
 */
  /* return statsList
    .map((stats) => {
      const adjustedWeight = stats.games ** 0.7
      const confidence = adjustedWeight / (adjustedWeight + 15)
      const bayesianWinrate
        = ((1 - confidence) * globalWinrate
          + confidence * (stats.wins / stats.games))
        * 100
 */
  return {
    /*      ...stats,
        avgAssists: Number((stats.assists / stats.games).toFixed(2)),
        avgDeaths: Number((stats.deaths / stats.games).toFixed(2)),
        avgKills: Number((stats.kills / stats.games).toFixed(2)),
        avgKp: Number(((stats.kp / stats.games) * 100).toFixed(2)),
        bayesianWinrate,
        kda: Number(
          ((stats.kills + stats.assists) / Math.max(1, stats.deaths)).toFixed(2)
        ), */
  }
  /*   })
    .sort((a, b) => b.bayesianWinrate - a.bayesianWinrate) */
}
