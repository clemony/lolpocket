// server/api/champion-mastery.ts

import { getChampionMastery, getChampionMasteryTotal } from '../riotClient'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const puuid = query.puuid?.toString()

  if (!puuid)
    throw createError({ statusCode: 400, statusMessage: 'Missing puuid' })
  const masteryData = await getChampionMastery(puuid)

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

  const totalLevels = await getChampionMasteryTotal(puuid)

  return {
    puuid,
    mastery,
    totalLevels,
    totalPoints,
  }
})
