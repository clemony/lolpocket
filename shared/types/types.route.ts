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
