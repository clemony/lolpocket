import type { TabsItem } from "@nuxt/ui"

interface ProfileRouteRecord {
  children?: unknown[]
  meta?: Record<string, unknown>
  name?: unknown
  path?: unknown
}

const asProfileRoute = (route: unknown): ProfileRouteRecord =>
  route && typeof route === "object" ? (route as ProfileRouteRecord) : {}

const routeOrder = (route: ProfileRouteRecord) => Number(route.meta?.order ?? 0)

const routeLabel = (route: ProfileRouteRecord) =>
  String(route.meta?.title ?? route.name ?? route.path)

export function buildSummonerProfileRoutes(): TabsItem[] {
  const router = useRouter()
  const routes = router.getRoutes()
  const routeRecords = routes.map(asProfileRoute)
  const profileRoute = routeRecords.find(
    (route) => route.name === "summoner-profile"
  )
  const childRoutes = (profileRoute?.children ?? []).map(asProfileRoute)

  const profileTabs = childRoutes
    .filter((route) => String(route.path ?? "").split("/").length <= 1)
    .sort((a, b) => routeOrder(a) - routeOrder(b))
    .map((route) => ({
      label: routeLabel(route),
      value: String(route.name),
      ...route,
    }))

  const { account } = storeToRefs(sSession())
  const pocketRoute = routeRecords.find(
    (route) =>
      route.name === `/${account.value?.username}_${account.value?.tag}/pockets`
  )
  if (!pocketRoute) return profileTabs

  return [
    ...profileTabs,
    {
      label: "Pockets",
      value: String(pocketRoute.name),
      ...pocketRoute,
    },
  ]
}
