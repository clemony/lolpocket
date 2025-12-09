// mvpScoring.ts
const roleWeights: Record<string, Record<string, number>> = {
  BOTTOM: {
    assists: 5,
    damageSelfMitigated: 0,
    damageTakenOnTeamPercentage: 0,
    deathsInverse: 10,
    dragonKills: 2,
    effectiveHealAndShielding: 0,
    goldEarned: 15,
    killParticipation: 6,
    objectivesStolen: 0,
    saveAllyFromDeath: 0,
    timeCCingOthers: 5,
    totalDamageTaken: 0,
    totalMinionsKilled: 15,
    turretKills: 5,
    visionScore: 3,
    kills: 16,
    totalDamageDealtToChampions: 14,
    teamDamagePercentage: 10,
    laneMinionsFirst10Minutes: 6,
    maxCsAdvantageOnLaneOpponent: 5,
    damageDealtToBuildings: 4,
    damagePerGold: 6,
    objectiveImpact: 5,
  },
  JUNGLE: {
    assists: 15,
    damageSelfMitigated: 5,
    damageTakenOnTeamPercentage: 3,
    deathsInverse: 10,
    dragonKills: 8,
    effectiveHealAndShielding: 5,
    goldEarned: 8,
    killParticipation: 7,
    kills: 10,
    objectivesStolen: 5,
    saveAllyFromDeath: 0,
    teamDamagePercentage: 4,
    timeCCingOthers: 5,
    totalDamageDealtToChampions: 10,
    totalDamageTaken: 5,
    totalMinionsKilled: 6,
    turretKills: 4,
    visionScore: 5,
    jungleCsBefore10Minutes: 7,
    damageDealtToEpicMonsters: 10, // objective control MVP stat
    pickKillWithAlly: 6,
    immobilizeAndKillWithAlly: 4,
    damagePerGold: 5,
    objectiveImpact: 10,
  },
  MIDDLE: {
    assists: 10,
    damageSelfMitigated: 5,
    damageTakenOnTeamPercentage: 0,
    deathsInverse: 10,
    dragonKills: 2,
    effectiveHealAndShielding: 0,
    goldEarned: 10,
    killParticipation: 6,
    kills: 15,
    objectivesStolen: 0,
    saveAllyFromDeath: 0,
    timeCCingOthers: 5,
    totalDamageTaken: 5,
    totalMinionsKilled: 12,
    turretKills: 5,
    visionScore: 5,
    totalDamageDealtToChampions: 14,
    teamDamagePercentage: 10,
    laningPhaseGoldExpAdvantage: 8,
    killAfterHiddenWithAlly: 5,
    pickKillWithAlly: 4,
    damagePerGold: 8,
  },
  TOP: {
    assists: 10,
    damageSelfMitigated: 10,
    damageTakenOnTeamPercentage: 5,
    deathsInverse: 10,
    dragonKills: 2,
    effectiveHealAndShielding: 5,
    goldEarned: 8,
    killParticipation: 5,
    kills: 10,
    objectivesStolen: 0,
    saveAllyFromDeath: 0,
    teamDamagePercentage: 5,
    timeCCingOthers: 5,
    totalDamageDealtToChampions: 15,
    totalDamageTaken: 8,
    totalMinionsKilled: 10,
    turretKills: 5,
    visionScore: 5,
    damageDealtToBuildings: 8,
    maxCsAdvantageOnLaneOpponent: 6,
    laningPhaseGoldExpAdvantage: 5,
    objectiveImpact: 8,
  },
  UTILITY: {
    assists: 14,
    damageSelfMitigated: 10,
    damageTakenOnTeamPercentage: 3,
    deathsInverse: 10,
    dragonKills: 2,
    effectiveHealAndShielding: 20,
    goldEarned: 5,
    killParticipation: 10,
    kills: 5,
    objectivesStolen: 0,
    saveAllyFromDeath: 5,
    teamDamagePercentage: 2,
    timeCCingOthers: 10,
    totalDamageDealtToChampions: 10,
    totalDamageTaken: 10,
    totalMinionsKilled: 0,
    turretKills: 2,
    visionScore: 8,
    pickKillWithAlly: 10,
    immobilizeAndKillWithAlly: 8,
    killAfterHiddenWithAlly: 4,
  },
}

export type MvpStats = {
  puuid: string
  teamPosition: string
  win: boolean
  deaths: number
  [key: string]: number | string | boolean
}

export function normalizeStat(players: MvpStats[], role: string, key: string) {
  const values = players
    .filter((p) => String(p.teamPosition)?.toUpperCase() === role)
    .map((p) => Number(p[key]) || 0)

  const min = Math.min(...values)
  const max = Math.max(...values)

  return (player: MvpStats) => {
    const val = Number(player[key]) || 0
    if (max === min) return max === 0 ? 0 : 0.5
    return (val - min) / (max - min)
  }
}

export function calculateMvpScores(players: MvpStats[]) {
  const scores: Record<string, number> = {}

  const roles = Object.keys(roleWeights)
  for (const role of roles) {
    const rolePlayers = players.filter(
      (p) => String(p.teamPosition)?.toUpperCase() === role
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
      (p) => String(p.teamPosition)?.toUpperCase() === role
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
