export type Extension<T, E> = T & E

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export interface ParseState {
  i: number
  str: string
}

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

export interface InboxType {
  data?: object
  value?: number
  icon?: IconObject
  name: string
  component?: any
}
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
} from "ag-grid-community"

export type { MotionValue } from "motion-v"

export type { UUID } from "node:crypto"
export type { AcceptableValue, PrimitiveProps } from "reka-ui"

export type AutoSizeStrategy =
  | SizeColumnsToFitGridStrategy
  | SizeColumnsToFitProvidedWidthStrategy
  | SizeColumnsToContentStrategy
