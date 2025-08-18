// server/api/matches/fetch.ts
import { fetchMatchData } from '../../fetch/fetchMatchData'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const puuid = query.puuid as string
  let idsArray: string[] = []

  if (query.existingIds) {
    if (Array.isArray(query.existingIds)) {
      idsArray = query.existingIds.flatMap(e => (e ? e.split(',') : []))
    }
    else if (typeof query.existingIds === 'string') {
      idsArray = query.existingIds.split(',').filter(Boolean)
    }
  }

  console.log('puuid: ', puuid)
  console.log('idsArray: ', idsArray)

  try {
    return await fetchMatchData(puuid, idsArray)
  }
  catch (err) {
    console.error('Error fetching matches:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching matches inside /server/matches/fetch.ts',
    })
  }
})