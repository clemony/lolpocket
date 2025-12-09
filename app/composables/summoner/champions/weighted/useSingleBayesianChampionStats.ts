export async function useSingleBayesianChampionStats(
  matches: MatchData[],
  puuid: string,
  championName: string
): Promise<BayesianChampionStats | null> {
  const allStats = await useBayesianChampionStats(matches, puuid)
  return allStats.find((stat) => stat.championName === championName) ?? null
}
