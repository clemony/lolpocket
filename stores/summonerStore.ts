import { defineStore } from 'pinia'

export const useSummonerStore = defineStore('SummonerStore', () => {
  // Store to hold summoner data by puuid
  const summoners = ref<Record<string, ExtendedSummoner>>({})
  // Method to set a summoner
  function setSummoner(summoner: Summoner) {
    const extended = normalizeSummonerForStore(summoner)
    summoners.value[summoner.puuid] = extended
  }
  // Method to get a summoner by puuid
  const getSummoner = (puuid: string) => summoners.value[puuid]

  // Method to clear summoner data
  const clearSummoner = (puuid: string) => {
    delete summoners.value[puuid]
  }

  const limitCache = (maxCacheSize: number) => {
    const summonerKeys = Object.keys(summoners.value)
    if (summonerKeys.length > maxCacheSize) {
      const oldestPuuid = summonerKeys[0]
      clearSummoner(oldestPuuid)
    }
  }

  return {
    summoners,
    setSummoner,
    getSummoner,
    clearSummoner,
    limitCache,
  }
}, {
  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
    key: 'summonerStore',
  },
})