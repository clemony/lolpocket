import type { RouteLocationNormalized } from "vue-router"
import { resolveSummoner } from "~/domain/summoner/composables/resolveSummoner"
import {
  extractIdentifierFromPath,
  extractIdentifierFromRoute,
} from "~/domain/summoner/utils/extractIdentifierFromRoute"

export async function resolveSummonerRoute(to: RouteLocationNormalized) {
  const route = to
  const session = sSession()
  const identifier =
    extractIdentifierFromRoute(route) ?? extractIdentifierFromPath(route.path)
  if (!identifier) return

  try {
    const key = identifier.puuid
      ? `puuid:${identifier.puuid}`
      : `slug:${identifier.region}:${identifier.name}:${identifier.tag}`
    if (key === session.lastResolvedKey) return

    const sum = await resolveSummoner(identifier)
    session.lastResolvedKey = key
    session.setSummoner(sum)

    if (sum?.puuid) {
      void publicUsers()
        .ensureByPuuid(sum.puuid)
        .catch((err) =>
          console.warn(
            "Public account lookup failed; continuing with summoner data",
            err
          )
        )

      sMatches().loadFromDB()
      sData().getMastery()
      sData().getTimelines()
    }
  } catch (err) {
    console.warn("Summoner resolution failed; keeping current route", err)
  }
}
