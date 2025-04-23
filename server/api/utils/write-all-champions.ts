import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'
import { ChampionManager, Client } from 'shieldbow'
import dotenv from 'dotenv'

dotenv.config()

const riotApiKey = process.env.RIOT_API_KEY
if (!riotApiKey) {
  throw new Error('RIOT_API_KEY is not defined in .env')
}



export async function writeAllChampions() {
const client = new Client(riotApiKey)

await client.initialize({ // ✅ needs `await` since it returns a promise
  region: 'na',
  locale: 'en_US',
  fetch: {
    champions: true,
    items: true,
    summonerSpells: true,
    runes: true,
  },
  cache: {
    enable: {
      api: false,
      dragon: false,
    },
  },
})
  const champ = await client.champions.fetchAll()
  console.log("💠 - writeAllChampions - champ:", champ)


/*   const filePath = join(process.cwd(), 'server', 'data', 'champions.json')
  await writeFile(filePath, JSON.stringify(data, null, 2))

  console.log(`✅ Champion data written to ${filePath}`) */
}