import { fetchRegionByPuuid } from 'riot'

export default defineEventHandler(async (event) => {
  const { puuid } = getQuery(event)
  if (!puuid)
    throw createError({ statusCode: 400, statusMessage: 'Missing puuid' })
  return fetchRegionByPuuid(String(puuid))
})
