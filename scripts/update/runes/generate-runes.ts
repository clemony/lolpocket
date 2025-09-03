import fs from 'node:fs'
import path from 'node:path'
import { markUpdate } from '../..'
import { resolvePath } from '../resolvePath'

const dataPath = resolvePath('./runes/raw/runes-raw.json')
const runesOutput = resolvePath('../../../shared/appdata/records/runes.ts')
const runeOutputDir = resolvePath('../../../shared/appdata/records/runes')
const raw = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

const outputIndex: Record<string, any> = {}

fs.rmSync(runeOutputDir, { recursive: true, force: true }) // clean old runes
fs.mkdirSync(runeOutputDir, { recursive: true })

for (const path of raw) {
  const pathName = path.key
  const pathDir = path.join(runeOutputDir, pathName)
  fs.mkdirSync(pathDir, { recursive: true })

  const slots = path.slots.map((slot, slotIndex) =>
    slot.map((rune, runeIndex) => {
      const enriched = {
        ...rune,
        path: pathName,
        runeIndex,
      }

      // Write individual rune file
      const filePath = path.join(pathDir, `${rune.key}.ts`)

      fs.writeFileSync(
        filePath,
        `// ${markUpdate()}

const rune: Rune =
        ${JSON.stringify(enriched, null, 2)}
        export default rune`,
      )

      return enriched
    }),
  )

  outputIndex[pathName] = slots
}

// Optional: Write TypeScript file for static import support
fs.writeFileSync(
  runesOutput,
  `// ${markUpdate()}

export const runePaths: PathRecord = ${JSON.stringify(outputIndex, null, 2)}`,
)

console.log('✅ Split rune files generated per rune')
