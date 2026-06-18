import type {
  MatchData,
  PlayerLpScore,
  PlayerTimeline
} from "../../../../shared/types"
import type { H3Event } from "h3"
import type {
  D1DatabaseLike,
  D1PreparedStatementLike
} from "../../d1/summoner-cache"
import {
  extractMvpFeatureSnapshot,
  normalizeRiotRole
} from "./mvpScoring"

const PARTICIPANT_BOUND_COLUMNS = 14
const MAX_D1_BOUND_PARAMETERS = 100
export const MATCH_ANALYTICS_D1_BINDING = "MATCH_ANALYTICS_DB"

export interface MatchAnalyticsMatchRow {
  createdAt: number
  gameDurationSec: number
  gameEndAt: number
  mapId: number
  matchId: string
  patchKey: string
  queueId: number
  regionId: string
  teamSummaryJson: MatchAnalyticsTeamSummary[]
}

export interface MatchAnalyticsTeamSummary {
  baron: number
  dragon: number
  elder: number
  horde: number
  inhibitor: number
  kills: number
  riftHerald: number
  teamId: number
  tower: number
  win: boolean
}

export interface MatchAnalyticsParticipantRow {
  championId: number
  featureJson: ReturnType<typeof extractMvpFeatureSnapshot>
  gameEndAt: number
  matchId: string
  mvpAward: "ACE" | "MVP" | null
  mvpRank: number
  mvpScore: number
  patchKey: string
  puuid: string
  queueId: number
  role: string
  teamId: number
  timelineFeatureJson: Record<string, never> | null
  win: boolean
}

export interface MatchAnalyticsProjection {
  match: MatchAnalyticsMatchRow
  participants: MatchAnalyticsParticipantRow[]
}

export interface MatchAnalyticsParticipantChunk {
  boundColumns: number
  rows: MatchAnalyticsParticipantRow[]
}

export interface MatchTimelineFeatureRow {
  matchId: string
  puuid: string
  timelineFeatureJson: MatchTimelineFeatureSnapshot
}

export interface MatchTimelineFeatureSnapshot {
  assistsBefore15: number
  deathsBefore15: number
  featureVersion: 1
  itemEvents: {
    add: number
    specialUpgrade: number
    upgrade: number
  }
  killsBefore15: number
  skillOrder: number[]
  skillPriority: string[]
}

interface D1BatchDatabaseLike extends D1DatabaseLike {
  batch?: (statements: D1PreparedStatementLike[]) => Promise<unknown>
}

export function getMatchAnalyticsDb(event: H3Event): D1BatchDatabaseLike | null {
  const runtimeEnv = (event as any).req?.runtime?.cloudflare?.env
  const contextEnv = (event as any).context?.cloudflare?.env
  const env = runtimeEnv ?? contextEnv

  return (env?.[MATCH_ANALYTICS_D1_BINDING] ?? null) as D1BatchDatabaseLike | null
}

function patchKeyFromMatch(match: MatchData) {
  return String(match.gamePatch)
}

function awardFromScore(score: PlayerLpScore) {
  if (score.mvp) return "MVP"
  if (score.ace) return "ACE"
  return null
}

function toTeamSummary(match: MatchData): MatchAnalyticsTeamSummary[] {
  return match.teams.map(team => ({
    baron: team.baron,
    dragon: team.dragon,
    elder: team.elder,
    horde: team.horde,
    inhibitor: team.inhibitor,
    kills: team.kills ?? 0,
    riftHerald: team.riftHerald,
    teamId: team.teamId,
    tower: team.tower,
    win: team.win
  }))
}

export function toMatchAnalyticsRows(
  raw: any,
  clientMatch: MatchData
): MatchAnalyticsProjection {
  const createdAt = Date.now()
  const patchKey = patchKeyFromMatch(clientMatch)
  const gameDurationSec = Math.round(clientMatch.gameDuration * 60)
  const matchId = clientMatch.matchId
  const scoreByPuuid = new Map(
    clientMatch.participants.map(participant => [
      participant.puuid,
      participant.lpScore
    ])
  )

  return {
    match: {
      createdAt,
      gameDurationSec,
      gameEndAt: clientMatch.gameEndTimestamp,
      mapId: clientMatch.mapId,
      matchId,
      patchKey,
      queueId: clientMatch.queueId,
      regionId: clientMatch.regionId,
      teamSummaryJson: toTeamSummary(clientMatch)
    },
    participants: raw.info.participants.map((participant: any, index: number) => {
      const lpScore = scoreByPuuid.get(participant.puuid) ?? {
        ace: false,
        mvp: false,
        rank: 0,
        score: 0
      }

      return {
        championId: Number(participant.championId) || 0,
        featureJson: extractMvpFeatureSnapshot(
          participant,
          raw.info.gameDuration,
          index
        ),
        gameEndAt: clientMatch.gameEndTimestamp,
        matchId,
        mvpAward: awardFromScore(lpScore),
        mvpRank: lpScore.rank,
        mvpScore: lpScore.score,
        patchKey,
        puuid: String(participant.puuid || ""),
        queueId: clientMatch.queueId,
        role: normalizeRiotRole(participant).toLowerCase(),
        teamId: Number(participant.teamId) || 0,
        timelineFeatureJson: null,
        win: Boolean(participant.win)
      }
    })
  }
}

