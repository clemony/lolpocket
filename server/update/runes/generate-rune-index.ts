import type { RunePath } from '#shared/types/types.rune'
import fs from 'node:fs'
import { markUpdate } from '../../../server'
import { resolvePath } from '../resolvePath'

// Load the transformed rune paths
const dataPath = resolvePath('./runes/raw/runes.json')
const paths: RunePath[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
const outputDir = resolvePath('#shared/appdata/index/rune-index.ts')

// Extract id, name, and path
const index: { id: number, name: string, path: string }[] = []

for (const path of paths) {
  for (const slot of path.slots) {
    for (const rune of slot.runes) {
      index.push({
        id: rune.id,
        name: rune.name,
        path: path.name,
      })
    }
  }
}

const tsOutput = `// ${markUpdate()}

export const runeIndex: RuneIndex[] = ${JSON.stringify(index, null, 2)}`
fs.writeFileSync(outputDir, tsOutput)

console.log(`✅ rune-index.ts created with ${index.length} runes`)
