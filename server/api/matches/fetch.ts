// server/api/matches/fetch.ts
import { fetchMatchData } from '../../fetch/fetchMatchData'

export default defineEventHandler(async (event) => {
  const { puuid, existingIds = [] } = getQuery(event) as {
    puuid: string
    existingIds?: string[]
  }

  try {
    return await fetchMatchData(puuid, existingIds)
  }
  catch (err) {
    console.error('Error fetching matches:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching matches',
    })
  }
})