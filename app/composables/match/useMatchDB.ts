import { matchDB } from 'stores/matchDB'

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
    return await matchDB.matchData.toArray()
  }

  const getAllMatchIds = async () => {
    return await matchDB.matchData.orderBy('metadata.matchId').keys()
  }

  async function getMatchesForSummoner(puuid: string) {
    const summoner = ss().getSummoner(puuid)
    if (!summoner)
      return []
    return (await matchDB.matchData.bulkGet(summoner.matchIds)).filter(Boolean) as MatchData[]
  }

  async function sortMatchIdsByCreation(ids: string[]): Promise<string[]> {
    const matches = await matchDB.matchData.bulkGet(ids)
    return matches
      .filter((m): m is MatchData => !!m)
      .sort((a, b) => b.gameCreation - a.gameCreation)
      .map(m => m.matchId)
  }

  const clearMatches = async () => {
    await Promise.all([
      matchDB.matchData.clear(),
    ])
  }

  const refreshMatches = async () => {
    console.log(
      '💠 - refreshMatches (full):',
      await matchDB.matchData.toArray(),
    )
    return await matchDB.matchData.toArray()
  }

  return {
    addMatches,
    getAllMatches,
    getAllMatchIds,
    getMatchesForSummoner,
    clearMatches,
    refreshMatches,
    sortMatchIdsByCreation,
  }
}
