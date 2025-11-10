import type { Account, Pocket, PublicData, Settings } from '~~/shared/schema'
import { defineStore } from 'pinia'
import { getEmptyAccount } from '~~/shared/schema'

export const useAccountStore = defineStore(
  'as',
  () => {
    const comments = ref<CommentSchema[]>([])

    const removedComments = ref <CommentLog[]>([])

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
    const inbox = ref<Inbox>()

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
      // const matchData = getMatchesForSummoner(account.value.puuid)
    }
    return {
      toggleSidebarLock: () =>
        (settings.value.pin_sidebar
          = true
            ? !settings.value.pin_sidebar
            : (settings.value.pin_sidebar = true)),
      account,
      clearAccount,
      comments,
      inbox,
      loggedIn,
      pockets,
      removedComments,
      settings,
      toggles,
      topChampion,
    }
  },
  {
    persist: {
      key: 'accountStore',
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
