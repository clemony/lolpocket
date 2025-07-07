import { transformMatchData } from "../../utils/match-data-transform"
import { simplifyMatchData } from "../../utils/simplify-match"
import { getMatchById, getMatchIdsByPuuid } from "../riot-client"

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function fetchInBatches(ids: string[]) {
  const batchSize = 10
  const results = []

  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i + batchSize)

    const settled = await Promise.allSettled(
      batch.map((id) => getMatchById(id))
    )
    const fulfilled = settled
      .filter((r): r is PromiseFulfilledResult<any> => r.status === "fulfilled")
      .map((r) => r.value)

    results.push(...fulfilled)

    if (i + batchSize < ids.length) await sleep(1000)
  }

  return results
}

export async function getMatchesByPuuid({
  puuid,
  start = 0,
  count = 20,
  existingIds = [],
  fetchMode = "new",
}: {
  puuid: string
  start?: number
  count?: number
  existingIds?: string[]
  fetchMode?: "new" | "archive"
}) {
  let offset = start
  let matchIds: string[] = []

  if (fetchMode === "new") {
    while (true) {
      const fetched = await getMatchIdsByPuuid({ puuid, start: offset, count })
      if (!fetched.length) return { full: [], simplified: [] }

      const filtered =
        existingIds.length ?
          fetched.filter((id) => !existingIds.includes(id))
        : fetched

      if (filtered.length) {
        matchIds = filtered
        break
      }

      offset += count
    }
  }

  if (fetchMode === "archive") {
    const lastMatchId = existingIds.at(-1)
    const lastMatch = await getMatchById(lastMatchId!)
    const lastTimestamp = lastMatch.info.gameEndTimestamp

    while (true) {
      const fetched = await getMatchIdsByPuuid({ puuid, start: offset, count })
      if (!fetched.length) return { full: [], simplified: [] }

      const filtered = await Promise.all(
        fetched.map(async (id) => {
          const match = await getMatchById(id)
          return { id, match }
        })
      )

      const valid = filtered.filter(
        ({ match }) => match.info.gameEndTimestamp < lastTimestamp
      )

      if (valid.length) {
        matchIds = valid.map(({ id }) => id)
        break
      }

      offset += count
    }
  }

  const rawMatches = await fetchInBatches(matchIds)
  const full = rawMatches.map(transformMatchData)
  const simplified = full
    .map((match) => simplifyMatchData(puuid, match))
    .filter(Boolean)

  return { full, simplified }
}
