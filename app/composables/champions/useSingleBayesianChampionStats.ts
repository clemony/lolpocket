export function useSingleBayesianChampionStats(
  matches: SimplifiedMatchData[],
  championName: string,
): BayesianChampionStats | null {
  const allStats = useBayesianChampionStats(matches).value
  return allStats.find(stat => stat.name === championName) ?? null
}