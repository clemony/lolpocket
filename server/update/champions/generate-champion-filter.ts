import fs from "node:fs";
import path from "node:path";
import type { Champion } from "../../types/types.import";
import { markUpdate, normalize, normalizeArray } from "../utils";

const dataPath = path.resolve(
  "./server/update/champions/raw/champions-raw.json",
);
const outputPath = path.resolve("./shared/filters/champion-filters.ts");
const champions = JSON.parse(fs.readFileSync(dataPath, "utf-8")) as Record<
  string,
  Champion
>;

type FilterMap = Record<string, number[]>;

const filter: {
  roles: FilterMap;
  positions: FilterMap;
  attackType: FilterMap;
  resource: FilterMap;
} = {
  attackType: {},
  positions: {},
  resource: {},
  roles: {},
};

for (const champ of Object.values(champions)) {
  const { id, attackType, positions, resource = [], roles = [] } = champ;

  if (!id) continue;

  // Positions / Roles
  for (const pos of normalizeArray(positions)) {
    if (!filter.positions[pos]) filter.positions[pos] = [];
    filter.positions[pos].push(id);
  }

  for (const role of normalizeArray(roles)) {
    if (!filter.roles[role]) filter.roles[role] = [];
    filter.roles[role].push(id);
  }
  // Attack Type
  const atk = normalize(attackType);
  if (!filter.attackType[atk]) filter.attackType[atk] = [];
  filter.attackType[atk].push(id);

  // Resource
  const res = normalize(resource);
  if (!filter.resource[res]) filter.resource[res] = [];
  filter.resource[res].push(id);
}

fs.writeFileSync(
  outputPath,
  `// ${markUpdate()}

export const championFilters = ${JSON.stringify(filter, null, 2)}`,
);
