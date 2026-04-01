import { riotFetch } from '#server/api/riot/fetch'

export default defineEventHandler(async (event) => {
  const { puuid } = getQuery(event)
  if (!puuid)
    throw createError({ statusCode: 400, statusMessage: 'Missing puuid' })

  const url = `https://americas.api.riotgames.com/riot/account/v1/region/by-game/lol/by-puuid/${puuid}`
  const key = `region:${puuid}`
  return riotFetch<RegionReturn>(key, url)
})
