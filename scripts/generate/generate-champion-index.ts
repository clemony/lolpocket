import fs from "node:fs"
import path from "node:path"
import { markUpdate } from "../utils/mark-update"

const championsDir = path.resolve("./data/champions")
const outputFile = path.resolve("./app/data/index/champion-index.ts")

const files = fs
  .readdirSync(championsDir)
  .filter((file) => file.endsWith(".json"))

const index = files.map((file) => {
  const filePath = path.join(championsDir, file)
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
  return {
    id: data.id ?? path.basename(file, ".json"),
    key: data.key,
    name: data.name,
  }
})

// Create the TypeScript content
const output = `// ${markUpdate()}

export const championIndex: ChampionIndex[] = ${JSON.stringify(index, null, 2)}
`

fs.writeFileSync(outputFile, output)
console.log(`✅ champion-index.ts created with ${index.length} champions.`)
