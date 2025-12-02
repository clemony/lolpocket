import { riotFetch } from "~~/server/api/riot"
import { serverToRegion } from "~~/server/helpers"

export async function matchById(id: string, region: string) {
  const url = `${serverToRegion(region)}/lol/match/v5/matches/${id}`
  const key = `match:${region}:${id}`

  const match = await riotFetch<any>(key, url)

  if (!match || !match.info?.gameEndTimestamp) {
    console.warn("⚠️ invalid match payload for", id, match)
    return null
  }

  return match
}
