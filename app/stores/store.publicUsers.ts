import {
  deserializePublicUsersState,
  serializePublicUsersState
} from "./publicUsers.cache"

export const publicUsers = defineStore(
  "public-users",
  () => {
    const cache = ref(new Map<string, Account>())
    const byPuuid = ref(new Map<string, string>())
    const misses = ref(new Set<string>())
    const inflightByPuuid = new Map<string, Promise<Account | null>>()
    const inflightByUuid = new Map<string, Promise<Account | null>>()

    const setAccount = (acc: Account | null) => {
      if (!acc?.uuid) return
      cache.value.set(acc.uuid, acc)
      misses.value.delete(acc.uuid)

      if (acc.puuid) {
        byPuuid.value.set(acc.puuid, acc.uuid)
        misses.value.delete(acc.puuid)
      }
    }

    const getByUuid = (uuid: string) => cache.value.get(uuid) ?? null

    const getByPuuid = (puuid: string) => {
      const uuid = byPuuid.value.get(puuid)
      return uuid ? getByUuid(uuid) : null
    }

    const markMiss = (id?: string | null) => {
      if (id) misses.value.add(id)
    }

    const ensureByUuid = async (uuid?: string | null) => {
      if (!uuid || misses.value.has(uuid)) return null

      const existing = getByUuid(uuid)
      if (existing) return existing

      const inflight = inflightByUuid.get(uuid)
      if (inflight) return await inflight

      const promise = $fetch<Account | null>("/api/supabase/account/public", {
        params: { uuid }
      })
        .then((acc) => {
          if (acc) setAccount(acc)
          else markMiss(uuid)
          return acc
        })
        .finally(() => inflightByUuid.delete(uuid))

      inflightByUuid.set(uuid, promise)
      return await promise
    }

    const ensureByPuuid = async (puuid?: string | null) => {
      if (!puuid || misses.value.has(puuid)) return null

      const existing = getByPuuid(puuid)
      if (existing) return existing

      const inflight = inflightByPuuid.get(puuid)
      if (inflight) return await inflight

      const promise = $fetch<Account | null>("/api/supabase/account/public", {
        params: { puuid }
      })
        .then((acc) => {
          if (acc) setAccount(acc)
          else markMiss(puuid)
          return acc
        })
        .finally(() => inflightByPuuid.delete(puuid))

      inflightByPuuid.set(puuid, promise)
      return await promise
    }

    const clearAll = () => {
      cache.value.clear()
      byPuuid.value.clear()
      misses.value.clear()
      sessionStorage.removeItem("public-users")
    }

    return {
      byPuuid,
      ensureByPuuid,
      ensureByUuid,
      getByPuuid,
      getByUuid,
      cache,
      clearAll,
      misses,
      setAccount,
    }
  },
  {
    persist: {
      key: "public-users",
      storage: piniaPluginPersistedstate.sessionStorage(),
      serializer: {
        deserialize: deserializePublicUsersState,
        serialize: serializePublicUsersState,
      },
    },
  }
)
