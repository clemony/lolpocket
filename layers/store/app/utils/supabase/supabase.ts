/**
 * Description
 * @param {any} path:string
 * @param {any} options?:FetchOptions<T>
 * @returns {any}
 * @example
 * await supabaseFetch('account/update', {
  body: account,
  method: 'POST',
})
 */

type FetchOptions<T> = Parameters<typeof $fetch<T>>[1]

export function supabaseFetch<T>(
  path: string,
  options?: FetchOptions<T>
) {
  return $fetch<T>(`/api/supabase/${path}`, {
    credentials: 'include',
    ...options,
  })
}
