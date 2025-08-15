export function useSingleBayesianChampionStats(
  matches: MatchData[],
  championName: string,
): BayesianChampionStats | null {
  const allStats = useBayesianChampionStats(matches).value
  return allStats.find(stat => stat.name === championName) ?? null
}