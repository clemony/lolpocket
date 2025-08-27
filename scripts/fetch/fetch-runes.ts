import dotenv from 'dotenv'
import fs from 'node:fs'
import process from 'node:process'
import { Client } from 'shieldbow'

dotenv.config()

// FIXME
const client = new Client(process.env.RIOT_API_KEY)

await client.initialize({ region: 'na', fetch: false, storage: {
  enable: {
    dragon: false,
    api: false,
  },

}, cache: { enable: { api: true } } })

const fetchRunes = await client.runes.fetchAll()

const runeData = await fetchRunes

const transformedRunes = runeData.map((tree: any) => ({
  id: tree.id,
  key: tree.key,
  name: tree.name,
  slots: tree.slots.map((slot: any[]) =>
    slot.map(rune => ({
      id: rune.id,
      key: rune.key,
      name: rune.name,
      description: rune.description,
      details: rune.details,
    })),
  ),
}))

fs.writeFileSync(
  './data/raw/runes-raw.json',
  JSON.stringify(transformedRunes, null, 2),
)

console.log('✅ runes.json written!')
