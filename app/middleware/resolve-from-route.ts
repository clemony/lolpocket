import type { RouteLocationNormalized } from "vue-router"
import { resolveSummonerRoute } from "~/domain/summoner/utils/resolveSummonerRoute"
export default defineNuxtRouteMiddleware(async (to, from) => {
  return await resolveSummonerRoute(to as RouteLocationNormalized)
})
