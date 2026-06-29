import { $fetch } from "ofetch"

export interface RiotFetchOptions {
  retryOnRateLimit?: boolean
}

export class RiotRateLimitError extends Error {
  retryAfterMs: number

  constructor(retryAfterMs: number) {
    super(`Riot rate limited; retry after ${Math.ceil(retryAfterMs / 1000)}s`)
    this.name = "RiotRateLimitError"
    this.retryAfterMs = retryAfterMs
  }
}

export function isRiotRateLimitError(err: unknown): err is RiotRateLimitError {
  return err instanceof RiotRateLimitError
}

function getRiotApiKey() {
  const config = useRuntimeConfig()
  const riotApiKey = config.RIOT_API_KEY

  if (!riotApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing RIOT_API_KEY runtime config",
    })
  }

  return riotApiKey
}

async function rawRiotFetch<T>(url: string, params?: any): Promise<T> {
  return scheduleJob(async () => {
    const riotApiKey = getRiotApiKey()
    const result = await $fetch<any>(url, {
      headers: { "X-Riot-Token": riotApiKey },
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
  params?: any,
  options: RiotFetchOptions = {}
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
        const retryAfterMs = retryAfter * 1000
        if (options.retryOnRateLimit === false) {
          throw new RiotRateLimitError(retryAfterMs)
        }

        console.warn(`⏳ Riot says wait ${retryAfter}s`)
        await new Promise((r) => setTimeout(r, retryAfterMs))
        return riotFetch<T>(key, url, params, options) // recursive retry
      }

      if ([500, 502, 503].includes(status)) {
        await new Promise((r) => setTimeout(r, 500 + Math.random() * 1000))
        return riotFetch<T>(key, url, params, options)
      }

      // don’t cache failures
      throw err
    }
  })
}
