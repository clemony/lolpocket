import {
  fetchAccountV1,
  fetchPuuidV1,
  fetchRegionV1,
  fetchSummonerV4,
} from "./helpers"

export interface SummonerResponse {
  name: string
  puuid: string
  level: number
  profileIcon: string
  region: string
  tag: string
}

export default defineEventHandler(async (event) => {
  const { name, puuid: queryPuuid, region, tag } = getQuery(event)
  console.log("📎 - getQuery(event):", getQuery(event))

  let puuid: string
  if (typeof queryPuuid === "string") {
    puuid = queryPuuid
  } else if (
    typeof region === "string" &&
    typeof name === "string" &&
    typeof tag === "string"
  ) {
    puuid = await fetchPuuidV1(name, tag)
  } else {
    throw createError({
      statusCode: 400,
      statusMessage:
        "Missing summoner identifier: provide either puuid or region + name + tag",
    })
  }

  let regionV1 = region as string | undefined

  if (!regionV1) {
    const r = await fetchRegionV1(puuid)
    regionV1 = r.region
  }

  try {
    const summonerV4 = await fetchSummonerV4(puuid, regionV1)
    console.log("📎 - summoner:", summonerV4)

    const accountV1 = await fetchAccountV1(puuid)

    return {
      name: accountV1.gameName,
      puuid: summonerV4.puuid,
      lastUpdate: Date.now(),
      level: summonerV4.summonerLevel,
      icon: summonerV4.profileIconId,
      region: regionV1 || "unknown",
      tag: accountV1.tagLine,
    }
  } catch (err) {
    console.error("❌ Failed to resolve summoner:", err)
    throw createError({
      statusCode: 502,
      statusMessage: "Failed to fetch summoner from Riot",
    })
  }
})
