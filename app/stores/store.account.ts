import { defineStore } from "pinia"
import type { Account, Pocket, Settings } from "~~/layers/types/schema"
import { getEmptyAccount } from "~~/layers/types/schema"

export const useAccountStore = defineStore(
  "as",
  () => {
    const user = useSupabaseUser()
    const sb = ref<Account>()
    const account = ref<AccountData>()
    const settings = ref<Settings>()
    const inbox = ref<Inbox>()

    const ss = useSummonerStore()

    watch(
      () => ss.cache[account.value?.puuid ?? ""],
      (update) => {
        if (!update || !account.value) return

        if (
          !account.value.lastDataUpdate ||
          update.lastDataUpdate > account.value.lastDataUpdate
        ) {
          Object.assign(account.value, update)
        }
      }
    )

    function clearAccount() {
      Object.assign(account.value, getEmptyAccount())
    }

    return {
      account,
      clearAccount,
      inbox,
      sb,
      settings,
      user,
    }
  },
  {
    persist: {
      key: "accountStore",
      storage: piniaPluginPersistedstate.localStorage(),
    },
  }
)
