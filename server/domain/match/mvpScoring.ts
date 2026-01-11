// mvpScoring.ts
export type MvpStats = {
  puuid: string
  teamPosition: string
  win: boolean
  deaths: number
  [key: string]: number | string | boolean
}

export function normalizeStat(players: MvpStats[], role: string, key: string) {
  const values = players
    .filter((p) => String(p.role)?.toUpperCase() === role)
    .map((p) => Number(p[key]) || 0)

  const min = Math.min(...values)
  const max = Math.max(...values)

  return (player: MvpStats) => {
    const val = Number(player[key]) || 0
    if (max === min) return max === 0 ? 0 : 0.5
    return (val - min) / (max - min)
  }
}

export function calculateMvpScores(raw: any) {
  /* prep stats for mvp */
  const players = raw.info.participants.map((p: any) => ({
    deathsInverse: Math.exp(-(p.deaths ?? 99) * 0.35),
    puuid: p.puuid,
    assists: p.assists,
    damageTakenOnTeamPercentage: p.challenges.damageTakenOnTeamPercentage,
    killParticipation: p.challenges.killParticipation,
    saveAllyFromDeath: p.challenges.saveAllyFromDeath,
    teamDamagePercentage: p.challenges.teamDamagePercentage,
    immobilizeAndKillWithAlly: p.challenges.immobilizeAndKillWithAlly,
    killAfterHiddenWithAlly: p.challenges.killAfterHiddenWithAlly,
    laneMinionsFirst10Minutes: p.challenges.laneMinionsFirst10Minutes,
    laningPhaseGoldExpAdvantage: p.challenges.laningPhaseGoldExpAdvantage,
    maxCsAdvantageOnLaneOpponent: p.challenges.maxCsAdvantageOnLaneOpponent,
    pickKillWithAlly: p.challenges.pickKillWithAlly,
    damageDealtToBuildings: p.challenges.damageDealtToBuildings,
    damageDealtToTurrets: p.challenges.damageDealtToTurrets,
    damageDealtToEpicMonsters: p.challenges.damageDealtToEpicMonsters,
    jungleCsBefore10Minutes: p.challenges.jungleCsBefore10Minutes,
    championId: p.championId,
    damageSelfMitigated: p.damageSelfMitigated,
    deaths: p.deaths,
    dragonKills: p.dragonKills,
    effectiveHealAndShielding:
      (p.totalHealsOnTeammates || 0) + (p.totalDamageShieldedOnTeammates || 0),
    goldEarned: p.goldEarned,
    kills: p.kills,
    matchId: raw.metadata.matchId,
    objectivesStolen: p.objectivesStolen,
    teamId: p.teamId,
    teamPosition: p.role,
    timeCCingOthers: p.timeCCingOthers,
    totalDamageDealtToChampions: p.totalDamageDealtToChampions,
    totalDamageShieldedOnTeammates: p.totalDamageShieldedOnTeammates,
    totalDamageTaken: p.totalDamageTaken,
    totalHealsOnTeammates: p.totalHealsOnTeammates,
    totalMinionsKilled: p.totalMinionsKilled,
    turretKills: p.turretKills,
    visionScore: p.visionScore,
    win: p.win,
    damagePerGold:
      p.goldEarned > 0 ? p.totalDamageDealtToChampions / p.goldEarned : 0,
    objectiveImpact:
      (p.challenges.damageDealtToTurrets || 0) +
      (p.challenges.damageDealtToBuildings || 0) +
      (p.challenges.damageDealtToEpicMonsters || 0),
  }))

  const scores: Record<string, number> = {}

  const roles = Object.keys(roleWeights)
  for (const role of roles) {
    const rolePlayers = players.filter(
      (p) => String(p.role)?.toUpperCase() === role
    )
    if (!rolePlayers.length) continue

    for (const stat in roleWeights[role]) {
      if (!(stat in rolePlayers[0])) {
        console.warn(`[MVP] Missing stat "${stat}" for role "${role}"`)
      }
    }

    const normalizers: Record<string, (p: MvpStats) => number> = {}
    for (const stat in roleWeights[role]) {
      normalizers[stat] = normalizeStat(players, role, stat)
    }

    for (const player of rolePlayers) {
      let rawScore = 0
      for (const [stat, weight] of Object.entries(roleWeights[role])) {
        rawScore += (normalizers[stat](player) || 0) * weight
      }

      // Apply win bias (5% boost if player won)
      if (player.win) {
        rawScore *= 1.05
      }

      scores[player.puuid] = rawScore
    }
  }

  const scaledScores: Record<string, number> = {}

  for (const role of roles) {
    const rolePlayers = players.filter(
      (p) => String(p.role)?.toUpperCase() === role
    )
    if (!rolePlayers.length) continue

    const roleValues = rolePlayers.map((p) => scores[p.puuid])
    const min = Math.min(...roleValues)
    const max = Math.max(...roleValues)

    for (const p of rolePlayers) {
      const raw = scores[p.puuid]

      if (max === min) {
        scaledScores[p.puuid] = 5
      } else {
        const linear = (raw - min) / (max - min)
        const curved = Math.pow(linear, 1.25) // harder to hit 1.0
        scaledScores[p.puuid] = Math.round((curved * 8 + 2) * 10) / 10
      }
    }
  }

  return scaledScores
}
