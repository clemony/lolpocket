//

import type { RouteRecordNormalized, RouteRecordRaw } from "vue-router"

const icon: Record<string, string> = {
  Backpack: "**:stroke-[1.8]",
  Library: "size-5.25",
  Nexus: "**:stroke-[1.9] size-5.25",
}

const newPocket = {
  icon: "i-lucide-plus",
  label: "New pocket",
  description: "Create a new pocket",
  to: "/backpack",
  kbds: ["meta", "n"],
  ui: {
    linkLeadingIcon: "scale-120",
  },
}

export function buildRouteData(c: RouteRecordNormalized | RouteRecordRaw) {
  return {
    description: c.meta?.description,
    icon: c.meta?.icon,
    label: c.meta?.title,
    to: c.path,
    ui: {
      linkLeadingIcon: icon?.[String(c.meta?.title ?? "")],
    },
  }
}

export function buildRoute(path: string, opt?: { merge: string }) {
  const router = useRouter()
  const routes = router?.getRoutes()
  if (!router || !routes || !path) return

  const r = routes?.find((r) => r.path === path)
  if (!r) return

  function buildChildren(route: RouteRecordNormalized | undefined) {
    return route?.children.map((c) => buildRouteData(c)) ?? []
  }
  function buildMerge() {
    if (!opt?.merge) return null
    const m = routes.find((r) => r.path === opt?.merge)
    if (!m) return null
    return {
      children: buildChildren(m),
      ...buildRouteData(m),
    }
  }
  const fr = {
    ...buildRouteData(r),
  }

  const c = {
    children: [...buildChildren(r)],
  }
  if (r.path === "/backpack") {
    c.children.reverse().push(newPocket)
    c.children.reverse()
  }
  const merged = buildMerge()
  if (merged) c.children.push(merged)
  Object.assign(fr, c)

  return fr
}
