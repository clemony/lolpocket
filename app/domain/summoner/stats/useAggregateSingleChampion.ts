import {
  addChampionStatsMatch,
  createChampionStats,
  finalizeChampionStats,
} from "~/domain/summoner/stats/aggregateChampionStats"

//
export function useAggregateSingleChampion(
  matchData: ComputedRef<MatchPlayerData[]>
) {
  return computed<ChampionStats | undefined>(() => {
    if (!matchData.value?.length) return

    const first = matchData.value[0]?.player
    if (!first) return

    const acc = createChampionStats(first.championId)

    for (const m of matchData.value) {
      const row = m.player
      if (!row) continue

      addChampionStatsMatch(acc, m, {
        includeDetailStats: true,
        includeTimelineStats: true,
      })
    }

    return finalizeChampionStats(acc, { includeDetailStats: true })
  })
}
