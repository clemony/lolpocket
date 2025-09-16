import fs from 'node:fs'
import path from 'node:path'

const inputPath = path.resolve('/server/update/items/raw/items-raw.json')
const outputIndex = path.resolve('shared/appdata/index/item-index.ts')
const outputLitePath = path.resolve('shared/appdata/records/items-lite.ts')
const itemOutputDir = path.resolve('shared/appdata/records/items/')
const fullData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'))

const index = {}
const simplified = {}
const uniqueTags = new Set()
const uniqueRanks = new Set()

fs.mkdirSync(itemOutputDir, { recursive: true })

async function buildItems() {
  for (const id in fullData) {
    const item = fullData[id]
    if (item.id === 2146)
      continue

    const sharedVars = new Map<string, string>()

    const stats = formatStats(item.stats)
    const { rank, tags, maps } = normalizeItemData(item)

    // Collect unique metadata
    tags.forEach(t => uniqueTags.add(t))
    rank.forEach(r => uniqueRanks.add(r))

    index[id] = {
      name: item.name,
      id: item.id,
    }

    // Enrich the "lite" output
    simplified[id] = stripEmpty({
      id: item.id,
      name: item.name,
      aka: item.nicknames,
      rank: rank[0],
      stats,
      purchasable: item.shop?.purchasable,
      cost: item.shop?.prices?.total ?? 0,
      tags,
      maps,
    })

    // Handle shop override
    if (item.id === 2141 && item.shop) {
      item.shop.purchasable = false
    }

    const active = item.active || []
    const expandedActive = await Promise.all(
      active.map(async (a) => {
        const effects = await handleWikiText(a.effects, sharedVars)
        return {
          name: a.name,
          unique: a.unique,
          effects,
          cooldown: a.cooldown,
          recharge: a.recharge,
          charges: a.charges,
          range: a.range,
        }
      })
    )

    const passives = item.passives || []

    const expandedPassives = await Promise.all(
      passives.map(async (p) => {
        let pText = p.effects
        if (item.id === 6655 && p.effects?.includes('Shot Charges')) {
          pText = ludensPreProcess(p.effects)
          console.log('💠 - passives.map - pText:', pText)
        }
        const effects = await handleWikiText(pText, sharedVars)
        return {
          name: p.name,
          unique: p.unique,
          effects,
          cooldown: p.cooldown,
          recharge: p.recharge,
          charges: p.charges,
          range: p.range,
        }
      })
    )
    const { tier, iconOverlay, ...rest } = item
    const fullItem = {
      ...rest,
      rank: rank[0],
      stats,
      active: expandedActive,
      passives: expandedPassives,
      maps,
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
    './scripts/data/items-lite.json',
    JSON.stringify(Object.values(simplified), null, 2)
  )
  fs.writeFileSync(
    './raw/unique-tags.json',
    JSON.stringify([...uniqueTags].sort(), null, 2)
  )
  fs.writeFileSync(
    './raw/unique-ranks.json',
    JSON.stringify([...uniqueRanks].sort(), null, 2)
  )
}

buildItems()

console.log('✅ items-lite.json written')
console.log('📁 individual item files written to ./scripts/data/items/')
console.log('🔖 unique-tags.json and unique-ranks.json written')
