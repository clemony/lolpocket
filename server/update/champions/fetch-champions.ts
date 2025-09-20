// npx tsx scripts/fetchChampions.ts
import fs from 'node:fs'
import { $fetch } from 'ofetch'
import { resolvePath } from '../resolvePath'

const dataPath = resolvePath('./misc/raw/patch-index-raw.json')
const loadPatch = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
const outputM = resolvePath('./champions/raw/champions-raw-meraki.json')
const outputD = resolvePath('./champions/raw/champions-raw-data-dragon.json')

const urlMA
  = 'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json'
const urlDD = `https://ddragon.leagueoflegends.com/cdn/${loadPatch[0]}.1/data/en_US/championFull.json`

const [maChampions, ddData] = await Promise.all([$fetch(urlMA), $fetch(urlDD)])

fs.writeFileSync(outputM, JSON.stringify(maChampions, null, 2))
fs.writeFileSync(outputD, JSON.stringify(ddData.data, null, 2))
console.log('✅ file written to ./champions/raw/champions-raw-data-dragon.json')
