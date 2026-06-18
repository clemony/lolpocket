import { describe, expect, it } from "vitest"
import { getChampWinrateArc } from "../../app/domain/summoner/components/champion/chart/champWinrateArc"

describe("champ winrate arc label", () => {
  it("builds a top arc using the same square sizing as the chart", () => {
    expect(getChampWinrateArc(48)).toEqual({
      id: "champ-winrate-arc-48",
      path: "M2 12 A10 10 0 0 1 22 12",
      sizing: "calc(var(--spacing) * 48)",
      viewBox: "0 0 24 24"
    })
  })
})
