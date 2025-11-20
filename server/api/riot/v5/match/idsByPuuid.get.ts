import { fetchMatchIds } from "riot"

export default defineEventHandler(async (event) => {
  const { puuid, region, start, count } = getQuery(event)

  if (!puuid || !region)
    throw createError({
      statusCode: 400,
      statusMessage: "Missing puuid or region",
    })

  return fetchMatchIds(
    String(puuid),
    String(region),
    Number(start),
    Number(count)
  )
})
