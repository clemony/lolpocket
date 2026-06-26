import type { MatchData } from "../../../../shared/types"
import type {
  D1DatabaseLike,
  D1PreparedStatementLike
} from "../../d1/summoner-cache"
import { upsertCachedMatchParticipants } from "../../d1/summoner-cache"
import { idsByPuuid } from "./idsByPuuid"
import { matchById } from "./matchById"
import {
  persistMatchAnalytics,
  toMatchAnalyticsTallyProjection
} from "./analytics"
import { transformMatchData } from "./transformMatchData"

const MAX_D1_BOUND_PARAMETERS = 100

export const MATCH_ANALYTICS_GATHER_TASK = "riot:match-analytics:gather-na"
export const MATCH_ANALYTICS_GATHER_CRON = "*/5 * * * *"
export const MATCH_ANALYTICS_GATHER_REGION = "na1"
export const MATCH_ANALYTICS_GATHER_QUEUES = [420, 440] as const
export const MATCH_ANALYTICS_GATHER_SEED_LIMIT = 2
export const MATCH_ANALYTICS_GATHER_MATCH_COUNT = 20
export const MATCH_ANALYTICS_GATHER_SUCCESS_COOLDOWN = 1000 * 60 * 60 * 6
export const MATCH_ANALYTICS_GATHER_EMPTY_COOLDOWN = 1000 * 60 * 60 * 12
export const MATCH_ANALYTICS_GATHER_ERROR_COOLDOWN = 1000 * 60 * 15

type D1AllResult<T> = { results?: T[] } | T[]
type MatchAnalyticsDb = Parameters<typeof persistMatchAnalytics>[0]
type MatchAnalyticsProjection = ReturnType<typeof toMatchAnalyticsTallyProjection>

interface D1SelectableStatement extends D1PreparedStatementLike {
  all: <T = unknown>() => Promise<D1AllResult<T>>
}

export interface MatchAnalyticsGatherSeed {
  lastScannedAt?: number | null
  nextScanAfter?: number | null
  puuid: string
  region: string
}

export type MatchAnalyticsScanStatus = "success" | "empty" | "error"

export interface MatchAnalyticsSeedScanUpdate {
  cooldownMs: number
  error?: string | null
  now: number
  status: MatchAnalyticsScanStatus
}

export interface MatchAnalyticsGatherResult {
  failedSeeds: number
  fetchedMatches: number
  persistedMatches: number
  scannedSeeds: number
  skippedMatches: number
  status:
    | "empty"
    | "error"
    | "missing_binding"
    | "no_seeds"
    | "success"
  totalMatchIds: number
}

export interface MatchAnalyticsGatherDeps {
  idsByPuuid: typeof idsByPuuid
  matchById: typeof matchById
  persistAnalytics: typeof persistMatchAnalytics
  toProjection: typeof toMatchAnalyticsTallyProjection
  transformMatchData: typeof transformMatchData
  upsertParticipants: typeof upsertCachedMatchParticipants
}

export interface MatchAnalyticsGatherOptions {
  analyticsDb: MatchAnalyticsDb
  deps?: Partial<MatchAnalyticsGatherDeps>
  matchCount?: number
  now?: number
  queueIds?: readonly number[]
  region?: string
  seedLimit?: number
  summonerDb: D1DatabaseLike | null
}

interface DueSeedRow {
  last_scanned_at: number | null
  next_scan_after: number | null
  puuid: string
  region: string | null
}

interface IngestedMatchRow {
  match_id: string
}

const defaultDeps: MatchAnalyticsGatherDeps = {
  idsByPuuid,
  matchById,
  persistAnalytics: persistMatchAnalytics,
  toProjection: toMatchAnalyticsTallyProjection,
  transformMatchData,
  upsertParticipants: upsertCachedMatchParticipants
}

function preparedAll<T>(statement: D1PreparedStatementLike) {
  return (statement as D1SelectableStatement).all<T>()
}

