/* import 'dotenv/config'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const riotApiKey = config.riotApiKey

  const query = getQuery(event)
  const { puuid, start = 0, count = 20 } = query

  if (!puuid) {
    throw createError({ statusCode: 400, statusMessage: 'Missing puuid' })
  }

  const matchIdsUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}`

  try {
    const matchIds: string[] = await $fetch(matchIdsUrl, {
      headers: {
        'X-Riot-Token': riotApiKey,
      },
    })

    if (!matchIds.length)
      return []

    const chunkSize = 10
    const batches: string[][] = []
    for (let i = 0; i < matchIds.length; i += chunkSize) {
      batches.push(matchIds.slice(i, i + chunkSize))
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
        ),
      )

      const matches = results
        .filter((res): res is PromiseFulfilledResult<any> => res.status === 'fulfilled')
        .map(res => res.value)

      allMatches.push(...matches)

      if (batch !== batches[batches.length - 1]) {
        await sleep(1000)
      }
    }

    return allMatches
  }
  catch (err) {
    console.error('🛑 Riot API error:', err)
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch matches' })
  }
}) */