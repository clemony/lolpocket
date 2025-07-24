import { defineStore } from 'pinia'

export const useSummonerStore = defineStore(
  'SummonerStore',
  () => {
    const summoners = ref<Record<string, Summoner>>({})

    // 🔄 Centralized setter: always normalizes
    async function setSummoner(rawSummoner: Summoner) {
      const normalized = await normalizeSummonerForStore(rawSummoner)
      summoners.value[normalized.puuid] = normalized
    }

    async function mergeSummonerData(
      puuid: string,
      partial: Partial<Summoner>,
    ) {
      const existing = summoners.value[puuid]
      if (!existing)
        return

      summoners.value[puuid] = {
        ...existing,
        ...partial,
      }
    }

    const getSummoner = (puuid: string) => summoners.value[puuid] || null

    async function resolveSummoner(identifier: {
      puuid?: string
      region?: string
      name?: string
      tag?: string
    }): Promise<Summoner> {
      if (
        !identifier.puuid
        && (!identifier.region || !identifier.name || !identifier.tag)
      ) {
        throw new Error(
          'resolveSummoner: Must provide either puuid or region + name + tag',
        )
      }

      // 1. Try to resolve by puuid
      if (identifier.puuid) {
        const existing = getSummoner(identifier.puuid)
        if (existing)
          return existing

        const fetched = await useFetchSummonerData(identifier.puuid)
        await setSummoner(fetched)
        return fetched
      }

      // 2. Try to match cached summoner by region + name + tag
      const match = Object.values(summoners.value).find(
        s =>
          s.region === identifier.region
          && s.name?.toLowerCase() === identifier.name?.toLowerCase()
          && s.tag?.toLowerCase() === identifier.tag?.toLowerCase(),
      )

      if (match)
        return match

      // 3. Fallback to API-based resolution if still not found
      try {
        const resolved = await $fetch<Summoner>('/api/resolve-summoner', {
          params: {
            region: identifier.region,
            name: identifier.name,
            tag: identifier.tag,
          },
        })

        const summonerId = {
          ...resolved,
          name: identifier.name,
          tag: identifier.tag,
        }
        await setSummoner(summonerId)
        return resolved
      }
      catch (error) {
        console.error(
          'resolveSummoner: Failed to resolve summoner via API',
          error,
        )
        throw error
      }
    }

    const clearSummoner = (puuid: string) => {
      delete summoners.value[puuid]
    }

    // 🔂 Optionally keep cache small
    const limitCache = (max: number) => {
      const keys = Object.keys(summoners.value)
      if (keys.length > max) {
        const oldest = keys[0]
        clearSummoner(oldest)
      }
    }

    // 🧼 If you ever want a true clear-all method
    const clearAll = () => {
      summoners.value = {}
      console.log(summoners.value)
      console.log('💠 - clearAll - summoners.value:', summoners.value)
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
