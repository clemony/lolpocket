import fs from 'node:fs'
import path from 'node:path'
import type { Champion } from '../../shared/types/types-champion'
import { markUpdate } from '../utils/mark-update'

const outputFile = path.resolve('./app/data/index/champion-title-index.ts')

const champs = JSON.parse(
  fs.readFileSync('./data/raw/champions-raw.json', 'utf-8'),
) as Record<string, Champion>

const index: Record<string, string> = {}

for (const key in champs) {
  const champ = champs[key]
  if (champ.key && champ.title)
    index[champ.key] = champ.title
}

// Create the TypeScript content
const output = `// ${markUpdate()}

export const championTitleIndex: Record<string, string> = ${JSON.stringify(index, null, 2)}
`

fs.writeFileSync(outputFile, output)
console.log(`✅ champion-title-index.ts created with ${Object.keys(index).length} champions.`)