import fs from "node:fs"
import { resolve } from "node:path"
import { markUpdate } from "../../misc/markUpdate"
import { normalizeArray } from "../../utils"

const dataPath = resolve(`./layers/patch/server/items/raw/items-merged.json`)
const raw = JSON.parse(fs.readFileSync(dataPath, "utf-8")) as Record<
  string,
  any
>

const outputTag = resolve("./layers/patch/shared/constants/items/tagToItem.ts")
const outputMap = resolve("./layers/patch/shared/constants/items/mapToItem.ts")
const outputPrice = resolve(
  "./layers/patch/shared/constants/items/itemPrice.ts"
)
const outputRank = resolve(
  "./layers/patch/shared/constants/items/rankToItem.ts"
)

const outputItemRank = resolve(
  "./layers/patch/shared/constants/items/itemRank.ts"
)
const outputStat = resolve(
  "./layers/patch/shared/constants/items/statToItem.ts"
)
const outputUnpurchasable = resolve(
  "./layers/patch/shared/constants/items/unpurchasableItems.ts"
)
const outputRecipe = resolve(
  "./layers/patch/shared/constants/items/itemRecipe.ts"
)
const outputAka = resolve("./layers/patch/shared/constants/items/itemAka.ts")

const itemsById: Record<number, Item> = {}
const itemRecipe = {} as Record<string, number[]>
const mapToItem = {} as Record<number, number[]>
const itemPrice = {} as Record<number, number>
const itemRank = {} as Record<number, string>
const rankToItem = {} as Record<string, number[]>
const statToItem = {} as Record<string, number[]>
const tagToItem = {} as Record<string, number[]>
const unpurchasableItems = [] as number[]

const akaLookup: Record<string, number> = {}

for (const item of Object.values(raw)) {
  const { id, aka, gold, maps, rank, recipe, stats, tags } = item

  itemsById[id] = item
  itemRank[id] = rank
  itemRecipe[id] = recipe
  itemPrice[id] = gold?.total
  console.log("🥸 - itemRecipe:", itemRecipe)
  for (const r of normalizeArray(rank)) {
    if (!rankToItem[r]) rankToItem[r] = []
    rankToItem[r].push(id)
  }

  for (const tag of normalizeArray(tags)) {
    if (!tagToItem[tag]) tagToItem[tag] = []
    tagToItem[tag].push(id)
  }

  for (const map of maps ?? []) {
    if (!mapToItem[map]) mapToItem[map] = []
    mapToItem[map].push(id)
  }

  for (const stat of Object.keys(stats ?? {})) {
    if (!statToItem[stat]) statToItem[stat] = []
    statToItem[stat].push(id)
  }

  if (gold?.purchasable === false) {
    unpurchasableItems.push(id)
  }

  for (const akaName of normalizeArray(aka)) {
    akaLookup[akaName] = id
  }
}

// Output filters
fs.writeFileSync(
  outputRecipe,
  `// ${markUpdate()}

export const itemRecipe: Record<string, number[] | null> = ${JSON.stringify(itemRecipe, null, 2)}`
)

// Output filters
fs.writeFileSync(
  outputRank,
  `// ${markUpdate()}

export const rankToItem: Record<string, number[]> = ${JSON.stringify(rankToItem, null, 2)}`
)

// Output filters
fs.writeFileSync(
  outputPrice,
  `// ${markUpdate()}

export const itemPrice: Record<number, number> = ${JSON.stringify(itemPrice, null, 2)}`
)

// Output filters
fs.writeFileSync(
  outputItemRank,
  `// ${markUpdate()}

export const itemRank: Record<number, string> = ${JSON.stringify(itemRank, null, 2)}`
)

fs.writeFileSync(
  outputTag,
  `// ${markUpdate()}

export const tagToItem: Record<string, number[]> = ${JSON.stringify(tagToItem, null, 2)}`
)

fs.writeFileSync(
  outputMap,
  `// ${markUpdate()}

export const mapToItem: Record<number, number[]> = ${JSON.stringify(mapToItem, null, 2)}`
)

fs.writeFileSync(
  outputStat,
  `// ${markUpdate()}

export const statToItem: Record<string, number[]> = ${JSON.stringify(statToItem, null, 2)}`
)

fs.writeFileSync(
  outputUnpurchasable,
  `// ${markUpdate()}

export const unpurchasableItems: number[] = ${JSON.stringify(unpurchasableItems, null, 2)}`
)

// Optional: output aka map
fs.writeFileSync(
  outputAka,
  `// ${markUpdate()}

export const akaLookup: Record<string, number> = ${JSON.stringify(akaLookup, null, 2)}`
)
