import fs from "node:fs"
import path from "node:path"
import type { Champion } from "../../types/types.import"
import { markUpdate, normalize, normalizeArray } from "../utils"

const dataPath = path.resolve("./server/patch/champions/raw/champions-raw.json")
const outputPos = path.resolve("./shared/constants/champions/position-to-champ.ts")
const outputAtk = path.resolve("./shared/constants/champions/range-to-champp.ts")
const outputResource = path.resolve("./shared/constants/champions/resource-to-champ.ts")
const outputRoles = path.resolve("./shared/constants/champions/role-to-champ.ts")
const champions = JSON.parse(fs.readFileSync(dataPath, "utf-8")) as Record<
  string,
  Champion
>

type FilterMap = Record<string, number[]>

const  positions: FilterMap= {}
 const  attackType: FilterMap={}
  const  resource: FilterMap ={}
 const roles: FilterMap={}

for (const champ of Object.values(champions)) {
  const { id, attackType: a, positions:p, resource:re = [], roles:r = [] } = champ

  if (!id) continue

  // Positions / Roles
  for (const pos of normalizeArray(p)) {
    if (!positions[pos]) positions[pos] = []
    positions[pos].push(id)
  }

  for (const role of normalizeArray(r)) {
    if (!roles[role]) roles[role] = []
    roles[role].push(id)
  }
  // Attack Type
  const atk = normalize(a)
  if (!attackType[atk]) attackType[atk] = []
  attackType[atk].push(id)

  // Resource
  const res = normalize(re)
  if (!resource[res]) resource[res] = []
  resource[res].push(id)
}

fs.writeFileSync(
  outputResource,
  `// ${markUpdate()}

export const resourceToChamp: Record<string, number[]> = ${JSON.stringify(resource, null, 2)}`
)


fs.writeFileSync(
  outputAtk,
  `// ${markUpdate()}

export const rangeToChamp: Record<string, number[]> = ${JSON.stringify(attackType, null, 2)}`
)

fs.writeFileSync(
  outputRoles,
  `// ${markUpdate()}

export const roleToChamp: Record<string, number[]> = ${JSON.stringify(roles, null, 2)}`
)

fs.writeFileSync(
  outputPos,
  `// ${markUpdate()}

export const positionToChamp: Record<string, number[]> = ${JSON.stringify(positions, null, 2)}`
)
