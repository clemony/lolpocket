import {
  addChampionStatsMatch,
  createChampionStats,
  finalizeChampionStats
} from "~/domain/stats/aggregateChampionStats"

//
export function useChampionStats(
  matches: Ref<MatchData[]>,
  filteredMatches: Ref<MatchData[]>,
  puuid: MaybeRef<string | null | undefined>
) {
  return computed<ChampionStats[] | null>(() => {
    const id = toValue(puuid)
    if (!id) return null

    const map = new Map<number, ChampionStats>()

    for (const match of matches.value) {
      const row = match.participants.find((p) => p.puuid === id)
      if (row && !map.has(row.championId)) {
        map.set(row.championId, createChampionStats(row.championId))
      }
    }

    for (const match of filteredMatches.value) {
      const row = match.participants.find((p) => p.puuid === id)
      if (!row) continue

      const acc = map.get(row.championId) ?? createChampionStats(row.championId)

      map.set(row.championId, acc)
      addChampionStatsMatch(acc, { match, player: row })
    }

    for (const [id, acc] of map) {
      map.set(id, finalizeChampionStats(acc) ?? acc)
    }

    return sortMapBy(map, "games")
  })
}
