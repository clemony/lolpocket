import fs from 'node:fs'
import { resolve } from 'node:path'
import { markUpdate } from '../../misc/markUpdate'
import { normalize, normalizeArray } from '../../utils'

const dataPath = resolve('./layers/patch/server/champions/raw/champions-raw.json')
const outputLite = resolve(
  './layers/patch/shared/records/champions-lite.ts'
)
const outputRoles = resolve('./layers/patch/server/champions/raw/unique-roles.json')
const outputPositions = resolve('./layers/patch/server/champions/raw/unique-positions.json')

const champions = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as Record<
  string,
  ChampionLite
>

const uniqueRoles = new Set()
const uniquePositions = new Set()
const championsLite = Object.values(champions).reduce((acc, champ) => {
  if (!champ) return acc

  const {
    id,
    key,
    name,
    attackType = '',
    resource = '',
    attributeRatings = {},
    positions = [],
    roles = [],
    stats = {},
  } = champ as ChampionLite

  if (id == null) return acc

  const normalizedPositions = normalizeArray(positions)
  const normalizedRoles = normalizeArray(roles)
  normalizedPositions.forEach(tag => uniquePositions.add(tag))
  normalizedRoles.forEach(rank => uniqueRoles.add(rank))

  acc[key] = {
    id,
    key,
    name,
    attackType: normalize(attackType),
    attributeRatings,
    positions: normalizedPositions,
    resource: normalize(resource?.replace('_', ' ')),
    roles: normalizedRoles,
    stats: Object.fromEntries(
      Object.entries(stats)
        .filter(([key]) => !key.startsWith('aram') && !key.startsWith('urf'))
        .map(([key, val]) => [
          key,
          Object.fromEntries(Object.entries(val).filter(([, v]) => v !== 0)),
        ])
        .filter(([, val]) => Object.keys(val).length > 0)
    ),
  }

  return acc
}, {} as ChampionLiteRecord)

fs.writeFileSync(
  outputLite,
  `// ${markUpdate()}
import type { ChampionLite } from "#shared/types"

export const championsLite: ChampionLite[] = ${JSON.stringify(Object.values(championsLite), null, 2)}`
)

console.log('Writing roles:', [...uniqueRoles])

// Write unique lists for dev use
fs.writeFileSync(outputRoles, JSON.stringify([...uniqueRoles].sort(), null, 2))
fs.writeFileSync(
  outputPositions,
  JSON.stringify([...uniquePositions].sort(), null, 2)
)
