import "vue-router"
declare module "vue-router" {
  interface RouteRecord {
    pocket_key?: string
  }
  interface RouteMeta {
    puuid?: string
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
