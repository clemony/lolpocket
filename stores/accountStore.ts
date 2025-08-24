import { defineStore } from 'pinia'
import { getEmptyAccount, getEmptyPublicData, getEmptySettings } from '~~/shared/types/schema.account'

export const useAccountStore = defineStore(
  'as',
  () => {
    const userNotes = ref<Note[]>([])

    const loggedIn = ref(false)

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
