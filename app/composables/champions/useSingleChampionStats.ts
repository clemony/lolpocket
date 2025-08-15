export function useSingleChampionStats(
  matches: MatchData[],
  championName: string,
) {
  const allStats = getChampionStatsMap(matches)
  return allStats.get(championName) ?? null
}