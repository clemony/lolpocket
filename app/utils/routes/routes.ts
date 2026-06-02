import type { RouteRecordNormalized } from "vue-router"
import type { RouteItem, RouteReturn } from "~/types/route.types"

export const buildRouteItem = (record: RouteRecordNormalized): RouteItem => ({
  id: record.path,
  label: String(record.meta?.title || record.name),
  description: String(record.meta?.description),
  value: String(record.meta?.title || record.name),
  iconFill: asString(record.meta?.fillIcon) ?? undefined,
  icon: asString(record.meta?.icon) ?? undefined,
  to: record.path ?? undefined,
  class: asString(record.meta?.class) ?? undefined,
  order: typeof record.meta?.order === "number" ? record.meta.order : undefined,
  auth: Boolean(record?.meta?.auth)
})

function sortOrder(routes: RouteItem[]): RouteItem[] {
  return routes.sort((a, b) => Number(a?.order ?? 0) - Number(b?.order ?? 0))
}

export function buildRoutes(): RouteReturn {
  const routes = useRouter().getRoutes()
  const createRouteGroup = (match: RegExp) =>
    routes
      .filter((r) => r.path.match(match))
      .map((c) => buildRouteItem(c as RouteRecordNormalized))

  return {
    nexus: sortOrder(createRouteGroup(/\/nexus/)),
    tools: sortOrder(createRouteGroup(/\/tools\//)),
    backpack: sortOrder(createRouteGroup(/\/backpack/)),
    library: sortOrder(createRouteGroup(/\/library\//)),
    docs: sortOrder(createRouteGroup(/\/docs\//)),
    settings: sortOrder(createRouteGroup(/\/settings/))
  }
}

export function useRoutes() {
  const routes = inject<RouteReturn>("routes")

  if (!routes) throw new Error("No routes provider found")

  return routes
}

export const libraryList = ["champions", "items", "runes", "spells"]
