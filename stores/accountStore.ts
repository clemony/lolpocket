import { defineStore } from 'pinia'

export const useAccountStore = defineStore(
  'as',
  () => {
    const ts = useTempStore()

    const themeClass = ref('daylight')
    const dataTheme = ref('daylight')

    const userAccount = {
      name: ref('Summoner'),
      image: ref(null),
      role: ref(null),
      id: ref(null),
      session: ref(null),
      accessToken: '',
      refreshToken: '',
      puuid: ref(null),
      gameName: ref('Summoner'),
      tagLine: ref('Link Riot Account?'),
      profileIconId: ref(),
      summonerLevel: ref(0),
      region: ref('Runeterra'),
    }

    const rankedEntries = ref()

    const userNotes = ref<Note[]>([])

    const reducedMotion = ref(false)

    const favoriteChamps = ref<Champion[]>([])
    // items
    const favoriteItems = ref<Item[]>([])

    return {
      // account
      userAccount,
      rankedEntries,
      userNotes,

      // settings
      themeClass,
      dataTheme,
      reducedMotion,

      // champs
      favoriteChamps,

      // items
      favoriteItems,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'accountStore',
    },
  },
)
