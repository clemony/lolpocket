import { riotFetch } from '#server/api/riot/fetch'

// server/riot/account/getByRiotId.ts

// fetch account using name + tag
export async function fetchAccountByRiotId(
  name: string,
  tag: string
): Promise<AccountReturn> {
  const safeName = encodeURIComponent(name)
  const safeTag = encodeURIComponent(tag)
  const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${safeName}/${safeTag}`
  const key = `accounts:${name}:${tag}`

  return riotFetch<AccountReturn>(key, url)
}
