import fs from "node:fs"
import { normalize, normalizeArray } from "../utils/normalize-strings"

const champions = JSON.parse(
  fs.readFileSync("./data/raw/champions-raw.json", "utf-8")
) as Record<string, Champion>
const filter = {
  roles: {},
  positions: {},
}

for (const champ of Object.values(champions)) {
  const { id, positions = [], roles = [] } = champ

  if (!id) continue

  // Positions / Roles
  for (const pos of normalizeArray(positions)) {
    if (!filter.positions[pos]) filter.positions[pos] = []
    filter.positions[pos].push(id)
  }

  for (const role of normalizeArray(roles)) {
    if (!filter.roles[role]) filter.roles[role] = []
    filter.roles[role].push(id)
  }
}

fs.writeFileSync(
  "./app/data/filters/champion-filters.ts",
  `export const championFilters = ${JSON.stringify(filter, null, 2)}`
)
