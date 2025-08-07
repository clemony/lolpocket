import fs from 'node:fs'
import path from 'node:path'
import type { Champion } from '../../shared/types/types-champion'
import { markUpdate } from '../utils/mark-update'

const outputFile = path.resolve('./app/data/index/champion-index.ts')

const champs = JSON.parse(
  fs.readFileSync('./data/raw/champions-raw.json', 'utf-8'),
)

// Extract id, name, and path
const index: { id: number, key: string, name: string }[] = []

for (const champ in champs) {
  const champion = champs[champ]

  index.push({
    id: Number(champion.key),
    key: champion.id,
    name: champion.name,
  })
}

// Create the TypeScript content
const output = `// ${markUpdate()}

export const championIndex: ChampionIndex[] = ${JSON.stringify(index, null, 2)}
`

fs.writeFileSync(outputFile, output)
console.log(`✅ champion-index.ts created with ${index.length} champions.`)
