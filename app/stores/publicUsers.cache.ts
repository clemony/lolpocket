export interface PublicUsersState {
  byPuuid: Map<string, string>
  cache: Map<string, Account>
  misses?: Set<string>
}

interface PublicUsersPersistedState {
  byPuuid?: [string, string][]
  cache?: [string, Account][]
  misses?: string[]
  users?: [string, Account][]
}

export function deserializePublicUsersState(str: string): PublicUsersState {
  const parsed = JSON.parse(str) as PublicUsersPersistedState

  return {
    byPuuid: new Map(parsed.byPuuid ?? []),
    cache: new Map(parsed.cache ?? parsed.users ?? []),
    misses: new Set(parsed.misses ?? [])
  }
}

export function serializePublicUsersState(state: Record<string, unknown>): string {
  const byPuuid =
    state.byPuuid instanceof Map ? state.byPuuid : new Map<string, string>()
  const cache =
    state.cache instanceof Map ? state.cache : new Map<string, Account>()
  const misses =
    state.misses instanceof Set ? state.misses : new Set<string>()

  return JSON.stringify({
    byPuuid: Array.from(byPuuid.entries()),
    cache: Array.from(cache.entries()),
    misses: Array.from(misses.values())
  })
}
