export function useSingleBayesianChampionStats(
  matches: MatchData[],
  puuid: string,
  championName: string
): BayesianChampionStats | null {
  const allStats = useBayesianChampionStats(matches, puuid)
  return allStats.find(stat => stat.name === championName) ?? null
}
