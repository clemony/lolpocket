import fs from "node:fs"
import { normalize, normalizeArray } from "../utils/normalize-strings"

const champions = JSON.parse(
  fs.readFileSync("./data/raw/champions-raw.json", "utf-8")
) as Record<string, Champion>
const filter = {
  attackType: {},
  resource: {},
  stats: {},
}

for (const champ of Object.values(champions)) {
  const { id, attackType, resource, stats = {} } = champ

  if (!id) continue

  // Attack Type
  const atk = normalize(attackType)
  if (!filter.attackType[atk]) filter.attackType[atk] = []
  filter.attackType[atk].push(id)

  // Resource
  const res = normalize(resource)
  if (!filter.resource[res]) filter.resource[res] = []
  filter.resource[res].push(id)

  // Stats
  for (const [stat, values] of Object.entries(stats)) {
    const flatValues = Object.values(values).filter(
      (n) => typeof n === "number"
    )
    const avg = flatValues.reduce((a, b) => a + b, 0) / flatValues.length
    if (!filter.stats[stat]) filter.stats[stat] = []
    filter.stats[stat].push({ id, amount: avg })
  }
}

fs.writeFileSync(
  "./app/data/filters/champion-data.ts",
  `export const championFilters = ${JSON.stringify(filter, null, 2)}`
)
