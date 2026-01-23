import type { AccountReturn } from '~~/server/types'
// server/riot/account/getByPuuid.ts
import { riotFetch } from 'riot'

// fetch account using puuid
export async function fetchAccountByPuuid(
  puuid: string
): Promise<AccountReturn> {
  const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}`
  const key = `accounts:${puuid}`

  return riotFetch<AccountReturn>(key, url)
}
