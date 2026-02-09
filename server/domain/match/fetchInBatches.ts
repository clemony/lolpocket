export async function fetchInBatches(
  ids: string[],
  region: string
): Promise<MatchData[]> {
  const concurrency = 10
  const results: MatchData[] = []

  await Promise.all(
    Array.from({ length: Math.ceil(ids.length / concurrency) }, (_, i) =>
      Promise.all(
        ids.slice(i * concurrency, (i + 1) * concurrency).map(id =>
          $fetch<MatchReturn>('/riot/v5/match/matchById', {
            params: { id, region },
          }).catch((error) => {
            console.error(`Error fetching match ${id}:`, error)
            return null
          })
        )
      ).then((batch) => {
        const matches = batch
          .filter((item): item is MatchReturn => Boolean(item))
          .flatMap(item => item.matches ?? [])
        results.push(...matches)
      }))
  )

  return results
}
