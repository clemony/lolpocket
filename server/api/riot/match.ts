// server/api/matches/fetch.ts

import { getMatchById, getMatchIdsByPuuid } from '.'

export default defineEventHandler(async (event) => {
  const { puuid, existingIds, region: r } = getQuery(event)
  const region = r.toString().toLowerCase()

  let ids: string[] = []

  if (existingIds) {
    if (Array.isArray(existingIds)) {
      ids = existingIds.flatMap(e => (e ? e.split(',') : []))
    }
    else if (typeof existingIds === 'string') {
      ids = existingIds.split(',').filter(Boolean)
    }
  }

  console.log('puuid: ', puuid)
  console.log('idsArray: ', ids)
  let newestIds: string[] = []
  try {
    newestIds = await getMatchIdsByPuuid({
      puuid: String(puuid),
      count: 100,
      region,
      start: 0,
    })

    if (!newestIds.length)
      return { matchData: [] }

    const missingIds = newestIds.filter(id => !ids.includes(id))
    if (!missingIds.length)
      return { matchData: [] }

    const idsToFetch = missingIds.slice(0, 20)

    let matches: any[] = []
    try {
      matches = await Promise.all(
        idsToFetch.map(id => getMatchById(id, region))
      )
    }
    catch (err) {
      throw err
    }

    const matchData = matches.map(transformMatchData)
    return { matchData }
  }
  catch (err) {
    console.error('Error fetching matches:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching matches inside /server/matches/fetch.ts',
    })
  }
})
