<<<<<<< HEAD
import type { SizeColumnsToContentStrategy, SizeColumnsToFitGridStrategy, SizeColumnsToFitProvidedWidthStrategy } from 'ag-grid-community'
import type { RouteMeta, RouteRecord } from 'vue-router'

export type { MotionValue } from 'motion-v'

export type { AcceptableValue, PrimitiveProps } from 'reka-ui'

export type { CSSProperties, HTMLAttributes } from 'vue'

=======
import type {
  TabsRootProps as OriginalTabsRootProps,
  PrimitiveProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { RouteMeta, RouteRecord } from 'vue-router'

export type { MotionValue } from 'motion-v'
export type { AcceptableValue, PrimitiveProps } from 'reka-ui'
export type { CSSProperties, HTMLAttributes } from 'vue'

export type Extension<T, E> = T & E

export interface HTMLAttr extends HTMLAttributes {}

export type Side = 'top' | 'right' | 'bottom' | 'left'

export type Align = 'start' | 'center' | 'end'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Shape = 'square' | 'circle'

>>>>>>> refs/remotes/origin/main
export interface PageRecord extends RouteRecord {
  altName: string
  meta: PageMeta
}

export interface RouteRecordExtended extends RouteRecord {
  meta: PageMeta
}

<<<<<<< HEAD
export type AutoSizeStrategy
  = SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy

=======
>>>>>>> refs/remotes/origin/main
export interface PageMeta extends RouteMeta {
  title: string
  icon: string
  order: number
  requiresAuth: boolean
  search: boolean
  searchKeys: string[]
  section: string
}

<<<<<<< HEAD
export type TippyTheme = 'base' | 'default' | 'transparent'
=======
export interface TabsRootPropsWithNullableModel extends OriginalTabsRootProps {
  modelValue?: any
}

export interface TabsTriggerPropsWithNullableValue {
  disabled?: boolean
  value: any
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
>>>>>>> refs/remotes/origin/main
