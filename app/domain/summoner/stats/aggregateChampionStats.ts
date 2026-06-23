import { bumpAverage } from "~/domain/summoner/stats/helpers/bumpValues"
import {
  getPositionStat,
  normalizePosition,
} from "~/domain/summoner/stats/helpers/normalizePosition"
import { sortEntriesByPickrate } from "~/domain/summoner/stats/helpers/sortEntries"
import { AGGREGATED_STAT_SCHEMA } from "~/domain/summoner/stats/stats/aggregatedStatSchema"
import { applyParticipantStats } from "~/domain/summoner/stats/stats/applyParticipantStats"
import { bumpFromPlayerStats } from "~/domain/summoner/stats/stats/bumpPlayerStats"
import { finalizeStatAverage } from "~/domain/summoner/stats/stats/finalizeStatAverage"
import { initFromSchema } from "~/domain/summoner/stats/stats/initFromSchema"

export interface ChampionStatsMatchEntry {
  match: MatchData
  player: Player
  timeline?: PlayerTimeline
}

export interface ChampionStatsAggregationOptions {
  includeDetailStats?: boolean
  includeTimelineStats?: boolean
}

export function createChampionStats(championId: number): ChampionStats {
  return {
    championId,
    championName: champNameById(championId) ?? "",
    csPerMin: 0,
    gamePatches: [],
    games: 0,
    kda: 0,
    loss: 0,
    role: { stats: {} },
    visionScorePerMin: 0,
    win: 0,
    winrate: 0,
    ...initFromSchema(AGGREGATED_STAT_SCHEMA),
  }
}

export function addChampionStatsMatch(
  acc: ChampionStats,
  entry: ChampionStatsMatchEntry,
  options: ChampionStatsAggregationOptions = {}
) {
  const { match, player, timeline } = entry
  if (player.win === "remake") return

  const roleKey = normalizePosition(player.role)
  acc.role ??= { stats: {} }
  const roleStat = getPositionStat(acc.role.stats, roleKey)
  roleStat.games++
  roleStat.win ??= 0
  if (player.win) roleStat.win++

  applyParticipantStats(acc, player)
  acc.gamePatches?.push(match.gamePatch)

  if (!options.includeDetailStats) return

  bumpFromPlayerStats(acc, player)
  if (acc.gameTime) bumpAverage(acc.gameTime, match.gameDuration)

  if (!options.includeTimelineStats) return

  if (acc.killsBefore15)
    bumpAverage(acc.killsBefore15, timeline?.stats.killsBefore15)
  if (acc.deathsBefore15)
    bumpAverage(acc.deathsBefore15, timeline?.stats.deathsBefore15)
  if (acc.assistsBefore15)
    bumpAverage(acc.assistsBefore15, timeline?.stats.assistsBefore15)
}

export function finalizeChampionStats(
  acc: ChampionStats,
  options: ChampionStatsAggregationOptions = {}
): ChampionStats | undefined {
  if (!acc.games) return

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
        100
    ) / 100

  acc.winrate = Math.round((acc.win / acc.games) * 1000) / 10

  for (const stat of Object.values(acc.role?.stats ?? {})) {
    const win = stat.win ?? 0
    stat.winrate = stat.games ? Math.round((win / stat.games) * 1000) / 10 : 0
    stat.pickrate = Math.round((stat.games / acc.games) * 1000) / 10
  }

  const mostPlayed = sortEntriesByPickrate(acc.role?.stats ?? {})[0]
  if (mostPlayed && acc.role) acc.role.mostPlayed = mostPlayed[0]

  if (!options.includeDetailStats) return acc

  if (acc.gameTime) {
    acc.gameTime.average = acc.gameTime.average / 60
  }

  acc.visionScorePerMin = Number.parseFloat(
    (
      ((acc.visionScore?.average ?? 0) / (acc.gameTime?.average || 1)) *
      10
    ).toFixed(1)
  )

  acc.csPerMin = Number.parseFloat(
    (
      ((acc.minionsKilled?.average ?? 0) +
        (acc.neutralMinionsKilled?.average ?? 0)) /
      (acc.gameTime?.average || 1)
    ).toFixed(1)
  )

  return acc
}
