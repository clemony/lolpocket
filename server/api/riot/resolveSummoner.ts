import {
  fetchLeagueEntriesByPuuid,
  fetchPuuidByRiotId,
  fetchSummonerByPuuid,
} from '../riotClient'

export interface SummonerResponse {
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
  const { region, name, tag, puuid: queryPuuid } = getQuery(event)

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
      region: summonerRegion || 'unknown',
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
