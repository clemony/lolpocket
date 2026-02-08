// server/riot/account/getByRiotId.ts

// fetch account using name + tag
export async function fetchAccountByRiotId(
  name: string,
  tag: string
): Promise<AccountReturn> {
  const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}`
  const key = `accounts:${name}:${tag}}`

  return riotFetch<AccountReturn>(key, url)
}
