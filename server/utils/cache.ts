const memCache = new Map<string, any>()
const TTL = 1000 * 60 * 60 // 1 hour for IDs, infinite for match details

export function cacheGet<T>(key: string): T | null {
  const v = memCache.get(key)
  if (!v)
    return null
  if (v.expires && v.expires < Date.now())
    return null
  return v.data
}

export function cacheSet<T>(key: string, data: T, ttl = TTL) {
  memCache.set(key, { data, expires: Date.now() + ttl })
}

export const matchTTL = 1000 * 60 * 60 * 24 * 365 // basically forever
