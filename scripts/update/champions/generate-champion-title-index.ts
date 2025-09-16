import fs from 'node:fs'
import type { Champion } from '../../../shared/types/types.champion'
import { markUpdate } from '../../../shared/utils/markUpdate'
import { resolvePath } from '../resolvePath'

const outputFile = resolvePath(
  '../../shared/appdata/index/champion-title-index.ts'
)
const dataPath = resolvePath('./champions/raw/champions-raw.json')
const champs = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as Record<
  string,
  Champion
>

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
console.log(
  `✅ champion-title-index.ts created with ${Object.keys(index).length} champions.`
)