export function getMatchAnalyticsParticipantChunks(
  rows: MatchAnalyticsParticipantRow[],
  maxBoundParameters = MAX_D1_BOUND_PARAMETERS
): MatchAnalyticsParticipantChunk[] {
  const rowsPerChunk = Math.max(
    1,
    Math.floor(maxBoundParameters / PARTICIPANT_BOUND_COLUMNS)
  )
  const chunks: MatchAnalyticsParticipantChunk[] = []

  for (let index = 0; index < rows.length; index += rowsPerChunk) {
    chunks.push({
      boundColumns: PARTICIPANT_BOUND_COLUMNS,
      rows: rows.slice(index, index + rowsPerChunk)
    })
  }

  return chunks
}

function summarizeItemEvents(timeline: PlayerTimeline) {
  const summary = {
    add: 0,
    specialUpgrade: 0,
    upgrade: 0
  }

  for (const group of timeline.items) {
    for (const event of group.events) {
      if (event.action === "ADD") summary.add++
      else if (event.action === "UPGRADE") summary.upgrade++
      else summary.specialUpgrade++
    }
  }

  return summary
}

export function toTimelineFeatureRows(
  matchId: string,
  timelines: Record<string, PlayerTimeline>
): MatchTimelineFeatureRow[] {
  return Object.values(timelines).map(timeline => ({
    matchId,
    puuid: timeline.puuid,
    timelineFeatureJson: {
      assistsBefore15: timeline.stats.assistsBefore15,
      deathsBefore15: timeline.stats.deathsBefore15,
      featureVersion: 1,
      itemEvents: summarizeItemEvents(timeline),
      killsBefore15: timeline.stats.killsBefore15,
      skillOrder: timeline.skills.order,
      skillPriority: timeline.skills.priority
    }
  }))
}

export async function persistMatchAnalytics(
  db: D1BatchDatabaseLike | null,
  projection: MatchAnalyticsProjection
) {
  if (!db) return false

  await db
    .prepare(
      `
      INSERT INTO riot_matches (
        match_id,
        region_id,
        queue_id,
        map_id,
        patch_key,
        game_end_at,
        game_duration_sec,
        team_summary_json,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(match_id) DO UPDATE SET
        region_id = excluded.region_id,
        queue_id = excluded.queue_id,
        map_id = excluded.map_id,
        patch_key = excluded.patch_key,
        game_end_at = excluded.game_end_at,
        game_duration_sec = excluded.game_duration_sec,
        team_summary_json = excluded.team_summary_json
    `
    )
    .bind(
      projection.match.matchId,
      projection.match.regionId,
      projection.match.queueId,
      projection.match.mapId,
      projection.match.patchKey,
      projection.match.gameEndAt,
      projection.match.gameDurationSec,
      JSON.stringify(projection.match.teamSummaryJson),
      projection.match.createdAt
    )
    .run()

  const participantSql = (rowCount: number) => `
    INSERT INTO riot_match_participants (
      match_id,
      puuid,
      game_end_at,
      queue_id,
      patch_key,
      team_id,
      role,
      champion_id,
      win,
      feature_json,
      timeline_feature_json,
      mvp_score,
      mvp_rank,
      mvp_award
    )
    VALUES ${Array.from({ length: rowCount })
      .fill("(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
      .join(", ")}
    ON CONFLICT(match_id, puuid) DO UPDATE SET
      game_end_at = excluded.game_end_at,
      queue_id = excluded.queue_id,
      patch_key = excluded.patch_key,
      team_id = excluded.team_id,
      role = excluded.role,
      champion_id = excluded.champion_id,
      win = excluded.win,
      feature_json = excluded.feature_json,
      mvp_score = excluded.mvp_score,
      mvp_rank = excluded.mvp_rank,
      mvp_award = excluded.mvp_award
  `

  for (const chunk of getMatchAnalyticsParticipantChunks(
    projection.participants
  )) {
    const values = chunk.rows.flatMap(row =>
      [
        row.matchId,
        row.puuid,
        row.gameEndAt,
        row.queueId,
        row.patchKey,
        row.teamId,
        row.role,
        row.championId,
        row.win ? 1 : 0,
        JSON.stringify(row.featureJson),
        row.timelineFeatureJson ?
          JSON.stringify(row.timelineFeatureJson)
        : null,
        row.mvpScore,
        row.mvpRank,
        row.mvpAward
      ]
    )
    const statement = db.prepare(participantSql(chunk.rows.length)).bind(...values)

    if (db.batch) {
      await db.batch([statement])
    } else {
      await statement.run()
    }
  }

  return true
}

export async function persistTimelineFeatures(
  db: D1BatchDatabaseLike | null,
  rows: MatchTimelineFeatureRow[]
) {
  if (!db || !rows.length) return false

  const statement = `
    UPDATE riot_match_participants
    SET timeline_feature_json = ?
    WHERE match_id = ? AND puuid = ?
  `
  const statements = rows.map(row =>
    db
      .prepare(statement)
      .bind(
        JSON.stringify(row.timelineFeatureJson),
        row.matchId,
        row.puuid
      )
  )

  if (db.batch) {
    await db.batch(statements)
  } else {
    await Promise.all(statements.map(item => item.run()))
  }

  return true
}
