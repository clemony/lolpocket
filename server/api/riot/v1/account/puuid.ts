import { riotFetch } from '#server/api/riot/fetch'

// server/riot/account/getByPuuid.ts

// fetch account using puuid
export async function fetchAccountByPuuid(
  puuid: string
): Promise<AccountReturn> {
  const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}`
  const key = `accounts:${puuid}`

  return riotFetch<AccountReturn>(key, url)
}
