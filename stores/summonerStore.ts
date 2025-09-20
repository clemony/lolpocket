import { defineStore } from 'pinia'

export interface StoredTeammate {
  games: number
  profileIcon: number
  riotIdGameName: string
  wins: number
}

export const useSummonerStore = defineStore(
  'SummonerStore',
  () => {
    const MAX_CACHE = 30
    const cache = reactive<Record<string, Summoner>>({})

    function setSummoner(s: Summoner) {
      cache[s.puuid] = s
      const keys = Object.keys(cache)
      if (keys.length > MAX_CACHE) {
        delete cache[keys[0]]
      }
    }

    function getSummoner(puuid: string) {
      return cache[puuid] ?? null
    }

    const summoners = computed(() => cache)

    function mergeSummonerData(puuid: string, partial: Partial<Summoner>) {
      const existing = cache[puuid]
      if (!existing)
        return
      cache[puuid] = { ...existing, ...partial }
    }

    function clearSummoner(puuid: string) {
      delete cache[puuid]
    }

    function clearAll() {
      for (const key in cache) {
        delete cache[key]
      }
    }

    async function resolveSummoner(
      identifier: {
        puuid?: string
        region?: string
        name?: string
        tag?: string
      },
      options?: { force?: boolean }
    ): Promise<Summoner> {
      if (
        !identifier.puuid
        && (!identifier.region || !identifier.name || !identifier.tag)
      ) {
        throw new Error('Must provide puuid or region+name+tag')
      }

      let cached: Summoner | null = null
      if (identifier.puuid) {
        cached = getSummoner(identifier.puuid)
      }

      if (cached && !options?.force && !isStale(cached.lastUpdate)) {
        return cached
      }

      const params: Record<string, string> = identifier.puuid
        ? { puuid: identifier.puuid }
        : {
            name: identifier.name!,
            region: identifier.region!,
            tag: identifier.tag!,
          }

      try {
        const resolved = await $fetch<Summoner>('/api/riot/resolveSummoner', {
          params,
        })
        setSummoner(resolved)
        return resolved
      }
      catch (err) {
        if (cached)
          return cached
        throw err
      }
    }

    return {
      cache,
      clearAll,
      clearSummoner,
      getSummoner,
      mergeSummonerData,
      resolveSummoner,
      setSummoner,
      summoners
    }
  },
  {
    persist: {
      key: 'summonerStore',
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)