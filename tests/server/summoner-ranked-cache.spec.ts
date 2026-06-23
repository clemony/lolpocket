import type { RankedEntryResponse } from "../../shared/types"
import { describe, expect, it, vi } from "vitest"

vi.mock("#server/api/riot/fetch", () => ({ riotFetch: vi.fn() }))
vi.mock("#server/domain", () => ({ apiPath: vi.fn() }))

const { toRankedResponse } = await import("../../server/domain/riot/ranked")

describe("toRankedResponse", () => {
  it("returns only solo and flex ranked queues with normalized field names", () => {
    const entries: RankedEntryResponse[] = [
      {
        leagueId: "solo-league",
        leaguePoints: 87,
        losses: 11,
        queueType: "RANKED_SOLO_5x5",
        rank: "II",
        tier: "DIAMOND",
        wins: 24
      },
      {
        leagueId: "flex-league",
        leaguePoints: 12,
        losses: 8,
        queueType: "RANKED_FLEX_SR",
        rank: "I",
        tier: "EMERALD",
        wins: 19
      },
      {
        leagueId: "tft-league",
        leaguePoints: 99,
        losses: 1,
        queueType: "RANKED_TFT",
        rank: "IV",
        tier: "GOLD",
        wins: 3
      }
    ]

    expect(toRankedResponse(entries)).toEqual({
      flex: {
        division: "I",
        loss: 8,
        lp: 12,
        name: "flex-league",
        queue: "RANKED_FLEX_SR",
        tier: "EMERALD",
        win: 19
      },
      solo: {
        division: "II",
        loss: 11,
        lp: 87,
        name: "solo-league",
        queue: "RANKED_SOLO_5x5",
        tier: "DIAMOND",
        win: 24
      }
    })
  })
})
