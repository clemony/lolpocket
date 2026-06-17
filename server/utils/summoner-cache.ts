import type { H3Event } from "h3"

export const SUMMONER_CACHE_D1_BINDING = "SUMMONER_CACHE_DB"
export const SUMMONER_CACHE_TTL = 1000 * 60 * 60 * 24

export interface D1DatabaseLike {
  prepare: (query: string) => D1PreparedStatementLike
}

export interface D1PreparedStatementLike {
  bind: (...values: unknown[]) => D1PreparedStatementLike
  first: <T = unknown>() => Promise<T | null>
  run: () => Promise<unknown>
}

export interface SummonerCacheRow {
  game_name: string
  last_riot_sync_at: number | null
  last_seen_at: number | null
  profile_icon_id: number | null
  puuid: string
  region: string | null
  search_name: string
  search_tag: string
  summoner_level: number | null
  tag_line: string
  updated_at: number
}

export interface SummonerCacheLookup {
  name?: string
  puuid?: string
  region?: string
  tag?: string
}

export interface SummonerCacheInput {
  gameName: string
  lastRiotSyncAt?: number | null
  lastSeenAt?: number | null
  profileIconId?: number | null
  puuid: string
  region?: string | null
  summonerLevel?: number | null
  tagLine: string
  updatedAt?: number
}

const summonerCacheSelect = `
  SELECT
    puuid,
    game_name,
    tag_line,
    region,
    profile_icon_id,
    summoner_level,
    search_name,
    search_tag,
    last_riot_sync_at,
    last_seen_at,
    updated_at
  FROM summoner_cache
`

export function normalizeSummonerCachePart(value: string) {
  return value.trim().toLocaleLowerCase()
}

export function getSummonerCacheDb(event: H3Event): D1DatabaseLike | null {
  const runtimeEnv = (event as any).req?.runtime?.cloudflare?.env
  const contextEnv = (event as any).context?.cloudflare?.env
  const env = runtimeEnv ?? contextEnv

  return (env?.[SUMMONER_CACHE_D1_BINDING] ?? null) as D1DatabaseLike | null
}

export function isSummonerCacheFresh(
  row: Pick<SummonerCacheRow, "last_riot_sync_at">,
  ttl = SUMMONER_CACHE_TTL
) {
  return Boolean(
    row.last_riot_sync_at && Date.now() - row.last_riot_sync_at <= ttl
  )
}

export function toCachedSummoner(row: SummonerCacheRow) {
  return {
    icon: row.profile_icon_id ?? 0,
    lastUpdate: row.last_riot_sync_at ?? row.updated_at,
    level: row.summoner_level ?? 0,
    name: row.game_name,
    puuid: row.puuid,
    region: row.region ?? "unknown",
    tag: row.tag_line
  }
}

export async function findCachedSummoner(
  db: D1DatabaseLike,
  lookup: SummonerCacheLookup
) {
  if (lookup.puuid) {
    return await db
      .prepare(`${summonerCacheSelect} WHERE puuid = ? LIMIT 1`)
      .bind(lookup.puuid)
      .first<SummonerCacheRow>()
  }

  if (!lookup.name || !lookup.tag) return null

  const searchName = normalizeSummonerCachePart(lookup.name)
  const searchTag = normalizeSummonerCachePart(lookup.tag)

  if (lookup.region) {
    return await db
      .prepare(
        `${summonerCacheSelect}
        WHERE search_name = ? AND search_tag = ? AND region = ?
        LIMIT 1`
      )
      .bind(searchName, searchTag, normalizeSummonerCachePart(lookup.region))
      .first<SummonerCacheRow>()
  }

  return await db
    .prepare(
      `${summonerCacheSelect}
      WHERE search_name = ? AND search_tag = ?
      LIMIT 1`
    )
    .bind(searchName, searchTag)
    .first<SummonerCacheRow>()
}

export async function upsertCachedSummoner(
  db: D1DatabaseLike,
  input: SummonerCacheInput
) {
  const puuid = input.puuid.trim()
  const gameName = input.gameName.trim()
  const tagLine = input.tagLine.trim()

  if (!puuid || !gameName || !tagLine) return false

  const now = input.updatedAt ?? Date.now()
  const region = input.region ? normalizeSummonerCachePart(input.region) : null
  const searchName = normalizeSummonerCachePart(gameName)
  const searchTag = normalizeSummonerCachePart(tagLine)

  await db
    .prepare(
      `
      INSERT INTO summoner_cache (
        puuid,
        game_name,
        tag_line,
        region,
        profile_icon_id,
        summoner_level,
        search_name,
        search_tag,
        last_riot_sync_at,
        last_seen_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(puuid) DO UPDATE SET
        game_name = excluded.game_name,
        tag_line = excluded.tag_line,
        region = COALESCE(excluded.region, summoner_cache.region),
        profile_icon_id = COALESCE(
          excluded.profile_icon_id,
          summoner_cache.profile_icon_id
        ),
        summoner_level = COALESCE(
          excluded.summoner_level,
          summoner_cache.summoner_level
        ),
        search_name = excluded.search_name,
        search_tag = excluded.search_tag,
        last_riot_sync_at = COALESCE(
          excluded.last_riot_sync_at,
          summoner_cache.last_riot_sync_at
        ),
        last_seen_at = COALESCE(
          excluded.last_seen_at,
          summoner_cache.last_seen_at
        ),
        updated_at = excluded.updated_at
    `
    )
    .bind(
      puuid,
      gameName,
      tagLine,
      region,
      input.profileIconId ?? null,
      input.summonerLevel ?? null,
      searchName,
      searchTag,
      input.lastRiotSyncAt ?? null,
      input.lastSeenAt ?? now,
      now
    )
    .run()

  return true
}

export async function upsertCachedMatchParticipants(
  db: D1DatabaseLike | null,
  matches: MatchData[]
) {
  if (!db || !matches.length) return

  const latestByPuuid = new Map<string, SummonerCacheInput>()

  for (const match of matches) {
    for (const participant of match.participants) {
      if (!participant.puuid || !participant.name || !participant.tag) continue

      const current = latestByPuuid.get(participant.puuid)
      const lastSeenAt = match.gameEndTimestamp
      if (current?.lastSeenAt && current.lastSeenAt >= lastSeenAt) continue

      latestByPuuid.set(participant.puuid, {
        gameName: participant.name,
        lastSeenAt,
        profileIconId: participant.icon,
        puuid: participant.puuid,
        region: match.regionId,
        tagLine: participant.tag
      })
    }
  }

  await Promise.all(
    [...latestByPuuid.values()].map(input => upsertCachedSummoner(db, input))
  )
}
