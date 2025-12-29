import fs from "node:fs"
import path from "node:path"
import { resolvePath } from "../resolvePath"
import { markUpdate } from "../utils/markUpdate"

const outputFile = path.resolve("./shared/constants/champion-index.ts")
const outputRoles = path.resolve("./shared/constants/champ-key-to-role.ts")
const dataPath = resolvePath("./champions/raw/champions-raw.json")

const champs = JSON.parse(fs.readFileSync(dataPath, "utf-8"))

// Extract id, name, and path
const index: { id: number; key: string; name: string }[] = []
const roleIndex: Record<string, string> = {}
for (const champ in champs) {
  const champion = champs[champ]

  index.push({
    id: Number.parseInt(champion.id), // data dragon is reversed (dd.key === my.id)
    key: champion.key, // reversed
    name: champion.name,
  })
}

for (const key in champs) {
  const champion = champs[key]
  if (champion.key && champion.roles[0])
    roleIndex[champion.key] = champion.roles[0]
}
// Create the TypeScript content
const output = `// ${markUpdate()}

export const championIndex: ChampionIndex[] = ${JSON.stringify(index, null, 2)}
`

// Create the TypeScript content
const roleOutput = `// ${markUpdate()}

export const champKeyToRole: Record<string, string> = ${JSON.stringify(roleIndex, null, 2)}
`

fs.writeFileSync(outputFile, output)
fs.writeFileSync(outputRoles, roleOutput)
console.log(`✅ champion-index.ts created with ${index.length} champions.`)
