import { matchDB } from "~/stores"

export function useIndexedDB() {
  const getCursor = async (puuid: string) => {
    return (await matchDB.matchCursor.get(puuid)) ?? { puuid, lastIndex: 0 }
  }

  const setCursor = async (puuid: string, lastIndex: number) => {
    await matchDB.matchCursor.put({ puuid, lastIndex })
  }

  const getMatchTimeline = async (matchId: string) => {
    return await matchDB.matchTimeline.get(matchId)
  }

  const putMatchTimeline = async (matchId: string, data: MatchTimeline) => {
    await matchDB.matchTimeline.put(data)
  }

  const clearTimelines = async () => {
    await matchDB.matchTimeline.clear()
  }

  const getMatchesForSummoner = async (puuid: string) => {
    const arr = await matchDB.matchData
      .where("participantIds")
      .equals(puuid)
      .reverse()
      .sortBy("creation")

    return arr.filter((m) => m.queueId !== 3200)
  }

  const getAllMatches = async () => {
    const a = await matchDB.matchData.toArray()
    return a.filter((m) => m.queueId !== 3200)
  }

  const getAllMatchIds = async () => {
    return await matchDB.matchData.orderBy("metadata.matchId").keys()
  }

  const getAllMatchIdsForPuuid = async (puuid: string): Promise<string[]> => {
    const matches = await matchDB.matchData
      .where("participantIds")
      .equals(puuid)
      .primaryKeys()
    return matches
  }

  async function sortMatchIdsByCreation(ids: string[]): Promise<string[]> {
    const matches = await matchDB.matchData.bulkGet(ids)
    return matches
      .filter((m): m is MatchData => !!m)
      .sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp)
      .map((m) => m.matchId)
  }

  // champions

  const championDataByPuuid = async (puuid: string) => {
    if (!puuid) return
    return await matchDB.playerChampions.where("puuid").equals(puuid).toArray()
  }

  // db utilities

  const clearMatches = async () => {
    await Promise.all([matchDB.matchData.clear()])
  }

  const refreshMatches = async () => {
    return await matchDB.matchData.toArray()
  }

  return {
    //cursor
    setCursor,
    getCursor,

    //timeline
    getMatchTimeline,
    putMatchTimeline,
    clearTimelines,

    //match
    getAllMatchIdsForPuuid,
    getAllMatches,
    getAllMatchIds,
    getMatchesForSummoner,
    sortMatchIdsByCreation,
    //
    refreshMatches,
    clearMatches,

    //champion
    championDataByPuuid,
  }
}
