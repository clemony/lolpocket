import { matchDB } from "~/stores"

export function useIndexedDB() {
  const now = () => Date.now()

  // ---------- cursor ----------

  const getCursor = async (puuid: string) => {
    return (await matchDB.matchCursor.get(puuid)) ?? { puuid, lastIndex: 0 }
  }

  const setCursor = async (puuid: string, lastIndex: number) => {
    await matchDB.matchCursor.put({ puuid, lastIndex })
  }

  // ---------- timeline ----------

  const getMatchTimeline = async (matchId: string) => {
    const tl = await matchDB.matchTimeline.get(matchId)

    if (tl) {
      matchDB.matchTimeline
        .update(matchId, {
          lastAccessedAt: now(),
        })
        .catch(() => {})
    }

    return tl
  }

  const putMatchTimeline = async (matchId: string, data: MatchTimeline) => {
    await matchDB.matchTimeline.put({
      ...data,
      lastAccessedAt: now(),
    })
  }

  const clearTimelines = async () => {
    await matchDB.matchTimeline.clear()
  }

  // ---------- matches ----------

  const getMatchesForSummoner = async (puuid: string) => {
    const arr = await matchDB.matchData
      .where("participantIds")
      .equals(puuid)
      .reverse()
      .sortBy("creation")

    const filtered = arr.filter((m) => m.queueId !== 3200)

    if (filtered.length) {
      const ts = now()
      await matchDB.matchData.bulkPut(
        filtered.map((m) => ({
          ...m,
          lastAccessedAt: ts,
        }))
      )
    }

    return filtered
  }

  const getAllMatches = async () => {
    const arr = await matchDB.matchData.toArray()
    const filtered = arr.filter((m) => m.queueId !== 3200)

    if (filtered.length) {
      const ts = now()
      await matchDB.matchData.bulkPut(
        filtered.map((m) => ({
          ...m,
          lastAccessedAt: ts,
        }))
      )
    }

    return filtered
  }

  const getAllMatchIds = async () => {
    return await matchDB.matchData.orderBy("metadata.matchId").keys()
  }

  const getAllMatchIdsForPuuid = async (puuid: string): Promise<string[]> => {
    return await matchDB.matchData
      .where("participantIds")
      .equals(puuid)
      .primaryKeys()
  }

  async function sortMatchIdsByCreation(ids: string[]): Promise<string[]> {
    const matches = await matchDB.matchData.bulkGet(ids)

    const valid = matches.filter((m): m is MatchData => !!m)

    if (valid.length) {
      const ts = now()
      await matchDB.matchData.bulkPut(
        valid.map((m) => ({
          ...m,
          lastAccessedAt: ts,
        }))
      )
    }

    return valid
      .sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp)
      .map((m) => m.matchId)
  }

  // ---------- champions ----------

  const championDataByPuuid = async (puuid: string) => {
    if (!puuid) return

    const data = await matchDB.playerChampions
      .where("puuid")
      .equals(puuid)
      .toArray()

    if (data.length) {
      const ts = now()
      await matchDB.playerChampions.bulkPut(
        data.map((d) => ({
          ...d,
          lastAccessedAt: ts,
        }))
      )
    }

    return data
  }

  // ---------- db utilities ----------

  const clearMatches = async () => {
    await Promise.all([matchDB.matchData.clear()])
  }

  const refreshMatches = async () => {
    const data = await matchDB.matchData.toArray()

    if (data.length) {
      const ts = now()
      await matchDB.matchData.bulkPut(
        data.map((m) => ({
          ...m,
          lastAccessedAt: ts,
        }))
      )
    }

    return data
  }

  return {
    // cursor
    setCursor,
    getCursor,

    // timeline
    getMatchTimeline,
    putMatchTimeline,
    clearTimelines,

    // match
    getAllMatchIdsForPuuid,
    getAllMatches,
    getAllMatchIds,
    getMatchesForSummoner,
    sortMatchIdsByCreation,

    // db utilities
    refreshMatches,
    clearMatches,

    // champion
    championDataByPuuid,
  }
}
