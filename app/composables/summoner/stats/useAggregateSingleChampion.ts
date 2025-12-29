export const useAggregateSingleChampion = (
  matchData: ComputedRef<MatchPlayerData[]>
) =>
  computed<AggregatedStats | null>(() => {
    if (!matchData.value.length) return null

    const acc: AggregatedStats = {
      championId: matchData.value[0].player.championId,
      role: {
        stats: {} as Record<string, StatDetail>,
      },
      gamePatches: [],
      games: 0,
      wins: 0,
      losses: 0,

      //other
      visionScorePerMin: 0,
      csPerMin: 0,

      ...initFromSchema(AGGREGATED_STAT_SCHEMA),
    }

    for (const m of matchData.value) {
      const row = m.player
      if (!row) continue

      // role
      const roleKey = normalizeRole(row.teamPosition)
      const roleStat = getRoleStat(acc.role.stats, roleKey)

      roleStat.games++
      if (row.win) roleStat.win++

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

    acc.kda =
      Math.round(
        ((acc.kills.total + acc.assists.total) / acc.deaths.total) * 10
      ) / 10

    console.log("🥸 - useAggregateSingleChampion - acc.kp:", acc.kp)

    acc.winrate = acc.games ? Math.round((acc.wins / acc.games) * 1000) / 10 : 0
    acc.gameTime.average = acc.games ? acc.gameTime.average / 60 : 0

    acc.visionScorePerMin =
      acc.games ?
        parseFloat(
          (
            ((acc.visionScore.average / acc.gameTime.average) * 10) /
            10
          ).toFixed(1)
        )
      : 0
    console.log(
      "🥸 - useAggregateSingleChampion - acc.visionScorePerMin:",
      acc.visionScorePerMin
    )

    acc.csPerMin =
      acc.games ?
        parseFloat(
          (
            (acc.minionsKilled.average + acc.neutralMinionsKilled.average) /
            acc.gameTime.average
          ).toFixed(1)
        )
      : 0

    for (const stat of Object.values(acc.role.stats)) {
      stat.winrate =
        stat.games ? Math.round((stat.win / stat.games) * 1000) / 10 : 0
      stat.pickrate = Math.round((stat.games / acc.games) * 1000) / 10
    }
    acc.role.mostPlayed = sortEntriesByPickrate(acc.role.stats)[0][0]

    console.log("🥸 - useAggregateSingleChampion - acc:", acc)
    return acc.games ? acc : null
  })
