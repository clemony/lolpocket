import fs from 'node:fs'
import path from 'node:path'
import { normalize, normalizeArray } from './utils/normalizeStrings'

const champions = JSON.parse(fs.readFileSync('./public/api/champions.json', 'utf-8'))

const uniqueRoles = new Set()
const uniquePositions = new Set()
const championsLite = Object.values(champions).map((champ) => {
  if (!champ)
    return null
  const {
    id,
    key,
    name,
    resource = '',
    attackType = '',
    stats = {},
    positions = [],
    roles = [],
    attributeRatings = {},
    skins,
  } = champ as Partial<FullChampion>

  const normalizedPositions = normalizeArray(positions)
  const normalizedRoles = normalizeArray(roles)
  normalizedPositions.forEach(tag => uniquePositions.add(tag))
  normalizedRoles.forEach(rank => uniqueRoles.add(rank))
  // Get splash from base skin
  const splash = skins?.find(skin => skin.isBase)?.splashPath ?? null

  return {
    id,
    key,
    name,
    resource: normalize(resource.replace('_', ' ')),
    attackType: normalize(attackType),
    stats: Object.fromEntries(
      Object.entries(stats)
        .filter(([key]) => !key.startsWith('aram') && !key.startsWith('urf'))
        .map(([key, val]) => [
          key,
          Object.fromEntries(
            Object.entries(val).filter(([, v]) => v !== 0),
          ),
        ])
        .filter(([, val]) => Object.keys(val).length > 0),
    ),
    positions: normalizedPositions,
    roles: normalizedRoles,
    attributeRatings,
    splash,
  }
}).filter(Boolean) // remove any nulls

fs.writeFileSync(
  './public/api/champions-lite.json',
  JSON.stringify(championsLite, null, 2),
)
console.log('Writing roles:', [...uniqueRoles])

// Write unique lists for dev use
fs.writeFileSync(
  ('./public/api/lists/unique-roles.json'),
  JSON.stringify([...uniqueRoles].sort(), null, 2),
)
fs.writeFileSync(('./public/api/lists/unique-positions.json'), JSON.stringify([...uniquePositions].sort(), null, 2))

console.log('✅ champions-lite.json written!')
