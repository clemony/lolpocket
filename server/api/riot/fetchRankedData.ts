import { fetchLeagueEntriesByPuuid } from '../riotClient'

export interface RankedResponse {
  ranked: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
}
export default defineEventHandler(async (event) => {
  const { puuid: queryPuuid, region: queryRegion } = getQuery(event)

  let puuid: string
  if (typeof queryPuuid === 'string') {
    puuid = queryPuuid
  }
  let region: string
  if (typeof queryRegion === 'string') {
    region = queryRegion
  }

  try {
    const league = await fetchLeagueEntriesByPuuid(puuid, region)

    const ranked: RankedResponse['ranked'] = {}
    for (const entry of league) {
      const base = {
        division: entry.rank,
        losses: entry.losses,
        lp: entry.leaguePoints,
        queueType: entry.queueType,
        tier: entry.tier,
        wins: entry.wins,
      }
      if (entry.queueType === 'RANKED_SOLO_5x5')
        ranked.solo = base
      else if (entry.queueType === 'RANKED_FLEX_SR')
        ranked.flex = base
    }

    return {
      ranked
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