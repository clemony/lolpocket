import { apiPath } from '#server/domain'

export default defineEventHandler(async (event) => {
  const { puuid, region } = getQuery(event)
  if (!puuid || !region) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing puuid or region',
    })
  }

  const url = `${apiPath(String(region))}/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`

  const key = `mastery:${puuid}`

  const masteryData = await riotFetch<MasteryReturn[]>(key, url)
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
