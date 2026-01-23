const inflight = new Map<string, Promise<any>>()

export async function dedupeFetch<T>(
  key: string,
  fn: () => Promise<T>
): Promise<T> {
  if (inflight.has(key))
    return inflight.get(key)!

  const p = fn().finally(() => inflight.delete(key))
  inflight.set(key, p)
  return p
}
