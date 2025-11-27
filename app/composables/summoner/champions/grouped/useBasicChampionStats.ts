export function useBasicChampionStats(
  matches: MatchData[],
  puuid: string
): ChampionStats[] {
  const stats = getChampionStatsMap(matches, puuid)
  return Array.from(stats.values()).sort((a, b) => b.games - a.games)
}
