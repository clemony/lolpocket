// server/riot/account/getByRiotId.ts
import { riotGet } from "riot"
import type { AccountReturn } from "~~/server/types"

// fetch account using name + tag
export async function fetchAccountByRiotId(
  name: string,
  tag: string
): Promise<AccountReturn> {
  return await riotGet<AccountReturn>(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}`
  )
}
