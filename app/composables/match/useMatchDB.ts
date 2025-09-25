export function useIndexedDB() {
  const addMatches = async ({
    matchData = [],
  }: {
    matchData?: MatchData[]
  }) => {
    if (matchData.length) {
      await matchDB.matchData.bulkPut(matchData)
    }
  }

  const getAllMatches = async () => {
    const a = await matchDB.matchData.toArray()
    return a.filter(m => m.queueId !== 3200)
  }

  const getAllMatchIds = async () => {
    return await matchDB.matchData.orderBy('metadata.matchId').keys()
  }

  const getMatchesForSummoner = async (puuid: string): Promise<MatchData[]> => {
    const a = await matchDB.matchData
      .where('participantIds')
      .equals(puuid)
      .reverse() // newest first
      .sortBy('creation')

    return a.filter(m => m.queueId !== 3200)
  }

  const getAllMatchIdsForPuuid = async (puuid: string): Promise<string[]> => {
    const matches = await matchDB.matchData
      .where('participantIds')
      .equals(puuid)
      .primaryKeys()
    return matches
  }

  async function sortMatchIdsByCreation(ids: string[]): Promise<string[]> {
    const matches = await matchDB.matchData.bulkGet(ids)
    return matches
      .filter((m): m is MatchData => !!m)
      .sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp)
      .map(m => m.matchId)
  }

  const clearMatches = async () => {
    await Promise.all([matchDB.matchData.clear()])
  }

  const refreshMatches = async () => {
    console.log(
      '💠 - refreshMatches (full):',
      await matchDB.matchData.toArray()
    )
    return await matchDB.matchData.toArray()
  }

  return {
    getAllMatchIdsForPuuid,
    addMatches,
    clearMatches,
    getAllMatches,
    getAllMatchIds,
    getMatchesForSummoner,
    refreshMatches,
    sortMatchIdsByCreation,
  }
}
