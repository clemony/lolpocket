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
import { generateName } from "~/domain/pocket/helpers/generateStrings"
import { getSkinKey } from "~/domain/utils/img"
import { itemRecipe } from "~~/shared/constants/items/itemRecipe"
import { mapToItem } from "~~/shared/constants/items/mapToItem"
import {
  bootIndex,
  rankToItem,
  supportItemIndex
} from "~~/shared/constants/items/rankToItem"
import { unpurchasableItems } from "~~/shared/constants/items/unpurchasableItems"
import { spellIndex } from "~~/shared/constants/misc/spell-index"
import { keystoneIndex } from "~~/shared/constants/runes/keystoneIndex"
import { pathIndex } from "~~/shared/constants/runes/pathIndex"
import { runeToPath } from "~~/shared/constants/runes/runeToPath"
import { positionSchema, roleSchema } from "~~/shared/schema"

function sampleUnique<T>(values: readonly T[], count: number): T[] {
  const pool = [...new Set(values)]
  const limit = globalThis.Math.min(count, pool.length)

  for (let i = 0; i < limit; i++) {
    const next = i + getRandomInt(pool.length - i)
    const current = pool[i]!
    pool[i] = pool[next]!
    pool[next] = current
  }

  return pool.slice(0, limit)
}

export function createSet(map?: MapKey, position?: PositionKey) {
  const count = position === "support" ? 4 : position === "bot" ? 6 : 5

  const no = new Set(unpurchasableItems)
  const supp = new Set(supportItemIndex)

  const mapItems = new Set(mapToItem[map as MapKey])
  const legendary = new Set(
    rankToItem.Legendary?.filter((i) => mapItems.has(i))
  )

  const boot = new Set(bootIndex.filter((i) => mapItems.has(i)))

  const slots = legendary
    .values()
    .toArray()
    .filter((i) => !no.has(i))
    .filter((i) => !boot.has(i))
    .filter((i) => !supp.has(i))

  const boots = boot
    .values()
    .toArray()
    .filter((i) => !no.has(i))
    .filter((i) => itemRecipe[i]?.includes(1001))

  const bootItem = getRandom(boots)
  const items = sampleUnique(slots, count)

  return typeof bootItem === "number"
    ? [
        bootItem,
        position === "support" && getRandom(supportItemIndex),
        ...items
      ].filter(Boolean)
    : items
}

export function newRandomPocket(options?: {
  location?: LocationKey
  map?: MapKey
  position?: PositionKey
}) {
  const position =
    options?.position ||
    getRandom(positionSchema.options.filter((p) => p !== "all"))
  const itemSet = computed(() => {
    const a = newItemSet()

    a.items = !options?.map
      ? createSet(11, position)
      : createSet(options.map, position)
    return a
  }).value

  const runeSet = computed(() => {
    const a = newRuneSet()

    const set = [1, 2, 3].filter((n) => n !== getRandomInt(3) + 1)

    const ks = (a.keystone = getRandom(keystoneIndex))
    const path1 = runeToPath[ks]
    const path2 = path1
      ? (Object.keys(pathIndex) as unknown as number[]).filter(
          (p) => p !== path1
        )[getRandomInt(4)]
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

  const now = nowInstantString()
  const skin = computed(() => {
    const skinSets = Object.values(skinIndex)
    const a = skinSets[getRandomInt(skinSets.length)]
    if (!a?.length) return null
    const b = a[getRandomInt(a.length)]
    const key = getKeyByValue(skinIndex, a)
    return key && b ? getSkinKey(key, b) : null
  })

  const role = getRandom(roleSchema.options)
  const key = crypto.randomUUID()

  const p = {
    guide: [],
    key,
    okey: key,
    label: generateName(),
    ouuid: user().account?.uuid ?? "", // crypto.randomUUID(), //
    uuid: user().account?.uuid ?? "",
    skin: skin.value,

    //
    _champion: champion,
    _items: itemSet.id,
    _role: role,
    _runes: runeSet.id,
    _spells: spellSet.id,
    _position: position,
    _map: options?.map || 11,

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
