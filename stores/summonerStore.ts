import { defineStore } from 'pinia'

export interface StoredTeammate {
  riotIdGameName: string
  profileIcon: number
  games: number
  wins: number
}

export const useSummonerStore = defineStore(
  'SummonerStore',
  () => {
    const summoners = ref<Record<string, Summoner>>({})

    const { addMatches, sortMatchIdsByCreation, getAllMatchIds } = useIndexedDB()

    // --- SETTER ---
    async function setSummoner(rawSummoner: Summoner) {
      const normalized = await normalizeSummonerForStore(rawSummoner)
      summoners.value[normalized.puuid] = normalized
    }

    async function mergeSummonerData(puuid: string, partial: Partial<Summoner>) {
      const existing = summoners.value[puuid]
      if (!existing)
        return
      summoners.value[puuid] = { ...existing, ...partial }
    }

    const getSummoner = (puuid: string) => summoners.value[puuid] || null

    // --- RESOLVE SUMMONER ---
    async function resolveSummoner(identifier: {
      puuid?: string
      region?: string
      name?: string
      tag?: string
    }): Promise<Summoner> {
      if (!identifier.puuid && (!identifier.region || !identifier.name || !identifier.tag))
        throw new Error('Must provide puuid or region+name+tag')

      // Lookup cached summoner
      let cached: Summoner | null = null
      if (identifier.puuid)
        cached = getSummoner(identifier.puuid)
      if (cached && !isStale(cached.lastUpdate))
        return cached

      console.log('identifier.puuid: ', identifier.puuid)
      // Fetch summoner via API

      let params: Record<string, string>

      if (typeof identifier === 'string') {
        params = { puuid: identifier }
      }
      else if ('puuid' in identifier && typeof identifier.puuid === 'string') {
        params = { puuid: identifier.puuid }
      }
      else {
        params = {
          region: identifier.region,
          name: identifier.name,
          tag: identifier.tag,
        }
      }

      const resolved = await $fetch<Summoner>('/api/riot/resolveSummoner', { params })
      console.log('resolved: ', resolved)

      // Normalize: fetch any missing matches via our central API

      await setSummoner(resolved)

      return getSummoner(resolved.puuid)!
    }

    // --- CLEAR METHODS ---
    const clearSummoner = (puuid: string) => {
      delete summoners.value[puuid]
    }

    const clearAll = () => {
      summoners.value = {}
    }

    /** ***********  ✨ Windsurf Command ⭐  */
    /**
     * Clears the oldest summoner from the cache if the size exceeds the maximum limit.
     *
     * @param {number} max - The maximum number of summoners to keep in the cache.
     */
    /** *****  2cdd15c3-021a-4bdc-a74d-48cdcca40977  */
    const limitCache = (max: number) => {
      const keys = Object.keys(summoners.value)
      if (keys.length > max)
        clearSummoner(keys[0])
    }

    // --- GET MATCHES FOR SUMMONER ---
    async function getMatchesForSummoner(puuid: string): Promise<MatchData[]> {
      const summoner = getSummoner(puuid)
      if (!summoner?.matchIds?.length)
        return []
      const matches = await matchDB.matchData.bulkGet(summoner.matchIds)
      return matches.filter(Boolean) as MatchData[]
    }

    return {
      summoners,
      setSummoner,
      mergeSummonerData,
      getSummoner,
      resolveSummoner,
      clearSummoner,
      clearAll,
      limitCache,
      getMatchesForSummoner,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'summonerStore',
    },
  },
)