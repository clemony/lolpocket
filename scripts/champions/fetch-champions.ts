// npx tsx scripts/fetchChampions.ts
import fs from 'node:fs'
import { $fetch } from 'ofetch'

const loadPatch = JSON.parse(fs.readFileSync('./data/raw/patch-index-raw.json', 'utf-8'))

const urlMA
      = 'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json'
const urlDD
      = `https://ddragon.leagueoflegends.com/cdn/${loadPatch[0]}.1/data/en_US/championFull.json`

const [maChampions, ddData] = await Promise.all([
  $fetch(urlMA),
  $fetch(urlDD),
])

fs.writeFileSync(
  './data/raw/champions-raw-meraki.json',
  JSON.stringify(maChampions, null, 2),
)
fs.writeFileSync(
  './data/raw/champions-raw-data-dragon.json',
  JSON.stringify(ddData.data, null, 2),
)
console.log('✅ file written to ./data/raw/champions-raw-data-dragon.json')
