import fs from 'fs'
import path from 'path'
import { formatStats, normalizeItemData } from './utils/formatItems'

const inputPath = path.resolve('./public/api/items.json')
const outputLitePath = path.resolve('./public/api/items-lite.json')
const itemOutputDir = path.resolve('./public/api/items/')

const raw = fs.readFileSync(inputPath, 'utf-8')
const fullData = JSON.parse(raw)

const simplified = {}
const uniqueTags = new Set()
const uniqueRanks = new Set()

// Ensure the output directory exists
fs.mkdirSync(itemOutputDir, { recursive: true })

for (const id in fullData) {
  const item = fullData[id]

  if (item.id === 2146) continue

  const stats = formatStats(item.stats)
  const { rank, tags, maps } = normalizeItemData(item)

  // Add to unique sets
  tags.forEach(t => uniqueTags.add(t))


  rank.forEach(r => uniqueRanks.add(r))

  if (item.id === 2141 && item.shop) {
    item.shop.purchasable = false
  }
  // Add to lite output
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

  // Add to full item file
  const fullItem = {
    ...item,
    rank,
    stats,
    maps,
  }

  fs.writeFileSync(
    path.resolve(itemOutputDir, `${item.id}.json`),
    JSON.stringify(fullItem, null, 2)
  )
}

// Write combined lite output
fs.writeFileSync(outputLitePath, JSON.stringify(simplified, null, 2))

// Write unique tag/rank lists
fs.writeFileSync('./public/api/lists/unique-tags.json', JSON.stringify([...uniqueTags].sort(), null, 2))
fs.writeFileSync('./public/api/lists/unique-ranks.json', JSON.stringify([...uniqueRanks].sort(), null, 2))

console.log('✅ items-lite.json written')
console.log('📁 individual item files written to ./public/api/items/')
console.log('🔖 unique-tags.json and unique-ranks.json written')