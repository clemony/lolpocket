import { championIndex } from "#shared/constants/champions/championIndex"
import { skinIndex } from "#shared/constants/champions/skin-index"
import { itemIndex } from "#shared/constants/items/itemIndex"
import { mapPositions } from "#shared/constants/misc/positions"
import { pathRecord } from "#shared/constants/runes/pathRecord"
import {
  newItemSet,
  newRuneSet,
  newSpellSet
} from "~/domain/pocket/addPocketModules"
import { finalizePocket } from "~/domain/pocket/finalizePocket"
import { generateName } from "~/domain/pocket/generateStrings"
import { getSplash } from "~/domain/utils/img"
import { spellIndex } from "~~/shared/constants/misc/spell-index"

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

    const i1 = getRandomInt(5)
    const i2 = getRandomInt(4)
    const set = [1, 2, 3].filter((n) => n !== getRandomInt(3) + 1)

    const path1 = pathRecord[i1]
    const path2 = path1
      ? Object.values(pathRecord).filter((p) => p.id !== path1.id)[i2]
      : undefined

    if (!path1) return a
    a.primary.path = path1.name
    a.keystone = getRandom(path1.slots?.[0]?.runes.map((k) => k.id) ?? [])
    a.primary.runes = [
      getRandom(path1.slots?.[1]?.runes.map((k) => k.id) ?? []),
      getRandom(path1.slots?.[2]?.runes.map((k) => k.id) ?? []),
      getRandom(path1.slots?.[3]?.runes.map((k) => k.id) ?? [])
    ]
    if (!path2) return a
    a.secondary.path = path2.name
    const [s0, s1] = set
    if (s0 == null || s1 == null) return a
    a.secondary.runes = [
      getRandom(
        path2.slots?.[s0]?.runes.map((k: { id: number }) => k.id) ?? []
      ),
      getRandom(path2.slots?.[s1]?.runes.map((k: { id: number }) => k.id) ?? [])
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

  const role = getRandom(mapPositions.map((p) => p.label))
  const icon = computed(() => {
    const skinSets = Object.values(skinIndex)
    const a = skinSets[getRandomInt(skinSets.length)]
    if (!a?.length) return ""
    const b = a[getRandomInt(a.length)]
    const key = getKeyByValue(skinIndex, a)
    return key ? getSplash(key, "tile", b) : ""
  })
  const p = {
    guide: [],
    key: crypto.randomUUID(),
    name: generateName(),
    ouuid: user().account?.uuid ?? "",
    uuid: user().account?.uuid ?? "",
    icon: icon.value,

    //
    _champion: champion,
    _items: itemSet.id,
    _role: role,
    _runes: runeSet.id,
    _spells: spellSet.id,

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
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    location: options?.location || "pockets",
    order: 0
  }

  finalizePocket(p)
}
