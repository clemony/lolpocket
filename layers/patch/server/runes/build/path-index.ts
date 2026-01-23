import fs from "node:fs"
import path from "node:path"
import { resolvePath } from "../../resolvePath"
import { markUpdate } from "../../utils"

// Load the transformed rune paths
const dataPath = resolvePath("./runes/raw/runes.json")
const paths: RunePath[] = JSON.parse(fs.readFileSync(dataPath, "utf-8"))

// Extract id + name for quick lookup
const index: { id: number; name: string; color: string }[] = paths.map(
  (path) => ({
    id: path.id,
    name: path.name,
    color: `var(--color-${path.name.toLowerCase()})`,
    tooltip: path.tooltip,
  })
)

const outputDir = path.resolve("./layers/domain/constants/runes/path-index.ts")
const tsOutput = `// ${markUpdate()}

export const pathIndex: PathIndex[] = ${JSON.stringify(index, null, 2)}`
fs.writeFileSync(outputDir, tsOutput)

console.log(`✅ path-index.ts created with ${index.length} paths`)
