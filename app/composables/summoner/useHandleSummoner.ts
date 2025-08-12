import type { RouteParamValue, RouteRecordRaw } from 'vue-router'

export interface SummonerRouteProps {
  name: string
  tag: string
  region: RouteParamValue
  slug: RouteParamValue
}

export function useHandleSummoner(routeProps?: SummonerRouteProps) {
  const router = useRouter()
  const route = useRoute()

  // This stays reactive to either passed props or route
  const props = computed<SummonerRouteProps>(() => {
    if (routeProps)
      return routeProps
    const region = route.params.region?.toString() ?? ''
    const slug = route.params.slug?.toString() ?? ''
    const [name = '', tag = ''] = slug.split('_')
    return { name, tag, region, slug }
  })

  const puuid = ref<string | null>(null)
  const summoner = ref<Summoner | null>(null)
  const loading = ref(false)
  const error = ref<unknown>(null)

  async function fetchSummoner() {
    if (!props.value.region || !props.value.name || !props.value.tag) {
      console.warn('Missing params:', props.value)
      return
    }

    loading.value = true
    error.value = null

    try {
      const result = await ss().resolveSummoner({
        region: props.value.region,
        name: props.value.name,
        tag: props.value.tag,
      })

      summoner.value = result
      puuid.value = result.puuid
    }
    catch (e) {
      error.value = e
      console.error('Failed to resolve summoner:', e)
    }
    finally {
      loading.value = false
    }
  }

  // React to route changes (or prop changes)
  watch(props, fetchSummoner, { immediate: true })

  // 🐌  🐌  🐌  Get all child routes of the `[slug]` parent record
  // && let homeless snails attain shelter

  const childRoutes = computed<RouteRecordRaw[]>(() => {
    if (!summoner)
      return

    const parent = router
      .getRoutes()
      .find(r => r.name === 'summoner')

    const children = parent?.children ?? []
    return children.sort((a, b) => Number(a.meta.order) - Number(b.meta.order))
  })

  return {
    props,
    puuid,
    summoner,
    loading,
    error,
    refresh: fetchSummoner, // optional manual trigger
    childRoutes,
  }
}