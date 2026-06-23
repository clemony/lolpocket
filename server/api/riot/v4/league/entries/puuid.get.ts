import { fetchRankedByPuuid } from "#server/domain/riot/ranked"

export default defineEventHandler(async (event) => {
  const { puuid, region } = getQuery(event)
  if (!puuid || !region) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing puuid or region",
    })
  }

  const ranked = await fetchRankedByPuuid(String(puuid), String(region))

  return { ranked }
})
