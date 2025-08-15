// mvpScoring.ts
export interface PlayerStats {
  matchId: string
  puuid: string
  teamId: number
  teamPosition: string
  championId: number
  win: boolean
  kills: number
  deaths: number
  assists: number
  goldEarned: number
  totalDamageDealtToChampions: number
  effectiveHealAndShielding: number
  totalDamageShieldedOnTeammates: number
  totalHealsOnTeammates: number
  damageSelfMitigated: number
  totalDamageTaken: number
  timeCCingOthers: number
  visionScore: number
  controlWardsPlaced: number
  turretKills: number
  dragonKills: number
  objectivesStolen: number
  challenges: {
    killParticipation: number
    teamDamagePercentage: number
    damageTakenOnTeamPercentage: number
    saveAllyFromDeath: number
    epicMonsterSteals: number
  }
}

const roleWeights: Record<string, Record<string, number>> = {
  TOP: {
    kills: 10,
    deathsInverse: 10,
    assists: 10,
    goldEarned: 8,
    totalDamageDealtToChampions: 15,
    effectiveHealAndShielding: 5,
    damageSelfMitigated: 10,
    totalDamageTaken: 8,
    timeCCingOthers: 5,
    visionScore: 5,
    controlWardsPlaced: 2,
    turretKills: 5,
    dragonKills: 2,
    objectivesStolen: 0,
    killParticipation: 5,
    teamDamagePercentage: 5,
    damageTakenOnTeamPercentage: 5,
    saveAllyFromDeath: 0,
    epicMonsterSteals: 0,
  },
  JUNGLE: {
    kills: 10,
    deathsInverse: 10,
    assists: 15,
    goldEarned: 8,
    totalDamageDealtToChampions: 10,
    effectiveHealAndShielding: 5,
    damageSelfMitigated: 5,
    totalDamageTaken: 5,
    timeCCingOthers: 5,
    visionScore: 5,
    controlWardsPlaced: 3,
    turretKills: 4,
    dragonKills: 8,
    objectivesStolen: 5,
    killParticipation: 7,
    teamDamagePercentage: 4,
    damageTakenOnTeamPercentage: 3,
    saveAllyFromDeath: 0,
    epicMonsterSteals: 3,
  },
  MIDDLE: {
    kills: 15,
    deathsInverse: 10,
    assists: 10,
    goldEarned: 10,
    totalDamageDealtToChampions: 20,
    effectiveHealAndShielding: 0,
    damageSelfMitigated: 5,
    totalDamageTaken: 5,
    timeCCingOthers: 5,
    visionScore: 5,
    controlWardsPlaced: 2,
    turretKills: 5,
    dragonKills: 2,
    objectivesStolen: 0,
    killParticipation: 6,
    teamDamagePercentage: 5,
    damageTakenOnTeamPercentage: 0,
    saveAllyFromDeath: 0,
    epicMonsterSteals: 0,
  },
  BOTTOM: {
    kills: 20,
    deathsInverse: 10,
    assists: 5,
    goldEarned: 15,
    totalDamageDealtToChampions: 20,
    effectiveHealAndShielding: 0,
    damageSelfMitigated: 0,
    totalDamageTaken: 0,
    timeCCingOthers: 5,
    visionScore: 3,
    controlWardsPlaced: 2,
    turretKills: 5,
    dragonKills: 2,
    objectivesStolen: 0,
    killParticipation: 6,
    teamDamagePercentage: 7,
    damageTakenOnTeamPercentage: 0,
    saveAllyFromDeath: 0,
    epicMonsterSteals: 0,
  },
  UTILITY: {
    kills: 5,
    deathsInverse: 10,
    assists: 20,
    goldEarned: 5,
    totalDamageDealtToChampions: 10,
    effectiveHealAndShielding: 20,
    damageSelfMitigated: 10,
    totalDamageTaken: 10,
    timeCCingOthers: 10,
    visionScore: 10,
    controlWardsPlaced: 5,
    turretKills: 2,
    dragonKills: 2,
    objectivesStolen: 0,
    killParticipation: 6,
    teamDamagePercentage: 2,
    damageTakenOnTeamPercentage: 3,
    saveAllyFromDeath: 5,
    epicMonsterSteals: 0,
  },
}

function normalizeStat(players: PlayerStats[], role: string, key: string) {
  const values = players
    .filter(p => p.teamPosition?.toUpperCase() === role)
    .map((p) => {
      if (key === 'effectiveHealAndShielding') {
        return (p.totalHealsOnTeammates || 0) + (p.totalDamageShieldedOnTeammates || 0)
      }
      if (key === 'deathsInverse') {
        return p.deaths === 0 ? Math.max(...players.map(pp => pp.deaths || 1)) : 1 / p.deaths
      }
      return (p[key as keyof PlayerStats] as number) || 0
    })

  const min = Math.min(...values)
  const max = Math.max(...values)

  return (player: PlayerStats) => {
    let val = 0
    if (key === 'effectiveHealAndShielding') {
      val = (player.totalHealsOnTeammates || 0) + (player.totalDamageShieldedOnTeammates || 0)
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
    const rolePlayers = players.filter(p => p.teamPosition?.toUpperCase() === role)
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
      scaledScores[puuid] = Math.round(((raw - min) / (max - min)) * 9 + 1)
    }
  }

  return scaledScores
}