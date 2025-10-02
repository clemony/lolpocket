import fs from 'node:fs'
import { markUpdate } from '../../../server'
import { resolvePath } from '../resolvePath'
import { pathIds } from './raw/pathIds'

// pathIds is your existing object: path name -> array of perk IDs
const runeIdToPath: Record<number, string> = {}
Object.entries(pathIds).forEach(([pathName, perkIds]) => {
  perkIds.forEach((id) => {
    runeIdToPath[id] = pathName
  })
})

// write it as a TS file
const runeIdToPathOutput = resolvePath(
  '#shared/appdata/index/rune-to-path.ts'
)
fs.writeFileSync(
  runeIdToPathOutput,
  `// ${markUpdate()}

export const runeToPath: Record<number, string> = ${JSON.stringify(runeIdToPath, null, 2)}`
)

console.log(
  `✅ runeIdToPath.ts created with ${Object.keys(runeIdToPath).length} entries`
)
