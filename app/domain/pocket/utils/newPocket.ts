import { nowInstantString } from "#shared/utils"
import { finalizePocket } from "~/domain/pocket/utils/finalizePocket"
import {
  newItemSet,
  newRuneSet,
  newSpellSet
} from "~/domain/pocket/utils/manage/addPocketModules"
import { generateName } from "~/domain/utils/generateStrings"

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
    splash: null,

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
    location: options?.location || "folders",
    order: 0
  }

  finalizePocket(p)
}
