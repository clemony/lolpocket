const fs = require('node:fs')
const path = require('node:path')

// Load your full champions data
const champions = JSON.parse(fs.readFileSync('./public/api/champions.json', 'utf-8'))

// Utility to normalize strings (capitalize first letter, lowercase the rest)
function normalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// Utility to normalize string arrays
function normalizeArray(arr) {
  return arr.map(normalize)
}

// Create output directory
const outputDir = './public/api/champions'
fs.mkdirSync(outputDir, { recursive: true })



for (const champ of Object.values(champions)) {
  const {
    id,
    key,
    name,
    title,
    fullName,
    icon,
    resource,
    attackType,
    stats,
    positions,
    roles,
    attributeRatings,
    abilities,
  } = champ

  // Filter out ARAM/URF stats
  const filteredStats = Object.fromEntries(
    Object.entries(stats).filter(([k]) => !k.startsWith('aram') && !k.startsWith('urf'))
  )

  const champData = {
    id,
    key,
    name,
    title,
    fullName,
    icon,
    resource: normalize(resource),
    attackType: normalize(attackType),
    stats: filteredStats,
    positions: normalizeArray(positions),
    roles: normalizeArray(roles),
    attributeRatings,
    abilities,
  }

  const outputPath = path.join(outputDir, `${key}.json`)
  fs.writeFileSync(outputPath, JSON.stringify(champData, null, 2))
  console.log(`✅ Wrote ${key}.json`)
}