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
    const MAX_CACHE = 30
    const cache = reactive(new Map<string, Summoner>())

    // --- SETTER ---
    function setSummoner(s: Summoner) {
      cache.set(s.puuid, s)
      if (cache.size > MAX_CACHE) {
        const oldestKey = cache.keys().next().value
        cache.delete(oldestKey)
      }
    }

    // --- GETTER ---
    function getSummoner(puuid: string) {
      return cache.get(puuid) ?? null
    }

    // --- SNAPSHOT (for reactivity in templates) ---
    const summoners = computed<Record<string, Summoner>>(() =>
      Object.fromEntries(cache.entries()),
    )

    // --- MERGE ---
    function mergeSummonerData(puuid: string, partial: Partial<Summoner>) {
      const existing = cache.get(puuid)
      if (!existing)
        return
      const updated = { ...existing, ...partial }
      cache.set(puuid, updated)
    }

    // --- CLEAR METHODS ---
    function clearSummoner(puuid: string) {
      cache.delete(puuid)
    }

    function clearAll() {
      cache.clear()
    }

    // --- RESOLVE SUMMONER ---
    async function resolveSummoner(
      identifier: {
        puuid?: string
        region?: string
        name?: string
        tag?: string
      },
      options?: { force?: boolean },
    ): Promise<Summoner> {
      if (!identifier.puuid && (!identifier.region || !identifier.name || !identifier.tag)) {
        throw new Error('Must provide puuid or region+name+tag')
      }

      // --- Check cache unless forced ---
      let cached: Summoner | null = null
      if (identifier.puuid && !options?.force) {
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

    return {
      summoners, // reactive snapshot for templates
      getSummoner, // safe accessor
      setSummoner, // add/update
      mergeSummonerData,
      clearSummoner,
      clearAll,
      resolveSummoner, // fetch + cache
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'summonerStore',
    },
  },
)