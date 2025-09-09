import fs from 'node:fs'
import { markUpdate, normalize, normalizeArray } from '../../../scripts'
import type { ChampionLite, ChampionLiteRecord } from '../../../shared/types'
import { resolvePath } from '../resolvePath'

const dataPath = resolvePath('./champions/raw/champions-raw.json')
const outputLite = resolvePath('../../shared/appdata/records/champions-lite.ts')
const outputRoles = resolvePath('./champions/raw/unique-roles.json')
const outputPositions = resolvePath('./champions/raw/unique-positions.json')

const champions = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as Record<string, ChampionLite>

const uniqueRoles = new Set()
const uniquePositions = new Set()
const championsLite = Object.values(champions).reduce((acc, champ) => {
  if (!champ)
    return acc

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
  } = champ as ChampionLite

  if (id == null)
    return acc

  const normalizedPositions = normalizeArray(positions)
  const normalizedRoles = normalizeArray(roles)
  normalizedPositions.forEach(tag => uniquePositions.add(tag))
  normalizedRoles.forEach(rank => uniqueRoles.add(rank))

  acc[key] = {
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
          Object.fromEntries(Object.entries(val).filter(([, v]) => v !== 0)),
        ])
        .filter(([, val]) => Object.keys(val).length > 0),
    ),
    positions: normalizedPositions,
    roles: normalizedRoles,
    attributeRatings,
  }

  return acc
}, {} as ChampionLiteRecord)

fs.writeFileSync(
  outputLite,
  `// ${markUpdate()}

export const championsLite: ChampionLite[] = ${JSON.stringify(Object.values(championsLite), null, 2)}`,
)

console.log('Writing roles:', [...uniqueRoles])

// Write unique lists for dev use
fs.writeFileSync(
  outputRoles,
  JSON.stringify([...uniqueRoles].sort(), null, 2),
)
fs.writeFileSync(
  outputPositions,
  JSON.stringify([...uniquePositions].sort(), null, 2),
)
