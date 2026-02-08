/**
 * Description
 * @returns {any}
 * @example await updateAccount({ displayName: 'clem' })
 */

export function fetchAccount() {
  return supabaseFetch<Account>('account/fetch')
}

export function updateAccount(account: Partial<Account>) {
  return supabaseFetch<Account>('account/update', {
    body: account,
    method: 'POST',
  })
}