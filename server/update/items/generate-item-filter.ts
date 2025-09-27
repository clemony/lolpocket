import { markUpdate } from '#shared/utils/markUpdate'
import fs from 'node:fs'
import path from 'node:path'
import { normalizeArray } from '../utils'

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

const dataPath = path.resolve('scripts/data/items-lite.json')
const raw = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as Record<
  string,
  ItemLite
>

const itemsById: Record<number, ItemLite> = {}
const itemFilters = {
  maps: {} as Record<number, number[]>,
  rank: {} as Record<string, number[]>,
  stats: {} as Record<string, number[]>,
  tags: {} as Record<string, number[]>,
  unpurchasable: [] as number[],
}

const akaLookup: Record<string, number> = {}

for (const item of Object.values(raw)) {
  const { id, aka, maps, purchasable, rank, stats, tags } = item

  itemsById[id] = item

  for (const r of normalizeArray(rank)) {
    if (!itemFilters.rank[r])
      itemFilters.rank[r] = []
    itemFilters.rank[r].push(id)
  }

  for (const tag of normalizeArray(tags)) {
    if (!itemFilters.tags[tag])
      itemFilters.tags[tag] = []
    itemFilters.tags[tag].push(id)
  }

  for (const map of maps ?? []) {
    if (!itemFilters.maps[map])
      itemFilters.maps[map] = []
    itemFilters.maps[map].push(id)
  }

  for (const stat of Object.keys(stats ?? {})) {
    if (!itemFilters.stats[stat])
      itemFilters.stats[stat] = []
    itemFilters.stats[stat].push(id)
  }

  if (purchasable === false) {
    itemFilters.unpurchasable.push(id)
  }

  for (const akaName of normalizeArray(aka)) {
    akaLookup[akaName] = id
  }
}

// Output filters
fs.writeFileSync(
  './shared/appdata/filters/item-filters.ts',
  `// ${markUpdate()}

export const itemFilters = ${JSON.stringify(itemFilters, null, 2)}`
)

// Optional: output aka map
fs.writeFileSync(
  './shared/appdata/filters/item-aka.ts',
  `// ${markUpdate()}

export const akaLookup = ${JSON.stringify(akaLookup, null, 2)}`
)
