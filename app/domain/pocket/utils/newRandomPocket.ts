import { championIndex } from "#shared/constants/champions/championIndex"
import { nowInstantString } from "#shared/utils"
import { finalizePocket } from "~/domain/pocket/utils/finalizePocket"
import { generateItemSet } from "~/domain/pocket/utils/generate/generateItemSet"
import { generateRuneSet } from "~/domain/pocket/utils/generate/generateRuneSet"
import {
  generateSkinKey,
  generateSpellSet
} from "~/domain/pocket/utils/generate/generateSets"
import {
  newItemSet,
  newRuneSet
} from "~/domain/pocket/utils/manage/addPocketModules"
import { generateName } from "~/domain/utils/generateStrings"
import { positionSchema, roleSchema } from "~~/shared/schema"

export function newRandomPocket(options?: {
  location?: LocationKey
  map?: MapKey
  position?: PositionKey
}) {
  const position =
    options?.position && options?.position !== "all"
      ? options?.position
      : (getRandom(
          positionSchema.options.filter((p) => p !== "all")
        ) as PositionKey)

  const itemSet = computed<ItemSet>(() => {
    const set: ItemSet = newItemSet()
    set.items = options?.map
      ? generateItemSet(options.map, position)
      : generateItemSet(11, position)
    return set
  })

  const runeSet = computed(() => {
    const a = newRuneSet()
    return generateRuneSet(a)
  })

  const champion = getRandom(championIndex.map((c) => c.key))
  const role = getRandom(roleSchema.options)
  const key = crypto.randomUUID()
  const spellSet = generateSpellSet(options?.map || 11)
  const now = nowInstantString()

  const p = {
    guide: [],
    key,
    okey: key,
    label: generateName(),
    ouuid: user().account?.uuid ?? "", // crypto.randomUUID(), //
    uuid: user().account?.uuid ?? "",
    skin: generateSkinKey(),

    //
    _champion: champion,
    _items: itemSet.value.id,
    _role: role,
    _runes: runeSet.value.id,
    _spells: spellSet.id,
    _position: position,
    _map: options?.map || 11,

    // sets
    champions: [champion],
    items: [itemSet.value],
    roles: [role],
    runes: [runeSet.value],
    spells: [spellSet],

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
