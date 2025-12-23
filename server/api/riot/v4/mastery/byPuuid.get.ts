import { fetchMasteries } from "../.."

export default defineEventHandler(async (event) => {
  const { puuid, region } = getQuery(event)
  if (!puuid || !region)
    throw createError({
      statusCode: 400,
      statusMessage: "Missing puuid or region",
    })

  const masteryData = await fetchMasteries(String(puuid), String(region))
  let masteryPoints = 0

  const mastery = masteryData.map((m) => {
    masteryPoints += m.championPoints
    return {
      championId: m.championId,
      lastPlayed: m.lastPlayTime,
      level: m.championLevel,
      pointsSinceLevel: m.championPointsSinceLastLevel,
      pointsUntilLevel: m.championPointsUntilNextLevel,
      totalPoints: m.championPoints,
    }
  })

  const masteryLevels = masteryData.reduce((sum, m) => sum + m.championLevel, 0)

  return {
    puuid,
    mastery,
    masteryLevels,
    masteryPoints,
  }
})
