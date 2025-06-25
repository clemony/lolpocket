import { defineStore } from "pinia"

export const useAccountStore = defineStore(
  "as",
  () => {
    const themeClass = ref("daylight")
    const dataTheme = ref("daylight")
    const userNotes = ref<Note[]>([])
    const userNoShowDeletePocketConfirm = ref(false)
    const favoriteChamps = ref<Champion[]>([])
    const favoriteItems = ref<number[]>([])

    const currentSession = ref<CurrentSession>({
      session: null,
      accessToken: null,
      refreshToken: null,
    })

    const defaultUser: UserAccount = {
      name: "Summoner",
      role: null,
      id: null,
      riot: {
        name: "Summoner",
        tag: null,
        puuid: null,
        profileIcon: null,
        level: null,
        region: "Runeterra",
      },
      settings: {
        motion: true,
        hero: null,
      },
      pockets: {
        all: [],
        pinned: [],
        archived: [],
      },
      inbox: {
        mail: [],
        notifications: [],
      },
    }
    const userAccount = ref<UserAccount>({
      name: "Summoner",
      role: null,
      id: null,
      riot: {
        name: "Summoner",
        tag: null,
        puuid: null,
        profileIcon: null,
        level: null,
        region: "Runeterra",
      },
      settings: {
        motion: true,
        hero: null,
      },
      pockets: {
        all: [],
        pinned: [],
        archived: [],
      },
      inbox: {
        mail: [],
        notifications: [],
      },
    })

    const signedIn = computed(() => !!currentSession.value.session)

    function resetUserAccount() {
      Object.assign(userAccount.value, defaultUser)
    }

    return {
      // account
      currentSession,
      userAccount,
      resetUserAccount,
      defaultUser,
      userNoShowDeletePocketConfirm,
      userNotes,

      // settings
      themeClass,
      dataTheme,

      // champs
      favoriteChamps,

      // items
      favoriteItems,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: "accountStore",
    },
  }
)
