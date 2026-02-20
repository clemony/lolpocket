/* eslint-disable antfu/no-top-level-await */
import fs from 'node:fs'
import { resolve } from 'node:path'
import { $fetch } from 'ofetch'

const rawRunes = await $fetch(
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json'
)

const rawPaths = await $fetch(
  'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perkstyles.json'
)

const outputRawRunes = resolve('./layers/patch/server/runes/raw/runes-raw.json')
const outputRawPaths = resolve('./layers/patch/server/layers/patch/server/runes/raw/paths-raw.json')
fs.writeFileSync(outputRawRunes, JSON.stringify(rawRunes, null, 2))
fs.writeFileSync(outputRawPaths, JSON.stringify(rawPaths, null, 2))

console.log('✅ runes.json written!')
