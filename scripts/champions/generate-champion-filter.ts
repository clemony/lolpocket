import fs from 'node:fs'
import type { Champion } from '../../shared/types/types-champion'
import { markUpdate } from '../utils/mark-update'
import { normalize, normalizeArray } from '../utils/normalize-strings'

const champions = JSON.parse(
  fs.readFileSync('./data/raw/champions-raw.json', 'utf-8'),
) as Record<string, Champion>
type FilterMap = Record<string, number[]>

const filter: {
  roles: FilterMap
  positions: FilterMap
  attackType: FilterMap
  resource: FilterMap
} = {
  roles: {},
  positions: {},
  attackType: {},
  resource: {},
}

for (const champ of Object.values(champions)) {
  const { id, positions, attackType, resource = [], roles = [] } = champ

  if (!id)
    continue

  // Positions / Roles
  for (const pos of normalizeArray(positions)) {
    if (!filter.positions[pos])
      filter.positions[pos] = []
    filter.positions[pos].push(id)
  }

  for (const role of normalizeArray(roles)) {
    if (!filter.roles[role])
      filter.roles[role] = []
    filter.roles[role].push(id)
  }
  // Attack Type
  const atk = normalize(attackType)
  if (!filter.attackType[atk])
    filter.attackType[atk] = []
  filter.attackType[atk].push(id)

  // Resource
  const res = normalize(resource)
  if (!filter.resource[res])
    filter.resource[res] = []
  filter.resource[res].push(id)
}

fs.writeFileSync(
  './app/data/filters/champion-filters.ts',
  `// ${markUpdate()}

export const championFilters = ${JSON.stringify(filter, null, 2)}`,
)
