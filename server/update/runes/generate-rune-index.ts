import fs from 'node:fs'
import path from 'node:path'
import type { RunePath } from '../../../@types'
import { resolvePath } from '../resolvePath'
import { markUpdate } from '../utils'

// Load the transformed rune paths
const dataPath = resolvePath('./runes/raw/runes.json')
const paths: RunePath[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
const outputDir = path.resolve('./shared/appdata/index/rune-index.ts')
const outputKeystone = path.resolve('./shared/appdata/index/keystone-index.ts')

// Extract id, name, and path
const index: { id: number, name: string, key: string }[] = []

for (const path of paths) {
  for (const slot of path.slots) {
    for (const rune of slot.runes) {
      index.push({
        id: rune.id,
        key: 'rune',
        name: rune.name,
      })
    }
  }
}

const keystoneIndex: number[] = []
for (const path of paths) {
  for (const rune of path.slots[0].runes) {
    keystoneIndex.push(rune.id)
  }
}

const tsOutput = `// ${markUpdate()}

export const runeIndex: RuneIndex[] = ${JSON.stringify(index, null, 2)}`
fs.writeFileSync(outputDir, tsOutput)

const keystoneOutput = `// ${markUpdate()}

export const keystoneIndex: number[] = ${JSON.stringify(keystoneIndex, null, 2)}`
fs.writeFileSync(outputKeystone, keystoneOutput)

console.log(`✅ rune-index.ts created with ${index.length} runes`)
