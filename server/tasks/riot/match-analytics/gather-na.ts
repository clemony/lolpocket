import { defineTask } from "nitropack/runtime"
import {
  gatherNaMatchAnalytics,
  MATCH_ANALYTICS_GATHER_TASK
} from "~~/server/domain/riot/match/analytics-gather"
import { MATCH_ANALYTICS_D1_BINDING } from "~~/server/domain/riot/match/analytics"
import { SUMMONER_CACHE_D1_BINDING } from "~~/server/domain/d1/summoner-cache"

export default defineTask({
  meta: {
    name: MATCH_ANALYTICS_GATHER_TASK,
    description:
      "Gather NA ranked match analytics from summoner-cache seeds into aggregate D1 tallies."
  },
  async run(event) {
    const env = (event.context as any)?.cloudflare?.env ?? globalThis.__env__
    const summonerDb = env?.[SUMMONER_CACHE_D1_BINDING] ?? null
    const analyticsDb = env?.[MATCH_ANALYTICS_D1_BINDING] ?? null
    const result = await gatherNaMatchAnalytics({
      analyticsDb,
      summonerDb
    })

    console.log("NA match analytics gather complete", result)

    return { result }
  }
})
