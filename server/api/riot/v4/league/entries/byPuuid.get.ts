import { fetchRankedByPuuid } from "riot"

export default defineEventHandler(async (event) => {
  const { puuid, region } = getQuery(event)
  if (!puuid || !region)
    throw createError({
      statusCode: 400,
      statusMessage: "Missing puuid or region",
    })

  return fetchRankedByPuuid(String(puuid), String(region))
})
