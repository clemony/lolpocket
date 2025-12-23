export const useAggregateSingleChampion = (
  matchData: ComputedRef<MatchPlayerData[]>
) =>
  computed<AggregatedStats | null>(() => {
    if (!matchData.value.length) return null

    const acc: AggregatedStats = {
      championId: matchData.value[0].player.championId,
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
      killsBefore15: 0,
      assistsBefore15: 0,
      deathsBefore15: 0,

      // offense
      totalDamage: 0,
      damagePercentage: 0,

      // utility
      effectiveHealingAndShielding: 0,
      totalAllyHealing: 0,
      totalAllyShielding: 0,
      allySaves: 0,

      //defense
      totalDamageTaken: 0,
      damageTakenPercentage: 0,
      damageSelfMitigated: 0,
      ccDuration: 0,

      //farming
      goldEarned: 0,
      minionsKilled: 0,
      neutralMinionsKilled: 0,
      turretsKilled: 0,
      objectivesStolen: 0,

      //vision
      visionScore: 0,
      wardsKilled: 0,
      wardsPlaced: 0,
      controlWardsPlaced: 0,
    }

    for (const m of matchData.value) {
      const row = m.player
      if (!row) continue

      applyParticipantStats(acc, row)

      acc.killsBefore15 += m.timeline?.stats.killsBefore15
      acc.deathsBefore15 += m.timeline?.stats.deathsBefore15
      acc.assistsBefore15 += m.timeline?.stats.assistsBefore15

      // offense
      acc.totalDamage += row.offense.totalDamage
      acc.damagePercentage += row.offense.damagePercentage

      // utility
      acc.effectiveHealingAndShielding +=
        row.utility.effectiveHealingAndShielding
      acc.totalAllyHealing += row.utility.totalAllyHealing
      acc.totalAllyShielding += row.utility.totalAllyShielding
      acc.allySaves += row.utility.allySaves

      acc.gamePatches?.push(m.match.gamePatch)
    }

    /*     if (mastery) {
      acc.level = mastery.level
      acc.totalPoints = mastery.totalPoints
      acc.pointsSinceLevel = mastery.pointsSinceLevel
      acc.pointsUntilLevel = mastery.pointsUntilLevel
      acc.lastPlayed = mastery.lastPlayed
    } */

    return acc.games ? acc : null
  })
