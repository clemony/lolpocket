import { defineStore } from 'pinia'
import { getEmptyAccount, getEmptyPublicData, getEmptySettings } from '~~/shared/types'

export const useAccountStore = defineStore(
  'as',
  () => {
    const userNotes = ref<Note[]>([])

    const loggedIn = ref(false)
    const toggles = ref({
      backpack: {
        tags: true,
        positions: true,
        pinned: true,
      },
    })
    const account = ref<Account>()
    const settings = ref<Settings>()
    const publicData = ref<PublicData>()

    const pockets = <Record<string, Pocket[]>>{
      all: [],
      pinned: [],
      archived: [],
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

      loggedIn,
      toggles,
      account,
      settings,
      pockets,
      publicData,
      clearAccount,
      userNotes,
      topChampion,
      toggleSidebarLock: () => settings.value.lockSidebar = true ? !settings.value.lockSidebar : settings.value.lockSidebar = true,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'accountStore',
    },
  },
)
