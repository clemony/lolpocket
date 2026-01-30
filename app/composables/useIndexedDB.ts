export function useIndexedDB() {
  const now = () => Date.now()

  // ---------- cursor ----------

  const getCursor = async (puuid: string) => {
    return (await lpdb.matchCursor.get(puuid)) ?? { puuid, lastIndex: 0 }
  }

  const setCursor = async (puuid: string, lastIndex: number) => {
    await lpdb.matchCursor.put({ puuid, lastIndex })
  }

  // ---------- timeline ----------

  const getMatchTimeline = async (matchId: string) => {
    const tl = await lpdb.matchTimeline.get(matchId)

    if (tl) {
      lpdb.matchTimeline
        .update(matchId, {
          lastAccessedAt: now(),
        })
        .catch(() => {})
    }

    return tl
  }

  const putMatchTimeline = async (matchId: string, data: MatchTimeline) => {
    await lpdb.matchTimeline.put({
      ...data,
      lastAccessedAt: now(),
    })
  }

  const clearTimelines = async () => {
    await lpdb.matchTimeline.clear()
  }

  // ---------- matches ----------

  const putMatchData = async (data: MatchData[]) => {
    await lpdb.matchData.bulkPut(data)
  }

  const getMatchesForSummoner = async (puuid: string) => {
    const arr = await lpdb.matchData
      .where('participantIds')
      .equals(puuid)
      .reverse()
      .sortBy('creation')

    const filtered = arr.filter(m => m.queueId !== 3200)

    if (filtered.length) {
      const ts = now()
      await lpdb.matchData.bulkPut(
        filtered.map(m => ({
          ...m,
          lastAccessedAt: ts,
        }))
      )
    }

    return filtered
  }

  const getAllMatches = async () => {
    const arr = await lpdb.matchData.toArray()
    const filtered = arr.filter(m => m.queueId !== 3200)

    if (filtered.length) {
      const ts = now()
      await lpdb.matchData.bulkPut(
        filtered.map(m => ({
          ...m,
          lastAccessedAt: ts,
        }))
      )
    }

    return filtered
  }

  const getAllMatchIds = async () => {
    return await lpdb.matchData.orderBy('metadata.matchId').keys()
  }

  const getAllMatchIdsForPuuid = async (puuid: string): Promise<string[]> => {
    return await lpdb.matchData
      .where('participantIds')
      .equals(puuid)
      .primaryKeys()
  }

  async function sortMatchIdsByCreation(ids: string[]): Promise<string[]> {
    const matches = await lpdb.matchData.bulkGet(ids)

    const valid = matches.filter((m): m is MatchData => !!m)

    if (valid.length) {
      const ts = now()
      await lpdb.matchData.bulkPut(
        valid.map(m => ({
          ...m,
          lastAccessedAt: ts,
        }))
      )
    }

    return valid
      .sort((a, b) => b.gameEndTimestamp - a.gameEndTimestamp)
      .map(m => m.matchId)
  }

  // ---------- db utilities ----------

  const clearMatches = async () => {
    await Promise.all([lpdb.matchData.clear()])
  }

  const refreshMatches = async () => {
    const data = await lpdb.matchData.toArray()

    if (data.length) {
      const ts = now()
      await lpdb.matchData.bulkPut(
        data.map(m => ({
          ...m,
          lastAccessedAt: ts,
        }))
      )
    }

    return data
  }

  return {
    getCursor,
    // cursor
    setCursor,

    clearTimelines,
    // timeline
    getMatchTimeline,
    putMatchTimeline,

    getAllMatchIdsForPuuid,
    getAllMatches,
    getAllMatchIds,
    getMatchesForSummoner,
    // match
    putMatchData,
    sortMatchIdsByCreation,

    clearMatches,
    // db utilities
    refreshMatches,
  }
}
