// server/api/riot/fetchAccountByPuuid.get.ts

import { fetchAccountV1, fetchPuuidV1 } from "./helpers/account-v1"

export default defineEventHandler(async (event) => {
  const e = getQuery(event)
  console.log("📎 - e:", e)
  const puuid = e.puuid as string
  if (!puuid) {
    throw createError({ statusCode: 400, statusMessage: "Missing puuid" })
  }

  try {
    const account =
      puuid ?
        await fetchAccountV1(puuid)
      : await fetchPuuidV1(e.name.toString(), e.tag.toString())
    return account
  } catch (err) {
    console.error("Failed to fetch account by puuid:", err)
    throw createError({ statusCode: 502, statusMessage: "Riot fetch failed" })
  }
})
