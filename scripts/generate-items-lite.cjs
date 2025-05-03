// node scripts/generate-items-lite.js

const fs = require('node:fs')
const path = require('node:path')

const inputPath = path.resolve(__dirname, '../public/api/items.json')
const outputPath = path.resolve(__dirname, '../public/api/items-lite.json')

const raw = fs.readFileSync(inputPath, 'utf-8')
const fullData = JSON.parse(raw)

const simplified = {}
const uniqueTags = new Set()
const uniqueRanks = new Set()

function capitalize(str) {
  return str.toLowerCase().replace(/^\w/, c => c.toUpperCase())
}

for (const id in fullData) {
  const item = fullData[id]

  // Filter out item ID 2146
  if (item.id === 2146)
    continue

  const flatStats = {}

  for (const statName in item.stats || {}) {
    const stat = item.stats[statName]
    const value = stat.flat || stat.percent || stat.perLevel || stat.percentPerLevel || stat.percentBase || stat.percentBonus || 0

    // Special case for magicPenetration and movespeed
    if (statName === 'magicPenetration') {
      if (stat.flat) {
        flatStats.flatMagicPenetration = stat.flat
      }
      else if (stat.percent) {
        flatStats.percentMagicPenetration = stat.percent
      }
      continue
    }

    if (statName === 'movespeed') {
      if (stat.flat) {
        flatStats.flatMovespeed = stat.flat
      }
      else if (stat.percent) {
        flatStats.percentMovespeed = stat.percent
      }
      continue
    }

    if (value !== 0) {
      flatStats[statName] = value
    }
  }

  const normalizedTags = (item.shop?.tags ?? []).map(capitalize)
  const normalizedRanks = (item.rank ?? []).map(capitalize)

  normalizedTags.forEach(tag => uniqueTags.add(tag))
  normalizedRanks.forEach(rank => uniqueRanks.add(rank))

  simplified[id] = {
    id: item.id,
    name: item.name,
    rank: normalizedRanks,
    stats: flatStats,
    purchasable: item.shop?.purchasable,
    cost: item.shop?.prices?.total ?? 0,
    tags: normalizedTags,
  }
}

// Write main simplified item data
fs.writeFileSync(outputPath, JSON.stringify(simplified, null, 2))

// Write unique lists for dev use
fs.writeFileSync(path.resolve(__dirname, '../public/api/lists/unique-tags.json'), JSON.stringify([...uniqueTags].sort(), null, 2))
fs.writeFileSync(path.resolve(__dirname, '../public/api/lists/unique-ranks.json'), JSON.stringify([...uniqueRanks].sort(), null, 2))

console.log(`✅ items-lite.json written to ${outputPath}`)
console.log('🔖 unique-tags.json and unique-ranks.json also saved.')