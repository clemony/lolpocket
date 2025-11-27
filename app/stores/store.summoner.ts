import { defineStore } from "pinia"

export const useSummonerStore = defineStore(
  "summoner",
  () => {
    const MAX_CACHE = 100
    const TTL = 86_400_000 // 24 hours

    // only top-level mutations matter, contents never individually watched
    const cache = shallowRef<Record<string, Summoner>>({})
    const meta = shallowRef<Record<string, number>>({})
    const index = shallowRef<Record<string, string>>({})

    const makeKey = (r: string, n: string, t: string) =>
      `${r.toLowerCase()}:${n.toLowerCase()}:${t.toLowerCase()}`

    const resolveByPuuid = (puuid?: string | null) =>
      puuid ? (cache.value[puuid] ?? null) : null

    const resolveBySlug = (region: string, name: string, tag: string) => {
      const puuid = index.value[makeKey(region, name, tag)]
      return puuid ? (cache.value[puuid] ?? null) : null
    }
    /*
    async function getByRoute() {
      const route = useRoute()
      const [name, tag] = String(route.params.slug).split("_")
      return await ss().resolveBySlug(
        name.toLowerCase(),
        String(route.params.region).toLowerCase(),
        tag.toLowerCase()
      )
    } */

    const isStale = (puuid: string) =>
      !meta.value[puuid] || Date.now() - meta.value[puuid] > TTL

    const bump = (puuid: string) => {
      meta.value[puuid] = Date.now()
    }

    const evictIfNeeded = () => {
      const keys = Object.keys(cache.value)
      if (keys.length <= MAX_CACHE) return

      let oldest = keys[0]
      for (const id of keys) {
        if ((meta.value[id] ?? 0) < (meta.value[oldest] ?? 0)) oldest = id
      }

      delete cache.value[oldest]
      delete meta.value[oldest]

      for (const slug in index.value) {
        if (index.value[slug] === oldest) delete index.value[slug]
      }
    }

    const setSummoner = (s: Summoner) => {
      cache.value[s.puuid] = s
      index.value[makeKey(s.region, s.name, s.tag)] = s.puuid
      bump(s.puuid)
      evictIfNeeded()
    }

    const ensureSummoner = async (args: {
      puuid?: string
      region?: string
      name?: string
      tag?: string
      force?: boolean
    }): Promise<Summoner> => {
      const { puuid, region, name, tag, force } = args
      if (!puuid && !region && !name && !tag) return

      let existing: Summoner | null = null

      if (puuid) existing = resolveByPuuid(puuid)
      else if (region && name && tag)
        existing = resolveBySlug(region, name, tag)

      if (existing && !force && !isStale(existing.puuid)) return existing

      const base = await $fetch<Summoner>("/api/riot/summonerAccount", {
        params: args,
      })

      const ranked = await $fetch<{ ranked: Summoner["ranked"] }>(
        "/api/riot/v4/league/entries/byPuuid",
        { params: { puuid: base.puuid, region: base.region } }
      )

      const full = { ...base, ranked: ranked.ranked }
      setSummoner(full)

      return full
    }

    const resolveOrFetch = async (puuid: string) => {
      if (!puuid) return

      const hit = resolveByPuuid(puuid)
      if (hit) return hit
      return await ensureSummoner({ puuid })
    }

    const mergeRanked = (puuid: string, ranked: Summoner["ranked"]) => {
      const s = cache.value[puuid]
      if (!s) return
      cache.value[puuid] = { ...s, ranked }
      bump(puuid)
    }

    const clearAll = () => {
      cache.value = {}
      meta.value = {}
      index.value = {}
      localStorage.removeItem("summonerStore")
    }

    return {
      cache,
      meta,
      index,
      makeKey,
      resolveByPuuid,
      //getByRoute,
      resolveBySlug,
      ensureSummoner,
      resolveOrFetch,
      setSummoner,
      mergeRanked,
      clearAll,
    }
  },
  {
    persist: {
      key: "summonerStore",
      storage: piniaPluginPersistedstate.localStorage(),
      serializer: {
        serialize: (state) => {
          return JSON.stringify({
            cache: Object.entries(state.cache.value), // <= FIXED
            meta: state.meta.value, // <= FIXED
            index: state.index.value, // <= FIXED
          })
        },
        deserialize: (raw) => {
          const parsed = JSON.parse(raw)
          return {
            cache: Object.fromEntries(parsed.cache),
            meta: parsed.meta,
            index: parsed.index,
          }
        },
      },
    },
  }
)
