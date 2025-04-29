import { defineStore } from 'pinia'

export const useAccountStore = defineStore(
  'as',
  () => {
    const themeClass = ref('daylight')
    const dataTheme = ref('daylight')
    const userNotes = ref<Note[]>([])
    const reducedMotion = ref(false)
    const favoriteChamps = ref<Champion[]>([])
    const favoriteItems = ref<Item[]>([])

    const userAccount = ref<userAccount>({
      name: 'Summoner',
      role: null,
      id: null,
      session: null,
      accessToken: '',
      refreshToken: '',
      puuid: '',
      gameName: 'Summoner',
      tagLine: 'Link Riot Account?',
      profileIconId: 0,
      summonerLevel: 0,
      region: 'Runeterra',
    })

    const userSummoner = ref<Summoner>({
      name: '',
      tag: '',
      puuid: '',
      profileIcon: '',
      level: 0,
      region: '',
      ranked: {
        solo: undefined,
        flex: undefined, // optional, safe
      },
      matches: [],
    })

    return {
      // account
      userAccount,
      userSummoner,

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
