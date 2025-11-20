import { getApiPath, riotGet } from "riot"

export default defineEventHandler(async (event) => {
  const params = await getQuery(event)
  const { puuid, region } = params
  const data = await riotGet<number>(
    `${getApiPath(String(region))}/lol/champion-mastery/v4/scores/by-puuid/${puuid}`
  )
  return data
})