async function allRows<T>(statement: D1PreparedStatementLike) {
  const result = await preparedAll<T>(statement)
  return Array.isArray(result) ? result : (result.results ?? [])
}

function chunk<T>(values: T[], max = MAX_D1_BOUND_PARAMETERS) {
  const chunks: T[][] = []
  for (let index = 0; index < values.length; index += max) {
    chunks.push(values.slice(index, index + max))
  }
  return chunks
}

function uniqueStrings(values: string[]) {
  return [...new Set(values.filter(Boolean))]
}

function errorMessage(err: unknown) {
  return err instanceof Error ? err.message : String(err)
}

export async function listDueMatchAnalyticsSeeds(
  db: D1DatabaseLike | null,
  options: {
    limit?: number
    now?: number
    region?: string
  } = {}
): Promise<MatchAnalyticsGatherSeed[]> {
  if (!db) return []

  const now = options.now ?? Date.now()
  const limit = options.limit ?? MATCH_ANALYTICS_GATHER_SEED_LIMIT
  const region = options.region ?? MATCH_ANALYTICS_GATHER_REGION
  const rows = await allRows<DueSeedRow>(
    db
      .prepare(
        `
        SELECT
          summoner_cache.puuid,
          COALESCE(summoner_cache.region, ?) AS region,
          summoner_match_scan_state.last_scanned_at,
          summoner_match_scan_state.next_scan_after
        FROM summoner_cache
        LEFT JOIN summoner_match_scan_state
          ON summoner_match_scan_state.puuid = summoner_cache.puuid
        WHERE summoner_cache.puuid IS NOT NULL
          AND summoner_cache.puuid != ''
          AND COALESCE(summoner_cache.region, ?) = ?
          AND (
            summoner_match_scan_state.next_scan_after IS NULL
            OR summoner_match_scan_state.next_scan_after <= ?
          )
        ORDER BY
          COALESCE(summoner_match_scan_state.next_scan_after, 0) ASC,
          COALESCE(summoner_cache.last_seen_at, 0) DESC
        LIMIT ?
      `
      )
      .bind(region, region, region, now, limit)
  )

  return rows.map(row => ({
    lastScannedAt: row.last_scanned_at,
    nextScanAfter: row.next_scan_after,
    puuid: row.puuid,
    region: row.region ?? region
  }))
}

export async function filterUnprocessedMatchIds(
  db: MatchAnalyticsDb,
  matchIds: string[]
) {
  const uniqueIds = uniqueStrings(matchIds)
  if (!db || !uniqueIds.length) return []

  const doneIds = new Set<string>()
  for (const ids of chunk(uniqueIds)) {
    const placeholders = ids.map(() => "?").join(", ")
    const rows = await allRows<IngestedMatchRow>(
      db
        .prepare(
          `
          SELECT match_id
          FROM riot_ingested_matches
          WHERE status = 'done'
            AND match_id IN (${placeholders})
        `
        )
        .bind(...ids)
    )

    for (const row of rows) {
      doneIds.add(row.match_id)
    }
  }

  return uniqueIds.filter(matchId => !doneIds.has(matchId))
}

export async function markMatchAnalyticsSeedScanned(
  db: D1DatabaseLike | null,
  seed: Pick<MatchAnalyticsGatherSeed, "puuid" | "region">,
  update: MatchAnalyticsSeedScanUpdate
) {
  if (!db) return

  await db
    .prepare(
      `
      INSERT INTO summoner_match_scan_state (
        puuid,
        region,
        last_scanned_at,
        next_scan_after,
        last_status,
        last_error,
        scan_count,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, 1, ?)
      ON CONFLICT(puuid) DO UPDATE SET
        region = excluded.region,
        last_scanned_at = excluded.last_scanned_at,
        next_scan_after = excluded.next_scan_after,
        last_status = excluded.last_status,
        last_error = excluded.last_error,
        scan_count = summoner_match_scan_state.scan_count + 1,
        updated_at = excluded.updated_at
    `
    )
    .bind(
      seed.puuid,
      seed.region,
      update.now,
      update.now + update.cooldownMs,
      update.status,
      update.error ?? null,
      update.now
    )
    .run()
}

