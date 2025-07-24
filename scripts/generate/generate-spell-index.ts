import fs from 'node:fs'
import { markUpdate } from '../utils/mark-update'

const raw: Spell[] = JSON.parse(fs.readFileSync('./data/spells.json', 'utf-8'))

const index = raw.map(spell => ({
  id: spell.id,
  name: spell.name,
}))

fs.writeFileSync(
  './app/data/index/spell-index.ts',
  `// ${markUpdate()}

export const spellIndex: Record<string, string | number>[] = ${JSON.stringify(index, null, 2)}`,
)

console.log('✅ spell-index.json written with id and name only')
