import fs from 'node:fs'
import { markUpdate } from '../..'
import { resolvePath } from '../resolvePath'

const outputFile = resolvePath('./shared/appdata/index/champion-index.ts')
const dataPath = resolvePath('./scripts/update/champions/raw/champions-raw.json')

const champs = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

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
