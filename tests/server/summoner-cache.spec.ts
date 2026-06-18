import type { MatchData } from "../../shared/types"
import { describe, expect, it, vi } from "vitest"
import {
  findCachedSummoner,
  getSummonerCacheDbForEvent,
  isSummonerCacheFresh,
  normalizeSummonerCachePart,
  toCachedSummoner,
  upsertCachedMatchParticipants,
  upsertCachedSummoner
} from "../../server/domain/d1/summoner-cache"

class MockD1 {
  rows = new Map<string, any>()

  prepare(sql: string) {
    return new MockStatement(this, sql)
  }
}

class MockStatement {
  private values: unknown[] = []

  constructor(
    private readonly db: MockD1,
    private readonly sql: string
  ) {}

  bind(...values: unknown[]) {
    this.values = values
    return this
  }

  async first<T>() {
    if (this.sql.includes("WHERE puuid = ?")) {
      return (this.db.rows.get(String(this.values[0])) ?? null) as T | null
    }

    if (this.sql.includes("WHERE search_name = ? AND search_tag = ?")) {
      const [searchName, searchTag, region] = this.values.map(String)
      return (
        [...this.db.rows.values()].find(
          row =>
            row.search_name === searchName &&
            row.search_tag === searchTag &&
            (!this.sql.includes("region = ?") || row.region === region)
        ) ?? null
      ) as T | null
    }

    return null
  }

  async run() {
    const [
      puuid,
      gameName,
      tagLine,
      region,
      profileIconId,
      summonerLevel,
      searchName,
      searchTag,
      lastRiotSyncAt,
      lastSeenAt,
      updatedAt
    ] = this.values

    const existing = this.db.rows.get(String(puuid))
    this.db.rows.set(String(puuid), {
      game_name: gameName,
      last_riot_sync_at: lastRiotSyncAt ?? existing?.last_riot_sync_at ?? null,
      last_seen_at: lastSeenAt,
      profile_icon_id: profileIconId ?? existing?.profile_icon_id ?? null,
      puuid,
      region: region ?? existing?.region ?? null,
      search_name: searchName,
      search_tag: searchTag,
      summoner_level: summonerLevel ?? existing?.summoner_level ?? null,
      tag_line: tagLine,
      updated_at: updatedAt
    })
  }
}

describe("summoner cache", () => {
  it("resolves the Cloudflare runtime D1 binding from an event", async () => {
    const db = new MockD1()

    await expect(
      getSummonerCacheDbForEvent({
        context: {
          cloudflare: {
            env: {
              SUMMONER_CACHE_DB: db
            }
          }
        }
      } as never)
    ).resolves.toBe(db)
  })

  it("does not initialize a remote dev D1 binding without explicit opt-in", async () => {
    vi.stubEnv("NODE_ENV", "development")
    vi.stubEnv("SUMMONER_CACHE_D1_REMOTE_DEV", "")

    await expect(getSummonerCacheDbForEvent({} as never)).resolves.toBeNull()

    vi.unstubAllEnvs()
  })

  it("normalizes search keys consistently", () => {
    expect(normalizeSummonerCachePart("  Cait ADC  ")).toBe("cait adc")
    expect(normalizeSummonerCachePart(" NA1 ")).toBe("na1")
  })

  it("upserts by puuid without duplicating renamed summoners", async () => {
    vi.setSystemTime(1_000)
    const db = new MockD1()

    await upsertCachedSummoner(db, {
      gameName: "Old Name",
      puuid: "puuid-1",
      region: "na1",
      tagLine: "NA1"
    })
    await upsertCachedSummoner(db, {
      gameName: "New Name",
      puuid: "puuid-1",
      region: "na1",
      tagLine: "NA1"
    })

    expect(db.rows.size).toBe(1)
    expect(db.rows.get("puuid-1")).toMatchObject({
      game_name: "New Name",
      search_name: "new name",
      search_tag: "na1"
    })
    vi.useRealTimers()
  })

  it("finds cached summoners by puuid, riot id, and regional riot id", async () => {
    const db = new MockD1()
    await upsertCachedSummoner(db, {
      gameName: "Pocket Cait",
      profileIconId: 51,
      puuid: "puuid-2",
      region: "na1",
      summonerLevel: 444,
      tagLine: "LP"
    })

    await expect(findCachedSummoner(db, { puuid: "puuid-2" })).resolves.toMatchObject({
      game_name: "Pocket Cait"
    })
    await expect(
      findCachedSummoner(db, { name: "pocket cait", tag: "lp" })
    ).resolves.toMatchObject({ puuid: "puuid-2" })
    await expect(
      findCachedSummoner(db, { name: "pocket cait", region: "na1", tag: "lp" })
    ).resolves.toMatchObject({ puuid: "puuid-2" })
  })

  it("maps fresh rows to basic summoner previews", () => {
    vi.setSystemTime(10_000)
    const row = {
      game_name: "Preview",
      last_riot_sync_at: 9_000,
      last_seen_at: 9_500,
      profile_icon_id: 22,
      puuid: "puuid-3",
      region: "euw1",
      search_name: "preview",
      search_tag: "tag",
      summoner_level: 123,
      tag_line: "TAG",
      updated_at: 9_500
    }

    expect(isSummonerCacheFresh(row, 2_000)).toBe(true)
    expect(toCachedSummoner(row)).toMatchObject({
      icon: 22,
      lastUpdate: 9_000,
      level: 123,
      name: "Preview",
      puuid: "puuid-3",
      region: "euw1",
      tag: "TAG"
    })
    vi.useRealTimers()
  })

  it("upserts the newest match participant identity without clearing full lookup data", async () => {
    const db = new MockD1()
    await upsertCachedSummoner(db, {
      gameName: "Known Name",
      lastRiotSyncAt: 1_000,
      profileIconId: 1,
      puuid: "puuid-4",
      region: "na1",
      summonerLevel: 321,
      tagLine: "NA1"
    })

    await upsertCachedMatchParticipants(db, [
      {
        gameEndTimestamp: 2_000,
        participants: [
          {
            icon: 99,
            name: "Match Name",
            puuid: "puuid-4",
            tag: "NA1"
          }
        ],
        regionId: "na1"
      } as MatchData
    ])

    expect(db.rows.get("puuid-4")).toMatchObject({
      game_name: "Match Name",
      last_riot_sync_at: 1_000,
      last_seen_at: 2_000,
      profile_icon_id: 99,
      summoner_level: 321
    })
  })
})
