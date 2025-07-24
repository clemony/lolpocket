// composables/useGetMatches.ts
export async function useGetMatches({
  puuid,
  existingIds = [],
  start = 0,
  count = 20,
  fetchMode = 'new',
  lastMatchTimestamp = null,
}: {
  puuid: string
  existingIds?: string[]
  start?: number
  count?: number
  fetchMode?: 'new' | 'old'
  lastMatchTimestamp?: number | null
}): Promise<{
  full: MatchData[]
  simplified: SimplifiedMatchData[]
}> {
  if (!puuid) {
    throw new Error('puuid is required')
  }

  if (typeof puuid !== 'string') {
    throw new TypeError('puuid must be a string')
  }

  if (typeof existingIds !== 'object' || !Array.isArray(existingIds)) {
    throw new TypeError('existingIds must be an array')
  }

  if (typeof start !== 'number') {
    throw new TypeError('start must be a number')
  }

  if (typeof count !== 'number') {
    throw new TypeError('count must be a number')
  }

  if (fetchMode !== 'new' && fetchMode !== 'old') {
    throw new RangeError('fetchMode must be either \'new\' or \'old\'')
  }

  if (lastMatchTimestamp != null && typeof lastMatchTimestamp !== 'number') {
    throw new TypeError('lastMatchTimestamp must be a number or null')
  }

  try {
    console.log(
      'useGetMatches:',
      puuid,
      existingIds,
      start,
      count,
      fetchMode,
      lastMatchTimestamp,
    )
    const result = await $fetch('/api/riot/get-matches-by-puuid', {
      method: 'GET',
      query: {
        puuid,
        start,
        count,
        fetchMode,
        existingIds: JSON.stringify(existingIds),
        lastMatchTimestamp,
      },
    })
    return result
  }
  catch (error) {
    if (error instanceof Error) {
      throw error
    }
    else {
      throw new TypeError('Unknown error')
    }
  }
}
