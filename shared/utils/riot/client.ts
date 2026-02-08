export function riotFetch<T>(path: string, options?: any) {
  return $fetch<T>(`/api/riot/${path}`, options)
}