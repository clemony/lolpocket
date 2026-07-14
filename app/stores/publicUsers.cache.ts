export interface PublicUsersState {
  byPuuid: Map<string, string>
  cache: Map<string, Account>
  expiresAt: Map<string, number>
  misses: Map<string, number>
}

interface PublicUsersPersistedState {
  byPuuid?: [string, string][]
  cache?: [string, Account][]
  expiresAt?: [string, number][]
  misses?: (string | [string, number])[]
  users?: [string, Account][]
}

function deserializeMisses(
  persistedMisses: PublicUsersPersistedState["misses"] = []
) {
  const misses = new Map<string, number>()

  for (const entry of persistedMisses) {
    if (typeof entry === "string") misses.set(entry, 0)
    else misses.set(entry[0], entry[1])
  }

  return misses
}

export function deserializePublicUsersState(str: string): PublicUsersState {
  const parsed = JSON.parse(str) as PublicUsersPersistedState

  return {
    byPuuid: new Map(parsed.byPuuid ?? []),
    cache: new Map(parsed.cache ?? parsed.users ?? []),
    expiresAt: new Map(parsed.expiresAt ?? []),
    misses: deserializeMisses(parsed.misses)
  }
}

export function serializePublicUsersState(state: Record<string, unknown>): string {
  const byPuuid =
    state.byPuuid instanceof Map ? state.byPuuid : new Map<string, string>()
  const cache =
    state.cache instanceof Map ? state.cache : new Map<string, Account>()
  const expiresAt =
    state.expiresAt instanceof Map ? state.expiresAt : new Map<string, number>()
  const misses =
    state.misses instanceof Map ? state.misses : new Map<string, number>()
  const now = Date.now()
  const validUuids = new Set(
    Array.from(expiresAt.entries())
      .filter(([uuid, expires]) => expires > now && cache.has(uuid))
      .map(([uuid]) => uuid)
  )

  return JSON.stringify({
    byPuuid: Array.from(byPuuid.entries()).filter(([, uuid]) =>
      validUuids.has(uuid)
    ),
    cache: Array.from(cache.entries()).filter(([uuid]) =>
      validUuids.has(uuid)
    ),
    expiresAt: Array.from(expiresAt.entries()).filter(([uuid]) =>
      validUuids.has(uuid)
    ),
    misses: Array.from(misses.entries()).filter(([, expires]) => expires > now)
  })
}
