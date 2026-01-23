/*

export type LinkGroup = LinkObject[]

export interface LinkObject {
  blurb?: string
  external?: boolean
  hash?: string
  img?: ImgObject
  link?: string
  links?: LinkObject[]
}
 */
import type {
  SizeColumnsToContentStrategy,
  SizeColumnsToFitGridStrategy,
  SizeColumnsToFitProvidedWidthStrategy,
} from 'ag-grid-community'

export type { AcceptableValue, PrimitiveProps } from 'reka-ui'

export type Side = 'top' | 'right' | 'bottom' | 'left'
export type Direction = 'left' | 'right' | 'down' | 'up'
export type Align = 'start' | 'center' | 'end'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Shape = 'square' | 'circle'
export type Orientation = 'vertical' | 'horizontal' | 'responsive'
export type LoadingStyle = 'none' | 'spinner' | null
export type TooltipSize = 'default' | 'md' | 'lg'
export type SortDirection = 'asc' | 'desc'
export type DataOrientation = 'vertical' | 'horizontal'
export type DataAlign = 'top' | 'middle' | 'bottom'

export interface InboxBadge {
  class?: string
  icon?: IconObject
  text?: string
}
export interface IconObject {
  name: string
  alt?: IconObject
  class?: string | string[]
  modifier?: IconObject
}

export type { CSSProperties, HTMLAttributes } from 'vue'

export type AutoSizeStrategy
  = | SizeColumnsToFitGridStrategy
    | SizeColumnsToFitProvidedWidthStrategy
    | SizeColumnsToContentStrategy

export type ChartMode = 'scatter' | 'heatmap' | 'bubble' | 'donut'

export interface InboxType {
  name: string
  component?: any
  data?: object
  icon?: IconObject
  value?: number
}
