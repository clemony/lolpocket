import { upsertCachedMatchParticipants } from "../../server/domain/d1/summoner-cache"
import { serverToRegion } from "../../server/domain/riot/lookup/serverToRegion"
import {
  RiotRateLimitError,
  type RiotFetch,
  type RiotFetchOptions
} from "../../server/domain/riot/fetch"
import {
  persistMatchAnalytics,
  toMatchAnalyticsTallyProjection
} from "../../server/domain/riot/match/analytics"
import type { MatchAnalyticsGatherDeps } from "../../server/domain/riot/match/analytics-gather"
import { transformMatchData } from "../../server/domain/riot/match/transformMatchData"
import { scheduleJob } from "../../server/utils/queue"

type FetchLike = typeof fetch
type Wait = (ms: number) => Promise<void>

export interface WorkerRiotFetchOptions {
  apiKey: string
  fetch?: FetchLike
  maxCacheEntries?: number
  wait?: Wait
}

const DEFAULT_RETRY_AFTER_MS = 1000
const RETRYABLE_STATUS_CODES = new Set([500, 502, 503])

function defaultWait(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}

function retryAfterMs(response: Response) {
  const retryAfter = Number(response.headers.get("retry-after"))
  return Number.isFinite(retryAfter) && retryAfter > 0
    ? retryAfter * 1000
    : DEFAULT_RETRY_AFTER_MS
}

function cacheSetBounded<T>(
  cache: Map<string, T>,
  key: string,
  value: T,
  maxEntries: number
) {
  if (cache.size >= maxEntries) {
    const oldestKey = cache.keys().next().value
    if (oldestKey) cache.delete(oldestKey)
  }

  cache.set(key, value)
}

async function parseRiotJson(response: Response) {
  if (response.status === 204) return null
  return await response.json()
}

function riotPayloadStatus(payload: unknown) {
  if (!payload || typeof payload !== "object" || !("status" in payload)) {
    return null
  }

  const status = (payload as { status?: unknown }).status
  if (typeof status === "number") return status
  if (status && typeof status === "object" && "status_code" in status) {
    const statusCode = (status as { status_code?: unknown }).status_code
    return typeof statusCode === "number" ? statusCode : null
  }

  return null
}

export function createWorkerRiotFetch(
  options: WorkerRiotFetchOptions
): RiotFetch {
  const fetchImpl = options.fetch ?? fetch
  const wait = options.wait ?? defaultWait
  const maxCacheEntries = options.maxCacheEntries ?? 500
  const cache = new Map<string, unknown>()
  const inFlight = new Map<string, Promise<unknown>>()

  const riotFetch: RiotFetch = async <T>(
    key: string,
    url: string,
    params?: unknown,
    fetchOptions: RiotFetchOptions = {}
  ) => {
    if (cache.has(key)) return cache.get(key) as T
    const pending = inFlight.get(key)
    if (pending) return (await pending) as T

    const request = scheduleJob(async () => {
      const requestUrl = new URL(url)
      if (params && typeof params === "object") {
        for (const [name, value] of Object.entries(params)) {
          if (value !== undefined && value !== null) {
            requestUrl.searchParams.set(name, String(value))
          }
        }
      }

      const performAttempt = async (): Promise<T> => {
        const response = await fetchImpl(requestUrl.toString(), {
          headers: { "X-Riot-Token": options.apiKey }
        })

        if (response.status === 429) {
          const delayMs = retryAfterMs(response)
          if (fetchOptions.retryOnRateLimit === false) {
            throw new RiotRateLimitError(delayMs)
          }

          await wait(delayMs)
          return await performAttempt()
        }

        if (RETRYABLE_STATUS_CODES.has(response.status)) {
          await wait(DEFAULT_RETRY_AFTER_MS)
          return await performAttempt()
        }

        if (!response.ok) {
          throw new Error(`Riot request failed with HTTP ${response.status}`)
        }

        const payload = await parseRiotJson(response)
        const payloadStatus = riotPayloadStatus(payload)
        if (payloadStatus === 429) {
          if (fetchOptions.retryOnRateLimit === false) {
            throw new RiotRateLimitError(DEFAULT_RETRY_AFTER_MS)
          }

          await wait(DEFAULT_RETRY_AFTER_MS)
          return await performAttempt()
        }

        if (payloadStatus && payloadStatus >= 400) {
          throw new Error(`Riot error payload: ${payloadStatus}`)
        }

        cacheSetBounded(cache, key, payload, maxCacheEntries)
        return payload as T
      }

      return await performAttempt()
    })

    inFlight.set(key, request)

    try {
      return (await request) as T
    } finally {
      inFlight.delete(key)
    }
  }

  return riotFetch
}

export function createWorkerMatchAnalyticsGatherDeps(
  apiKey: string
): MatchAnalyticsGatherDeps {
  const riotFetch = createWorkerRiotFetch({ apiKey })

  return {
    idsByPuuid: ({ count, fetchOptions, puuid, queue, region, start }) => {
      const url = `${serverToRegion(region)}/lol/match/v5/matches/by-puuid/${puuid}/ids?${queue ? `queue=${queue}` : ""}&start=${start}&count=${count}`
      const key = `ids:${region}:${puuid}:${queue ?? "all"}:${start}:${count}`
      return riotFetch<string[]>(key, url, undefined, fetchOptions)
    },
    async matchById(matchId, region, fetchOptions) {
      const url = `${serverToRegion(region)}/lol/match/v5/matches/${matchId}`
      const key = `match:${region}:${matchId}`
      const match = await riotFetch<Record<string, unknown>>(
        key,
        url,
        undefined,
        fetchOptions
      )

      const info = match.info as { gameEndTimestamp?: unknown } | undefined
      if (!info?.gameEndTimestamp) return null

      return match
    },
    persistAnalytics: persistMatchAnalytics,
    toProjection: toMatchAnalyticsTallyProjection,
    transformMatchData,
    upsertParticipants: upsertCachedMatchParticipants
  }
}
