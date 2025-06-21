import { Client } from 'shieldbow'
import process from 'node:process'
import dotenv from 'dotenv'

dotenv.config()

export default defineEventHandler(async (event) => {
  const client = new Client(process.env.RIOT_API_KEY)

  const query = getQuery(event)

  await client.initialize({
    region: 'na',
    fetch: false,
    storage: {
      enable: {
        dragon: false,
        api: false,
      },

    },
  })
})
