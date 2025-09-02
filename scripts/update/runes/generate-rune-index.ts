import fs from 'node:fs'
import path from 'node:path'
import { markUpdate } from '../..'
import type { Path } from '../../../shared/types/types.rune'

// Load the raw rune data
const dataPath = path.resolve('scripts/data/runes.json')
const paths: Path[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

// Extract id, name, and path
const index: { id: number, key: string, name: string, path: string }[] = []

for (const pathKey in paths) {
  const path = paths[pathKey]

  for (const slotKey in path) {
    if (!Number.isInteger(Number(slotKey)))
      continue // Skip non-slot keys like 'id', 'key', 'name'

    for (const rune of path[slotKey]) {
      index.push({
        id: rune.id,
        key: rune.key,
        name: rune.name,
        path: rune.path,
      })
    }
  }
}

const tsOutput = `// ${markUpdate()}

export const runeIndex: RuneIndex[] = ${JSON.stringify(index, null, 2)}`
fs.writeFileSync('./shared/appdata/index/rune-index.ts', tsOutput)
console.log(`✅ rune-index.ts created with ${index.length} runes`)
