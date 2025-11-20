import { fetchMasteries } from "riot"

export async function fetchMasterySummary(puuid: string, region: string) {
  const masteryData = await fetchMasteries(puuid, region)

  let totalPoints = 0

  const mastery = masteryData.map((m) => {
    totalPoints += m.championPoints
    return {
      id: m.championId,
      lastPlayed: m.lastPlayTime,
      level: m.championLevel,
      points: m.championPoints,
    }
  })

  const totalLevels = masteryData.reduce((sum, m) => sum + m.championLevel, 0)

  return {
    puuid,
    mastery,
    totalLevels,
    totalPoints,
  }
}
