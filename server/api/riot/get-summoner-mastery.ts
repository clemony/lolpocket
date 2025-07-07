// server/api/champion-mastery.ts

import { getChampionMastery } from "../riot-client"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  if (!query.puuid)
    throw createError({ statusCode: 400, statusMessage: "Missing puuid" })

  const mastery = await getChampionMastery(query.puuid.toString())

  const formatted = Object.fromEntries(
    mastery.map((m: any) => [
      m.championId,
      {
        key: m.championId,
        level: m.championLevel,
        points: m.championPoints,
      },
    ])
  )

  return {
    puuid: query.puuid,
    mastery: formatted,
  }
})
