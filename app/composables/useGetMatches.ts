// composables/useGetMatches.ts

export async function useGetMatches({
  puuid,
  existingIds = [],
  start = 0,
  count = 20,
  direction = 'new',
  lastMatchTimestamp = null,
}: {
  puuid: string
  existingIds?: string[]
  start?: number
  count?: number
  direction?: 'new' | 'old'
  lastMatchTimestamp?: number | null
}) {
  const { addMatches } = useMatchDexie()
  const ms = useMatchStore()
  const as = useAccountStore()

  const newMatches = await $fetch<MatchData[]>('/api/riot/matches-by-puuid', {
    method: 'GET',
    query: {
      puuid,
      start,
      count,
      direction,
      existingIds: JSON.stringify(existingIds),
      lastMatchTimestamp,
    },
  })

  if (newMatches.length > 0 && puuid == as.userAccount.puuid) {
    await addMatches(newMatches)
    const { simplifyMatch } = useMatchSimplifier(puuid)
    const simplified = newMatches.map(simplifyMatch).filter(Boolean) as SimplifiedMatchData[]

    return { newMatches, simplified }
  }

  return { newMatches: [], simplified: [] }
}