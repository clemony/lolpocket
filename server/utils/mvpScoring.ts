// mvpScoring.ts
export interface PlayerStats {
  puuid: string
  assists: number
  challenges: {
    killParticipation: number
    teamDamagePercentage: number
    damageTakenOnTeamPercentage: number
    saveAllyFromDeath: number
  }
  championId: number
  damageSelfMitigated: number
  deaths: number
  dragonKills: number
  effectiveHealAndShielding: number
  goldEarned: number
  kills: number
  matchId: string
  objectivesStolen: number
  teamId: number
  teamPosition: string
  timeCCingOthers: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  turretKills: number
  visionScore: number
  win: boolean
}

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
    kills: 20,
    objectivesStolen: 0,
    saveAllyFromDeath: 0,
    teamDamagePercentage: 7,
    timeCCingOthers: 5,
    totalDamageDealtToChampions: 20,
    totalDamageTaken: 0,
    totalMinionsKilled: 15,
    turretKills: 5,
    visionScore: 3,
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
    teamDamagePercentage: 5,
    timeCCingOthers: 5,
    totalDamageDealtToChampions: 20,
    totalDamageTaken: 5,
    totalMinionsKilled: 12,
    turretKills: 5,
    visionScore: 5,
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
  },
  UTILITY: {
    assists: 20,
    damageSelfMitigated: 10,
    damageTakenOnTeamPercentage: 3,
    deathsInverse: 10,
    dragonKills: 2,
    effectiveHealAndShielding: 20,
    goldEarned: 5,
    killParticipation: 6,
    kills: 5,
    objectivesStolen: 0,
    saveAllyFromDeath: 5,
    teamDamagePercentage: 2,
    timeCCingOthers: 10,
    totalDamageDealtToChampions: 10,
    totalDamageTaken: 10,
    totalMinionsKilled: 0,
    turretKills: 2,
    visionScore: 10,
  },
}

export function normalizeStat(
  players: PlayerStats[],
  role: string,
  key: string
) {
  const values = players
    .filter(p => p.teamPosition?.toUpperCase() === role)
    .map((p) => {
      if (key === 'effectiveHealAndShielding') {
        return (
          (p.totalHealsOnTeammates || 0)
          + (p.totalDamageShieldedOnTeammates || 0)
        )
      }
      if (key === 'deathsInverse') {
        return p.deaths === 0
          ? Math.max(...players.map(pp => pp.deaths || 1))
          : 1 / p.deaths
      }
      return (p[key as keyof PlayerStats] as number) || 0
    })

  const min = Math.min(...values)
  const max = Math.max(...values)

  return (player: PlayerStats) => {
    let val = 0
    if (key === 'effectiveHealAndShielding') {
      val
        = (player.totalHealsOnTeammates || 0)
          + (player.totalDamageShieldedOnTeammates || 0)
    }
    else if (key === 'deathsInverse') {
      val = player.deaths === 0 ? max : 1 / player.deaths
    }
    else {
      val = (player[key as keyof PlayerStats] as number) || 0
    }
    if (max === min)
      return 0.5
    return (val - min) / (max - min)
  }
}

export function calculateMvpScores(players: PlayerStats[]) {
  const scores: Record<string, number> = {}

  const roles = Object.keys(roleWeights)
  for (const role of roles) {
    const rolePlayers = players.filter(
      p => p.teamPosition?.toUpperCase() === role
    )
    if (!rolePlayers.length)
      continue

    const normalizers: Record<string, (p: PlayerStats) => number> = {}
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

  const values = Object.values(scores)
  const min = Math.min(...values)
  const max = Math.max(...values)

  const scaledScores: Record<string, number> = {}
  for (const [puuid, raw] of Object.entries(scores)) {
    if (max === min) {
      scaledScores[puuid] = 5
    }
    else {
      scaledScores[puuid]
        = Math.round((((raw - min) / (max - min)) * 9 + 1) * 10) / 10
    }
  }

  return scaledScores
}
