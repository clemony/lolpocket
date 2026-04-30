import {
  addChampionStatsMatch,
  createChampionStats,
  finalizeChampionStats
} from "~/domain/stats/aggregateChampionStats"

//
export function useAggregateSingleChampion(
  matchData: ComputedRef<MatchPlayerData[]>
) {
  return computed<ChampionStats | null>(() => {
    if (!matchData.value?.length) return null

    const first = matchData.value[0]?.player
    if (!first) return null

    const acc = createChampionStats(first.championId)

    for (const m of matchData.value) {
      const row = m.player
      if (!row) continue

      addChampionStatsMatch(acc, m, {
        includeDetailStats: true,
        includeTimelineStats: true
      })
    }

    return finalizeChampionStats(acc, { includeDetailStats: true })
  })
}
