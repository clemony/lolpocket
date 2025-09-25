// server/api/riot/fetchAccountByPuuid.get.ts
import { fetchAccountByPuuid as serverFetchAccountByPuuid } from '../riotClient'

export default defineEventHandler(async (event) => {
  const puuid = getQuery(event).puuid as string
  if (!puuid) {
    throw createError({ statusCode: 400, statusMessage: 'Missing puuid' })
  }

  try {
    const account = await serverFetchAccountByPuuid(puuid)
    return account
  }
  catch (err) {
    console.error('Failed to fetch account by puuid:', err)
    throw createError({ statusCode: 502, statusMessage: 'Riot fetch failed' })
  }
})