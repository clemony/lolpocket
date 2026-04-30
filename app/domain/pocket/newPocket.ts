import {
  newItemSet,
  newRuneSet,
  newSpellSet
} from "~/domain/pocket/addPocketModules"
import { finalizePocket } from "~/domain/pocket/finalizePocket"
import { generateName } from "~/domain/pocket/generateStrings"

//
export async function newPocket(options?: { location: LocationKey }) {
  const p = {
    // data
    key: crypto.randomUUID(),
    name: generateName(),
    ouuid: user().account?.uuid ?? "",
    uuid: user().account?.uuid ?? "",

    // info
    guide: [],
    icon: "",

    //
    _champion: null,
    _items: null,
    _role: "All",
    _runes: null,
    _spells: null,

    // sets
    champions: [],
    items: [newItemSet()],
    roles: ["all"],
    runes: [newRuneSet()],
    spells: [newSpellSet()],

    // social
    comments: false,
    likes: 0,
    public: false,
    tags: [],

    // time
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    location: options?.location || "pockets",
    order: 0
  }

  finalizePocket(p)
}
