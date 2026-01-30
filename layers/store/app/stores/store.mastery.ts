import { defineStore } from 'pinia'

export const useMasteryStore = defineStore(
  'MasteryStore',
  () => {
    const summonerMastery = ref<Record<string, SummonerMastery>>({})
    return {
      summonerMastery,
    }
  },
  {
    persist: {
      key: 'masteryStore',
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
