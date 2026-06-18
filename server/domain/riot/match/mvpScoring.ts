import type { PlayerLpScore } from "../../../../shared/types"
import { roleWeights } from "./roleWeights"

export type NormalizedRiotRole =
  | "BOTTOM"
  | "JUNGLE"
  | "MIDDLE"
  | "TOP"
  | "UTILITY"

export interface MvpStats {
  [key: string]: number | string | boolean | undefined
  puuid: string
  deaths: number
  role?: string
  teamPosition: string
  win: boolean
}

export interface MvpFeatureSnapshot {
  assists: number
  championId: number
  csPerMinute: number
  damageDealtToBuildings: number
  damageDealtToEpicMonsters: number
  damageDealtToTurrets: number
  damagePerGold: number
  damageSelfMitigated: number
  damageTakenOnTeamPercentage: number
  deaths: number
  deathsInverse: number
  dragonKills: number
  effectiveHealAndShielding: number
  featureVersion: 1
  goldEarned: number
  goldPerMinute: number
  immobilizeAndKillWithAlly: number
  jungleCsBefore10Minutes: number
  killAfterHiddenWithAlly: number
  killParticipation: number
  kills: number
  laneMinionsFirst10Minutes: number
  laningPhaseGoldExpAdvantage: number
  maxCsAdvantageOnLaneOpponent: number
  objectiveImpact: number
  objectiveImpactPerMinute: number
  objectivesStolen: number
  participantIndex: number
  pickKillWithAlly: number
  role: NormalizedRiotRole
  saveAllyFromDeath: number
  teamDamagePercentage: number
  timeCCingOthers: number
  totalDamageDealtToChampions: number
  totalDamageTaken: number
  totalMinionsKilled: number
  turretKills: number
  visionScore: number
  visionScorePerMinute: number
}

interface ScoredMvpParticipant extends MvpFeatureSnapshot {
  puuid: string
  teamId: number
  win: boolean
}

export function normalizeRiotRole(input: {
  role?: string
  teamPosition?: string
}): NormalizedRiotRole {
  const teamPosition = String(input.teamPosition || "").toUpperCase()
  const fallback = String(input.role || "").toUpperCase()
  const value = teamPosition || fallback

  if (value === "BOTTOM" || value === "ADC") return "BOTTOM"
  if (value === "JUNGLE") return "JUNGLE"
  if (value === "MIDDLE" || value === "MID") return "MIDDLE"
  if (value === "TOP") return "TOP"
  return "UTILITY"
}

function finiteNumber(value: unknown) {
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
}

function perMinute(value: unknown, durationMinutes: number) {
  if (durationMinutes <= 0) return 0
  return finiteNumber(value) / durationMinutes
}

function roundScore(value: number) {
  return Math.round(value * 100) / 100
}

function getMvpStatValue(player: ScoredMvpParticipant, key: string) {
  return finiteNumber(player[key as keyof ScoredMvpParticipant])
}

export function isRiotRemake(raw: any) {
  return finiteNumber(raw?.info?.gameDuration) < 300
}

