// composables/useMatchDexie.ts
import { matchDB } from 'stores/matchDB'

export function useMatchDexie() {
  const addMatches = async (matches: MatchData[]) => {
    console.log("💠 - addMatches - MatchData:")
    await matchDB.matchData.bulkPut(matches)
    console.log("💠 - addMatches - matches:", matches)
  }

  const getAllMatches = async () => {
    return await matchDB.matchData.toArray()
  }

  const getAllMatchIds = async () => {
    return await matchDB.matchData.orderBy('metadata.matchId').keys()
  }

  const clearMatches = async () => {
    await matchDB.matchData.clear()
  }

  const refreshMatches = async () => {
    console.log("💠 - refreshMatches - matchDB.matchData.toArray():", matchDB.matchData.toArray())
    return await matchDB.matchData.toArray()
  }

  return { addMatches, getAllMatches, getAllMatchIds, clearMatches, refreshMatches }
}