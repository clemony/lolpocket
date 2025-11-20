import { fetchMasterySummary } from "riot"

export default defineEventHandler(async (event) => {
  const { puuid, region } = getQuery(event)
  if (!puuid || !region)
    throw createError({
      statusCode: 400,
      statusMessage: "Missing puuid or region",
    })

  return fetchMasterySummary(String(puuid), String(region))
})
