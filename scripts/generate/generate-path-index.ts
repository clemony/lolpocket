import fs from 'node:fs'
import { markUpdate } from '../utils/mark-update'

// Load the raw rune data
const paths: Path[] = JSON.parse(
  fs.readFileSync('./data/raw/runes-raw.json', 'utf-8'),
)

// Extract id, name, and path
const index: { id: number, name: string }[] = []

for (const path of paths) {
  index.push({
    id: path.id,
    name: path.name,
  })
}

const tsOutput = `// ${markUpdate()}

export const pathIndex: PathIndex[] = ${JSON.stringify(index, null, 2)}`
fs.writeFileSync('./app/data/index/path-index.ts', tsOutput)
console.log(`✅ path-index.ts created with ${index.length} paths`)
