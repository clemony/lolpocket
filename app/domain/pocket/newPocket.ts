import { nowInstantString } from "#shared/utils"
import {
  newItemSet,
  newRuneSet,
  newSpellSet
} from "~/domain/pocket/addPocketModules"
import { finalizePocket } from "~/domain/pocket/finalizePocket"
import { generateName } from "~/domain/pocket/helpers/generateStrings"

//
export async function newPocket(options?: {
  name?: string
  location?: LocationKey
}) {
  const now = nowInstantString()
  const key = crypto.randomUUID()
  const genName = generateName()
  console.log("🥸 - newPocket - genName:", genName)
  const p = {
    key,
    okey: key,
    label: options?.name || genName,
    ouuid: user().account?.uuid ?? "",
    uuid: user().account?.uuid ?? "",

    // info
    guide: [],
    skin: null,

    //
    _role: "all" as RoleKey,
    _map: 0 as MapKey,
    _position: "all" as PositionKey,

    // sets
    champions: [],
    items: [newItemSet()],
    positions: ["all"] as PositionKey[],
    runes: [newRuneSet()],
    spells: [newSpellSet()],

    // social
    comments: false,
    likes: 0,
    public: false,
    tags: [],

    // time
    created: now,
    updated: now,
    location: options?.location || "all",
    order: 0
  }

  finalizePocket(p)
}
