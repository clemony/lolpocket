import type { MatchData } from "../../../../shared/types"
import type { H3Event } from "h3"
import type {
  D1DatabaseLike,
  D1PreparedStatementLike
} from "../../d1/summoner-cache"
import process from "node:process"
import { normalizeRiotRole } from "./mvpScoring"

const MAX_D1_BOUND_PARAMETERS = 100

export const MATCH_ANALYTICS_D1_BINDING = "MATCH_ANALYTICS_DB"
const MATCH_ANALYTICS_REMOTE_DEV_FLAG = "MATCH_ANALYTICS_D1_REMOTE_DEV"

interface D1BatchDatabaseLike extends D1DatabaseLike {
  batch?: (statements: D1PreparedStatementLike[]) => Promise<unknown[]>
}

interface PlatformProxyLike {
  env: Record<string, unknown>
  dispose: () => Promise<void>
}

export interface MatchAnalyticsLedgerRow {
  gameDurationSec: number
  gameEndAt: number
  mapId: number
  matchId: string
  patchKey: string
  queueId: number
  regionId: string
}

export interface MatchAnalyticsChampionDimension {
  championId: number
  mapId: number
  patchKey: string
  queueId: number
  regionId: string
  role: string
}

export interface MatchAnalyticsOutcomeTally {
  games: number
  losses: number
  remakes: number
  wins: number
}

export interface MatchAnalyticsChampionTally
  extends MatchAnalyticsChampionDimension,
    MatchAnalyticsOutcomeTally {
  assists: number
  deaths: number
  gameDurationSec: number
  goldEarned: number
  kda: number
  kills: number
  totalCs: number
  totalDamage: number
  totalDamageTaken: number
  visionScore: number
}

export interface MatchAnalyticsChampionAllyTally
  extends MatchAnalyticsChampionDimension,
    MatchAnalyticsOutcomeTally {
  allyChampionId: number
}

export interface MatchAnalyticsChampionEnemyTally
  extends MatchAnalyticsChampionDimension,
    MatchAnalyticsOutcomeTally {
  enemyChampionId: number
}

export interface MatchAnalyticsChampionItemTally
  extends MatchAnalyticsChampionDimension,
    MatchAnalyticsOutcomeTally {
  itemId: number
}

export interface MatchAnalyticsTallyProjection {
  allies: MatchAnalyticsChampionAllyTally[]
  champions: MatchAnalyticsChampionTally[]
  enemies: MatchAnalyticsChampionEnemyTally[]
  items: MatchAnalyticsChampionItemTally[]
  match: MatchAnalyticsLedgerRow
}

export interface MatchAnalyticsPersistResult {
  claimedMatches: number
  persistedMatches: number
  statements: number
}

interface UpsertConfig<TRow> {
  columns: string[]
  conflictColumns: string[]
  table: string
  updateColumns: string[]
  values: (row: TRow) => unknown[]
}

export function getMatchAnalyticsDb(event: H3Event): D1BatchDatabaseLike | null {
  const runtimeEnv = (event as any).req?.runtime?.cloudflare?.env
  const contextEnv = (event as any).context?.cloudflare?.env
  const env = runtimeEnv ?? contextEnv

  return (env?.[MATCH_ANALYTICS_D1_BINDING] ?? null) as D1BatchDatabaseLike | null
}

let devPlatformProxyPromise: Promise<PlatformProxyLike | null> | null = null
let warnedMissingDevD1Config = false
let warnedDevD1ProxyFailure = false

export async function getMatchAnalyticsDbForEvent(event: H3Event) {
  return getMatchAnalyticsDb(event) ?? (await getRemoteDevMatchAnalyticsDb())
}

async function getRemoteDevMatchAnalyticsDb(): Promise<D1BatchDatabaseLike | null> {
  if (
    process.env.NODE_ENV !== "development" ||
    process.env[MATCH_ANALYTICS_REMOTE_DEV_FLAG] !== "1"
  ) {
    return null
  }

  const proxy = await getDevPlatformProxy()
  return (proxy?.env?.[MATCH_ANALYTICS_D1_BINDING] ??
    null) as D1BatchDatabaseLike | null
}

async function getDevPlatformProxy(): Promise<PlatformProxyLike | null> {
  if (!devPlatformProxyPromise) {
    devPlatformProxyPromise = createDevPlatformProxy()
  }

  return await devPlatformProxyPromise
}

