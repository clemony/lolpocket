export async function useGetMatches({
  puuid,
  existingIds = [],
  start = 0,
  count = 20,
  direction = "new",
  lastMatchTimestamp = null,
}: {
  puuid: string
  existingIds?: string[]
  start?: number
  count?: number
  direction?: "new" | "old"
  lastMatchTimestamp?: number | null
}) {
  const { addMatches } = useMatchDexie()
  const as = useAccountStore()

  const result = await $fetch<{
    full: MatchData[]
    simplified: SimplifiedMatchData[]
  }>("/api/riot/matches-by-puuid", {
    method: "GET",
    query: {
      puuid,
      start,
      count,
      direction,
      existingIds: JSON.stringify(existingIds),
      lastMatchTimestamp,
    },
  })

  if (result.full.length && puuid === as.userAccount.riot.puuid) {
    await addMatches(result.full)
  }

  return result
}
