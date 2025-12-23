export const useAggregatedStats = (
  filteredMatches: Ref<MatchData[]>,
  mastery: PlayerChampionMastery[],
  puuid: string
) =>
  computed<AggregatedStats[]>(() => {
    if (!filteredMatches.value.length) return []

    const masteryMap = new Map(mastery.map((m) => [m.championId, m]))

    const map = new Map<number, AggregatedStats>()

    for (const match of filteredMatches.value) {
      const row = match.participants.find((p) => p.puuid === puuid)
      if (!row) continue

      const id = row.championId

      if (!map.has(id)) {
        map.set(id, {
          championId: id,
          games: 0,
          wins: 0,
          losses: 0,
          kills: 0,
          deaths: 0,
          assists: 0,
          kp: 0,
          doubleKills: 0,
          killingSprees: 0,
          tripleKills: 0,
          quadraKills: 0,
          pentaKills: 0,
          gamePatches: [],
          pointsSinceLevel: 0,
          pointsUntilLevel: 0,
        })
      }

      const acc = map.get(id)!
      applyParticipantStats(acc, row)
      acc.gamePatches?.push(match.gamePatch)
      const m = masteryMap.get(id)
      if (m) {
        acc.level = m.level
        acc.totalPoints = m.totalPoints
        acc.pointsSinceLevel += m.pointsSinceLevel ?? 0
        acc.pointsUntilLevel += m.pointsUntilLevel ?? 0
        acc.lastPlayed = m.lastPlayed
      }
    }

    return [...map.values()]
  })
