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
    }

    // 3. Store full match once
    await putMatchTimeline(matchId, payload)

    const player = players[puuid]
    if (!player) throw new Error(`timeline missing for puuid: ${puuid}`)

    return player
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
    }

    await putMatchTimeline(matchId, payload)

    return puuids.map((p) => players[p]).filter(Boolean)
  }

  return {
    getTimeline,
    getBulkTimelines,
  }
}