export function extractMvpFeatureSnapshot(
  participant: any,
  gameDurationSec: number,
  participantIndex: number
): MvpFeatureSnapshot {
  const durationMinutes = Math.max(gameDurationSec / 60, 1)
  const objectiveImpact =
    finiteNumber(participant?.challenges?.damageDealtToTurrets) +
    finiteNumber(participant?.challenges?.damageDealtToBuildings) +
    finiteNumber(participant?.challenges?.damageDealtToEpicMonsters)
  const effectiveHealAndShielding =
    finiteNumber(participant?.totalHealsOnTeammates) +
    finiteNumber(participant?.totalDamageShieldedOnTeammates)
  const totalCs =
    finiteNumber(participant?.totalMinionsKilled) +
    finiteNumber(participant?.totalAllyJungleMinionsKilled) +
    finiteNumber(participant?.totalEnemyJungleMinionsKilled)

  return {
    assists: finiteNumber(participant?.assists),
    championId: finiteNumber(participant?.championId),
    csPerMinute: roundScore(totalCs / durationMinutes),
    damageDealtToBuildings: finiteNumber(
      participant?.challenges?.damageDealtToBuildings
    ),
    damageDealtToEpicMonsters: finiteNumber(
      participant?.challenges?.damageDealtToEpicMonsters
    ),
    damageDealtToTurrets: finiteNumber(
      participant?.challenges?.damageDealtToTurrets
    ),
    damagePerGold:
      finiteNumber(participant?.goldEarned) > 0
        ? roundScore(
            finiteNumber(participant?.totalDamageDealtToChampions) /
              finiteNumber(participant?.goldEarned)
          )
        : 0,
    damageSelfMitigated: finiteNumber(participant?.damageSelfMitigated),
    damageTakenOnTeamPercentage: finiteNumber(
      participant?.challenges?.damageTakenOnTeamPercentage
    ),
    deaths: finiteNumber(participant?.deaths),
    deathsInverse: Math.exp(-finiteNumber(participant?.deaths) * 0.35),
    dragonKills: finiteNumber(participant?.dragonKills),
    effectiveHealAndShielding,
    featureVersion: 1,
    goldEarned: finiteNumber(participant?.goldEarned),
    goldPerMinute:
      finiteNumber(participant?.challenges?.goldPerMinute) ||
      perMinute(participant?.goldEarned, durationMinutes),
    immobilizeAndKillWithAlly: finiteNumber(
      participant?.challenges?.immobilizeAndKillWithAlly
    ),
    jungleCsBefore10Minutes: finiteNumber(
      participant?.challenges?.jungleCsBefore10Minutes
    ),
    killAfterHiddenWithAlly: finiteNumber(
      participant?.challenges?.killAfterHiddenWithAlly
    ),
    killParticipation: finiteNumber(participant?.challenges?.killParticipation),
    kills: finiteNumber(participant?.kills),
    laneMinionsFirst10Minutes: finiteNumber(
      participant?.challenges?.laneMinionsFirst10Minutes
    ),
    laningPhaseGoldExpAdvantage: finiteNumber(
      participant?.challenges?.laningPhaseGoldExpAdvantage
    ),
    maxCsAdvantageOnLaneOpponent: finiteNumber(
      participant?.challenges?.maxCsAdvantageOnLaneOpponent
    ),
    objectiveImpact,
    objectiveImpactPerMinute: roundScore(objectiveImpact / durationMinutes),
    objectivesStolen: finiteNumber(participant?.objectivesStolen),
    participantIndex,
    pickKillWithAlly: finiteNumber(participant?.challenges?.pickKillWithAlly),
    role: normalizeRiotRole(participant),
    saveAllyFromDeath: finiteNumber(participant?.challenges?.saveAllyFromDeath),
    teamDamagePercentage: finiteNumber(
      participant?.challenges?.teamDamagePercentage
    ),
    timeCCingOthers: finiteNumber(participant?.timeCCingOthers),
    totalDamageDealtToChampions: finiteNumber(
      participant?.totalDamageDealtToChampions
    ),
    totalDamageTaken: finiteNumber(participant?.totalDamageTaken),
    totalMinionsKilled: totalCs,
    turretKills: finiteNumber(participant?.turretKills),
    visionScore: finiteNumber(participant?.visionScore),
    visionScorePerMinute: roundScore(
      perMinute(participant?.visionScore, durationMinutes)
    )
  }
}

export function normalizeStat(
  players: ScoredMvpParticipant[],
  role: string,
  key: string
) {
  const values = players
    .filter(p => p.role === role)
    .map(p => getMvpStatValue(p, key))

  const min = Math.min(...values)
  const max = Math.max(...values)

  return (player: ScoredMvpParticipant) => {
    const val = getMvpStatValue(player, key)
    if (max === min) return max === 0 ? 0 : 0.5
    return (val - min) / (max - min)
  }
}

export function calculateMvpScores(raw: any): Record<string, PlayerLpScore> {
  const gameDurationSec = finiteNumber(raw?.info?.gameDuration)
  const remake = isRiotRemake(raw)
  const players: ScoredMvpParticipant[] = raw.info.participants.map(
    (participant: any, index: number) => ({
      ...extractMvpFeatureSnapshot(participant, gameDurationSec, index),
      puuid: participant.puuid,
      teamId: finiteNumber(participant.teamId),
      win: Boolean(participant.win)
    })
  )

  const rawScores: Record<string, number> = {}

  const roles = Object.keys(roleWeights)
  for (const roleKey of roles) {
    const role = roleKey as NormalizedRiotRole
    const weights = roleWeights[role]
    if (!weights) continue
    const rolePlayers = players.filter(p => p.role === role)
    if (!rolePlayers.length) continue

    for (const stat in weights) {
      if (!(stat in rolePlayers[0]!)) {
        console.warn(`[MVP] Missing stat "${stat}" for role "${role}"`)
      }
    }

    const normalizers: Record<string, (p: ScoredMvpParticipant) => number> = {}
    for (const stat in weights) {
      normalizers[stat] = normalizeStat(players, role, stat)
    }

    for (const player of rolePlayers) {
      let score = 0
      let totalWeight = 0
      for (const [stat, weight] of Object.entries(weights)) {
        score += (normalizers[stat]?.(player) || 0) * weight
        totalWeight += weight
      }

      rawScores[player.puuid] = totalWeight > 0 ? score / totalWeight : 0
    }
  }

  const sorted = [...players].sort((a, b) => {
    const scoreDiff = (rawScores[b.puuid] ?? 0) - (rawScores[a.puuid] ?? 0)
    if (scoreDiff) return scoreDiff
    return a.participantIndex - b.participantIndex
  })
  const winningBest = sorted.find(player => player.win)?.puuid
  const losingBest = sorted.find(player => !player.win)?.puuid
  const scores: Record<string, PlayerLpScore> = {}

  sorted.forEach((player, index) => {
    scores[player.puuid] = {
      ace: !remake && player.puuid === losingBest,
      mvp: !remake && player.puuid === winningBest,
      rank: index + 1,
      score: roundScore((rawScores[player.puuid] ?? 0) * 9 + 1)
    }
  })

  return scores
}
