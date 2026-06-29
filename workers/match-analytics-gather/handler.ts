import type { D1DatabaseLike } from "../../server/domain/d1/summoner-cache"
import {
  gatherNaMatchAnalytics,
  type MatchAnalyticsGatherDeps,
  type MatchAnalyticsGatherOptions,
  type MatchAnalyticsGatherResult
} from "../../server/domain/riot/match/analytics-gather"
import { createWorkerMatchAnalyticsGatherDeps } from "./riot-client"

export interface MatchAnalyticsGatherWorkerEnv {
  MATCH_ANALYTICS_DB?: D1DatabaseLike | null
  MATCH_ANALYTICS_MATCH_COUNT?: string
  MATCH_ANALYTICS_SEED_LIMIT?: string
  RIOT_API_KEY?: string
  SUMMONER_CACHE_DB?: D1DatabaseLike | null
}

export interface ScheduledControllerLike {
  cron?: string
  scheduledTime?: number
}

export interface ExecutionContextLike {
  waitUntil: (promise: Promise<unknown>) => void
}

export type MatchAnalyticsGatherLogLevel = "error" | "info" | "warn"

export interface MatchAnalyticsGatherScheduledHandlerOptions {
  createDeps?: (apiKey: string) => MatchAnalyticsGatherDeps
  gather?: (options: MatchAnalyticsGatherOptions) => Promise<MatchAnalyticsGatherResult>
  log?: (level: MatchAnalyticsGatherLogLevel, payload: Record<string, unknown>) => void
}

function parsePositiveInt(value: string | undefined) {
  if (!value) return undefined
  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
}

function defaultLog(
  level: MatchAnalyticsGatherLogLevel,
  payload: Record<string, unknown>
) {
  const message = JSON.stringify({
    worker: "lolpocket-match-analytics-gather",
    ...payload
  })

  if (level === "error") {
    console.error(message)
  } else if (level === "warn") {
    console.warn(message)
  } else {
    console.log(message)
  }
}

export function createMatchAnalyticsGatherScheduledHandler(
  options: MatchAnalyticsGatherScheduledHandlerOptions = {}
) {
  const gather = options.gather ?? gatherNaMatchAnalytics
  const createDeps = options.createDeps ?? createWorkerMatchAnalyticsGatherDeps
  const log = options.log ?? defaultLog

  return async function scheduled(
    controller: ScheduledControllerLike,
    env: MatchAnalyticsGatherWorkerEnv,
    _ctx: ExecutionContextLike
  ) {
    const riotApiKey = env.RIOT_API_KEY?.trim()
    if (!riotApiKey) {
      log("error", {
        cron: controller.cron,
        scheduledTime: controller.scheduledTime,
        status: "missing_riot_api_key"
      })
      return
    }

    const result = await gather({
      analyticsDb: env.MATCH_ANALYTICS_DB ?? null,
      deps: createDeps(riotApiKey),
      matchCount: parsePositiveInt(env.MATCH_ANALYTICS_MATCH_COUNT),
      now: controller.scheduledTime ?? Date.now(),
      seedLimit: parsePositiveInt(env.MATCH_ANALYTICS_SEED_LIMIT),
      summonerDb: env.SUMMONER_CACHE_DB ?? null
    })

    log(result.status === "error" ? "error" : "info", {
      cron: controller.cron,
      result,
      scheduledTime: controller.scheduledTime,
      status: result.status
    })
  }
}

export const scheduled = createMatchAnalyticsGatherScheduledHandler()
