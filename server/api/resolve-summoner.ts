import {
  fetchLeagueEntriesByPuuid,
  fetchPuuidByRiotId,
  fetchSummonerByPuuid,
} from './riot-client'

interface SummonerResponse {
  name: string
  tag: string
  puuid: string
  profileIcon: string
  level: number
  region: string
  ranked: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
}

export default defineEventHandler(async (event) => {
  const { region, name, tag } = getQuery(event)

  if (
    typeof region !== 'string'
    || typeof name !== 'string'
    || typeof tag !== 'string'
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing name, tag, or region',
    })
  }

  try {
    const puuid = await fetchPuuidByRiotId(region, name, tag)
    const [summoner, league] = await Promise.all([
      fetchSummonerByPuuid(puuid),
      fetchLeagueEntriesByPuuid(puuid),
    ])

    const ranked: SummonerResponse['ranked'] = {}
    for (const entry of league) {
      if (entry.queueType === 'RANKED_SOLO_5x5') {
        ranked.solo = {
          tier: entry.tier,
          division: entry.rank,
          lp: entry.leaguePoints,
          wins: entry.wins,
          losses: entry.losses,
          queueType: entry.queueType,
        }
      }
      else if (entry.queueType === 'RANKED_FLEX_SR') {
        ranked.flex = {
          tier: entry.tier,
          division: entry.rank,
          lp: entry.leaguePoints,
          wins: entry.wins,
          losses: entry.losses,
          queueType: entry.queueType,
        }
      }
    }

    return {
      name: summoner.name,
      tag: summoner.tagLine,
      puuid: summoner.puuid,
      profileIcon: summoner.profileIconId,
      level: summoner.summonerLevel,
      region,
      ranked,
    }
  }
  catch (err) {
    console.error('❌ Failed to resolve summoner:', err)
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to fetch summoner from Riot',
    })
  }
})
