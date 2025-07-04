import dotenv from "dotenv"
import process from "node:process"
import { Client } from "shieldbow"

dotenv.config()

export default defineEventHandler(async (event) => {
  const client = new Client(process.env.RIOT_API_KEY)

  const query = getQuery(event)
  if (!query.puuid) {
    throw new Error("puuid is required")
  }

  await client.initialize({
    region: "na",
    fetch: false,
    storage: {
      enable: {
        dragon: false,
        api: false,
      },
    },
    cache: { enable: { api: true } },
  })

  const summoner = await client.summoners.fetchByPlayerId(
    query.puuid.toString()
  )

  const account = await summoner.fetchAccount()
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
  // console.log('💠 - defineEventHandler - entries:', entries)

  return {
    name: account.username,
    tag: account.userTag,
    puuid: account.playerId,
    profileIcon: summoner.profileIcon,
    level: summoner.level,
    region: summoner.region,
    leagueEntry: entries,
  }
})
