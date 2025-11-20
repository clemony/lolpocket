import { defineStore } from "pinia"
import type { Account } from "~~/shared/schema"

export const useAccountsStore = defineStore(
  "accountsStore",
  () => {
    const accounts = ref<Record<string, Account>>({})
    const byPuuid = ref<Record<string, string>>({}) // puuid → uuid

    const setAccount = (acc: Account) => {
      accounts.value[acc.uuid] = acc
      if (acc.puuid) byPuuid.value[acc.puuid] = acc.uuid
    }

    const getByUuid = (uuid: string) => accounts.value[uuid] || null

    const getByPuuid = (puuid: string) => {
      const uuid = byPuuid.value[puuid]
      return uuid ? getByUuid(uuid) : null
    }

    const ensureByUuid = async (uuid: string) => {
      const existing = getByUuid(uuid)
      if (existing) return existing

      const acc = await $fetch<Account>("/supabase/account_fetch", {
        params: { uuid },
      })
      setAccount(acc)
      return acc
    }

    const ensureByPuuid = async (puuid: string) => {
      const existing = getByPuuid(puuid)
      if (existing) return existing

      const acc = await $fetch<Account>("/api/account/by_puuid", {
        params: { puuid },
      })
      setAccount(acc)
      return acc
    }

    const clearAll = () => {
      for (const key in accounts.value) delete accounts.value[key]
      for (const key in byPuuid.value) delete byPuuid.value[key]
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
    },
  }
)
