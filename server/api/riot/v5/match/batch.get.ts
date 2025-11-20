import { fetchNewMatches } from "riot"

export default defineEventHandler(async (event) => {
  const { puuid, region, existingIds } = getQuery(event)

  if (!puuid || !region)
    throw createError({
      statusCode: 400,
      statusMessage: "Missing puuid or region",
    })

  const ids = existingIds ? String(existingIds).split(",").filter(Boolean) : []

  return fetchNewMatches(String(puuid), String(region), ids)
})
