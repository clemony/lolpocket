import { defineStore } from 'pinia'

export const useAccountStore = defineStore(
  'as',
  () => {
    const userNotes = ref<Note[]>([])

    const loggedIn = ref(false)
    const toggles = ref({
      backpack: {
        pinned: true,
        positions: true,
        tags: true,
      },
    })
    const account = ref<Account>()
    const settings = ref<Settings>()
    const publicData = ref<PublicData>()

    const pockets = <Record<string, Pocket[]>>{
      all: [],
      archived: [],
      pinned: [],
    }

    function clearAccount() {
      Object.assign(account.value, getEmptyAccount())
    }

    const topChampion = {
      data: {},
      updated: ref<Date>(),
    }

    function updateTopChampion() {
      const { getMatchesForSummoner } = useIndexedDB()
      const matchData = getMatchesForSummoner(account.value.puuid)
    }
    return {
      // account

      toggleSidebarLock: () =>
        (settings.value.lockSidebar
          = true
            ? !settings.value.lockSidebar
            : (settings.value.lockSidebar = true)),
      account,
      clearAccount,
      loggedIn,
      pockets,
      publicData,
      settings,
      toggles,
      topChampion,
      userNotes,
    }
  },
  {
    persist: {
      key: 'accountStore',
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
