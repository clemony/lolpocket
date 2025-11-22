import type { MatchData } from "#shared/types/types.match"

export async function fetchInBatches(ids: string[], region: string) {
  const concurrency = 10
  const results: MatchData[] = []

  await Promise.all(
    Array.from({ length: Math.ceil(ids.length / concurrency) }, (_, i) =>
      Promise.all(
        ids.slice(i * concurrency, (i + 1) * concurrency).map((id) =>
          $fetch("/api/riot/v5/match/matchById", {
            params: { id, region },
          }).catch((error) => {
            console.error(`Error fetching match ${id}:`, error)
            return null
          })
        )
      ).then((batch) => results.push(...batch.filter(Boolean)))
    )
  )

  return results
}
