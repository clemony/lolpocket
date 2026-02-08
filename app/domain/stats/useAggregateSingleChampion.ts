export function useAggregateSingleChampion(
  matchData: ComputedRef<MatchPlayerData[]>
) {
  return computed<ChampionStats | null>(() => {
    if (!matchData.value?.length) return null

    const acc: ChampionStats = {
      championId: matchData.value[0].player.championId,
      championName: champNameById(matchData.value[0].player.championId),
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
      const roleStat = getRoleStat(acc.role.stats, roleKey)

      roleStat.games++
      if (row.win && row.win !== 'remake') roleStat.win++

      applyParticipantStats(acc, row)
      bumpFromPlayerStats(acc, row)
      bumpAverage(acc.gameTime, m.match.gameDuration)

      acc.gamePatches?.push(m.match.gamePatch)

      bumpAverage(acc.killsBefore15, m.timeline?.stats.killsBefore15)
      bumpAverage(acc.deathsBefore15, m.timeline?.stats.deathsBefore15)
      bumpAverage(acc.assistsBefore15, m.timeline?.stats.assistsBefore15)
    }

    for (const key of Object.keys(AGGREGATED_STAT_SCHEMA) as Array<
      keyof typeof AGGREGATED_STAT_SCHEMA
    >) {
      const { init, ...finalizeRule } = AGGREGATED_STAT_SCHEMA[key]

      finalizeStatAverage(acc[key], acc.games, finalizeRule)
    }

    acc.kda
      = Math.round(
        ((acc.kills.total + acc.assists.total) / acc.deaths.total) * 10
      ) / 10

    acc.winrate = acc.games ? Math.round((acc.wins / acc.games) * 1000) / 10 : 0
    acc.gameTime.average = acc.games ? acc.gameTime.average / 60 : 0

    acc.visionScorePerMin
      = acc.games
        ? Number.parseFloat(
            (
              ((acc.visionScore.average / acc.gameTime.average) * 10)
              / 10
            ).toFixed(1)
          )
        : 0

    acc.csPerMin
      = acc.games
        ? Number.parseFloat(
            (
              (acc.minionsKilled.average + acc.neutralMinionsKilled.average)
              / acc.gameTime.average
            ).toFixed(1)
          )
        : 0

    for (const stat of Object.values(acc.role.stats)) {
      stat.winrate
        = stat.games ? Math.round((stat.win / stat.games) * 1000) / 10 : 0
      stat.pickrate = Math.round((stat.games / acc.games) * 1000) / 10
    }
    acc.role.mostPlayed = sortEntriesByPickrate(acc.role.stats)[0][0]

    return acc.games ? acc : null
  })
}
