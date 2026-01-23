import fs from "node:fs"
import path from "node:path"
import { i_DIR, markUpdate, normalizeArray } from "../../utils"

const dataPath = path.resolve(`${i_DIR}raw/items-lite.json`)
const raw = JSON.parse(fs.readFileSync(dataPath, "utf-8")) as Record<
  string,
  any
>

const outputTag = path.resolve("./layers/domain/constants/items/tag-to-item.ts")
const outputMap = path.resolve("./layers/domain/constants/items/map-to-item.ts")
const outputPrice = path.resolve("./layers/domain/constants/items/item-price.ts")
const outputRank = path.resolve("./layers/domain/constants/items/rank-to-item.ts")

const outputItemRank = path.resolve("./layers/domain/constants/items/item-rank.ts")
const outputStat = path.resolve("./layers/domain/constants/items/stat-to-item.ts")
const outputUnpurchasable = path.resolve(
  "./layers/domain/constants/items/unpurchasable-items.ts"
)
const outputRecipe = path.resolve("./layers/domain/constants/items/item-recipe.ts")
const outputAka = path.resolve("./layers/domain/constants/items/item-aka.ts")

const itemsById: Record<number, ItemLite> = {}
const itemRecipe = {} as Record<number, number[]>
const mapToItem = {} as Record<number, number[]>
const itemPrice = {} as Record<number, number>
const itemRank = {} as Record<number, string>
const rankToItem = {} as Record<string, number[]>
const statToItem = {} as Record<string, number[]>
const tagToItem = {} as Record<string, number[]>
const unpurchasableItems = [] as number[]

const akaLookup: Record<string, number> = {}

for (const item of Object.values(raw)) {
  const { id, maps, purchasable, rank, stats, tags, recipe, aka, gold } = item

  itemsById[id] = item
  itemRank[id] = rank
  itemRecipe[id] = recipe
  itemPrice[id] = gold.total
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

  if (purchasable === false) {
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

export const itemRecipe: Record<number, number[]> = ${JSON.stringify(itemRecipe, null, 2)}`
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
