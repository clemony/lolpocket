// npx tsx scripts/fetchSpells.ts
import dotenv from 'dotenv'
import fs, { writeFileSync } from 'node:fs'
import process from 'node:process'
import { $fetch } from 'ofetch' // if using ofetch, e.g. in Nuxt or standalone
import { Client } from 'shieldbow'

dotenv.config()

/* const client = new Client('placeholder')

await client.initialize({
  region: 'na',
  fetch: false,
  storage: {
    enable: {
      dragon: false,
      api: false,
    },
  },
  cache: { enable: { api: true } },
})

const fetchSpells = await client.summonerSpells.fetchAll()
const filterSpells = fetchSpells.filter(s => s.name != 'Placeholder')
const transformedSpells = filterSpells.map((spell: any) => ({
  id: spell.id,
  name: spell.name,
  key: spell.key,
  sharedVars: spell.sharedVars,
  values: spell.values,
  cooldown: spell.cooldown,
  range: spell.range,
  maxAmmo: spell.maxAmmo,
  summonerLevel: spell.summonerLevel,
  description: spell.description,
  tooltip: spell.tooltip,
  modes: spell.modes,
})) */
/* console.log('💠 - transformedSpells - transformedSpells:', transformedSpells)

writeFileSync(
  './data/summoner-spells.json',
  JSON.stringify(transformedSpells, null, 2),
) */
console.log('File written to ./data/summoner-spells.json')
// const run = async () => {
//   try {
//     const url = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-spells.json'
//     const response = await $fetch(url)

//     if (response) {
//       console.log('Fetched', response.length, 'spells')
//       writeFileSync(
//         './data/summoner-spells.json',
//         JSON.stringify(response, null, 2),
//       )
//       console.log('File written to ./data/summoner-spells.json')
//     }
//   } catch (error) {
//     console.error('Fetch failed:', error)
//   }
// }

// run()
