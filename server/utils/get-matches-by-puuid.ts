import { transformMatchData } from './match-data-transform'
import dotenv from 'dotenv'
import process from 'node:process'

dotenv.config()

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const RIOT_KEY = process.env.RIOT_API_KEY
const REGION = 'americas' // or 'europe', 'asia', depending on the account

async function fetchMatchIds(puuid: string, start: number, count: number) {
  const url = `https://${REGION}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}`
  return await $fetch<string[]>(url, {
    headers: { 'X-Riot-Token': RIOT_KEY! },
  })
}

async function fetchMatch(matchId: string) {
  const url = `https://${REGION}.api.riotgames.com/lol/match/v5/matches/${matchId}`
  return await $fetch<any>(url, {
    headers: { 'X-Riot-Token': RIOT_KEY! },
  })
}

export async function getMatchesByPuuid({
  puuid,
  start = 0,
  count = 20,
  existingIds = [],
  fetchMode = 'new', // 'new' for new matches, 'archive' for old matches
}: {
  puuid: string
  start?: number
  count?: number
  existingIds?: string[]
  fetchMode?: 'new' | 'archive'
}) {
  let offset = start
  let matchIds: string[] = []
  const allMatches: any[] = []

  if (fetchMode === 'new') {
    if (existingIds.length === 0) {
      matchIds = await fetchMatchIds(puuid, offset, count)
    }
    else {
      while (true) {
        const fetched = await fetchMatchIds(puuid, offset, count)
        if (!fetched.length)
          return []

        const filtered = fetched.filter(id => !existingIds.includes(id))
        if (filtered.length) {
          matchIds = filtered
          break
        }

        offset += count
      }
    }

    const batchSize = 10

    for (let i = 0; i < matchIds.length; i += batchSize) {
      const batch = matchIds.slice(i, i + batchSize)
      const results = await Promise.allSettled(batch.map(fetchMatch))

      allMatches.push(
        ...results
          .filter((r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled')
          .map(r => r.value),
      )

      if (i + batchSize < matchIds.length)
        await sleep(1000)
    }

    return allMatches.map(transformMatchData)
  }

  if (fetchMode === 'archive') {
    const lastMatchId = existingIds[existingIds.length - 1]
    const lastMatch = await fetchMatch(lastMatchId)
    const lastMatchTimestamp = lastMatch.info.gameEndTimestamp

    let oldMatchIds: string[] = []

    while (true) {
      const fetched = await fetchMatchIds(puuid, offset, count)
      if (!fetched.length)
        return []

      const filtered = await Promise.all(
        fetched.map(async (id) => {
          const match = await fetchMatch(id)
          return { id, match }
        }),
      )

      const valid = filtered.filter(({ match }) =>
        match.info.gameEndTimestamp < lastMatchTimestamp,
      )

      if (valid.length) {
        oldMatchIds = valid.map(({ id }) => id)
        break
      }

      offset += count
    }

    const batchSize = 10

    for (let i = 0; i < oldMatchIds.length; i += batchSize) {
      const batch = oldMatchIds.slice(i, i + batchSize)
      const results = await Promise.allSettled(batch.map(fetchMatch))

      allMatches.push(
        ...results
          .filter((r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled')
          .map(r => r.value),
      )

      if (i + batchSize < oldMatchIds.length)
        await sleep(1000)
    }

    return allMatches.map(transformMatchData)
  }
}