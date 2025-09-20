import {
  fetchLeagueEntriesByPuuid,
  fetchPuuidByRiotId,
  fetchSummonerByPuuid,
} from '../riotClient'

export interface SummonerResponse {
  name: string
  puuid: string
  level: number
  profileIcon: string
  ranked: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
  region: string
  tag: string
}
export default defineEventHandler(async (event) => {
  const { name, puuid: queryPuuid, region, tag } = getQuery(event)

  let puuid: string
  const summonerRegion = region as string | undefined

  if (typeof queryPuuid === 'string') {
    puuid = queryPuuid
    // If a PUUID is provided, region might not matter—but if your fetchLeagueEntriesByPuuid requires it, you could optionally include a region param
  }
  else if (
    typeof region === 'string'
    && typeof name === 'string'
    && typeof tag === 'string'
  ) {
    puuid = await fetchPuuidByRiotId(region, name, tag)
  }
  else {
    throw createError({
      statusCode: 400,
      statusMessage:
        'Missing summoner identifier: provide either puuid or region + name + tag',
    })
  }

  try {
    const [summoner, league] = await Promise.all([
      fetchSummonerByPuuid(puuid, summonerRegion),
      fetchLeagueEntriesByPuuid(puuid, summonerRegion),
    ])

    const ranked: SummonerResponse['ranked'] = {}
    for (const entry of league) {
      if (entry.queueType === 'RANKED_SOLO_5x5') {
        ranked.solo = {
          division: entry.rank,
          losses: entry.losses,
          lp: entry.leaguePoints,
          queueType: entry.queueType,
          tier: entry.tier,
          wins: entry.wins,
        }
      }
      else if (entry.queueType === 'RANKED_FLEX_SR') {
        ranked.flex = {
          division: entry.rank,
          losses: entry.losses,
          lp: entry.leaguePoints,
          queueType: entry.queueType,
          tier: entry.tier,
          wins: entry.wins,
        }
      }
    }

    return {
      name: summoner.name,
      puuid: summoner.puuid,
      level: summoner.summonerLevel,
      profileIcon: summoner.profileIconId,
      ranked,
      region: summonerRegion || 'unknown',
      tag: summoner.tagLine,
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
