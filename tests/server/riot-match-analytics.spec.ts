import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { normalizeRiotRole } from "../../server/domain/riot/match/mvpScoring"
import {
  persistMatchAnalytics,
  toMatchAnalyticsTallyProjection
} from "../../server/domain/riot/match/analytics"
import { transformMatchData } from "../../server/domain/riot/match/transformMatchData"

const roles = ["TOP", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"] as const

class MockD1 {
  ingestedMatches = new Set<string>()
  statements: { sql: string; values: unknown[] }[] = []
  batches: { sql: string; values: unknown[] }[][] = []

  prepare(sql: string) {
    return new MockStatement(this, sql)
  }

  async batch(statements: MockStatement[]) {
    this.batches.push(
      statements.map(statement => ({
        sql: statement.sql,
        values: statement.values
      }))
    )
    return await Promise.all(statements.map(statement => statement.run()))
  }
}

class MockStatement {
  values: unknown[] = []

  constructor(
    private readonly db: MockD1,
    readonly sql: string
  ) {}

  bind(...values: unknown[]) {
    this.values = values
    return this
  }

  async run() {
    this.db.statements.push({ sql: this.sql, values: this.values })

    if (
      this.sql.includes("riot_ingested_matches") &&
      this.sql.includes("ON CONFLICT")
    ) {
      const matchId = String(this.values[0])
      if (this.db.ingestedMatches.has(matchId)) {
        return { meta: { changes: 0 }, success: true }
      }

      this.db.ingestedMatches.add(matchId)
      return { meta: { changes: 1 }, success: true }
    }

    return { meta: { changes: 1 }, success: true }
  }
}

function makeParticipant(index: number, overrides: Record<string, any> = {}) {
  const teamId = index < 5 ? 100 : 200
  const role = roles[index % 5]
  const won = teamId === 100
  const power = index === 1 ? 24 : index === 7 ? 23 : 10 - (index % 5)
  const deaths = index === 1 || index === 7 ? 1 : 3 + (index % 4)

  return {
    assists: power + 3,
    challenges: {
      controlWardsPlaced: 2,
      damageDealtToBuildings: power * 90,
      damageDealtToEpicMonsters: role === "JUNGLE" ? power * 250 : power * 30,
      damageDealtToTurrets: power * 80,
      damagePerMinute: power * 45,
      damageTakenOnTeamPercentage: 0.15,
      effectiveHealAndShielding: role === "UTILITY" ? power * 120 : power * 8,
      firstBloodAssist: false,
      firstBloodKill: index === 1,
      firstTowerAssist: false,
      firstTowerKill: index === 1,
      goldPerMinute: power * 18,
      immobilizeAndKillWithAlly: role === "UTILITY" ? power : 1,
      jungleCsBefore10Minutes: role === "JUNGLE" ? 40 : 0,
      kda: (power + 3) / deaths,
      killAfterHiddenWithAlly: 0,
      killParticipation: Math.min(0.95, 0.35 + power / 50),
      killingSprees: Math.floor(power / 6),
      laneMinionsFirst10Minutes: role === "JUNGLE" ? 0 : 50 + power,
      laningPhaseGoldExpAdvantage: power * 20,
      maxCsAdvantageOnLaneOpponent: power,
      pickKillWithAlly: power,
      saveAllyFromDeath: role === "UTILITY" ? 2 : 0,
      teamDamagePercentage: Math.min(0.6, 0.1 + power / 70),
      teamElderDragonKills: 0
    },
    champLevel: 12 + (index % 5),
    championId: 100 + index,
    deaths,
    doubleKills: index === 1 ? 2 : 0,
    dragonKills: role === "JUNGLE" ? 2 : 0,
    goldEarned: 7_000 + power * 350,
    item0: 1001,
    item1: 1002,
    item2: 1003,
    item3: 0,
    item4: 0,
    item5: 0,
    item6: 3340,
    kills: power,
    objectivesStolen: 0,
    pentaKills: 0,
    perks: {
      statPerks: { defense: 5003, flex: 5008, offense: 5005 },
      styles: [
        {
          selections: [
            { perk: 8005 },
            { perk: 9111 },
            { perk: 9104 },
            { perk: 8014 }
          ],
          style: 8000
        },
        {
          selections: [{ perk: 8345 }, { perk: 8347 }],
          style: 8300
        }
      ]
    },
    profileIcon: 1 + index,
    puuid: `puuid-${index}`,
    quadraKills: 0,
    riotIdGameName: `Player ${index}`,
    riotIdTagline: "NA1",
    summoner1Id: 4,
    summoner2Id: 14,
    teamId,
    teamPosition: role,
    timeCCingOthers: power * 2,
    totalAllyJungleMinionsKilled: role === "JUNGLE" ? 70 : 0,
    totalDamageDealtToChampions: power * 1_000,
    totalDamageShieldedOnTeammates: role === "UTILITY" ? power * 60 : 0,
    totalDamageTaken: power * 700,
    totalEnemyJungleMinionsKilled: role === "JUNGLE" ? 18 : 0,
    totalHealsOnTeammates: role === "UTILITY" ? power * 60 : 0,
    totalMinionsKilled: role === "JUNGLE" ? 20 : 120 + power * 5,
    totalTimeSpentDead: deaths * 20,
    tripleKills: index === 1 ? 1 : 0,
    turretKills: index === 1 ? 3 : 0,
    visionScore: role === "UTILITY" ? 45 + power : 14 + power,
    wardsKilled: role === "UTILITY" ? 8 : 2,
    wardsPlaced: role === "UTILITY" ? 28 : 8,
    win: won,
    ...overrides
  }
}

function makeRawMatch(overrides: Record<string, any> = {}) {
  const participants = Array.from({ length: 10 }, (_, index) =>
    makeParticipant(index)
  )

  return {
    info: {
      gameDuration: 1_800,
      gameEndTimestamp: 1_750_000_000_000,
      gameVersion: "16.12.123.456",
      mapId: 11,
      participants,
      platformId: "NA1",
      queueId: 420,
      teams: [
        {
          bans: [],
          objectives: {
            baron: { kills: 1 },
            dragon: { kills: 3 },
            horde: { kills: 2 },
            inhibitor: { kills: 1 },
            riftHerald: { kills: 1 },
            tower: { kills: 9 }
          },
          teamId: 100,
          win: true
        },
        {
          bans: [],
          objectives: {
            baron: { kills: 0 },
            dragon: { kills: 1 },
            horde: { kills: 1 },
            inhibitor: { kills: 0 },
            riftHerald: { kills: 0 },
            tower: { kills: 3 }
          },
          teamId: 200,
          win: false
        }
      ],
      ...overrides.info
    },
    metadata: {
      matchId: "NA1_12345",
      participants: participants.map(participant => participant.puuid),
      ...overrides.metadata
    }
  }
}

describe("riot match analytics pipeline", () => {
  it("normalizes roles from teamPosition", () => {
    expect(normalizeRiotRole({ role: "SOLO", teamPosition: "UTILITY" })).toBe(
      "UTILITY"
    )
  })

  it("projects global aggregate contributions without raw player identifiers", () => {
    const raw = makeRawMatch()
    const clientMatch = transformMatchData(raw)
    const projection = toMatchAnalyticsTallyProjection(raw, clientMatch)

    expect(projection.match).toMatchObject({
      matchId: "NA1_12345",
      queueId: 420,
      regionId: "na1"
    })
    expect(projection.champions).toHaveLength(10)
    expect(projection.allies).toHaveLength(40)
    expect(projection.enemies).toHaveLength(50)
    expect(JSON.stringify(projection)).not.toContain("riotIdGameName")
    expect(JSON.stringify(projection)).not.toContain("perks")
    expect(JSON.stringify(projection)).not.toContain("puuid-")
  })

  it("counts final inventory and role-bound items without counting trinkets", () => {
    const raw = makeRawMatch({
      info: {
        participants: Array.from({ length: 10 }, (_, index) =>
          makeParticipant(
            index,
            index === 3 ?
              {
                item0: 1001,
                item1: 1001,
                item2: 0,
                item6: 3340,
                roleBoundItem: 1207,
                teamPosition: "BOTTOM"
              }
            : {}
          )
        )
      }
    })
    const projection = toMatchAnalyticsTallyProjection(raw, transformMatchData(raw))
    const bottomItems = projection.items.filter(row => row.championId === 103)

    expect(bottomItems.map(row => row.itemId).sort((a, b) => a - b)).toEqual([
      1001, 1207
    ])
    expect(projection.items.some(row => row.itemId === 3340)).toBe(false)
  })

  it("tracks remakes separately from wins and losses", () => {
    const raw = makeRawMatch({ info: { gameDuration: 180 } })
    const projection = toMatchAnalyticsTallyProjection(raw, transformMatchData(raw))

    expect(projection.champions).toHaveLength(10)
    expect(projection.champions.every(row => row.games === 1)).toBe(true)
    expect(projection.champions.every(row => row.remakes === 1)).toBe(true)
    expect(projection.champions.every(row => row.wins === 0)).toBe(true)
    expect(projection.champions.every(row => row.losses === 0)).toBe(true)
  })

  it("dedupes ingested matches before writing aggregate tallies", async () => {
    const raw = makeRawMatch()
    const projection = toMatchAnalyticsTallyProjection(raw, transformMatchData(raw))
    const db = new MockD1()

    const first = await persistMatchAnalytics(db, [projection])
    const aggregateStatementsAfterFirst = db.statements.filter(statement =>
      statement.sql.includes("riot_champion_")
    ).length
    const second = await persistMatchAnalytics(db, [projection])
    const aggregateStatementsAfterSecond = db.statements.filter(statement =>
      statement.sql.includes("riot_champion_")
    ).length

    expect(first.persistedMatches).toBe(1)
    expect(second.persistedMatches).toBe(0)
    expect(aggregateStatementsAfterSecond).toBe(aggregateStatementsAfterFirst)
  })

  it("keeps every batched D1 statement under the bound-parameter limit", async () => {
    const projections = Array.from({ length: 4 }, (_, index) => {
      const raw = makeRawMatch({
        metadata: { matchId: `NA1_${index}` }
      })
      return toMatchAnalyticsTallyProjection(raw, transformMatchData(raw))
    })
    const db = new MockD1()

    await persistMatchAnalytics(db, projections)

    expect(db.batches.flat().length).toBeGreaterThan(0)
    expect(db.batches.flat().every(statement => statement.values.length <= 100))
      .toBe(true)
  })

  it("keeps MVP scoring inactive in the match transform path", () => {
    const match = transformMatchData(makeRawMatch())

    expect(
      match.participants.every(participant =>
        participant.lpScore.score === 0 &&
        participant.lpScore.rank === 0 &&
        !participant.lpScore.mvp &&
        !participant.lpScore.ace
      )
    ).toBe(true)
  })

  it("keeps timeline routes out of D1 analytics persistence", () => {
    const source = readFileSync(
      resolve("server/api/riot/v5/timeline/matchId.get.ts"),
      "utf8"
    )

    expect(source).not.toContain("persistTimelineFeatures")
    expect(source).not.toContain("getMatchAnalyticsDb")
  })
})
