// lib/riot-client.ts
import process from "node:process"
import { $fetch } from "ofetch"
import pLimit from "p-limit"

const limit = pLimit(5)
const NUXT_RIOT_API = process.env.NUXT_RIOT_API!

export const REGIONINDEX = {
  br1: "americas",
  eun1: "europe",
  euw1: "europe",
  jp1: "asia",
  kr: "asia",
  la1: "americas",
  la2: "americas",
  me1: "europe",
  na1: "americas",
  oc1: "sea",
  ru: "europe",
  sg2: "sea",
  tr1: "europe",
  tw2: "sea",
  vn2: "sea",
}

export function getApiPath(region: string): string {
  return `https://${region}.api.riotgames.com`
}

export function getApiRegion(region: string): string {
  return `https://${REGIONINDEX[region]}.api.riotgames.com`
}

async function safeFetch<T>(
  url: string,
  params?: Record<string, any>,
  retries = 1
): Promise<T> {
  try {
    return await $fetch<T>(url, {
      headers: { "X-Riot-Token": NUXT_RIOT_API },
      ...(params ? { params } : {}),
    })
  } catch (err: any) {
    if (retries > 0 && [429, 500, 502, 503].includes(err?.response?.status)) {
      console.warn(`🔁 Retry fetch: ${url} (${retries} left)`)
      await new Promise((r) => setTimeout(r, 500))
      return safeFetch<T>(url, params, retries - 1)
    }

    console.error(`❌ Riot API fetch failed: ${url}`)
    console.error(err?.response ?? err)
    throw err
  }
}

export function riotGet<T = any>(path: string, params?: Record<string, any>) {
  return limit(() => safeFetch<T>(path, params))
}
