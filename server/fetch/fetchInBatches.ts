import type { MatchData } from './../../shared/types/types.match'
import { getMatchById } from '../api/riotClient'

/**
 * Fetches match details in batches with limited concurrency.
 *
 * @param ids - An array of match IDs to fetch.
 * @returns A promise that resolves to an array of match details.
 *          If a match fetch fails, that entry will be omitted from the results.
 *
 * This function limits the number of concurrent fetch operations to avoid overwhelming the server.
 * It processes the match IDs in batches, handling errors gracefully by logging them and excluding
 * failed fetches from the results.
 *
 * The function takes an array of match IDs, splits it into chunks of a fixed size (concurrency),
 * and uses Promise.all() to fetch each chunk concurrently. It then flattens the results and returns
 * the array of match details.
 *
 * Concurrency is set to 10, but you can adjust this value to balance performance with the risk of
 * hitting the rate limit.
 *
 * @example
 * const matchIds = ["1234567890", "2345678901", ...]
 * const matches = await fetchInBatches(matchIds)
 */
export async function fetchInBatches(ids: string[]) {
  const concurrency = 10
  const results: MatchData[] = []

  await Promise.all(
    Array.from({ length: Math.ceil(ids.length / concurrency) }, (_, i) =>
      Promise.all(
        ids.slice(i * concurrency, (i + 1) * concurrency).map(id =>
          getMatchById(id).catch((error) => {
            console.error(`Error fetching match ${id}:`, error)
            return null
          })
        )
      ).then(batch => results.push(...batch.filter(Boolean))))
  )

  return results
}
