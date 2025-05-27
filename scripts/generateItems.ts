import fs from 'node:fs'
import path from 'node:path'
import { formatStats, normalizeItemData } from './utils/formatItems'
import { handleWikiText } from './utils/formatWikitext'
import { ludensPreProcess } from './utils/wikitext/processing'

const inputPath = path.resolve('./data/raw/items-raw.json')
const outputIndex = path.resolve('./data/index/item-index.json')
const outputLitePath = path.resolve('./data/items-lite.json')
const itemOutputDir = path.resolve('./data/items/')
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
      }),
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
  fs.writeFileSync('./data/dev/unique-tags.json', JSON.stringify([...uniqueTags].sort(), null, 2))
  fs.writeFileSync('./data/dev/unique-ranks.json', JSON.stringify([...uniqueRanks].sort(), null, 2))
}

buildItems()

console.log('✅ items-lite.json written')
console.log('📁 individual item files written to ./data/items/')
console.log('🔖 unique-tags.json and unique-ranks.json written')