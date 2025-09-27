import type { Spell } from '#shared/types'
import fs from 'node:fs'
import path from 'node:path'
import { markUpdate } from '../../../scripts'

const dataPath = path.resolve('scripts/data/spells.json')
const raw: Spell[] = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

const index = raw.map(spell => ({
  id: spell.id,
  name: spell.name,
}))

fs.writeFileSync(
  './shared/appdata/index/spell-index.ts',
  `// ${markUpdate()}

export const spellIndex: Record<string, string | number>[] = ${JSON.stringify(index, null, 2)}`
)

console.log('✅ spell-index.json written with id and name only')