async function createDevPlatformProxy(): Promise<PlatformProxyLike | null> {
  const databaseId = process.env.MATCH_ANALYTICS_D1_DATABASE_ID?.trim()
  const databaseName =
    process.env.MATCH_ANALYTICS_D1_DATABASE_NAME?.trim() ||
    "lolpocket-match-analytics"
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID?.trim()

  if (!databaseId) {
    if (!warnedMissingDevD1Config) {
      warnedMissingDevD1Config = true
      console.warn(
        "MATCH_ANALYTICS_D1_REMOTE_DEV=1 is set, but MATCH_ANALYTICS_D1_DATABASE_ID is missing; match analytics D1 writes are disabled in dev."
      )
    }
    return null
  }

  try {
    const wranglerModule = "wrangler"
    const [
      { mkdtemp, writeFile },
      { tmpdir },
      { join },
      { getPlatformProxy },
    ] = await Promise.all([
      import("node:fs/promises"),
      import("node:os"),
      import("node:path"),
      import(/* @vite-ignore */ wranglerModule),
    ])

    const configDir = await mkdtemp(join(tmpdir(), "lolpocket-wrangler-"))
    const configPath = join(configDir, "wrangler.jsonc")
    const previewDatabaseId =
      process.env.MATCH_ANALYTICS_D1_PREVIEW_DATABASE_ID?.trim()
    const databaseConfig = {
      binding: MATCH_ANALYTICS_D1_BINDING,
      database_name: databaseName,
      database_id: databaseId,
      ...(previewDatabaseId
        ? { preview_database_id: previewDatabaseId }
        : {}),
      remote: true,
    }

    await writeFile(
      configPath,
      JSON.stringify(
        {
          name: "lolpocket-dev",
          ...(accountId ? { account_id: accountId } : {}),
          compatibility_date: new Date().toISOString().slice(0, 10),
          d1_databases: [databaseConfig],
        },
        null,
        2
      )
    )

    const proxy = (await getPlatformProxy({
      configPath,
      remoteBindings: true,
    })) as PlatformProxyLike

    process.once("exit", () => {
      void proxy.dispose()
    })

    return proxy
  } catch (err) {
    if (!warnedDevD1ProxyFailure) {
      warnedDevD1ProxyFailure = true
      console.warn(
        "Failed to initialize remote D1 dev binding; match analytics persistence is disabled in dev.",
        err
      )
    }
    return null
  }
}

function finiteNumber(value: unknown) {
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
}

function patchKeyFromMatch(match: MatchData) {
  return String(match.gamePatch)
}

function normalizeAnalyticsRole(participant: any) {
  const role = normalizeRiotRole(participant).toLowerCase()
  return role === "utility" ? "support" : role
}

function isRemake(raw: any) {
  return finiteNumber(raw?.info?.gameDuration) < 300
}

function outcomeForParticipant(participant: any, remake: boolean) {
  const won = Boolean(participant?.win)

  return {
    games: 1,
    losses: remake || won ? 0 : 1,
    remakes: remake ? 1 : 0,
    wins: !remake && won ? 1 : 0
  }
}

function championDimension(
  match: MatchAnalyticsLedgerRow,
  participant: any
): MatchAnalyticsChampionDimension {
  return {
    championId: finiteNumber(participant?.championId),
    mapId: match.mapId,
    patchKey: match.patchKey,
    queueId: match.queueId,
    regionId: match.regionId,
    role: normalizeAnalyticsRole(participant)
  }
}

function totalCs(participant: any) {
  return (
    finiteNumber(participant?.totalMinionsKilled) +
    finiteNumber(participant?.totalAllyJungleMinionsKilled) +
    finiteNumber(participant?.totalEnemyJungleMinionsKilled)
  )
}

function kda(participant: any) {
  return (
    finiteNumber(participant?.challenges?.kda) ||
    (finiteNumber(participant?.kills) + finiteNumber(participant?.assists)) /
      Math.max(finiteNumber(participant?.deaths), 1)
  )
}

function finalItemIds(participant: any) {
  const itemIds = [
    participant?.item0,
    participant?.item1,
    participant?.item2,
    participant?.item3,
    participant?.item4,
    participant?.item5,
    participant?.roleBoundItem
  ]
    .map(finiteNumber)
    .filter(itemId => itemId > 0)

  return [...new Set(itemIds)]
}

function keyFor(row: object, keys: string[]) {
  const record = row as Record<string, unknown>
  return keys.map(key => String(record[key])).join("|")
}

function sumOutcome<T extends MatchAnalyticsOutcomeTally>(
  target: T,
  source: T
) {
  target.games += source.games
  target.wins += source.wins
  target.losses += source.losses
  target.remakes += source.remakes
}

