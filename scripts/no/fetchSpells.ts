// npx tsx scripts/fetchSpells.ts
import { writeFileSync } from 'fs'
import { $fetch } from 'ofetch' // if using ofetch, e.g. in Nuxt or standalone
import { Client } from 'shieldbow'
import process from 'node:process'
import dotenv from 'dotenv'
import fs from 'node:fs'

dotenv.config()

const client = new Client(process.env.RIOT_API_KEY)

await client.initialize({ region: 'na', fetch: false, storage: {
  enable: {
    dragon: false,
    api: false,
  },

}, cache: { enable: { api: true } } })

const fetchSpells = await client.summonerSpells.fetchAll()
const filterSpells = fetchSpells.filter(s => s.name != 'Placeholder')
const transformedSpells = filterSpells.map((spell: any) => ({
id: spell.id,
name: spell.name,
key: spell.key,
cooldown: spell.cooldown,
range: spell.range,
maxAmmo: spell.maxAmmo,
summonerLevel: spell.summonerLevel,
description: spell.description,
tooltip: spell.tooltip,
modes: spell.modes,
}))
console.log("💠 - transformedSpells - transformedSpells:", transformedSpells)

writeFileSync(
          './public/api/summoner-spells.json',
          JSON.stringify(transformedSpells, null, 2),
        )
        console.log('File written to ./public/api/summoner-spells.json')
// const run = async () => {
//   try {
//     const url = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-spells.json'
//     const response = await $fetch(url)

//     if (response) {
//       console.log('Fetched', response.length, 'spells')
//       writeFileSync(
//         './public/api/summoner-spells.json',
//         JSON.stringify(response, null, 2),
//       )
//       console.log('File written to ./public/api/summoner-spells.json')
//     }
//   } catch (error) {
//     console.error('Fetch failed:', error)
//   }
// }

// run()