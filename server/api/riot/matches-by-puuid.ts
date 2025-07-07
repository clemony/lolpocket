/* import { getMatchesByPuuid } from "../riot-client"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  if (!query.puuid)
    throw createError({ statusCode: 400, statusMessage: "Missing puuid" })

  const matches = await getMatchesByPuuid({
    puuid: query.puuid.toString(),
    start: Number(query.start ?? 0),
    count: Number(query.count ?? 20),
  })

  return matches
})
 */
