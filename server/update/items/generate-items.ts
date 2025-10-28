import fs from 'node:fs'
import path from 'node:path'
<<<<<<< HEAD
import type { ItemIndex, ItemLite } from '../../../types'
import { resolvePath } from '../resolvePath'
import { formatStats, handleWikiText, ludensPreProcess, markUpdate, normalizeItemData, stripEmpty } from '../utils'

// server
const itemLiteOutput = resolvePath('./items/raw/items-lite.json')
const tagsOutput = resolvePath('./items/raw/unique-tags.json')
const ranksOutput = resolvePath('./items/raw/unique-ranks.json')

// shared
const outputIndex = resolvePath('../../shared/appdata/index/item-index.ts')
const outputLitePath = resolvePath('../../shared/appdata/records/items-lite.ts')
const itemOutputDir = resolvePath('../../shared/appdata/records/items/')

// input
const inputPath = resolvePath('./items/raw/items-raw.json')
=======

const inputPath = path.resolve('/server/update/items/raw/items-raw.json')
const outputIndex = path.resolve('shared/appdata/index/item-index.ts')
const outputLitePath = path.resolve('shared/appdata/records/items-lite.ts')
const itemOutputDir = path.resolve('shared/appdata/records/items/')
>>>>>>> refs/remotes/origin/main
const fullData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'))

const index: Record<string, ItemIndex> = {}
const simplified: Record<string, ItemLite> = {}
const uniqueTags = new Set<string>()
const uniqueRanks = new Set<string>()

fs.mkdirSync(itemOutputDir, { recursive: true })

async function buildItems() {
  for (const id in fullData) {
    const item = fullData[id]
    if (item.id === 2146)
      continue

    const sharedVars = new Map<string, string>()

    const stats = formatStats(item.stats)
    const { maps, rank, tags } = normalizeItemData(item)

    // Collect unique metadata
    tags.forEach(t => uniqueTags.add(t))
    rank.forEach(r => uniqueRanks.add(r))

    index[id] = {
      id: item.id,
<<<<<<< HEAD
      key: item.id.toString(),
=======
>>>>>>> refs/remotes/origin/main
      name: item.name,
    }

    // Enrich the "lite" output
    simplified[id] = stripEmpty({
      id: item.id,
      key: item.id.toString(),
      name: item.name,
      aka: item.nicknames,
      cost: item.shop?.prices?.total ?? 0,
      maps,
      purchasable: item.shop?.purchasable,
      rank: rank[0],
      stats,
      tags,
    })

    // Handle shop override
    if (item.id === 2141 && item.shop) {
      item.shop.purchasable = false
    }

    const active = item.active || []
    const expandedActive = await Promise.all(
      active.map(async (a: any) => { // if you know the shape, replace `any`
        const effects = await handleWikiText(a.effects, sharedVars)
        return {
          name: a.name,
          charges: a.charges,
          cooldown: a.cooldown,
          effects,
          range: a.range,
          recharge: a.recharge,
          unique: a.unique,
        }
      })
    )

    const passives = item.passives || []
    const expandedPassives = await Promise.all(
      passives.map(async (p: any) => {
        let pText = p.effects
        if (item.id === 6655 && p.effects?.includes('Shot Charges'))
          pText = ludensPreProcess(p.effects)
        const effects = await handleWikiText(pText, sharedVars)
        return {
          name: p.name,
          charges: p.charges,
          cooldown: p.cooldown,
          effects,
          range: p.range,
          recharge: p.recharge,
          unique: p.unique,
        }
      })
    )
    const { iconOverlay, tier, ...rest } = item
    const fullItem = {
      ...rest,
      active: expandedActive,
      maps,
      passives: expandedPassives,
      rank: rank[0],
      stats,
    }

    const cleanedItem = stripEmpty(fullItem)

    fs.writeFileSync(
      path.resolve(itemOutputDir, `${item.id}.ts`),
      `const item: Item =  ${JSON.stringify(cleanedItem, null, 2)}
export default item`
    )
  }

  // Write outputs
  fs.writeFileSync(
    outputIndex,
    `// ${markUpdate()}

export const itemIndex: ItemIndex[] = ${JSON.stringify(Object.values(index), null, 2)}`
  )
  fs.writeFileSync(
    outputLitePath,
    `// ${markUpdate()}

export const itemsLite: ItemLite[] = ${JSON.stringify(Object.values(simplified), null, 2)}`
  )
  fs.writeFileSync(
<<<<<<< HEAD
    itemLiteOutput,
    JSON.stringify(Object.values(simplified), null, 2)
  )
  fs.writeFileSync(
    tagsOutput,
    JSON.stringify([...uniqueTags].sort(), null, 2)
  )
  fs.writeFileSync(
    ranksOutput,
=======
    './server/data/items-lite.json',
    JSON.stringify(Object.values(simplified), null, 2)
  )
  fs.writeFileSync(
    './raw/unique-tags.json',
    JSON.stringify([...uniqueTags].sort(), null, 2)
  )
  fs.writeFileSync(
    './raw/unique-ranks.json',
>>>>>>> refs/remotes/origin/main
    JSON.stringify([...uniqueRanks].sort(), null, 2)
  )
}

buildItems()

console.log('✅ items-lite.json written')
console.log('📁 individual item files written to ./server/data/items/')
console.log('🔖 unique-tags.json and unique-ranks.json written')
