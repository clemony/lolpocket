/* Supabase / IDB helpers */
export function withLastAccessed<T extends object>(
  v: T
): T & { lastAccessedAt: number } {
  return { ...v, lastAccessedAt: Date.now() }
}

export async function preferLocal<T>(
  local: () => Promise<T | null>,
  remote: () => Promise<T>
): Promise<T> {
  return (await local()) ?? remote()
}
