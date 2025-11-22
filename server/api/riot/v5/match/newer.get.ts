import { fetchNewerMatches } from "~~/server/helpers"
import type { MatchReturn } from "~~/shared"

export default defineEventHandler(async (event): Promise<MatchReturn> => {
  const puuid = getQuery(event).puuid as string
  const since = Number(getQuery(event).since || 0)

  return fetchNewerMatches(puuid, since)
})