function pushFolded<T extends object>(
  rows: T[],
  keys: string[],
  merge: (target: T, source: T) => void
) {
  const map = new Map<string, T>()

  for (const row of rows) {
    const key = keyFor(row, keys)
    const existing = map.get(key)

    if (existing) {
      merge(existing, row)
    } else {
      map.set(key, { ...row })
    }
  }

  return [...map.values()]
}

function chunkRows<TRow>(
  rows: TRow[],
  boundColumns: number,
  maxBoundParameters = MAX_D1_BOUND_PARAMETERS
) {
  const rowCount = Math.max(1, Math.floor(maxBoundParameters / boundColumns))
  const chunks: TRow[][] = []

  for (let index = 0; index < rows.length; index += rowCount) {
    chunks.push(rows.slice(index, index + rowCount))
  }

  return chunks
}

function runChangeCount(result: unknown) {
  const meta = (result as any)?.meta
  const value =
    meta?.changes ??
    meta?.rows_written ??
    meta?.rowsWritten ??
    meta?.changed_db

  if (typeof value === "number") return value
  if (typeof value === "boolean") return value ? 1 : 0
  return 1
}

async function runStatements(
  db: D1BatchDatabaseLike,
  statements: D1PreparedStatementLike[]
) {
  if (!statements.length) return []
  if (db.batch) return await db.batch(statements)

  const results: unknown[] = []
  for (const statement of statements) {
    results.push(await statement.run())
  }

  return results
}

function createUpsertStatements<TRow>(
  db: D1BatchDatabaseLike,
  rows: TRow[],
  config: UpsertConfig<TRow>
) {
  const statements: D1PreparedStatementLike[] = []
  const chunks = chunkRows(rows, config.columns.length)
  const placeholders = `(${config.columns.map(() => "?").join(", ")})`
  const updates = config.updateColumns
    .map(column => `${column} = ${config.table}.${column} + excluded.${column}`)
    .join(", ")
  const conflict = config.conflictColumns.join(", ")

  for (const chunk of chunks) {
    const sql = `
      INSERT INTO ${config.table} (${config.columns.join(", ")})
      VALUES ${chunk.map(() => placeholders).join(", ")}
      ON CONFLICT(${conflict}) DO UPDATE SET
        ${updates}
    `
    const values = chunk.flatMap(row => config.values(row))
    statements.push(db.prepare(sql).bind(...values))
  }

  return statements
}

function createClaimStatements(
  db: D1BatchDatabaseLike,
  projections: MatchAnalyticsTallyProjection[],
  claimedAt: number
) {
  const sql = `
    INSERT INTO riot_ingested_matches (
      match_id,
      region_id,
      queue_id,
      map_id,
      patch_key,
      game_end_at,
      game_duration_sec,
      status,
      claimed_at,
      ingested_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?, NULL)
    ON CONFLICT(match_id) DO UPDATE SET
      region_id = excluded.region_id,
      queue_id = excluded.queue_id,
      map_id = excluded.map_id,
      patch_key = excluded.patch_key,
      game_end_at = excluded.game_end_at,
      game_duration_sec = excluded.game_duration_sec,
      status = 'pending',
      claimed_at = excluded.claimed_at,
      ingested_at = NULL
    WHERE riot_ingested_matches.status != 'done'
  `

  return projections.map(projection =>
    db
      .prepare(sql)
      .bind(
        projection.match.matchId,
        projection.match.regionId,
        projection.match.queueId,
        projection.match.mapId,
        projection.match.patchKey,
        projection.match.gameEndAt,
        projection.match.gameDurationSec,
        claimedAt
      )
  )
}

function createMarkDoneStatements(
  db: D1BatchDatabaseLike,
  matches: MatchAnalyticsLedgerRow[],
  ingestedAt: number
) {
  return chunkRows(matches, 2, MAX_D1_BOUND_PARAMETERS - 1).map(chunk => {
    const placeholders = chunk.map(() => "?").join(", ")
    const sql = `
      UPDATE riot_ingested_matches
      SET status = 'done', ingested_at = ?
      WHERE match_id IN (${placeholders})
    `
    return db.prepare(sql).bind(ingestedAt, ...chunk.map(match => match.matchId))
  })
}

