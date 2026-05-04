export const publicUsers = defineStore(
  "public-users",
  () => {
    // maps instead of objects
    const cache = ref(new Map<string, Account>())
    const byPuuid = ref(new Map<string, string>()) // puuid → uuid

    const setAccount = (acc: Account) => {
      cache.value.set(acc.uuid, acc)
      if (acc.puuid) byPuuid.value.set(acc.puuid, acc.uuid)
    }

    const getByUuid = (uuid: string) => cache.value.get(uuid) ?? null

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
      cache.value.clear()
      byPuuid.value.clear()
      sessionStorage.removeItem("users-store")
    }

    return {
      byPuuid,
      ensureByPuuid,
      ensureByUuid,
      getByPuuid,
      getByUuid,
      cache,
      clearAll,
      setAccount
    }
  },
  {
    persist: {
      key: "public-users",
      storage: piniaPluginPersistedstate.sessionStorage(),
      // optional custom serializer for Maps
      serializer: {
        deserialize: (str) => {
          const parsed = JSON.parse(str)
          return {
            byPuuid: new Map(parsed.byPuuid),
            users: new Map(parsed.users)
          }
        },
        serialize: (state) => {
          return JSON.stringify({
            byPuuid: Array.from(state.byPuuid.entries()),
            users: Array.from(state.users.entries())
          })
        }
      }
    }
  }
)
