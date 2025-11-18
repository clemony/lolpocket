import { defineStore } from 'pinia'

export const useSummonerStore = defineStore(
  'SummonerStore',
  () => {
    const MAX_CACHE = 100
    const TTL = 86_400_000 // 24h

    const cache = shallowRef(new Map<string, Summoner>())
    const meta = shallowRef(new Map<string, { updated: number }>())
    const index = shallowRef(new Map<string, string>())

    const makeKey = (region: string, name: string, tag: string) =>
      `${region.toLowerCase()}:${name.toLowerCase()}:${tag.toLowerCase()}`

    const isStale = (puuid: string) => {
      const entry = meta.value.get(puuid)
      return !entry || Date.now() - entry.updated > TTL
    }

    const bump = (puuid: string) =>
      meta.value.set(puuid, { updated: Date.now() })

    const evict = () => {
      if (cache.value.size <= MAX_CACHE)
        return
      const oldest = cache.value.keys().next().value
      cache.value.delete(oldest)
      meta.value.delete(oldest)
      for (const [k, v] of index.value) {
        if (v === oldest)
          index.value.delete(k)
      }
    }

    const setSummoner = (s: Summoner) => {
      cache.value.set(s.puuid, s)
      index.value.set(makeKey(s.region, s.name, s.tag), s.puuid)
      bump(s.puuid)
      evict()
    }

    const resolveByPuuid = (puuid: string) => cache.value.get(puuid) || null

    const resolveBySlug = (region: string, name: string, tag: string) => {
      const puuid = index.value.get(makeKey(region, name, tag))
      return puuid ? (cache.value.get(puuid) ?? null) : null
    }

    const ensureSummoner = async (identifier: {
      puuid?: string
      region?: string
      name?: string
      tag?: string
      force?: boolean
    }): Promise<Summoner> => {
      const { name, puuid, force, region, tag } = identifier
      let summoner: Summoner | null = null

      if (puuid)
        summoner = resolveByPuuid(puuid)
      else if (region && name && tag)
        summoner = resolveBySlug(region, name, tag)

      if (summoner && !force && !isStale(summoner.puuid))
        return summoner

      console.log('🔹 fetching fresh…')

      // fetch fresh if missing or stale
      const base = await $fetch<Summoner>('/api/riot/summoner', {
        params: identifier,
      })
      console.log('📎 - ensureSummoner - base:', base)
      const ranked = await $fetch<{ ranked: Summoner['ranked'] }>(
        '/api/riot/ranked',
        {
          params: { puuid: base.puuid, region: base.region },
        }
      )
      console.log('📎 - ensureSummoner - ranked:', ranked)
      const full: Summoner = { ...base, ranked: ranked.ranked }
      console.log('📎 - ensureSummoner - full:', full)

      setSummoner(full)
      return full
    }

    const mergeRanked = (puuid: string, ranked: Summoner['ranked']) => {
      const s = cache.value.get(puuid)
      if (!s)
        return

      cache.value.set(puuid, {
        ...s,
        ranked,
      })

      bump(puuid)
    }

    const clearAll = () => {
      cache.value.clear()
      meta.value.clear()
      index.value.clear()

      // nuke persisted storage
      const key = 'summonerStore'
      localStorage.removeItem(key)
    }

    return {
      resolveByPuuid,
      cache,
      clearAll,
      ensureSummoner,
      index,
      makeKey,
      mergeRanked,
      meta,
      resolveBySlug,
      setSummoner,
    }
  },
  {
    persist: {
      key: 'summonerStore',
      serializer: {
        deserialize: (str) => {
          const raw = JSON.parse(str)
          const cacheMap = new Map<string, Summoner>(raw.cache)
          const metaMap = new Map<string, { updated: number }>(
            raw.meta.map(([k, v]: [string, { updated: any }]) => [
              k,
              { updated: Number(v.updated) || Date.now() },
            ])
          )
          const indexMap = new Map(raw.index)

          // rebuild index if empty
          if (!indexMap.size) {
            for (const s of cacheMap.values()) {
              indexMap.set(ss().makeKey(s.region, s.name, s.tag), s.puuid)
              if (!metaMap.has(s.puuid))
                metaMap.set(s.puuid, { updated: s.updatedData || Date.now() })
            }
          }

          return { cache: cacheMap, index: indexMap, meta: metaMap }
        },
        serialize: state =>
          JSON.stringify({
            cache: [...state.cache.entries()],
            index: [...state.index.entries()],
            meta: [...state.meta.entries()],
          }),
      },
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
