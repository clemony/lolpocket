// node scripts/generate-items-lite.js

const fs = require('node:fs')
const path = require('node:path')

const inputPath = path.resolve(__dirname, '../public/api/items.json')
const outputPath = path.resolve(__dirname, '../public/api/items-lite.json')

const raw = fs.readFileSync(inputPath, 'utf-8')
const fullData = JSON.parse(raw)

const simplified = {}

for (const id in fullData) {
  const item = fullData[id]
  const flatStats = {}

  for (const statName in item.stats || {}) {
    const stat = item.stats[statName]
    const value = stat.flat || stat.percent || stat.perLevel || stat.percentPerLevel || stat.percentBase || stat.percentBonus || 0
    if (value !== 0) {
      flatStats[statName] = value
    }
  }

  simplified[id] = {
    id: item.id,
    name: item.name,
    rank: item.rank,
    stats: flatStats,
    cost: item.shop?.prices?.total ?? 0,
    tags: item.shop?.tags ?? [],
  }
}

fs.writeFileSync(outputPath, JSON.stringify(simplified, null, 2))
console.log(`✅ items-lite.json written to ${outputPath}`)