import type { Champion } from '#shared/types'
import fs from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import { normalizeArray } from '~/utils'

const rootDir = process.cwd()
const dataPath = join(rootDir, 'server/update/champions/raw/champions-raw.json')
const outputPath = join(rootDir, 'shared/appdata/filters/champion-filters.ts')
const champions = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as Record<string, Champion>

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
  outputPath,
  `// ${markUpdate()}

export const championFilters = ${JSON.stringify(filter, null, 2)}`,
)
