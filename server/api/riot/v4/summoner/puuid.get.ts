import { apiPath } from '#server/domain'

export default defineEventHandler(async (event) => {
  const { puuid, region } = getQuery(event)
  if (!puuid || !region) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing puuid or region',
    })
  }

  const url = `${apiPath(String(region))}/lol/summoner/v4/summoners/by-puuid/${puuid}`
  const key = `summoner:${puuid}`
  return riotFetch<SummonerReturn>(key, url)
})
