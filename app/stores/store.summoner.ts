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
    const MAX_CACHE = 100
    const cache = reactive<Record<string, Summoner>>({})

    function setSummoner(s: Summoner) {
      // Refresh key order: delete + reassign ensures newest ends up last
      if (cache[s.puuid]) {
        delete cache[s.puuid]
      }
      cache[s.puuid] = s

      const keys = Object.keys(cache)
      if (keys.length > MAX_CACHE) {
        delete cache[keys[0]]
      }
    }

    function isNameStale(updatedName?: number) {
      if (!updatedName)
        return true
      const THIRTY_DAYS = 1000 * 60 * 60 * 24 * 30
      return Date.now() - updatedName > THIRTY_DAYS
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
      if (!identifier.puuid && (!identifier.region || !identifier.name || !identifier.tag)) {
        throw new Error('Must provide puuid or region+name+tag')
      }

      const cached: Summoner | null = identifier.puuid ? getSummoner(identifier.puuid) : null

      // Fresh enough? Return cached immediately
      if (cached && !options?.force && !isStale(cached.updatedData)) {
        if (isNameStale(cached.updatedName)) {
          // Fire-and-forget background refresh of name
          ;(async () => {
            try {
              const n = await $fetch('/api/riot/fetchAccountByPuuid', {
                params: { puuid: cached!.puuid },
              })
              mergeSummonerData(cached!.puuid, {
                name: n.gameName,
                updatedName: Date.now(),
              })
            }
            catch (err) {
              console.error('Failed background name refresh', err)
            }
          })()
        }
        return cached
      }

      try {
        // 1) Basic info
        const base = await $fetch<Summoner>('/api/riot/fetchSummoner', {
          params: { ...identifier },
        })

        // 2) Ranked info (puuid + region always present after step 1)
        const ranked = await $fetch<{ ranked: Summoner['ranked'] }>('/api/riot/fetchRankedData', {
          params: { puuid: base.puuid, region: base.region },
        })

        // 3) Merge and cache
        const full: Summoner = {
          ...base,
          ranked: ranked.ranked,
        }

        setSummoner(full)
        return full
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