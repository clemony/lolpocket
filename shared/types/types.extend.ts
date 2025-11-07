import type { JwtPayload } from '@supabase/supabase-js'
import type { SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy } from 'ag-grid-community'
import type { RouteMeta, RouteRecord } from 'vue-router'

export type { MotionValue } from 'motion-v'

export type { AcceptableValue, PrimitiveProps } from 'reka-ui'

export type { CSSProperties, HTMLAttributes } from 'vue'

export interface PageRecord extends RouteRecord {
  altName: string
  meta: PageMeta
}

export interface ExtendedPayload extends JwtPayload {
  app_metadata: Record<string, string | number>
}

export interface RouteRecordExtended extends RouteRecord {
  meta: PageMeta
}

export type AutoSizeStrategy
  = SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy

export interface PageMeta extends RouteMeta {
  title: string
  icon: string
  order: number
  requiresAuth: boolean
  search: boolean
  searchKeys: string[]
  section: string
}

export type TippyTheme = 'base' | 'default' | 'transparent'