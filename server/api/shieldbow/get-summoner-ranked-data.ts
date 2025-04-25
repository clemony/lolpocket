import { Client } from 'shieldbow'
import process from 'node:process'
import dotenv from 'dotenv'

dotenv.config()

export default defineEventHandler(async (event) => {
  const client = new Client(process.env.RIOT_API_KEY)
  const query = getQuery(event)

  await client.initialize({ region: 'na' })

  const summoner = await client.summoners.fetchByPlayerId(query.puuid.toString())
  const leagueEntry = await summoner.fetchLeagueEntries()

  // Manually build a safe object
  const entries: Record<string, RankedEntry> = {}
  for (const [queue, entry] of leagueEntry.entries()) {
    entries[queue] = {
      tier: entry.tier,
      division: entry.division,
      lp: entry.lp,
      wins: entry.wins,
      losses: entry.losses,
      queueType: entry.queueType,
    }
  }

  return {
    leagueEntry: entries,
  }
})