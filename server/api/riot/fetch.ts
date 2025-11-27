import { $fetch } from "ofetch"
import {
  cacheGet,
  cacheSet,
  dedupeFetch,
  scheduleJob,
} from "~~/server/helpers/riot"
const NUXT_RIOT_API = process.env.NUXT_RIOT_API!

async function rawRiotFetch<T>(url: string, params?: any): Promise<T> {
  return scheduleJob(async () => {
    const result = await $fetch<any>(url, {
      headers: { "X-Riot-Token": NUXT_RIOT_API },
      ...(params ? { params } : {}),
    })

    // Riot sometimes returns { status: 429, ... } with HTTP 200 😵
    if (result && typeof result === "object" && "status" in result) {
      const s = (result as any).status
      if (typeof s === "number" && s >= 400) {
        throw new Error(`Riot error payload: ${s}`)
      }
    }

    return result as T
  })
}
export async function riotFetch<T>(
  key: string,
  url: string,
  params?: any
): Promise<T> {
  const cached = cacheGet<T>(key)
  if (cached) return cached

  return dedupeFetch(key, async () => {
    try {
      const result = await rawRiotFetch<T>(url, params)
      if (result && typeof result === "object") {
        cacheSet(key, result)
      }

      return result
    } catch (err: any) {
      const status = err?.response?.status

      if (status === 429) {
        const retryAfter = Number(err.response.headers.get("retry-after") || 1)
        console.warn(`⏳ Riot says wait ${retryAfter}s`)
        await new Promise((r) => setTimeout(r, retryAfter * 1000))
        return riotFetch<T>(key, url, params) // recursive retry
      }

      if ([500, 502, 503].includes(status)) {
        await new Promise((r) => setTimeout(r, 500 + Math.random() * 1000))
        return riotFetch<T>(key, url, params)
      }

      // don’t cache failures
      throw err
    }
  })
}
