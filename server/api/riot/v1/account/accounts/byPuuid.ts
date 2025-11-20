// server/riot/account/getByPuuid.ts
import type { AccountReturn } from "@server-types"
import { riotGet } from "riot"

// fetch account using puuid
export async function fetchAccountByPuuid(
  puuid: string
): Promise<AccountReturn> {
  // riot requires query params not path interpolation
  return await riotGet<AccountReturn>(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}`
  )
}
