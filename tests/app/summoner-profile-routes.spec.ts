import { describe, expect, it } from "vitest"
import { buildSummonerProfileRoutes } from "../../app/domain/summoner/utils/profileRoutes"

describe("summoner profile route tabs", () => {
  it("does not throw while the named profile route is unavailable", () => {
    const routes = buildSummonerProfileRoutes([
      {
        name: "username-tag-pockets",
        path: "/:username/:tag/pockets"
      }
    ])

    expect(routes).toHaveLength(1)
    expect(routes[0]?.value).toBe("username-tag-pockets")
  })
})
