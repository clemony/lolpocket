import fs from 'node:fs'
import path from 'node:path'
import { resolvePath } from '../resolvePath'
import { markUpdate, normalizeArray } from '../utils'

interface ItemLite {
  id: number
  name: string
  aka?: string[]
  cost?: number
  maps?: number[]
  purchasable?: boolean
  rank?: string
  stats?: Record<string, number>
  tags?: string[]
}

const dataPath = resolvePath('./items/raw/items-lite.json')
const raw = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as Record<
  string,
  ItemLite
>

const outputTag = path.resolve('./shared/filters/tagToItem.ts')
const outputMap = path.resolve('./shared/filters/mapToItem.ts')
const outputRank = path.resolve('./shared/filters/rankToItem.ts')
const outputStat = path.resolve('./shared/filters/statToItem.ts')
const outputUnpurchasable = path.resolve('./shared/filters/unpurchasableItems.ts')

const outputAka = path.resolve('./shared/filters/item-aka.ts')

const itemsById: Record<number, ItemLite> = {}
const mapToItem = {} as Record<number, number[]>
  const rankToItem = {} as Record<string, number[]>
  const statToItem = {} as Record<string, number[]>
  const tagToItem = {} as Record<string, number[]>
  const unpurchasableItems = [] as number[]


const akaLookup: Record<string, number> = {}

for (const item of Object.values(raw)) {
  const { id, aka, maps, purchasable, rank, stats, tags } = item

  itemsById[id] = item

  for (const r of normalizeArray(rank)) {
    if (!rankToItem[r])
      rankToItem[r] = []
    rankToItem[r].push(id)
  }

  for (const tag of normalizeArray(tags)) {
    if (!tagToItem[tag])
      tagToItem[tag] = []
    tagToItem[tag].push(id)
  }

  for (const map of maps ?? []) {
    if (!mapToItem[map])
      mapToItem[map] = []
    mapToItem[map].push(id)
  }

  for (const stat of Object.keys(stats ?? {})) {
    if (!statToItem[stat])
      statToItem[stat] = []
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
  outputRank,
  `// ${markUpdate()}

export const rankToItem = ${JSON.stringify(rankToItem, null, 2)}`,
)


fs.writeFileSync(
  outputTag,
  `// ${markUpdate()}

export const tagToItem = ${JSON.stringify(tagToItem, null, 2)}`,
)


fs.writeFileSync(
  outputMap,
  `// ${markUpdate()}

export const mapToItem = ${JSON.stringify(mapToItem, null, 2)}`,
)

fs.writeFileSync(
  outputStat,
  `// ${markUpdate()}

export const statToItem = ${JSON.stringify(statToItem, null, 2)}`,
)

fs.writeFileSync(
  outputUnpurchasable,
  `// ${markUpdate()}

export const unpurchasableItems = ${JSON.stringify(unpurchasableItems, null, 2)}`,
)

// Optional: output aka map
fs.writeFileSync(
  outputAka,
  `// ${markUpdate()}

export const akaLookup = ${JSON.stringify(akaLookup, null, 2)}`,
)
