export const summonerStore = defineStore(
  "summoner-store",
  () => {
    const hydrated = ref<boolean>(false)
    const MAX_CACHE = 100
    const TTL = 86_400_000 // 24 hours
    const RANKED_TTL = 900_000 // 15 minutes

    // only top-level mutations matter, contents never individually watched
    const cache = ref<Record<string, Summoner>>({})
    const meta = ref<Record<string, number>>({})
    const rankedMeta = ref<Record<string, number>>({})
    const index = ref<Record<string, string>>({})
    const rankedInflight = new Map<
      Summoner["puuid"],
      Promise<Summoner["ranked"]>
    >()

    const makeKey = (r?: string | null, n?: string | null, t?: string | null) =>
      `${String(r ?? "").toLowerCase()}:${String(n ?? "").toLowerCase()}:${String(t ?? "").toLowerCase()}`

    const rebuildIndex = () => {
      index.value = {}

      for (const s of Object.values(cache.value)) {
        if (!s?.puuid || !s?.region || !s?.name || !s?.tag) continue
        index.value[makeKey(s.region, s.name, s.tag)] = s.puuid
      }
    }

    const resolveByPuuid = (puuid?: string | null) =>
      puuid ? (cache.value[puuid] ?? null) : null

    const resolveBySlug = (region: string, name: string, tag: string) => {
      if (!region || !name || !tag) return null
      if (!Object.keys(index.value).length) {
        rebuildIndex()
      }

      const puuid = index.value[makeKey(region, name, tag)]
      return puuid ? (cache.value[puuid] ?? null) : null
    }
    /*
    async function getByRoute() {
      const route = useRoute()
      const [name, tag] = String(route.params.slug).split("_")
      return await summonerStore().resolveBySlug(
        name.toLowerCase(),
        String(route.params.region).toLowerCase(),
        tag.toLowerCase()
      )
    } */

    const isStale = (puuid: string) =>
      !meta.value[puuid] || Date.now() - meta.value[puuid] > TTL

    const isRankedStale = (puuid: Summoner["puuid"]) =>
      !rankedMeta.value[puuid]
      || Date.now() - rankedMeta.value[puuid] > RANKED_TTL

    const bump = (puuid: string) => {
      meta.value[puuid] = Date.now()
    }

    const bumpRanked = (puuid: Summoner["puuid"]) => {
      rankedMeta.value[puuid] = Date.now()
    }

    const currentRanked = (puuid: Summoner["puuid"]) =>
      cache.value[puuid]?.ranked ?? {}

    const evictIfNeeded = () => {
      const keys = Object.keys(cache.value)
      if (!keys.length || keys.length <= MAX_CACHE) return

      let oldest = keys[0]!
      for (const id of keys) {
        if ((meta.value[id] ?? 0) < (meta.value[oldest] ?? 0)) oldest = id
      }

      delete cache.value[oldest]
      delete meta.value[oldest]
      delete rankedMeta.value[oldest]

      for (const slug in index.value) {
        if (index.value[slug] === oldest) delete index.value[slug]
      }
    }

    const setSummoner = (s: Summoner) => {
      if (!s?.puuid || !s?.region || !s?.name || !s?.tag) return
      const ranked = s.ranked ?? cache.value[s.puuid]?.ranked ?? {}
      cache.value[s.puuid] = { ...s, ranked }
      index.value[makeKey(s.region, s.name, s.tag)] = s.puuid
      bump(s.puuid)
      evictIfNeeded()
    }

    const mergeRanked = (
      puuid: Summoner["puuid"],
      ranked: Summoner["ranked"]
    ) => {
      const nextRanked = ranked ?? {}
      const s = cache.value[puuid]
      if (s) cache.value[puuid] = { ...s, ranked: nextRanked }
      bumpRanked(puuid)
      return nextRanked
    }

    const refreshRanked = async (
      puuid: Summoner["puuid"],
      region: Summoner["region"],
      options: { force?: boolean } = {}
    ): Promise<Summoner["ranked"]> => {
      const inflight = rankedInflight.get(puuid)
      if (inflight) return await inflight

      if (!options.force && !isRankedStale(puuid)) {
        return currentRanked(puuid)
      }

      const promise = (async () => {
        try {
          const res = await $fetch<{ ranked: Summoner["ranked"] }>(
            "/api/riot/v4/league/entries/puuid",
            { params: { puuid, region } }
          )

          return mergeRanked(puuid, res.ranked)
        } catch (err) {
          console.warn("Failed ranked refresh, continuing with cached ranked", err)
          return currentRanked(puuid)
        } finally {
          rankedInflight.delete(puuid)
        }
      })()

      rankedInflight.set(puuid, promise)
      return await promise
    }

    const ensureSummoner = async (args: {
      puuid?: string
      region?: string
      name?: string
      tag?: string
      force?: boolean
    }): Promise<Summoner | null> => {
      const { name, puuid, force, region, tag } = args
      if (!puuid && !region && !name && !tag) return null

      console.log("🥸 - index:", index)
      let existing: Summoner | null = null

      if (puuid) existing = resolveByPuuid(puuid)
      else if (region && name && tag)
        existing = resolveBySlug(region, name, tag)
      console.log("🥸 - ensureSummoner - existing:", existing)

      const hasFullIdentity = Boolean(
        existing?.puuid && existing?.region && existing?.name && existing?.tag
      )
      if (existing && hasFullIdentity && !force && !isStale(existing.puuid)) {
        await refreshRanked(existing.puuid, existing.region)
        return cache.value[existing.puuid] ?? existing
      }

      const base = await $fetch<Summoner>("/api/riot/summoner", {
        params: args
      })

      setSummoner(base)
      await refreshRanked(base.puuid, base.region, { force })

      return cache.value[base.puuid] ?? base
    }

    const resolveOrFetch = async (puuid: string) => {
      if (!puuid) return

      const hit = resolveByPuuid(puuid)
      console.log("🥸 - resolveOrFetch - hit:", hit)
      if (hit) return hit
      return await ensureSummoner({ puuid })
    }

    const clearAll = () => {
      cache.value = {}
      meta.value = {}
      rankedMeta.value = {}
      index.value = {}
      localStorage.removeItem("summonerStore")
    }

    const patchSummoner = (puuid: string, patch: Partial<Summoner>) => {
      const s = cache.value[puuid]
      if (!s) return

      cache.value[puuid] = { ...s, ...patch }
      bump(puuid)
    }

    return {
      resolveByPuuid,
      cache,
      clearAll,
      ensureSummoner,
      hydrated,
      index,
      makeKey,
      meta,
      patchSummoner,
      rankedMeta,
      rebuildIndex,
      refreshRanked,
      // getByRoute,
      resolveBySlug,
      resolveOrFetch,
      setSummoner
    }
  },
  {
    persist: {
      key: "summonerStore",
      afterHydrate: (ctx) => {
        ctx.store.rebuildIndex()
        ctx.store.hydrated = true
      },
      storage: piniaPluginPersistedstate.localStorage()
    }
  }
)
