import { describe, expect, it } from "vitest"
import { extractIdentifierFromRoute } from "../../app/domain/summoner/utils/extractIdentifierFromRoute"

describe("summoner route identifiers", () => {
  it("extracts a public regional summoner slug", () => {
    expect(
      extractIdentifierFromRoute({
        params: {
          region: "NA1",
          slug: "PocketCait_LP"
        }
      } as never)
    ).toEqual({
      name: "pocketcait",
      region: "na1",
      tag: "lp"
    })
  })

  it("does not treat internal resolver routes as regional summoner slugs", () => {
    expect(
      extractIdentifierFromRoute({
        params: {
          region: "_r",
          slug: "p84ak9qwwk2epuecd7zegqeqixsijnnac_-eoqewj1jt7uodkxtgy1rpvso7epl9xyygjzovb0jm2a"
        }
      } as never)
    ).toBeNull()
  })
})
