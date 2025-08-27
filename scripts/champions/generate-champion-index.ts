import fs from 'node:fs'
import path from 'node:path'
import { markUpdate } from '..'

const outputFile = path.resolve('./shared/appdata/index/champion-index.ts')

const champs = JSON.parse(
  fs.readFileSync('./data/raw/champions-raw.json', 'utf-8'),
)

// Extract id, name, and path
const index: { id: number, key: string, name: string }[] = []

for (const champ in champs) {
  const champion = champs[champ]

  index.push({
    id: champion.id,
    key: champion.key,
    name: champion.name,
  })
}

// Create the TypeScript content
const output = `// ${markUpdate()}

export const championIndex: ChampionIndex[] = ${JSON.stringify(index, null, 2)}
`

fs.writeFileSync(outputFile, output)
console.log(`✅ champion-index.ts created with ${index.length} champions.`)
