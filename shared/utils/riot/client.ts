export function riotFetch<T>(path: string, fetchOptions?: any) {
  return $fetch<T>(`/api/riot/${path}`, fetchOptions)
}
