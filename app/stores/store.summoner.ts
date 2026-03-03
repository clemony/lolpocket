//
import { defineStore } from "pinia"

export const sSummoner = defineStore(
  "summoner",
  () => {
    const hydrated = ref<boolean>(false)
    const MAX_CACHE = 100
    const TTL = 86_400_000 // 24 hours

    // only top-level mutations matter, contents never individually watched
    const cache = ref<Record<string, Summoner>>({})
    const meta = ref<Record<string, number>>({})
    const index = ref<Record<string, string>>({})

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
      return await sSummoner().resolveBySlug(
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
      if (!keys.length || keys.length <= MAX_CACHE) return

      let oldest = keys[0]!
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
      if (!s?.puuid || !s?.region || !s?.name || !s?.tag) return
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
        existing?.puuid && existing?.region && existing?.name && existing?.tag,
      )
      if (existing && hasFullIdentity && !force && !isStale(existing.puuid))
        return existing

      const base = await $fetch<Summoner>("/api/riot/summoner", {
        params: args,
      })

      let ranked: { ranked: Summoner["ranked"] } = { ranked: {} }
      try {
        ranked = await $fetch<{ ranked: Summoner["ranked"] }>(
          "/api/riot/v4/league/entries/puuid",
          { params: { puuid: base.puuid, region: base.region } },
        )
      } catch (err) {
        console.warn("Failed ranked lookup, continuing with base summoner", err)
      }

      const full = {
        ...base,
        ranked: ranked.ranked,
      }
      setSummoner(full)

      return full
    }

    const resolveOrFetch = async (puuid: string) => {
      if (!puuid) return

      const hit = resolveByPuuid(puuid)
      console.log("🥸 - resolveOrFetch - hit:", hit)
      if (hit) return hit
      return await ensureSummoner({ puuid })
    }

    const mergeRanked = (
      puuid: Summoner["puuid"],
      ranked: Summoner["ranked"],
    ) => {
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
      mergeRanked,
      meta,
      patchSummoner,
      rebuildIndex,
      // getByRoute,
      resolveBySlug,
      resolveOrFetch,
      setSummoner,
    }
  },
  {
    persist: {
      key: "summonerStore",
      afterHydrate: (ctx) => {
        ctx.store.rebuildIndex()
        ctx.store.hydrated = true
      },
      storage: piniaPluginPersistedstate.localStorage(),
    },
  },
)
