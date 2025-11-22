import { defineStore } from "pinia"
import type { Account } from "~~/shared/schema"

export const useAccountsStore = defineStore(
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
      accounts,
      byPuuid,
      setAccount,
      getByUuid,
      getByPuuid,
      ensureByUuid,
      ensureByPuuid,
      clearAll,
    }
  },
  {
    persist: {
      key: "accountsStore",
      storage: piniaPluginPersistedstate.localStorage(),
      // optional custom serializer for Maps
      serializer: {
        serialize: (state) => {
          return JSON.stringify({
            accounts: Array.from(state.accounts.entries()),
            byPuuid: Array.from(state.byPuuid.entries()),
          })
        },
        deserialize: (str) => {
          const parsed = JSON.parse(str)
          return {
            accounts: new Map(parsed.accounts),
            byPuuid: new Map(parsed.byPuuid),
          }
        },
      },
    },
  }
)
