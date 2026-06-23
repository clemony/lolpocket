import { describe, expect, it } from "vitest"
import { getWinrateArc } from "../../app/components/chart/radialWinrateArc"

describe("champ winrate arc label", () => {
  it("builds a full circle path using the same square sizing as the chart", () => {
    expect(getWinrateArc(48)).toEqual({
      id: "winrate-arc-48",
      path: "M22.5 12 A10.5 10.5 0 1 1 1.5 12 A10.5 10.5 0 1 1 22.5 12",
      sizing: "calc(var(--spacing) * 48)",
      viewBox: "0 0 24 24",
    })
  })

  it("allows the label path to sit farther away from the background ring", () => {
    expect(getWinrateArc(48, "outer", 11).path).toBe(
      "M23 12 A11 11 0 1 1 1 12 A11 11 0 1 1 23 12"
    )
  })
})
