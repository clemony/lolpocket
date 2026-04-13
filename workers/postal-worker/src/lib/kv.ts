export async function getCachedJson<T>(
  namespace: KVNamespace,
  key: string,
): Promise<T | null> {
  return await namespace.get<T>(key, "json")
}

export async function readCachedString(namespace: KVNamespace, key: string) {
  return await namespace.get(key)
}

export async function putCachedJson(
  namespace: KVNamespace,
  key: string,
  payload: unknown,
) {
  await namespace.put(key, JSON.stringify(payload))
}
