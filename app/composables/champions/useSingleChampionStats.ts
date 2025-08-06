export function useSingleChampionStats(
  matches: SimplifiedMatchData[],
  championName: string,
) {
  const allStats = getChampionStatsMap(matches)
  return allStats.get(championName) ?? null
}