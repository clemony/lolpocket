import { championIndex } from "#shared/constants/champions/championIndex"
import { skinIndex } from "#shared/constants/champions/skin-index"
import { itemIndex } from "#shared/constants/items/itemIndex"
import { mapPositions } from "#shared/constants/misc/positions"
import { pathRecord } from "#shared/constants/runes/pathRecord"
import { nowInstantString } from "#shared/utils"
import {
  newItemSet,
  newRuneSet,
  newSpellSet
} from "~/domain/pocket/addPocketModules"
import { finalizePocket } from "~/domain/pocket/finalizePocket"
import { generateName } from "~/domain/pocket/generateStrings"
import { getSkinKey } from "~/domain/utils/img"
import { spellIndex } from "~~/shared/constants/misc/spell-index"
import { keystoneIndex } from "~~/shared/constants/runes/keystoneIndex"
import { pathIndex } from "~~/shared/constants/runes/pathIndex"
import { runeToPath } from "~~/shared/constants/runes/runeToPath"
import { positionSchema, roleSchema } from "~~/shared/schema"

//
export function newRandomPocket(options?: { location: LocationKey }) {
  const itemSet = computed(() => {
    const a = newItemSet()
    const i = itemIndex.map((i) => i.id)
    a.items = [
      getRandom(i),
      getRandom(i),
      getRandom(i),
      getRandom(i),
      getRandom(i),
      getRandom(i)
    ]
    return a
  }).value

  const runeSet = computed(() => {
    const a = newRuneSet()

    const set = [1, 2, 3].filter((n) => n !== getRandomInt(3) + 1)

    const ks = (a.keystone = getRandom(keystoneIndex))
    const path1 = runeToPath[ks]
    const path2 = path1
      ? Object.keys(pathIndex).filter((p) => p !== path1)[getRandomInt(4)]
      : undefined

    if (!path1) return a
    a.primary.path = path1
    const primarySlots = pathRecord[path1]?.slots
    a.primary.runes = [
      getRandom(primarySlots?.[1]?.runes.map((k) => k.id) ?? []),
      getRandom(primarySlots?.[2]?.runes.map((k) => k.id) ?? []),
      getRandom(primarySlots?.[3]?.runes.map((k) => k.id) ?? [])
    ]
    if (!path2) return a
    a.secondary.path = path2
    const [s0, s1] = set
    if (s0 == null || s1 == null) return a
    a.secondary.runes = [
      getRandom(
        pathRecord[path2]?.slots?.[s0]?.runes.map(
          (k: { id: number }) => k.id
        ) ?? []
      ),
      getRandom(
        pathRecord[path2]?.slots?.[s1]?.runes.map(
          (k: { id: number }) => k.id
        ) ?? []
      )
    ]
    return a
  }).value

  const champion = getRandom(championIndex.map((c) => c.key))
  const spellSet = computed(() => {
    const a = newSpellSet()
    const b = getRandom(Object.values(spellIndex).map((s) => s.id))
    a.d = b
    a.f = getRandom(
      Object.values(spellIndex)
        .map((s) => s.id)
        .filter((s) => s !== b)
    )
    return a
  }).value

  const role = getRandom(roleSchema.options)
  const now = nowInstantString()
  const skin = computed(() => {
    const skinSets = Object.values(skinIndex)
    const a = skinSets[getRandomInt(skinSets.length)]
    if (!a?.length) return null
    const b = a[getRandomInt(a.length)]
    const key = getKeyByValue(skinIndex, a)
    return key && b ? getSkinKey(key, b) : null
  })

  const key = crypto.randomUUID()
  const p = {
    guide: [],
    key,
    okey: key,
    name: generateName(),
    ouuid: user().account?.uuid ?? "", // crypto.randomUUID(), //
    uuid: user().account?.uuid ?? "",
    skin: skin.value,

    //
    _champion: champion,
    _items: itemSet.id,
    _role: role,
    _runes: runeSet.id,
    _spells: spellSet.id,
    _position: getRandom(positionSchema.options),
    _map: getRandom(mapSchema.options),

    // sets
    champions: [champion],
    items: [itemSet],
    roles: [role],
    runes: [runeSet],
    spells: [spellSet],

    // social
    comments: false,
    likes: 0,
    public: false,
    tags: [],

    // time
    created: now,
    updated: now,
    location: options?.location || "pockets",
    order: 0
  }

  finalizePocket(p)
}
