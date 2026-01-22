export const useChampionStats = (
  filteredMatches: Ref<MatchData[]>,
  puuid: string
) =>
  computed<AggregatedStats[]>(() => {
    if (!filteredMatches.value?.length) return []

    const map = new Map<number, AggregatedStats>()

    for (const match of filteredMatches.value) {
      const row = match.participants.find((p) => p.puuid === puuid)
      if (!row || row.win === "remake") continue

      const id = row.championId

      if (!map.has(id)) {
        map.set(id, {
          championId: id,
          championName: champNameById(id),
          games: 0,
          wins: 0,
          losses: 0,
          kda: 0,
          gamePatches: [],
          ...initFromSchema(AGGREGATED_STAT_SCHEMA),
        })
      }

      const acc = map.get(id)!
      applyParticipantStats(acc, row)
      acc.gamePatches?.push(match.gamePatch)
      acc.kda =
        Math.round(
          ((acc.kills.total + acc.assists.total) / acc.deaths.total) * 100
        ) / 100

      for (const key of Object.keys(AGGREGATED_STAT_SCHEMA) as Array<
        keyof typeof AGGREGATED_STAT_SCHEMA
      >) {
        const { init, ...finalizeRule } = AGGREGATED_STAT_SCHEMA[key]

        finalizeStatAverage(acc[key], acc.games, finalizeRule)
      }
    }

    return [...sortMapBy(map, "games").values()]
  })
