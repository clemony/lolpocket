import {
  fetchAccountByPuuid,
  fetchRegionByPuuid,
  /*   fetchRegionByPuuid, */
  fetchSummonerByPuuid,
} from '../riotClient'

interface AcccountResponse {
  name: string
  puuid: string
  level: number
  profileIcon: string
  region: string
  tag: string
}
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const puuid = query.puuid.toString()
  console.log('puuid: ', puuid)
  const queryRegion = query.region?.toString() ?? null
  console.log('queryRegion: ', queryRegion)

  if (!puuid) {
    console.error('❌ Failed to resolve summoner: missing puuid!')
    return
  }

  try {
    const region = await fetchRegionByPuuid(puuid, queryRegion)
    console.log('region: ', region)
    const account = await fetchAccountByPuuid(puuid, queryRegion)
    console.log('account: ', account)
    const summoner = await fetchSummonerByPuuid(puuid, region.region)
    console.log('summoner: ', summoner)

    /*     return {
      summonerObject: summoner,
      accountObject: account,
      name: account.gameName,
      tag: account.tagLine,
      puuid: summoner.puuid,
      profileIcon: summoner.profileIconId,
      level: summoner.summonerLevel,
      region: region || 'unknown',

    } */
  }
  catch (err) {
    console.error('❌ Failed to resolve summoner:', err)
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to fetch summoner from Riot',
    })
  }
})
