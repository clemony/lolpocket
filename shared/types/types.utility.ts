export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export interface ParseState {
  i: number
  str: string
}

export interface OgResponse {
  title: string
  description: string
  image: string
  url: string
}
export interface PatchNotesData extends OgResponse {
  patch: string
}

export interface IconObject {
  name: string
  alt?: IconObject
  modifier?: IconObject
  class?: string | string[]
}

export interface BadgeObject {
  text?: string
  icon?: IconObject
  class?: string
}

export interface ImgObject {
  src: string
  class?: string
}

export type LinkGroup = LinkObject[]

export interface LinkObject {
  name: string
  link?: string
  links?: LinkObject[]
  hash?: string
  icon?: IconObject
  img?: ImgObject
  external?: boolean
  component?: any
  blurb?: string
}
export interface DataObject extends LinkObject {
  data?: object
  value?: number
}

export interface Category {
  id: string
  displayName?: string
  checked: boolean
  icon?: string
  color?: string
  champions?: Array<string>
}

export type categories = Category[]

export interface dateObject {
  patch: string
  date: string
  time: string
}
