// lib/riot-client.ts
import process from 'node:process'
import { $fetch } from 'ofetch'
import pLimit from 'p-limit'

const limit = pLimit(5)
const NUXT_RIOT_API = process.env.NUXT_RIOT_API!
export const REGION = 'americas'
const REGION_CODE = 'na1'
const BASE = `https://${REGION}.api.riotgames.com`
const CODE_BASE = `https://${REGION_CODE}.api.riotgames.com`
function path(region: string): string {
  return `https://${region}.api.riotgames.com`
}

async function safeFetch<T>(
  url: string,
  params?: Record<string, any>,
  retries = 1,
): Promise<T> {
  try {
    return await $fetch<T>(url, {
      headers: { 'X-Riot-Token': NUXT_RIOT_API },
      ...(params ? { params } : {}),
    })
  }
  catch (err: any) {
    if (retries > 0 && [429, 500, 502, 503].includes(err?.response?.status)) {
      console.warn(`🔁 Retry fetch: ${url} (${retries} left)`)
      await new Promise(r => setTimeout(r, 500))
      return safeFetch<T>(url, params, retries - 1)
    }

    console.error(`❌ Riot API fetch failed: ${url}`)
    console.error(err?.response ?? err)
    throw err
  }
}

export function riotSummonerGet<T = any>(path: string) {
  return limit(() => safeFetch<T>(`${CODE_BASE}${path}`))
}

export function riotGet<T = any>(
  base: string,
  path: string,
  params: Record<string, any> = {},
) {
  return limit(() => safeFetch<T>(`${base}${path}`, params))
}

// path uses REGION_CODE

export async function getChampionMastery(puuid: string) {
  return riotSummonerGet(`/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`)
}

export async function getChampionMasteryTotal(puuid: string) {
  return riotSummonerGet(`/lol/champion-mastery/v4/scores/by-puuid/${puuid}`)
}

// region var

export async function fetchSummonerByPuuid(puuid: string, region: string) {
  return riotGet(path(region ?? REGION_CODE), `/lol/summoner/v4/summoners/by-puuid/${puuid}`)
}

export async function fetchLeagueEntriesByPuuid(puuid: string, region: string) {
  return riotGet(path(region ?? REGION_CODE), `/lol/league/v4/entries/by-puuid/${puuid}`)
}
export async function fetchAccountByPuuid(puuid: string, region: string) {
  return riotGet(path(region ?? REGION), `/riot/account/v1/accounts/by-puuid/${puuid}`)
}
export async function fetchRegionByPuuid(puuid: string, region: string) {
  return riotGet(path(region ?? REGION), `/riot/account/v1/region/by-game/lol/by-puuid/${puuid}`)
}

export async function getMatchesByPuuid({
  puuid,
  start = 0,
  count = 20,
}: {
  puuid: string
  start?: number
  count?: number
}) {
  return riotGet(
    `https://${REGION}.api.riotgames.com`,
    `/lol/match/v5/matches/by-puuid/${puuid}/ids`,
    { start, count },
  )
}

export async function getMatchDetails(matchId: string) {
  return riotGet(
    `https://${REGION}.api.riotgames.com`,
    `/lol/match/v5/matches/${matchId}`,
  )
}

export async function getMatchIdsByPuuid({
  puuid,
  start = 0,
  count = 20,
  region = 'americas',
}: {
  puuid: string
  start?: number
  count?: number
  region?: string
}) {
  return riotGet(
    `https://${region}.api.riotgames.com`,
    `/lol/match/v5/matches/by-puuid/${puuid}/ids`,
    { start, count },
  )
}

export async function getMatchById(matchId: string, region = 'americas') {
  return riotGet(
    `https://${region}.api.riotgames.com`,
    `/lol/match/v5/matches/${matchId}`,
  )
}

export async function fetchPuuidByRiotId(
  region: string,
  name: string,
  tag: string,
) {
  const response = await $fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`,
    {
      headers: {
        'X-Riot-Token': process.env.NUXT_RIOT_API!,
      },
    },
  )
  return response.puuid
}
