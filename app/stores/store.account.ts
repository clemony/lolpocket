import { defineStore } from "pinia"
import type { Account, Pocket, Settings } from "~~/shared/schema"
import { getEmptyAccount } from "~~/shared/schema"

export const useAccountStore = defineStore(
  "as",
  () => {
    const toggles = ref({
      backpack: {
        pinned: true,
        positions: true,
        tags: true,
      },
    })

    const user = useSupabaseUser()

    const account = ref<Account>(null)

    const ss = computed(() => {
      if (!account.value?.puuid) return null
      return useSummonerStore().resolveByPuuid(account.value?.puuid)
    })

    watchEffect(() => {
      if (ss.value) Object.assign(account.value, ss.value)
      console.log("📎 - account:", account)
    })
    const settings = ref<Settings>()
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

    return {
      account,
      clearAccount,
      inbox,
      pockets,
      settings,
      toggles,
      topChampion,
      user,
    }
  },
  {
    persist: {
      key: "accountStore",
      storage: piniaPluginPersistedstate.sessionStorage(),
    },
  }
)
