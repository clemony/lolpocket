import { defineStore } from "pinia"

export const useSummonerStore = defineStore(
  "SummonerStore",
  () => {
    const MAX_CACHE = 100

    const cache = shallowRef<Map<string, Summoner>>(new Map())
    const meta = shallowRef<
      Map<string, { updatedData: number; updatedName: number }>
    >(new Map())

    const getMeta = (id: string) => meta.value.get(id)

    const setMeta = (
      id: string,
      data: Partial<{ updatedData: number; updatedName: number }>
    ) => {
      const m = meta.value.get(id) || { updatedData: 0, updatedName: 0 }
      const next = { ...m, ...data }
      if (
        m.updatedData === next.updatedData &&
        m.updatedName === next.updatedName
      )
        return
      const newMeta = new Map(meta.value)
      newMeta.set(id, next)
      meta.value = newMeta
    }

    const isStale = (id: string, ttl = 86400000) => {
      const m = meta.value.get(id)
      if (!m) return true
      return Date.now() - m.updatedData > ttl
    }

    const isNameStale = (id: string) => {
      const m = meta.value.get(id)
      if (!m) return true
      return Date.now() - m.updatedName > 2592000000
    }

    const setSummoner = (s: Summoner) => {
      const existing = cache.value.get(s.puuid)
      if (JSON.stringify(existing) !== JSON.stringify(s)) {
        const next = new Map(cache.value)
        next.delete(s.puuid)
        next.set(s.puuid, s)
        if (next.size > MAX_CACHE) {
          const oldest = next.keys().next().value
          next.delete(oldest)
          const newMeta = new Map(meta.value)
          newMeta.delete(oldest)
          meta.value = newMeta
        }
        cache.value = next
      }
      setMeta(s.puuid, { updatedData: Date.now(), updatedName: Date.now() })
    }

    const mergeSummonerData = (id: string, partial: Partial<Summoner>) => {
      const existing = cache.value.get(id)
      if (!existing) return
      const next = { ...existing, ...partial }
      if (JSON.stringify(existing) === JSON.stringify(next)) return
      const updated = new Map(cache.value)
      updated.set(id, next)
      cache.value = updated
    }

    const clearSummoner = (id: string) => {
      const next = new Map(cache.value)
      const nextMeta = new Map(meta.value)
      next.delete(id)
      nextMeta.delete(id)
      cache.value = next
      meta.value = nextMeta
    }

    const clearAll = () => {
      cache.value = new Map()
      meta.value = new Map()
    }

    const resolveSummoner = async (
      identifier: {
        puuid?: string
        region?: string
        name?: string
        tag?: string
      },
      options?: { force?: boolean }
    ): Promise<Summoner> => {
      if (
        !identifier.puuid &&
        (!identifier.region || !identifier.name || !identifier.tag)
      )
        throw new Error("Missing required identifiers")

      const id = identifier.puuid
      const cached = id ? (cache.value.get(id) ?? null) : null

      if (cached && !options?.force && !isStale(cached.puuid)) {
        if (isNameStale(cached.puuid)) {
          ;(async () => {
            try {
              const n = await $fetch("/api/riot/fetchAccountByPuuid", {
                params: { puuid: cached.puuid },
              })
              if (cached.name !== n.gameName) {
                mergeSummonerData(cached.puuid, { name: n.gameName })
              }
              setMeta(cached.puuid, { updatedName: Date.now() })
            } catch {}
          })()
        }
        return cached
      }

      try {
        const base = await $fetch<Summoner>("/api/riot/fetchSummoner", {
          params: { ...identifier },
        })

        const ranked = await $fetch<{ ranked: Summoner["ranked"] }>(
          "/api/riot/fetchRankedData",
          {
            params: { puuid: base.puuid, region: base.region },
          }
        )

        const full: Summoner = { ...base, ranked: ranked.ranked }
        setSummoner(full)
        return full
      } catch (err) {
        if (cached) return cached
        throw err
      }
    }

    return {
      cache,
      meta,
      setSummoner,
      mergeSummonerData,
      clearSummoner,
      clearAll,
      resolveSummoner,
    }
  },
  {
    persist: {
      key: "summonerStore",
      storage: piniaPluginPersistedstate.localStorage(),
      serializer: {
        serialize: (state) =>
          JSON.stringify({
            cache: Array.from(state.cache.entries()),
            meta: Array.from(state.meta.entries()),
          }),
        deserialize: (str) => {
          const raw = JSON.parse(str)
          return {
            cache: new Map(raw.cache),
            meta: new Map(raw.meta),
          }
        },
      },
    },
  }
)
