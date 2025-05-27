import fs from 'node:fs'
import path from 'node:path'
import { normalizeAbility } from './utils/normalizeAbility'
import { normalize, normalizeArray } from './utils/normalizeStrings'

// Load your full champions data
const champions = JSON.parse(fs.readFileSync('./data/raw/champions-raw.json', 'utf-8'))

// Create output directory
const outputDir = './data/champions'
fs.mkdirSync(outputDir, { recursive: true })

for (const champ of Object.values(champions) as FullChampion[]) {
  const {
    id,
    key,
    name,
    title,
    fullName,
    resource,
    attackType,
    stats,
    positions,
    roles,
    attributeRatings,
    abilities,
    lore,
    skins,
  } = champ

  // Get splash from base skin
  const splash = skins?.find(skin => skin.isBase)?.tilePath ?? null

  // Cleaned stats
  const filteredStats = Object.fromEntries(
    Object.entries(stats)
      .filter(([key]) => !key.startsWith('aram') && !key.startsWith('urf'))
      .map(([key, val]) => [
        key,
        Object.fromEntries(
          Object.entries(val).filter(([, v]) => v !== 0 && v != null),
        ),
      ])
      .filter(([, val]) => Object.keys(val).length > 0),
  )

  const cleanedAbilities = champ.abilities && typeof champ.abilities === 'object'
    ? Object.fromEntries(
        Object.entries(champ.abilities).map(([slot, entries]) => [
          slot,
          entries.map(normalizeAbility),
        ]),
      )
    : {}

  const champDataRaw = {
    id,
    key,
    name,
    title,
    fullName,
    resource: normalize(resource),
    attackType: normalize(attackType),
    stats: filteredStats,
    positions: normalizeArray(positions),
    roles: normalizeArray(roles),
    attributeRatings,
    abilities: cleanedAbilities,
    lore,
    splash,
  }

  const champData = Object.fromEntries(
    Object.entries(champDataRaw).filter(([, value]) =>
      value != null
      && value !== ''
      && !(Array.isArray(value) && value.length === 0),
    ),
  )
  const outputPath = path.join(outputDir, `${key}.json`)
  fs.writeFileSync(outputPath, JSON.stringify(champData, null, 2))
  console.log(`✅ Wrote ${key}.json`)
}