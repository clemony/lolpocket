// server/riot/account/getByRiotId.ts
import type { AccountReturn } from "@server-types"
import { riotGet } from "riot"

// fetch account using name + tag
export async function fetchAccountByRiotId(
  name: string,
  tag: string
): Promise<AccountReturn> {
  return await riotGet<AccountReturn>(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}`
  )
}
