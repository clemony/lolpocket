import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'

export const useDataStore = defineStore(
  'dataStore',
  () => {
    const currentPatch = ref()
    console.log("💠 - currentPatch:", currentPatch)
    const patchList = ref<string[]>([])
    console.log("💠 - patchList:", patchList)
    const lastFetched = ref<number>(0) // timestamp
    console.log("💠 - lastFetched:", lastFetched)

    const currentPatchNotes = ref<PatchNotesData>(null)
    const patchNotesLink = computed(() => {
      return currentPatch.value
        ? `https://www.leagueoflegends.com/en-us/news/game-updates/patch-${currentPatch.value.toString().replace('.', '-')}-notes/`
        : ''
    })

    const loadPatchData = async () => {
      const now = Date.now()
      const oneDay = 1000 * 60 * 60 * 24

      if (!patchList.value.length || now - lastFetched.value > oneDay) {
        try {
          const { data, error } = await useFetch('/api/index/patch-index.json').json<string[]>()
          if (!error.value && data.value) {
            patchList.value = data.value
            currentPatch.value = data.value[data.value.length - 1]
            lastFetched.value = now
          } else {
            console.error('Failed to fetch patch data:', error.value)
          }
        } catch (err) {
          console.error('Patch fetch error:', err)
        }
      }
    }

    return {
      currentPatch,
      patchList,
      currentPatchNotes,
      patchNotesLink,
      lastFetched,
      loadPatchData,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'dataStore',
    },
  },
)