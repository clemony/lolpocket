import { fetchInBatches } from "../../utils/fetch-in-batches"
import { getMatchById, getMatchIdsByPuuid } from "../riot-client"

/**
 * Fetches matches for a given PUUID in batches with limited concurrency.
 *
 * @param {object} options - Options object
 * @param {string} options.puuid - The player's unique identifier
 * @param {number} [options.start=0] - The starting index for fetching matches
 * @param {number} [options.count=20] - The number of matches to fetch
 * @param {string[]} [options.existingIds=[]] - List of existing match IDs to filter out
 * @param {"new"|"old"} [options.fetchMode="new"] - The mode for fetching matches
 * @returns {Promise<{full: MatchData[], simplified: SimplifiedMatchData[]}>} A promise that resolves to an object with two properties: `full` and `simplified`.
 *          The `full` property contains an array of match data objects, and the `simplified` property contains an array of simplified match data objects.
 *          If a match fetch fails, that entry will be omitted from the results.
 */

export default defineEventHandler(async (event) => {
  const {
    puuid,
    start = 0,
    count = 20,
    existingIds = [],
    fetchMode = "new",
  } = getQuery(event) as {
    puuid: string
    start?: number
    count?: number
    existingIds?: string[]
    fetchMode?: "new" | "old"
  }

  console.log("💠 - defineEventHandler FETCHING FROM API - puuid:", puuid)
  let offset = start
  let matchIds: string[] = []

  if (fetchMode === "new") {
    while (true) {
      const fetched = await getMatchIdsByPuuid({ puuid, start: offset, count })
      console.log("💠 - fetched:", fetched)
      if (!fetched.length) return { full: [], simplified: [] }
      console.log("💠 - existingIds:", existingIds)
      console.log(
        "💠 - intersect:",
        fetched.filter((id) => existingIds.includes(id))
      )
      const filtered =
        existingIds.length ?
          fetched.filter((id) => !existingIds.includes(id))
        : fetched

      console.log("💠 - filtered:", filtered)
      if (filtered.length) {
        matchIds = filtered
        break
      }

      offset += count
    }
  } else if (fetchMode === "old") {
    if (!existingIds.length) return { full: [], simplified: [] }

    const lastMatchId = existingIds[existingIds.length - 1]
    const lastMatch = await getMatchById(lastMatchId)
    console.log("💠 - lastMatch:", lastMatch)
    if (!lastMatch) {
      throw createError({
        statusCode: 404,
        statusMessage: "Last match ID not found",
      })
    }

    while (true) {
      const fetched = await getMatchIdsByPuuid({ puuid, start: offset, count })
      console.log("💠 - fetched:", fetched)
      if (!fetched.length) return { full: [], simplified: [] }

      const filtered = await Promise.all(
        fetched.map(async (id) => {
          const match = await getMatchById(id)
          console.log("💠 - match:", match)
          if (!match) {
            throw createError({
              statusCode: 404,
              statusMessage: `Match ID ${id} not found`,
            })
          }
          return { id, match }
        })
      )

      const valid = filtered.filter(
        ({ match }) =>
          match.info.gameEndTimestamp < lastMatch.info.gameEndTimestamp
      )
      console.log("💠 - valid:", valid)
      if (valid.length) {
        matchIds = valid.map(({ id }) => id)
        break
      }

      offset += count
    }
  } else {
    throw createError({ statusCode: 400, statusMessage: "Invalid fetch mode" })
  }

  if (!matchIds.length) return { full: [], simplified: [] }

  try {
    const rawMatches = await fetchInBatches(matchIds)
    console.log("💠 - rawMatches:", rawMatches)
    const full = rawMatches.map(transformMatchData)
    console.log("💠 - full:", full)
    const simplified = full
      .map((match) => simplifyMatchData(puuid, match))
      .filter(Boolean)

    console.log("💠 - simplified:", simplified)
    return { full, simplified }
  } catch (error) {
    console.error("getMatchesByPuuid:", error)
    throw createError({
      statusCode: 500,
      statusMessage: "Error fetching matches",
    })
  }
})
