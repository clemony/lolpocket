export async function useGetMatches({
  puuid,
  existingIds = [],
  start = 0,
  count = 20,
  direction = 'new', // 'new' for latest matches, 'old' for archive/history
  lastMatchTimestamp = null, // used only when direction is 'old'
}: {
  puuid: string
  existingIds?: string[]
  start?: number
  count?: number
  direction?: 'new' | 'old'
  lastMatchTimestamp?: number | null
}) {
  return await $fetch('/api/riot/matches-by-puuid', {
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
}

// Getting the newest matches
/*
⁡⁣⁢⁣const newMatches = await useGetMatches({
  puuid,
  existingIds,
  direction: 'new',
})⁡
 */

// Getting older matches for archive view
/*
⁡⁣⁢⁣const oldMatches = await useGetMatches({
  puuid,
  existingIds,
  direction: 'old',
  lastMatchTimestamp: 1713891420000, // example timestamp
})⁡
  */