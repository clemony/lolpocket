import type { JwtPayload } from 'jwt-decode'
import type {
  TabsRootProps as OriginalTabsRootProps,
  PrimitiveProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { RouteMeta, RouteRecord } from 'vue-router'

export interface HTMLAttr extends HTMLAttributes {}
export type { MotionValue } from 'motion-v'
export type { AcceptableValue, PrimitiveProps } from 'reka-ui'
export type { CSSProperties, HTMLAttributes } from 'vue'

export type Side = 'top' | 'right' | 'bottom' | 'left'
export type Align = 'start' | 'center' | 'end'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Shape = 'square' | 'circle'

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

export interface Tabs {
  currentValue: {
    pos: number
    width: number
  }
  returnValue: {
    pos: number
    width: number
  }
}

export interface CustomRadioGroupProps extends PrimitiveProps {
  contrast?: boolean
}
