export function useSingleBayesianChampionStats(
  matches: MatchData[],
  championName: string,
): BayesianChampionStats | null {
  const allStats = useBayesianChampionStats(matches)
  return allStats.find(stat => stat.name === championName) ?? null
}