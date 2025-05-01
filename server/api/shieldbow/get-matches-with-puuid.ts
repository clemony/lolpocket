import { Client } from 'shieldbow'
import process from 'node:process'
import dotenv from 'dotenv'
import { getMatchesByPuuid } from '../../utils/get-matches-by-puuid'

dotenv.config()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const puuid = query.puuid
  const start = query.start
  const count = query.count

  const RIOT_KEY = process.env.RIOT_API_KEY
  const REGION = 'americas' 
  const client = new Client(process.env.RIOT_API_KEY)
  await client.initialize({ region: 'na' })

  // return matches
})