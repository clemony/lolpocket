// npx tsx scripts/fetchChampions.ts
import { writeFileSync } from 'node:fs'
import { $fetch } from 'ofetch'

async function run() {
  try {
    const url = 'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json'
    const response = await $fetch(url)

    if (response) {
      console.log('Fetched', response.length, 'champions')
      writeFileSync(
        './data/champions.json',
        JSON.stringify(response, null, 2),
      )
      console.log('File written to ./data/raw/champions-raw.json')
    }
  }
  catch (error) {
    console.error('Fetch failed:', error)
  }
}

run()