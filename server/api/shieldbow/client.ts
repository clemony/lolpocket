// server/api/utils/shieldbow/client.ts
import { Client } from 'shieldbow'
import dotenv from 'dotenv'
dotenv.config()


export async function createClient() {
let isInitialized = false

const riotApiKey = process.env.RIOT_API_KEY
if (!riotApiKey) {
  throw new Error('RIOT_API_KEY is not defined in .env')
}
const client = new Client(riotApiKey)
  if (!isInitialized) {
    await client.initialize({
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
      version: 'latest',
    })
    isInitialized = true
    return client
  }
}