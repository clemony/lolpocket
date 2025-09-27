import type { RunePath } from '#shared/types/types.rune'
import fs from 'node:fs'
import { markUpdate } from '../../../scripts'
import { resolvePath } from '../resolvePath'

// Load the transformed rune paths
const dataPath = resolvePath('./runes/raw/runes.json')
const paths: RunePath[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

// Extract id + name for quick lookup
const index: { id: number, name: string, color: string }[] = paths.map(
  path => ({
    id: path.id,
    name: path.name,
    color: `var(--color-${path.name.toLowerCase()})`,
  })
)

const outputDir = resolvePath('#shared/appdata/index/path-index.ts')
const tsOutput = `// ${markUpdate()}

export const pathIndex: PathIndex[] = ${JSON.stringify(index, null, 2)}`
fs.writeFileSync(outputDir, tsOutput)

console.log(`✅ path-index.ts created with ${index.length} paths`)
