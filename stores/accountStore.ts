import { defineStore } from 'pinia'

export const useAccountStore = defineStore(
  'as',
  () => {
    const themeClass = ref('daylight')
    const dataTheme = ref('daylight')
    const userNotes = ref<Note[]>([])
    const reducedMotion = ref(false)
    const userNoShowDeletePocketConfirm = ref(false)
    const favoriteChamps = ref<Champion[]>([])
    const favoriteItems = ref<number[]>([])

    const defaultUser: UserAccount = {
      name: 'Summoner',
      role: null,
      id: null,
      session: null,
      accessToken: null,
      refreshToken: null,
      riot: {
        name: 'Summoner',
        tag: null,
        puuid: null,
        profileIcon: null,
        level: null,
        region: 'Runeterra',
      },
      settings: {
        motion: true,
        hero: null,
      },
    }
    const userAccount = ref<UserAccount>({
      name: 'Summoner',
      role: null,
      id: null,
      session: null,
      accessToken: null,
      refreshToken: null,
      riot: {
        name: 'Summoner',
        tag: null,
        puuid: null,
        profileIcon: null,
        level: null,
        region: 'Runeterra',
      },
      settings: {
        motion: true,
        hero: null,
      },
    })

    const signedIn = computed(() => !!userAccount.value.session)

    function resetUserAccount() {
      userAccount.value = {
        name: 'Summoner',
        role: null,
        id: null,
        session: null,
        accessToken: null,
        refreshToken: null,
        riot: {
          name: 'Summoner',
          tag: null,
          puuid: null,
          profileIcon: null,
          level: null,
          region: 'Runeterra',
        },
        settings: {
          motion: true,
          hero: null,
        },
      }
    }

    return {
      // account
      userAccount,
      resetUserAccount,
      defaultUser,
      userNoShowDeletePocketConfirm,
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
