import fs from 'node:fs'
import path from 'node:path'
import { formatStats, normalizeItemData } from './utils/formatItems'
import { handleWikiText } from './utils/formatWikitext'

const inputPath = path.resolve('./public/api/items.json')
const outputIndex = path.resolve('./public/api/index/item-index.json')
const outputLitePath = path.resolve('./public/api/items-lite.json')
const itemOutputDir = path.resolve('./public/api/items/')
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
    simplified[id] = {
      id: item.id,
      name: item.name,
      rank,
      stats,
      purchasable: item.shop?.purchasable,
      cost: item.shop?.prices?.total ?? 0,
      tags,
      maps,
    }

    // Handle shop override
    if (item.id === 2141 && item.shop) {
      item.shop.purchasable = false
    }

    const active = item.active || []
    const expandedActive = await Promise.all(
      active.map(async (a) => {
        const effects = await handleWikiText(a.effects)
        return {
          name: a.name,
          unique: a.unique,
          effects,
          cooldown: a.cooldown,
          recharge: a.recharge,
          charges: a.charges,
          range: a.range,
        }
      }),
    )

    const passives = item.passives || []
    const expandedPassives = await Promise.all(
      passives.map(async (p) => {
        const effects = await handleWikiText(p.effects)
        return {
          name: p.name,
          unique: p.unique,
          effects,
          cooldown: p.cooldown,
          recharge: p.recharge,
          charges: p.charges,
          range: p.range,
        }
      }),
    )

    const fullItem = {
      ...item,
      rank,
      stats,
      active: expandedActive,
      passives: expandedPassives,
      maps,
    }

    fs.writeFileSync(
      path.resolve(itemOutputDir, `${item.id}.json`),
      JSON.stringify(fullItem, null, 2),
    )

    console.log(`✅ Processed ${item.name}`)
  }

  // Write outputs
  fs.writeFileSync(outputIndex, JSON.stringify(index, null, 2))
  fs.writeFileSync(outputLitePath, JSON.stringify(simplified, null, 2))
  fs.writeFileSync('./public/api/lists/unique-tags.json', JSON.stringify([...uniqueTags].sort(), null, 2))
  fs.writeFileSync('./public/api/lists/unique-ranks.json', JSON.stringify([...uniqueRanks].sort(), null, 2))
}

buildItems()

console.log('✅ items-lite.json written')
console.log('📁 individual item files written to ./public/api/items/')
console.log('🔖 unique-tags.json and unique-ranks.json written')