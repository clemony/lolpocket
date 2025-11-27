export function useTimeline() {
  const { getMatchTimeline, addPlayerTimeline } = useIndexedDB()

  const getTimeline = async (
    matchId: string,
    region: string,
    puuid: string
  ): Promise<PlayerTimeline> => {
    // 1. check IndexedDB
    const local = await getMatchTimeline(matchId)

    if (local?.players?.[puuid]) {
      return local.players[puuid]
    }

    // 2. fetch from server (cached by match only)
    const playerTimeline = await $fetch<PlayerTimeline>(
      "/api/riot/v5/timeline/timelineByMatchId",
      {
        params: { matchId, region, puuid },
      }
    )

    // 3. save into IndexedDB
    await addPlayerTimeline(matchId, puuid, playerTimeline)

    return playerTimeline
  }

  const getBulkTimelinesForPlayers = async (
    matchId: string,
    region: string,
    puuids: string[]
  ) => {
    return Promise.all(
      puuids.map((puuid) => getTimeline(matchId, region, puuid))
    )
  }

  return {
    getTimeline,
    getBulkTimelinesForPlayers,
  }
}
