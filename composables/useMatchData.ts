import { ref } from 'vue'
import { matchDB } from 'stores/matchDB'
import { useMatchStore } from 'stores/matchStore'

export function useMatchData(puuid: string) {
  const matchData = ref<MatchData[]>([])
  const loading = ref(false)
  const currentPage = ref(1)
  const itemsPerPage = 20
  const ready = ref(false)

  const { getAllMatchIds, addMatches } = useMatchDexie()
  const ms = useMatchStore()

  const simplifyMatch = (match: MatchData): piniaMatchData | null => {
    const participant = match.info.participants.find(p => p.puuid === puuid)
    if (!participant)
      return null

    return {
      puuid: participant.puuid,
      gameCreation: match.info.gameCreation,
      gameEndTimestamp: match.info.gameEndTimestamp,
      gameVersion: normalizePatchNumber(match.info.gameVersion),
      win: participant.win,
      queueId: match.queueId,
      championName: participant.championName,
      teamPosition: participant.teamPosition,
      item0: participant.item0,
      item1: participant.item1,
      item2: participant.item2,
      item3: participant.item3,
      item4: participant.item4,
      item5: participant.item5,
      item6: participant.item6,
      perks: {
        keystone: participant.perks.keystone ?? 0,
        primary: participant.perks.primary ?? 0,
        secondary: participant.perks.secondary ?? 0,
      },
      participants: match.info.participants.map(p => ({
        riotIdGameName: p.riotIdGameName,
        profileIcon: p.profileIcon,
      })),
    }
  }

  const fetchInitialMatches = async () => {
    if (!puuid) {
      console.warn('⛔ puuid missing when fetchInitialMatches called')
      return
    }
    loading.value = true
    try {
      const matches = await matchDB.matchData.toArray()
      matchData.value = matches.sort((a, b) => b.info.gameCreation - a.info.gameCreation)

      const simplified = matchData.value.map(simplifyMatch).filter(Boolean) as piniaMatchData[]
      ms.setMatches(simplified)
   /*    await fetchRankedEntries(puuid) */

    }
    finally {
      loading.value = false
      ready.value = true
    }
  }

  // ⬇️ only run when puuid is valid and truthy
  watchEffect(() => {
    if (puuid) {
      fetchInitialMatches()
    }
  })

  /* const loadMoreMatches = async () => {
    loading.value = true
    const existingIds = await getAllMatchIds()

    const newMatches = await $fetch<MatchData[]>('/api/riot/matches-by-puuid', {
      method: 'GET',
      params: {
        puuid,
        existingIds: JSON.stringify(existingIds),
      },
    })

    if (newMatches.length > 0) {
      await addMatches(newMatches)

      const deduped = newMatches.filter(
        m => !matchData.value.some(existing => existing.metadata.matchId === m.metadata.matchId),
      )

      matchData.value.push(...deduped)
      matchData.value.sort((a, b) => b.info.gameCreation - a.info.gameCreation)
      currentPage.value++

      // transform and append simplified data
      const simplified = deduped.map(simplifyMatch).filter(Boolean) as piniaMatchData[]
      ms.appendMatches(simplified)
    }

    loading.value = false
  } */

  return {
    matchData,
    loading,
    ready,
    currentPage,
    itemsPerPage,
    fetchInitialMatches,
    //loadMoreMatches,
  }
}