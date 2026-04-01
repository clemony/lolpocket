import { defineStore } from "pinia"

export const user = defineStore(
  "as",
  () => {
    const user = useSupabaseUser()
    const sb = ref<Account>()
    const account = ref<AccountData>()
    const settings = ref<Settings>()
    const inbox = ref<Inbox>()

    const { cache } = storeToRefs(sSummoner())

    watch(
      () =>
        (cache.value as Record<string, Summoner> | undefined)?.[
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

    const hotkeys = {
      search: ["meta", "k"],
      subSearch: ["meta", "shift", "k"],
      logIn: ["shift", "meta", "s"],
      logOut: ["shift", "meta", "q"],
      open: ["meta", "o"],
      close: ["meta", "x"]
    }

    function clearAccount() {
      account.value = getEmptyAccount() as unknown as AccountData
    }

    const keybinds = ref<Record<string, string[]>>({
      subSearch: ["meta", "shift", "K"]
    })

    return {
      settings,
      keybinds,
      account,
      clearAccount,
      inbox,
      sb,
      user,
      hotkeys
    }
  },
  {
    persist: {
      key: "accountStore",
      storage: piniaPluginPersistedstate.localStorage()
    }
  }
)
