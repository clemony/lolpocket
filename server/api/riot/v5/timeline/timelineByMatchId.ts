import { riotFetch } from "~~/server/api/riot"
import { serverToRegion, transformTimeline } from "~~/server/helpers"

export default defineEventHandler(async (event) => {
  const { matchId, region, puuid } = getQuery(event)
  if (!puuid || !matchId)
    throw createError({
      statusCode: 400,
      statusMessage: "Missing puuid or region",
    })

  const url = `${serverToRegion(region.toString())}/lol/match/v5/matches/${matchId}/timeline`

  const key = `timeline:${region}:${matchId}`

  const match = await riotFetch<any>(key, url)
  return transformTimeline(match, puuid.toString())
})
