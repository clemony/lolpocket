import { riotFetch } from "riot"
import { apiPath } from "~~/server/helpers"

export default defineEventHandler(async (event) => {
  const params = await getQuery(event)
  const { puuid, region } = params
  const url = `${apiPath(String(region))}/lol/champion-mastery/v4/scores/by-puuid/${puuid}`

  const key = `mastery-score:${puuid}`

  return riotFetch<number>(key, url, params)
})
