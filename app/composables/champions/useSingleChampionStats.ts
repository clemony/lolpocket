export function useSingleChampionStats(
  matches: MatchData[],
  championName: string,
  puuid: string
) {
  const allStats = getChampionStatsMap(matches, puuid)
  return allStats.get(championName) ?? null
}
