import fs from 'node:fs'

const raw: Spell[] = JSON.parse(fs.readFileSync('./data/spells.json', 'utf-8'))

const index = raw.map(spell => ({
  id: spell.id,
  name: spell.name,
}))

fs.writeFileSync(
  './app/data/index/spell-index.json',
  JSON.stringify(index, null, 2),
)
console.log('✅ spell-index.json written with id and name only')
