import { defineStore } from "pinia"

export const summonerAccounts = defineStore(
  "accountsStore",
  () => {
    // maps instead of objects
    const accounts = ref(new Map<string, Account>())
    const byPuuid = ref(new Map<string, string>()) // puuid → uuid

    const setAccount = (acc: Account) => {
      accounts.value.set(acc.uuid, acc)
      if (acc.puuid) byPuuid.value.set(acc.puuid, acc.uuid)
    }

    const getByUuid = (uuid: string) => accounts.value.get(uuid) ?? null

    const getByPuuid = (puuid: string) => {
      const uuid = byPuuid.value.get(puuid)
      return uuid ? getByUuid(uuid) : null
    }

    const ensureByUuid = async (uuid: string) => {
      const existing = getByUuid(uuid)
      if (existing) return existing

      /* const acc = await $fetch<Account>("/api/supabase/account_fetch", {
           params: { uuid },
         })
         setAccount(acc)
         return acc */
    }

    const ensureByPuuid = async (puuid: string) => {
      const existing = getByPuuid(puuid)
      if (existing) return existing

      /* const acc = await $fetch<Account>("/api/account/by_puuid", {
           params: { puuid },
         })
         setAccount(acc)
         return acc */
    }

    const clearAll = () => {
      accounts.value.clear()
      byPuuid.value.clear()
      localStorage.removeItem("accountsStore")
    }

    return {
      byPuuid,
      ensureByPuuid,
      ensureByUuid,
      getByPuuid,
      getByUuid,
      accounts,
      clearAll,
      setAccount,
    }
  },
  {
    persist: {
      key: "accountsStore",
      storage: piniaPluginPersistedstate.localStorage(),
      // optional custom serializer for Maps
      serializer: {
        deserialize: (str) => {
          const parsed = JSON.parse(str)
          return {
            byPuuid: new Map(parsed.byPuuid),
            accounts: new Map(parsed.accounts),
          }
        },
        serialize: (state) => {
          return JSON.stringify({
            byPuuid: Array.from(state.byPuuid.entries()),
            accounts: Array.from(state.accounts.entries()),
          })
        },
      },
    },
  }
)
