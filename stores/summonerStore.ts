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

    // --- SETTER ---
    function setSummoner(summoner: Summoner) {
      summoners.value[summoner.puuid] = summoner
    }

    function mergeSummonerData(puuid: string, partial: Partial<Summoner>) {
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
      if (!identifier.puuid && (!identifier.region || !identifier.name || !identifier.tag)) {
        throw new Error('Must provide puuid or region+name+tag')
      }

      // --- Check cache ---
      let cached: Summoner | null = null
      if (identifier.puuid) {
        cached = getSummoner(identifier.puuid)
      }
      if (cached && !isStale(cached.lastUpdate)) {
        return cached
      }

      // --- Build API params ---
      const params: Record<string, string> = identifier.puuid
        ? { puuid: identifier.puuid }
        : {
            region: identifier.region!,
            name: identifier.name!,
            tag: identifier.tag!,
          }

      // --- Fetch only summoner profile ---
      const resolved = await $fetch<Summoner>('/api/riot/resolveSummoner', { params })

      setSummoner(resolved)

      return resolved
    }

    // --- CLEAR METHODS ---
    const clearSummoner = (puuid: string) => {
      delete summoners.value[puuid]
    }

    const clearAll = () => {
      summoners.value = {}
    }

    const limitCache = (max: number) => {
      const keys = Object.keys(summoners.value)
      if (keys.length > max) {
        clearSummoner(keys[0])
      }
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
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'summonerStore',
    },
  },
)