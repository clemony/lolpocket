export type NavType = 'navbar' | 'dropdown'
const icon = {
  navbar: {
    Backpack: '**:stroke-[1.8]',
    Library: 'size-5.25',
    Nexus: '**:stroke-[1.9] size-5.25'
  }
}

export function buildRouteData(c, el: string) {
  return {
    description: c.meta?.description,
    icon: c.meta?.icon,
    label: c.meta?.title,
    to: c.path,
    ui: {
      linkLeadingIcon: icon[el]?.[c.meta?.title]
    }
  }
}

export function buildRoute(path: string, opt?: { children?: boolean, component?: NavType | null, merge?: string }) {
  const router = useRouter()
  const routes = router.getRoutes()
  const r = routes.find(r => r.path === path)

  function buildChildren(path) {
    if (opt?.children === false)
      return null
    return path?.children.map(c => buildRouteData(c, opt?.component))
  }
  function buildMerge() {
    if (!opt?.merge) return null
    const m = routes.find(r => r.path === opt?.merge)
    return {
      children: buildChildren(m),
      ...buildRouteData(m, opt?.component)
    }
  }
  const fr = {
    ...buildRouteData(r, opt?.component)
  }

  const c = {
    children: [
      ...buildChildren(r)
    ]
  }
  if (opt.merge) c.children.push(buildMerge())
  if (opt.children !== false) Object.assign(fr, c)
  return fr
}
