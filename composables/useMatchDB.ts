// composables/useMatchDexie.ts
import { matchDB } from 'stores/matchDB'

export function useMatchDexie() {
  const addMatches = async (matches: MatchData[]) => {
    await matchDB.matchData.bulkPut(matches)
  }

  const getAllMatches = async () => {
    return await matchDB.matchData.toArray()
  }

  const getAllMatchIds = async () => {
    await matchDB.matchData.orderBy('metadata.matchId').keys()
  }

  const clearMatches = async () => {
    await matchDB.matchData.clear()
  }

  const refreshMatches = async () => {
    return await matchDB.matchData.toArray()
  }

  return { addMatches, getAllMatches, getAllMatchIds, clearMatches, refreshMatches }
}