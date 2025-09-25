import {
  fetchAccountByPuuid,
  fetchPuuidByRiotId,
  fetchRegionByPuuid,
  fetchSummonerByPuuid,
} from '../riotClient'

export interface SummonerResponse {
  name: string
  puuid: string
  level: number
  profileIcon: string
  region: string
  tag: string
}

export default defineEventHandler(async (event) => {
  const { name, puuid: queryPuuid, region, tag } = getQuery(event)

  let puuid: string
  if (typeof queryPuuid === 'string') {
    puuid = queryPuuid
  }
  else if (typeof region === 'string' && typeof name === 'string' && typeof tag === 'string') {
    puuid = await fetchPuuidByRiotId(region, name, tag)
  }
  else {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing summoner identifier: provide either puuid or region + name + tag',
    })
  }

  let summonerName = name as string | undefined
  let summonerRegion = region as string | undefined
  let lastNameCheck = Date.now()

  if (!summonerRegion) {
    const r = await fetchRegionByPuuid(puuid)
    summonerRegion = r.region
  }

  // Always fetch name if missing
  if (!summonerName) {
    const n = await fetchAccountByPuuid(puuid)
    summonerName = n.gameName
    lastNameCheck = Date.now()
  }

  try {
    const summoner = await fetchSummonerByPuuid(puuid, summonerRegion)

    return {
      name: summonerName,
      puuid: summoner.puuid,
      lastNameCheck,
      lastUpdate: Date.now(),
      level: summoner.summonerLevel,
      profileIcon: summoner.profileIconId,
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