export async function gatherNaMatchAnalytics(
  options: MatchAnalyticsGatherOptions
): Promise<MatchAnalyticsGatherResult> {
  const summonerDb = options.summonerDb
  const analyticsDb = options.analyticsDb
  const now = options.now ?? Date.now()
  const region = options.region ?? MATCH_ANALYTICS_GATHER_REGION
  const queueIds = options.queueIds ?? MATCH_ANALYTICS_GATHER_QUEUES
  const matchCount = options.matchCount ?? MATCH_ANALYTICS_GATHER_MATCH_COUNT
  const deps = { ...defaultDeps, ...options.deps }
  const result: MatchAnalyticsGatherResult = {
    failedSeeds: 0,
    fetchedMatches: 0,
    persistedMatches: 0,
    scannedSeeds: 0,
    skippedMatches: 0,
    status: "empty",
    totalMatchIds: 0
  }

  if (!summonerDb || !analyticsDb) {
    result.status = "missing_binding"
    return result
  }

  const seeds = await listDueMatchAnalyticsSeeds(summonerDb, {
    limit: options.seedLimit,
    now,
    region
  })

  if (!seeds.length) {
    result.status = "no_seeds"
    return result
  }

  for (const seed of seeds) {
    result.scannedSeeds += 1

    try {
      const idsByQueue = await Promise.all(
        queueIds.map(queue =>
          deps.idsByPuuid({
            count: matchCount,
            puuid: seed.puuid,
            queue,
            region: seed.region,
            start: 0
          })
        )
      )
      const matchIds = uniqueStrings(idsByQueue.flat())
      result.totalMatchIds += matchIds.length

      const unprocessedMatchIds = await filterUnprocessedMatchIds(
        analyticsDb,
        matchIds
      )
      result.skippedMatches += matchIds.length - unprocessedMatchIds.length

      if (!unprocessedMatchIds.length) {
        await markMatchAnalyticsSeedScanned(summonerDb, seed, {
          cooldownMs: MATCH_ANALYTICS_GATHER_EMPTY_COOLDOWN,
          now,
          status: "empty"
        })
        continue
      }

      const clientMatches: MatchData[] = []
      const projections: MatchAnalyticsProjection[] = []

      for (const matchId of unprocessedMatchIds) {
        const rawMatch = await deps.matchById(matchId, seed.region)
        if (!rawMatch) continue

        const clientMatch = deps.transformMatchData(rawMatch)
        clientMatches.push(clientMatch)
        projections.push(deps.toProjection(rawMatch, clientMatch))
      }

      result.fetchedMatches += clientMatches.length

      if (projections.length) {
        const persisted = await deps.persistAnalytics(analyticsDb, projections)
        result.persistedMatches += persisted.persistedMatches
        await deps.upsertParticipants(summonerDb, clientMatches)
      }

      await markMatchAnalyticsSeedScanned(summonerDb, seed, {
        cooldownMs:
          projections.length > 0
            ? MATCH_ANALYTICS_GATHER_SUCCESS_COOLDOWN
            : MATCH_ANALYTICS_GATHER_EMPTY_COOLDOWN,
        now,
        status: projections.length > 0 ? "success" : "empty"
      })
    } catch (err) {
      result.failedSeeds += 1
      console.warn("Failed NA match analytics gather seed", seed.puuid, err)
      await markMatchAnalyticsSeedScanned(summonerDb, seed, {
        cooldownMs: MATCH_ANALYTICS_GATHER_ERROR_COOLDOWN,
        error: errorMessage(err).slice(0, 500),
        now,
        status: "error"
      })
    }
  }

  if (result.fetchedMatches > 0 || result.persistedMatches > 0) {
    result.status = "success"
  } else if (result.failedSeeds === result.scannedSeeds) {
    result.status = "error"
  } else {
    result.status = "empty"
  }

  return result
}
