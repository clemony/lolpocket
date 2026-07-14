import {
  deserializePublicUsersState,
  serializePublicUsersState
} from "./publicUsers.cache"

const PUBLIC_ACCOUNT_TTL = 10 * 60 * 1000
const PUBLIC_ACCOUNT_MISS_TTL = 60 * 1000

export const publicUsers = defineStore(
  "public-users",
  () => {
    const cache = ref(new Map<string, Account>())
    const byPuuid = ref(new Map<string, string>())
    const expiresAt = ref(new Map<string, number>())
    const misses = ref(new Map<string, number>())
    const inflightByPuuid = new Map<string, Promise<Account | null>>()
    const inflightByUuid = new Map<string, Promise<Account | null>>()

    const setAccount = (acc: Account | null) => {
      if (!acc?.uuid) return

      const previous = cache.value.get(acc.uuid)
      if (previous?.puuid && previous.puuid !== acc.puuid) {
        byPuuid.value.delete(previous.puuid)
      }

      cache.value.set(acc.uuid, acc)
      expiresAt.value.set(acc.uuid, Date.now() + PUBLIC_ACCOUNT_TTL)
      misses.value.delete(acc.uuid)

      if (acc.puuid) {
        byPuuid.value.set(acc.puuid, acc.uuid)
        misses.value.delete(acc.puuid)
      }
    }

    const evictAccount = (uuid: string) => {
      const account = cache.value.get(uuid)
      cache.value.delete(uuid)
      expiresAt.value.delete(uuid)

      if (account?.puuid && byPuuid.value.get(account.puuid) === uuid) {
        byPuuid.value.delete(account.puuid)
      }
    }

    const getByUuid = (uuid: string) => {
      const expires = expiresAt.value.get(uuid) ?? 0
      if (expires <= Date.now()) {
        evictAccount(uuid)
        return null
      }

      return cache.value.get(uuid) ?? null
    }

    const getByPuuid = (puuid: string) => {
      const uuid = byPuuid.value.get(puuid)
      return uuid ? getByUuid(uuid) : null
    }

    const hasActiveMiss = (id: string) => {
      const expires = misses.value.get(id) ?? 0
      if (expires <= Date.now()) {
        misses.value.delete(id)
        return false
      }

      return true
    }

    const markMiss = (id?: string | null) => {
      if (id) misses.value.set(id, Date.now() + PUBLIC_ACCOUNT_MISS_TTL)
    }

    const ensureByUuid = async (uuid?: string | null) => {
      if (!uuid || hasActiveMiss(uuid)) return null

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
      if (!puuid || hasActiveMiss(puuid)) return null

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
      expiresAt.value.clear()
      misses.value.clear()
      if (import.meta.client) sessionStorage.removeItem("public-users")
    }

    return {
      byPuuid,
      expiresAt,
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
