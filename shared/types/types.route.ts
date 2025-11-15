import type { RouteMeta, RouteRecord } from 'vue-router'

export interface PageRecord extends RouteRecord {
  altName: string
  meta: PageMeta
}

export interface RouteRecordExtended extends RouteRecord {
  meta: PageMeta
}

export interface PageMeta extends RouteMeta {
  title: string
  icon: string
  order: number
  requiresAuth: boolean
  search: boolean
  searchKeys: string[]
  section: string
}
/*
import type { RouteNamedMap } from "vue-router/auto-routes"

import type {
  ParamValue,
  // these are other param helper types
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,
  RouteRecordInfo,
} from "vue-router"

export interface RouteNamedMap {
  // the key is the name and should match the first generic of RouteRecordInfo
  "pocket_key": RouteRecordInfo<
    "pocket_key",
    "/added-during-runtime/[...path]",
    // these are the raw param types (accept numbers, strings, booleans, etc)
    { path: ParamValue<true> },
    // these are the normalized params as found in useRoute().params
    { path: ParamValue<false> },
    // this is a union of all children route names
    // if the route does not have nested routes, pass `never` or omit this generic entirely
    "custom-dynamic-child-name"
  >
  "custom-dynamic-child-name": RouteRecordInfo<
    "custom-dynamic-child-name",
    "/added-during-runtime/[...path]/child",
    { path: ParamValue<true> },
    { path: ParamValue<false> },
    never
  >
}
 */
