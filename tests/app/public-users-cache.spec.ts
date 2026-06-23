import { describe, expect, it } from "vitest"
import {
  deserializePublicUsersState,
  serializePublicUsersState
} from "../../app/stores/publicUsers.cache"

describe("public users cache persistence", () => {
  it("round-trips cached accounts and puuid indexes", () => {
    const account = {
      color: "insp",
      created: null,
      peer_messages: false,
      public_pockets: null,
      puuid: "puuid-1",
      skin: null,
      tag: "LP",
      title: null,
      updated: null,
      username: "PocketCait",
      uuid: "00000000-0000-4000-8000-000000000001"
    } as Account

    const serialized = serializePublicUsersState({
      byPuuid: new Map([["puuid-1", account.uuid]]),
      cache: new Map([[account.uuid, account]])
    })

    const restored = deserializePublicUsersState(serialized)

    expect(restored.cache.get(account.uuid)).toEqual(account)
    expect(restored.byPuuid.get("puuid-1")).toBe(account.uuid)
  })
})
