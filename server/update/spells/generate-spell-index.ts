import fs from 'node:fs'
import path from 'node:path'
import type { Spell } from '../../../@types'
import { resolvePath } from '../resolvePath'
import { markUpdate } from '../utils'

const dataPath = resolvePath('./spells/raw/spells.json')
const outputPath = path.resolve('./shared/appdata/index/spell-index.ts')
const raw: Spell[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

const index = raw.map(spell => ({
  id: spell.id,
  key: 'spell',
  name: spell.name
}))

fs.writeFileSync(
  outputPath,
  `// ${markUpdate()}

export const spellIndex: SpellIndex[] = ${JSON.stringify(index, null, 2)}`
)

console.log('✅ spell-index.json written with id and name only')
