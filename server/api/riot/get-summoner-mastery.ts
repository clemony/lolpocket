// server/api/champion-mastery.ts

import { getChampionMastery } from '../riot-client'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const puuid = query.puuid?.toString()
  const full = query.full === 'true'

  if (!puuid)
    throw createError({ statusCode: 400, statusMessage: 'Missing puuid' })

  const masteryData = await getChampionMastery(puuid, full)

  const mastery = masteryData.map((m: any) => ({
    id: m.championId,
    level: m.championLevel,
    points: m.championPoints,
    lastPlayed: m.lastPlayTime, // fixed typo: `lastedPlayed` → `lastPlayed`
  }))

  return {
    puuid,
    mastery,
  }
})