function foldedTallies(projections: MatchAnalyticsTallyProjection[]) {
  const champions = pushFolded(
    projections.flatMap(projection => projection.champions),
    ["regionId", "queueId", "mapId", "patchKey", "role", "championId"],
    (target, source) => {
      sumOutcome(target, source)
      target.kills += source.kills
      target.deaths += source.deaths
      target.assists += source.assists
      target.kda += source.kda
      target.goldEarned += source.goldEarned
      target.totalCs += source.totalCs
      target.totalDamage += source.totalDamage
      target.totalDamageTaken += source.totalDamageTaken
      target.visionScore += source.visionScore
      target.gameDurationSec += source.gameDurationSec
    }
  )
  const allies = pushFolded(
    projections.flatMap(projection => projection.allies),
    [
      "regionId",
      "queueId",
      "mapId",
      "patchKey",
      "role",
      "championId",
      "allyChampionId"
    ],
    sumOutcome
  )
  const enemies = pushFolded(
    projections.flatMap(projection => projection.enemies),
    [
      "regionId",
      "queueId",
      "mapId",
      "patchKey",
      "role",
      "championId",
      "enemyChampionId"
    ],
    sumOutcome
  )
  const items = pushFolded(
    projections.flatMap(projection => projection.items),
    [
      "regionId",
      "queueId",
      "mapId",
      "patchKey",
      "role",
      "championId",
      "itemId"
    ],
    sumOutcome
  )

  return { allies, champions, enemies, items }
}

function createChampionStatements(
  db: D1BatchDatabaseLike,
  rows: MatchAnalyticsChampionTally[]
) {
  return createUpsertStatements(db, rows, {
    columns: [
      "region_id",
      "queue_id",
      "map_id",
      "patch_key",
      "role",
      "champion_id",
      "games",
      "wins",
      "losses",
      "remakes",
      "kills",
      "deaths",
      "assists",
      "kda",
      "gold_earned",
      "total_cs",
      "total_damage",
      "total_damage_taken",
      "vision_score",
      "game_duration_sec"
    ],
    conflictColumns: [
      "region_id",
      "queue_id",
      "map_id",
      "patch_key",
      "role",
      "champion_id"
    ],
    table: "riot_champion_tallies",
    updateColumns: [
      "games",
      "wins",
      "losses",
      "remakes",
      "kills",
      "deaths",
      "assists",
      "kda",
      "gold_earned",
      "total_cs",
      "total_damage",
      "total_damage_taken",
      "vision_score",
      "game_duration_sec"
    ],
    values: row => [
      row.regionId,
      row.queueId,
      row.mapId,
      row.patchKey,
      row.role,
      row.championId,
      row.games,
      row.wins,
      row.losses,
      row.remakes,
      row.kills,
      row.deaths,
      row.assists,
      row.kda,
      row.goldEarned,
      row.totalCs,
      row.totalDamage,
      row.totalDamageTaken,
      row.visionScore,
      row.gameDurationSec
    ]
  })
}

function createAllyStatements(
  db: D1BatchDatabaseLike,
  rows: MatchAnalyticsChampionAllyTally[]
) {
  return createUpsertStatements(db, rows, {
    columns: [
      "region_id",
      "queue_id",
      "map_id",
      "patch_key",
      "role",
      "champion_id",
      "ally_champion_id",
      "games",
      "wins",
      "losses",
      "remakes"
    ],
    conflictColumns: [
      "region_id",
      "queue_id",
      "map_id",
      "patch_key",
      "role",
      "champion_id",
      "ally_champion_id"
    ],
    table: "riot_champion_ally_tallies",
    updateColumns: ["games", "wins", "losses", "remakes"],
    values: row => [
      row.regionId,
      row.queueId,
      row.mapId,
      row.patchKey,
      row.role,
      row.championId,
      row.allyChampionId,
      row.games,
      row.wins,
      row.losses,
      row.remakes
    ]
  })
}

function createEnemyStatements(
  db: D1BatchDatabaseLike,
  rows: MatchAnalyticsChampionEnemyTally[]
) {
  return createUpsertStatements(db, rows, {
    columns: [
      "region_id",
      "queue_id",
      "map_id",
      "patch_key",
      "role",
      "champion_id",
      "enemy_champion_id",
      "games",
      "wins",
      "losses",
      "remakes"
    ],
    conflictColumns: [
      "region_id",
      "queue_id",
      "map_id",
      "patch_key",
      "role",
      "champion_id",
      "enemy_champion_id"
    ],
    table: "riot_champion_enemy_tallies",
    updateColumns: ["games", "wins", "losses", "remakes"],
    values: row => [
      row.regionId,
      row.queueId,
      row.mapId,
      row.patchKey,
      row.role,
      row.championId,
      row.enemyChampionId,
      row.games,
      row.wins,
      row.losses,
      row.remakes
    ]
  })
}

