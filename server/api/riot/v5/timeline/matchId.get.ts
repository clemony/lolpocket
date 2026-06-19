import { riotFetch } from '#server/api/riot'
import { serverToRegion } from '#server/domain'
import { transformTimeline } from "~~/server/domain/riot/timeline/transformTimeline"

export default defineEventHandler(async (event) => {
  const { matchId, region } = getQuery(event)

  if (!matchId || !region) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing matchId or region',
    })
  }

  const url = `${serverToRegion(region.toString())}/lol/match/v5/matches/${matchId}/timeline`
  const key = `timeline:${region}:${matchId}`

  const match = await riotFetch<any>(key, url)
  const timeline = transformTimeline(match)

  // returns Record<puuid, PlayerTimeline>
  return timeline
})
