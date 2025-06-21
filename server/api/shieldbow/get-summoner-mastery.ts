import { Client } from 'shieldbow'
import process from 'node:process'
import dotenv from 'dotenv'

dotenv.config()

export default defineEventHandler(async (event) => {
  const client = new Client(process.env.RIOT_API_KEY)

  const query = getQuery(event)
  if (!query.puuid) {
    throw new Error('puuid is required')
  }

  await client.initialize({ region: 'na', fetch: false, storage: {
    enable: {
      dragon: false,
      api: false,
    },

  }, cache: { enable: { api: true } } })

  const summoner = await client.summoners.fetchByPlayerId(query.puuid.toString())
  console.log('💠 - defineEventHandler - summoner:', summoner)

  const mastery = await summoner.championMastery.fetchAll()
  console.log('💠 - defineEventHandler - mastery:', mastery)
  const entries: ChampionMasteryEntry = {}

  for (const champion of mastery) {
    entries[champion[1].champion.id] = {
      key: champion[1].champion.key,
      level: champion[1].level,
      points: champion[1].points,
    }
  }

  console.log('💠 - defineEventHandler - entries:', entries)

  return {
    puuid: summoner.playerId,
    mastery: entries,
  }
})