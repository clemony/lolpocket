import type { JwtPayload } from 'jwt-decode'
import type {
  AcceptableValue,
  TabsRootProps as OriginalTabsRootProps,
  PrimitiveProps,
  TabsTriggerProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { RouteMeta, RouteRecord } from 'vue-router'

export interface HTMLAttr extends HTMLAttributes {}

export type { MotionValue } from 'motion-v'
export type { AcceptableValue, PrimitiveProps } from 'reka-ui'
export type { CSSProperties, HTMLAttributes } from 'vue'

export interface AuthRoleJwtPayload extends JwtPayload {
  app_metadata: {
    user_role: string
  }
}
export interface PageRecord extends RouteRecord {
  meta: PageMeta
  altName: string
}

export interface RouteRecordExtended extends RouteRecord {
  meta: PageMeta
}

export interface PageMeta extends RouteMeta {
  icon: string
  section: string
  title: string
  order: number
  requiresAuth: boolean
  search: boolean
  searchKeys: string[]
}

export interface TabsRootPropsWithNullableModel extends OriginalTabsRootProps {
  modelValue?: any
}

export interface TabsTriggerPropsWithNullableValue {
  value: any
  disabled?: boolean
}
