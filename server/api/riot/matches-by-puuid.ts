import 'dotenv/config'
import { getMatchesByPuuid } from '../../utils/get-matches-by-puuid'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const matches = await getMatchesByPuuid({
    puuid: query.puuid as string,
    start: Number(query.start ?? 0),
    count: Number(query.count ?? 20),
  })
  console.log('💠 - defineEventHandler - matches:', matches)

  return matches
})