function createItemStatements(
  db: D1BatchDatabaseLike,
  rows: MatchAnalyticsChampionItemTally[]
) {
  return createUpsertStatements(db, rows, {
    columns: [
      "region_id",
      "queue_id",
      "map_id",
      "patch_key",
      "role",
      "champion_id",
      "item_id",
      "games",
      "wins",
      "losses",
      "remakes"
    ],
    conflictColumns: [
      "region_id",
      "queue_id",
      "map_id",
      "patch_key",
      "role",
      "champion_id",
      "item_id"
    ],
    table: "riot_champion_item_tallies",
    updateColumns: ["games", "wins", "losses", "remakes"],
    values: row => [
      row.regionId,
      row.queueId,
      row.mapId,
      row.patchKey,
      row.role,
      row.championId,
      row.itemId,
      row.games,
      row.wins,
      row.losses,
      row.remakes
    ]
  })
}

function createAggregateStatements(
  db: D1BatchDatabaseLike,
  projections: MatchAnalyticsTallyProjection[],
  ingestedAt: number
) {
  const tallies = foldedTallies(projections)

  return [
    ...createChampionStatements(db, tallies.champions),
    ...createAllyStatements(db, tallies.allies),
    ...createEnemyStatements(db, tallies.enemies),
    ...createItemStatements(db, tallies.items),
    ...createMarkDoneStatements(
      db,
      projections.map(projection => projection.match),
      ingestedAt
    )
  ]
}

export function toMatchAnalyticsTallyProjection(
  raw: any,
  clientMatch: MatchData
): MatchAnalyticsTallyProjection {
  const gameDurationSec =
    finiteNumber(raw?.info?.gameDuration) ||
    Math.round(finiteNumber(clientMatch.gameDuration) * 60)
  const match: MatchAnalyticsLedgerRow = {
    gameDurationSec,
    gameEndAt: clientMatch.gameEndTimestamp,
    mapId: clientMatch.mapId,
    matchId: clientMatch.matchId,
    patchKey: patchKeyFromMatch(clientMatch),
    queueId: clientMatch.queueId,
    regionId: clientMatch.regionId
  }
  const participants = raw?.info?.participants ?? []
  const remake = isRemake(raw)
  const champions: MatchAnalyticsChampionTally[] = []
  const allies: MatchAnalyticsChampionAllyTally[] = []
  const enemies: MatchAnalyticsChampionEnemyTally[] = []
  const items: MatchAnalyticsChampionItemTally[] = []

  for (const participant of participants) {
    const dimension = championDimension(match, participant)
    const outcome = outcomeForParticipant(participant, remake)

    champions.push({
      ...dimension,
      ...outcome,
      assists: finiteNumber(participant?.assists),
      deaths: finiteNumber(participant?.deaths),
      gameDurationSec,
      goldEarned: finiteNumber(participant?.goldEarned),
      kda: kda(participant),
      kills: finiteNumber(participant?.kills),
      totalCs: totalCs(participant),
      totalDamage: finiteNumber(participant?.totalDamageDealtToChampions),
      totalDamageTaken: finiteNumber(participant?.totalDamageTaken),
      visionScore: finiteNumber(participant?.visionScore)
    })

    for (const ally of participants) {
      if (ally === participant || ally?.teamId !== participant?.teamId) continue
      allies.push({
        ...dimension,
        ...outcome,
        allyChampionId: finiteNumber(ally?.championId)
      })
    }

    for (const enemy of participants) {
      if (enemy?.teamId === participant?.teamId) continue
      enemies.push({
        ...dimension,
        ...outcome,
        enemyChampionId: finiteNumber(enemy?.championId)
      })
    }

    for (const itemId of finalItemIds(participant)) {
      items.push({
        ...dimension,
        ...outcome,
        itemId
      })
    }
  }

  return {
    allies,
    champions,
    enemies,
    items,
    match
  }
}

export async function persistMatchAnalytics(
  db: D1BatchDatabaseLike | null,
  projections: MatchAnalyticsTallyProjection[]
): Promise<MatchAnalyticsPersistResult> {
  if (!db || !projections.length) {
    return {
      claimedMatches: 0,
      persistedMatches: 0,
      statements: 0
    }
  }

  const now = Date.now()
  const claimStatements = createClaimStatements(db, projections, now)
  const claimResults = await runStatements(db, claimStatements)
  const claimedProjections = projections.filter((_, index) => {
    const result = claimResults[index]
    return runChangeCount(result) > 0
  })

  if (!claimedProjections.length) {
    return {
      claimedMatches: 0,
      persistedMatches: 0,
      statements: claimStatements.length
    }
  }

  const aggregateStatements = createAggregateStatements(
    db,
    claimedProjections,
    now
  )

  await runStatements(db, aggregateStatements)

  return {
    claimedMatches: claimedProjections.length,
    persistedMatches: claimedProjections.length,
    statements: claimStatements.length + aggregateStatements.length
  }
}
