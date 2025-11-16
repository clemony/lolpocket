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

    const sb = ref<Account>()
    const account = computedAsync<Account>(async () => {
      return {
        ...(await sb?.value),
        ...ss().cache.get(sb.value?.puuid),
      }
    }, null)

    whenever(account, () => console.log("🥳 Account:", account.value))
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
      user,
      sb,
      account,
      clearAccount,
      inbox,
      pockets,
      settings,
      toggles,
      topChampion,
    }
  },
  {
    persist: {
      key: "accountStore",
      storage: piniaPluginPersistedstate.sessionStorage(),
    },
  }
)
