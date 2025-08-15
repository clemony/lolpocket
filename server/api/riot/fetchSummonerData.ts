import { fetchLeagueEntriesByPuuid, fetchSummonerByPuuid } from '../riotClient'

export default defineEventHandler(async (event) => {
  const { puuid } = getQuery(event)

  if (!puuid || typeof puuid !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Missing puuid' })
  }

  let summoner, league
  try {
    ;[summoner, league] = await Promise.all([
      fetchSummonerByPuuid(puuid),
      fetchLeagueEntriesByPuuid(puuid),
    ])
  }
  catch (err) {
    console.error('❌ Riot API error:', err)
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to fetch from Riot API',
    })
  }

  if (!summoner) {
    throw createError({ statusCode: 404, statusMessage: 'Summoner not found' })
  }

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
    region: 'na',
    ranked,
  }
})
