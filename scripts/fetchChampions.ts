// npx tsx scripts/fetchChampions.ts 
import { writeFileSync } from 'fs'
import { $fetch } from 'ofetch' 

const run = async () => {
  try {
    const url = 'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json'
    const response = await $fetch(url)

    if (response) {
      console.log('Fetched', response.length, 'champions')
      writeFileSync(
        './public/api/champions.json',
        JSON.stringify(response, null, 2),
      )
      console.log('File written to ./public/api/champions.json')
    }
  } catch (error) {
    console.error('Fetch failed:', error)
  }
}

run()