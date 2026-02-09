//
export function useChampionStats(
  matches: Ref<MatchData[]>,
  filteredMatches: Ref<MatchData[]>,
  puuid: string
) {
  return computed<ChampionStats[]>(() => {
    const allChampionIds = new Set<number>()

    for (const match of matches.value) {
      const row = match.participants.find((p) => p.puuid === puuid)
      if (row) allChampionIds.add(row.championId)
    }

    const map = new Map<number, ChampionStats>()

    for (const id of allChampionIds) {
      map.set(id, {
        championId: id,
        championName: champNameById(id) ?? "",
        games: 0,
        kda: 0,
        losses: 0,
        wins: 0,
        gamePatches: [],
        ...initFromSchema(AGGREGATED_STAT_SCHEMA),
      })
    }

    for (const match of filteredMatches.value) {
      const row = match.participants.find((p) => p.puuid === puuid)
      if (!row || row.win === "remake") continue

      const acc = map.get(row.championId)
      if (!acc) continue // defensive, should never happen

      applyParticipantStats(acc, row)
      acc.gamePatches?.push(match.gamePatch)

      acc.kda =
        Math.round(
          (((acc.kills as StatAverage).total +
            (acc.assists as StatAverage).total) /
            Math.max(1, (acc.deaths as StatAverage).total)) *
            100
        ) / 100

      for (const key of Object.keys(AGGREGATED_STAT_SCHEMA) as Array<
        keyof typeof AGGREGATED_STAT_SCHEMA
      >) {
        const { init, ...finalizeRule } = AGGREGATED_STAT_SCHEMA[key]
        finalizeStatAverage(acc[key] as StatAverage, acc.games, finalizeRule)
      }
    }

    return [...sortMapBy(map, "games").values()]
  })
}
