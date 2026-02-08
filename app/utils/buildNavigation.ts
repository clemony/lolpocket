
const icon = {
    Backpack: '**:stroke-[1.8]',
    Library: 'size-5.25',
    Nexus: '**:stroke-[1.9] size-5.25'
  }



const newPocket =   {
          icon: "i-lucide-plus",
          label: "New pocket",
          kbds: ["meta", "n"],
          ui: {
            itemLeadingIcon: "scale-120",
          },
        }

export function buildRouteData(c) {
  return {
    description: c.meta?.description,
    icon: c.meta?.icon,
    label: c.meta?.title,
    to: c.path,
    ui: {
      linkLeadingIcon: icon?.[c.meta?.title]
    }
  }
}

export function buildRoute(path: string, opt?: { merge: string  }) {
  const router = useRouter()
  const routes = router?.getRoutes()
if (!router || !routes || !path) return

  const r = routes?.find(r => r.path === path)

  function buildChildren(path) {
    return path?.children.map(c => buildRouteData(c))
  }
  function buildMerge() {
    if (!opt?.merge) return null
    const m = routes.find(r => r.path === opt?.merge)
    return {
      children: buildChildren(m),
      ...buildRouteData(m)
    }
  }
  const fr = {
    ...buildRouteData(r)
  }

  const c = {
    children: [
      ...buildChildren(r),
    ]
  }
      if (r.path === '/backpack'){
        c.children.reverse().push(newPocket)
        c.children.reverse()
      }
  if (opt?.merge) c.children.push(buildMerge())
 Object.assign(fr, c)

  return fr
}