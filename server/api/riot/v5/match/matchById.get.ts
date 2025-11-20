import { fetchMatchById } from "riot"

export default defineEventHandler(async (event) => {
  const { matchId, region } = getQuery(event)

  if (!matchId || !region)
    throw createError({
      statusCode: 400,
      statusMessage: "Missing matchId or region",
    })

  return fetchMatchById(String(matchId), String(region))
})
