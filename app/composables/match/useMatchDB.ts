import { matchDB } from 'stores/matchDB'

export function useMatchDexie() {
  const addMatches = async ({
    full = [],
    simplified = [],
  }: {
    full?: MatchData[]
    simplified?: SimplifiedMatchData[]
  }) => {
    if (full.length) {
      await matchDB.matchData.bulkPut(full)
    }

    if (simplified.length) {
      await matchDB.simplifiedMatchData.bulkPut(simplified)
    }
  }

  const getAllMatches = async () => {
    return await matchDB.matchData.toArray()
  }

  const getAllSimplifiedMatches = async () => {
    return await matchDB.simplifiedMatchData.toArray()
  }

  const getAllMatchIds = async () => {
    return await matchDB.matchData.orderBy('metadata.matchId').keys()
  }

  const getAllSimplifiedMatchIds = async () => {
    return await matchDB.simplifiedMatchData.orderBy('matchId').keys()
  }

  const clearMatches = async () => {
    await Promise.all([
      matchDB.matchData.clear(),
      matchDB.simplifiedMatchData.clear(),
    ])
  }

  const refreshMatches = async () => {
    console.log(
      '💠 - refreshMatches (full):',
      await matchDB.matchData.toArray(),
    )
    console.log(
      '💠 - refreshMatches (simplified):',
      await matchDB.simplifiedMatchData.toArray(),
    )
    return {
      full: await matchDB.matchData.toArray(),
      simplified: await matchDB.simplifiedMatchData.toArray(),
    }
  }

  return {
    addMatches,
    getAllMatches,
    getAllSimplifiedMatches,
    getAllMatchIds,
    getAllSimplifiedMatchIds,
    clearMatches,
    refreshMatches,
  }
}
