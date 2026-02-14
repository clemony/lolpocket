import { defineStore } from "pinia"

export const user = defineStore(
  "as",
  () => {
    const user = useSupabaseUser()
    const sb = ref<Account>()
    const account = ref<AccountData>()
    const settings = ref<Settings>()
    const inbox = ref<Inbox>()

    const ss = sSummoner()

    watch(
      () =>
        (ss.cache.value as Record<string, Summoner> | undefined)?.[
          account.value?.puuid ?? ""
        ],
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
      account.value = getEmptyAccount() as unknown as AccountData
    }

    return {
      settings,
      account,
      clearAccount,
      inbox,
      sb,
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
