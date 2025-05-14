import { defineStore } from 'pinia'
// Define types for the JSON data

export const useDataStore = defineStore(
  'dataStore',
  () => {
    const currentPatch = ref()
    const currentPatchNotes = ref<PatchNotesData>(null)

    const patchNotesLink = computed (() => {
      return `https://www.leagueoflegends.com/en-us/news/game-updates/patch-${currentPatch.value.toString().replace('.', '-')}-notes/`
    })
    const paths = ref<Path[]>([])
    const champions = ref<Champion[]>([])
    const shards = ref()

    const championNames = computedAsync (() => {
      return champions.value.map(c => c.name)
    })

    const runes = computed (() => {
      const path = paths.value.flatMap(p => p.slots)
      const slots = path.flatMap(s => s[0])
      const runes = slots.flatMap(({ id, name }) => ({
        id,
        name,
      }))
      return runes
    })

    return {
      currentPatch,
      patchNotesLink,
      currentPatchNotes,
      paths,
      runes,
      champions,
      championNames,

      shards,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'dataStore',
      afterHydrate: (ctx) => {
        const as = useDataStore()
        // ts.drawerState = false
      },
    },
  },
)
