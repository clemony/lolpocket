export function useTimeline() {
  const { getMatchTimeline, putMatchTimeline } = useIndexedDB()

  const getTimeline = async (
    matchId: string,
    region: string,
    puuid: string
  ): Promise<PlayerTimeline> => {
    // 1. Check IndexedDB
    const local = await getMatchTimeline(matchId)

    if (local?.players?.[puuid]) {
      return local.players[puuid]
    }

    // 2. Fetch full match timeline ONCE
    const players = await $fetch<Record<string, PlayerTimeline>>(
      "/api/riot/v5/timeline/timelineByMatchId",
      {
        params: { matchId, region },
      }
    )

    const payload: MatchTimeline = {
      matchId,
      players,
      participantIds: Object.keys(players), // REQUIRED
      lastAccessedAt: Date.now(),
    }

    await lpdb.matchTimeline.put(payload)

    // 3. Store full match once
    await putMatchTimeline(matchId, payload)

    const player = players[puuid]
    if (!player) throw new Error(`timeline missing for puuid: ${puuid}`)

    return player
  }

  const getAllTimelinesForPuuid = async (
    puuid: string
  ): Promise<PlayerTimeline[]> => {
    const rows = await lpdb.matchTimeline
      .where("participantIds")
      .equals(puuid)
      .toArray()

    return rows
      .map((r) => r.players?.[puuid])
      .filter((t): t is PlayerTimeline => !!t)
  }

  const getBulkTimelines = async (
    matchId: string,
    region: string,
    puuids: string[]
  ): Promise<PlayerTimeline[]> => {
    // Single source of truth: only call getTimeline once
    const local = await getMatchTimeline(matchId)

    if (local?.players) {
      return puuids.map((p) => local.players[p]).filter(Boolean)
    }

    // Fetch once, store once
    const players = await $fetch<Record<string, PlayerTimeline>>(
      "/api/riot/v5/timeline/timelineByMatchId",
      {
        params: { matchId, region },
      }
    )

    const payload: MatchTimeline = {
      matchId,
      players,
      participantIds: Object.keys(players), // REQUIRED
      lastAccessedAt: Date.now(),
    }

    await putMatchTimeline(matchId, payload)

    return puuids.map((p) => players[p]).filter(Boolean)
  }

  return {
    getTimeline,
    getAllTimelinesForPuuid,
    getBulkTimelines,
  }
}
