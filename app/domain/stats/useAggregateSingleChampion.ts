//
export function useAggregateSingleChampion(
  matchData: ComputedRef<MatchPlayerData[]>
) {
  return computed<ChampionStats | null>(() => {
    if (!matchData.value?.length) return null

    const first = matchData.value[0]?.player
    if (!first) return null

    const acc: ChampionStats = {
      championId: first.championId,
      championName: champNameById(first.championId) ?? "",
      games: 0,
      losses: 0,
      wins: 0,
      gamePatches: [],
      role: {
        stats: {} as Record<string, StatDetail>,
      },

      csPerMin: 0,
      // other
      visionScorePerMin: 0,

      ...initFromSchema(AGGREGATED_STAT_SCHEMA),
    }

    for (const m of matchData.value) {
      const row = m.player
      if (!row) continue

      // role
      const roleKey = normalizeRole(row.role)
      acc.role ??= { stats: {} as Record<string, StatDetail> }
      const roleStat = getRoleStat(acc.role.stats, roleKey)

      roleStat.games++
      roleStat.win ??= 0
      if (row.win && row.win !== "remake") roleStat.win++

      applyParticipantStats(acc, row)
      bumpFromPlayerStats(acc, row)
      if (acc.gameTime) bumpAverage(acc.gameTime, m.match.gameDuration)

      acc.gamePatches?.push(m.match.gamePatch)

      if (acc.killsBefore15)
        bumpAverage(acc.killsBefore15, m.timeline?.stats.killsBefore15)
      if (acc.deathsBefore15)
        bumpAverage(acc.deathsBefore15, m.timeline?.stats.deathsBefore15)
      if (acc.assistsBefore15)
        bumpAverage(acc.assistsBefore15, m.timeline?.stats.assistsBefore15)
    }

    for (const key of Object.keys(AGGREGATED_STAT_SCHEMA) as Array<
      keyof typeof AGGREGATED_STAT_SCHEMA
    >) {
      const { init, ...finalizeRule } = AGGREGATED_STAT_SCHEMA[key]

      const stat = acc[key]
      if (stat) finalizeStatAverage(stat, acc.games, finalizeRule)
    }

    acc.kda =
      Math.round(
        (((acc.kills?.total ?? 0) + (acc.assists?.total ?? 0)) /
          Math.max(1, acc.deaths?.total ?? 0)) *
          10
      ) / 10

    acc.winrate = acc.games ? Math.round((acc.wins / acc.games) * 1000) / 10 : 0
    if (acc.gameTime) {
      acc.gameTime.average = acc.games ? acc.gameTime.average / 60 : 0
    }

    acc.visionScorePerMin =
      acc.games ?
        Number.parseFloat(
          (
            (((acc.visionScore?.average ?? 0) /
              (acc.gameTime?.average ?? 1)) *
              10) /
            10
          ).toFixed(1)
        )
      : 0

    acc.csPerMin =
      acc.games ?
        Number.parseFloat(
          (
            ((acc.minionsKilled?.average ?? 0) +
              (acc.neutralMinionsKilled?.average ?? 0)) /
            (acc.gameTime?.average ?? 1)
          ).toFixed(1)
        )
      : 0

    for (const stat of Object.values(acc.role?.stats ?? {})) {
      const wins = stat.win ?? 0
      stat.winrate =
        stat.games ? Math.round((wins / stat.games) * 1000) / 10 : 0
      stat.pickrate = Math.round((stat.games / acc.games) * 1000) / 10
    }
    const mostPlayed = sortEntriesByPickrate(acc.role?.stats ?? {})[0]
    if (mostPlayed && acc.role) acc.role.mostPlayed = mostPlayed[0]

    return acc.games ? acc : null
  })
}
