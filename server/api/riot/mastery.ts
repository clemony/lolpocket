import { fetchMasteryTotalV4, fetchMasteryV4 } from '.'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const puuid = query.puuid?.toString()
  const region = query.region?.toString()

  if (!puuid)
    throw createError({ statusCode: 400, statusMessage: 'Missing puuid' })
  const masteryData = await fetchMasteryV4(puuid, region)

  let totalPoints = 0

  const mastery = masteryData.map((m: any) => {
    totalPoints += m.championPoints
    return {
      id: m.championId,
      lastPlayed: m.lastPlayTime,
      level: m.championLevel,
      points: m.championPoints,
    }
  })

  const totalLevels = await fetchMasteryTotalV4(puuid, region)

  return {
    puuid,
    mastery,
    totalLevels,
    totalPoints,
  }
})
