import fs from 'node:fs'
import path from 'node:path'
import { markUpdate } from '../..'
import type { Path } from '../../../shared/types/types.rune'

// Load the raw rune data
const dataPath = path.resolve('/scripts/update/runes/raw/runes-raw.json')
const paths: Path[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

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
fs.writeFileSync('./shared/appdata/index/path-index.ts', tsOutput)
console.log(`✅ path-index.ts created with ${index.length} paths`)
