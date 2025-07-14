import { defineStore } from "pinia"

export const useSummonerStore = defineStore(
  "SummonerStore",
  () => {
    const summoners = ref<Record<string, Summoner>>({})

    // 🔄 Centralized setter: always normalizes
    async function setSummoner(rawSummoner: Summoner) {
      const normalized = await normalizeSummonerForStore(rawSummoner)
      summoners.value[normalized.puuid] = normalized
    }

    const getSummoner = (puuid: string) => summoners.value[puuid] || null

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
      console.log("💠 - clearAll - summoners.value:", summoners.value)
    }

    return {
      summoners,
      setSummoner,
      getSummoner,
      clearSummoner,
      clearAll,
      limitCache,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.sessionStorage(),
      key: "summonerStore",
    },
  }
)
