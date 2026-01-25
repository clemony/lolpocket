import 'vue-router'

declare module 'vue-router' {
  interface RouteRecord {}
  interface RouteMeta {
    puuid?: string
    components?: Record<string, Component>
  }

  interface RouteNamedMap {
    summoner: RouteRecordInfo<'summoner', '/summoner'>
  }
}
