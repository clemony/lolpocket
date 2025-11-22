import "vue-router"
declare module "vue-router" {
  interface RouteRecord {
    pocket_key?: string
    puuid?: string
    region?: string
    slug?: string
  }
  interface RouteMeta {
    puuid?: string
    components?: Record<string, Component>
  }

  interface RouteNamedMap {
    summoner: RouteRecordInfo<"summoner", "/summoner">
  }
}

/*
 interface PageMeta extends RouteMeta {
  title: string
  icon: string
  order: number
  search: boolean
  searchKeys: string[]
}
  requiresAuth: boolean
import type { RouteNamedMap } from "vue-router/auto-routes"

import type {
  ParamValue,
  // these are other param helper types
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,
  RouteRecordInfo,
} from "vue-router"
=
 */
