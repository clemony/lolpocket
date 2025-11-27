// server/riot/account/getByRiotId.ts
import { riotFetch } from "riot"
import type { AccountReturn } from "~~/server/types"

// fetch account using name + tag
export async function fetchAccountByRiotId(
  name: string,
  tag: string
): Promise<AccountReturn> {
  const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}`
  const key = `accounts:${name}:${tag}}`

  return riotFetch<AccountReturn>(key, url)
}
