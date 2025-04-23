import 'dotenv/config'
import { transformMatchData } from './match-data-transform'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const riotApiKey = config.riotApiKey

  const query = getQuery(event)
const {
  puuid,
  start: rawStart = 0,
  count: rawCount = 20,
  existingIds: rawExistingIds = '[]',
} = query

const start = Number(rawStart) || 0
const count = Number(rawCount) || 20

  if (!puuid) {
    throw createError({ statusCode: 400, statusMessage: 'Missing puuid' })
  }

  let existingIds: string[] = []
  try {
    existingIds = JSON.parse(String(rawExistingIds))
  } catch (e) {
    console.warn('Failed to parse existingIds, defaulting to empty array')
  }

  let newMatchIds: string[] = []
  let offset = Number(start)

  try {
    // Loop to fetch until we find non-stored match IDs
    while (true) {
const matchIdsUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${encodeURIComponent(String(puuid))}/ids?start=${offset}&count=${count}`

      const matchIds = await $fetch<string[]>(matchIdsUrl, {
        headers: {
          'X-Riot-Token': riotApiKey,
        },
      })

      if (!matchIds.length) return [] // No more matches available

      const filtered = matchIds.filter(id => !existingIds.includes(id))

      if (filtered.length) {
        newMatchIds = filtered
        break
      }

      // Skip to next chunk if current ones are already stored
      offset += count
    }

    // Batch + fetch match details
    const chunkSize = 10
    const batches: string[][] = []
    for (let i = 0; i < newMatchIds.length; i += chunkSize) {
      batches.push(newMatchIds.slice(i, i + chunkSize))
    }

    const allMatches: any[] = []

    for (const batch of batches) {
      const results = await Promise.allSettled(
        batch.map(id =>
          $fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${id}`, {
            headers: {
              'X-Riot-Token': riotApiKey,
            },
          }),
        )
      )

      const matches = results
        .filter((res): res is PromiseFulfilledResult<any> => res.status === 'fulfilled')
        .map(res => res.value)

      allMatches.push(...matches)

      if (batch !== batches[batches.length - 1]) {
        await sleep(1000) // avoid rate limit
      }
    }

    return allMatches.map(match => transformMatchData(match))
  } catch (err) {
    console.error('🛑 Riot API error:', err)
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch matches' })
  }
})