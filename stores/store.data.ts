import { useFetch } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useDataStore = defineStore(
  'dataStore',
  () => {
    const currentPatch = ref()
    console.log('💠 - currentPatch:', currentPatch)
    const patchList = ref<number[]>([])
    const lastFetched = ref<number>(0) // timestamp

    const loadPatchData = async () => {
      const now = Date.now()
      const oneDay = 1000 * 60 * 60 * 24

      if (!patchList.value.length || now - lastFetched.value > oneDay) {
        try {
          const { data, error } = await useFetch(
            '/api/index/patch-index.json'
          ).json<number[]>()
          if (!error.value && data.value) {
            patchList.value = data.value
            currentPatch.value = data.value[data.value.length - 1]
            lastFetched.value = now
          }
          else {
            console.error('Failed to fetch patch data:', error.value)
          }
        }
        catch (err) {
          console.error('Patch fetch error:', err)
        }
      }
    }

    const currentPatchNotes = ref<PatchNotesData>(null)
    const patchNotesLink = computed(() => {
      return currentPatch.value
        ? `https://www.leagueoflegends.com/en-us/news/game-updates/patch-${currentPatch.value.toString().replace('.', '-')}-notes/`
        : ''
    })

    return {
      currentPatch,
      currentPatchNotes,
      lastFetched,
      loadPatchData,
      patchList,
      patchNotesLink,
    }
  },
  {
    persist: {
      key: 'dataStore',
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
