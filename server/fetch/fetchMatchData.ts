import { getMatchById, getMatchIdsByPuuid } from '../api/riotClient'

const MAX_IDS_PER_CALL = 100
const MATCHES_PER_REQUEST = 20

export async function fetchMatchData(puuid: string, existingIds: string[]) {
  if (!puuid)
    throw new Error('Missing puuid')

  // 1️⃣ Get newest match IDs from Riot
  const newestIds = await getMatchIdsByPuuid({
    puuid,
    start: 0,
    count: MAX_IDS_PER_CALL,
  })

  if (!newestIds.length)
    return { matchData: [] }

  // 2️⃣ Filter out matches we already have
  const missingIds = newestIds.filter(id => !existingIds.includes(id))
  if (!missingIds.length)
    return { matchData: [] }

  // 3️⃣ Take first 20 missing IDs for this request
  const idsToFetch = missingIds.slice(0, MATCHES_PER_REQUEST)

  // 4️⃣ Fetch match details (pLimit in riot-client handles rate limiting)
  const matches = await Promise.all(idsToFetch.map(id => getMatchById(id)))

  // 5️⃣ Transform + simplify
  const matchData = matches.map(transformMatchData)

  return { matchData }
}