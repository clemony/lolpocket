// npx tsx scripts/fetchSpells.ts
import { writeFileSync } from 'fs'
import { $fetch } from 'ofetch' // if using ofetch, e.g. in Nuxt or standalone

const run = async () => {
  try {
    const url = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-spells.json'
    const response = await $fetch(url)

    if (response) {
      console.log('Fetched', response.length, 'spells')
      writeFileSync(
        './public/api/summoner-spells.json',
        JSON.stringify(response, null, 2),
      )
      console.log('File written to ./public/api/summoner-spells.json')
    }
  } catch (error) {
    console.error('Fetch failed:', error)
  }
}

run()