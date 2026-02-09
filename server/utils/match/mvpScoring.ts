//
// mvpScoring.ts
import { roleWeights } from "./roleWeights"
export interface MvpStats {
  [key: string]: number | string | boolean | undefined
  puuid: string
  deaths: number
  role?: string
  teamPosition: string
  win: boolean
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
    killAfterHiddenWithAlly: p.challenges.killAfterHiddenWithAlly,
    puuid: p.puuid,
    assists: p.assists,
    championId: p.championId,
    damageDealtToBuildings: p.challenges.damageDealtToBuildings,
    damageDealtToEpicMonsters: p.challenges.damageDealtToEpicMonsters,
    damageDealtToTurrets: p.challenges.damageDealtToTurrets,
    damagePerGold:
      p.goldEarned > 0 ? p.totalDamageDealtToChampions / p.goldEarned : 0,
    damageSelfMitigated: p.damageSelfMitigated,
    damageTakenOnTeamPercentage: p.challenges.damageTakenOnTeamPercentage,
    deaths: p.deaths,
    deathsInverse: Math.exp(-(p.deaths ?? 99) * 0.35),
    dragonKills: p.dragonKills,
    effectiveHealAndShielding:
      (p.totalHealsOnTeammates || 0) + (p.totalDamageShieldedOnTeammates || 0),
    goldEarned: p.goldEarned,
    immobilizeAndKillWithAlly: p.challenges.immobilizeAndKillWithAlly,
    jungleCsBefore10Minutes: p.challenges.jungleCsBefore10Minutes,
    killParticipation: p.challenges.killParticipation,
    kills: p.kills,
    laneMinionsFirst10Minutes: p.challenges.laneMinionsFirst10Minutes,
    laningPhaseGoldExpAdvantage: p.challenges.laningPhaseGoldExpAdvantage,
    matchId: raw.metadata.matchId,
    maxCsAdvantageOnLaneOpponent: p.challenges.maxCsAdvantageOnLaneOpponent,
    objectiveImpact:
      (p.challenges.damageDealtToTurrets || 0) +
      (p.challenges.damageDealtToBuildings || 0) +
      (p.challenges.damageDealtToEpicMonsters || 0),
    objectivesStolen: p.objectivesStolen,
    pickKillWithAlly: p.challenges.pickKillWithAlly,
    saveAllyFromDeath: p.challenges.saveAllyFromDeath,
    teamDamagePercentage: p.challenges.teamDamagePercentage,
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
  }))

  const scores: Record<string, number> = {}

  const roles = Object.keys(roleWeights)
  for (const role of roles) {
    const weights = roleWeights[role]
    if (!weights) continue
    const rolePlayers = players.filter(
      (p: MvpStats) => String(p.role)?.toUpperCase() === role
    )
    if (!rolePlayers.length) continue

    for (const stat in weights) {
      if (!(stat in rolePlayers[0])) {
        console.warn(`[MVP] Missing stat "${stat}" for role "${role}"`)
      }
    }

    const normalizers: Record<string, (p: MvpStats) => number> = {}
    for (const stat in weights) {
      normalizers[stat] = normalizeStat(players, role, stat)
    }

    for (const player of rolePlayers) {
      let rawScore = 0
      for (const [stat, weight] of Object.entries(weights)) {
        rawScore += (normalizers[stat]?.(player) || 0) * weight
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
      (p: MvpStats) => String(p.role)?.toUpperCase() === role
    )
    if (!rolePlayers.length) continue

    const roleValues = rolePlayers.map((p: MvpStats) => scores[p.puuid])
    const min = Math.min(...roleValues)
    const max = Math.max(...roleValues)

    for (const p of rolePlayers as MvpStats[]) {
      const raw = scores[p.puuid] ?? 0

      if (max === min) {
        scaledScores[p.puuid] = 5
      } else {
        const linear = (raw - min) / (max - min)
        const curved = linear ** 1.25 // harder to hit 1.0
        scaledScores[p.puuid] = Math.round((curved * 8 + 2) * 10) / 10
      }
    }
  }

  return scaledScores
}
