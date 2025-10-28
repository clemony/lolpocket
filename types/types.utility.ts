export type Extension<T, E> = T & E

export type Side = 'top' | 'right' | 'bottom' | 'left'
export type Direction = 'left' | 'right' | 'down' | 'up'
export type Align = 'start' | 'center' | 'end'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Shape = 'square' | 'circle'

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
  class?: string | string[]
  modifier?: IconObject
}

export interface BadgeObject {
  class?: string
  icon?: IconObject
  text?: string
}

export interface ImgObject {
  class?: string
  src: string
}

export type LinkGroup = LinkObject[]

export interface LinkObject {
  name: string
  blurb?: string
  component?: any
  external?: boolean
  hash?: string
  icon?: IconObject
  img?: ImgObject
  link?: string
  links?: LinkObject[]
}
export interface DataObject extends LinkObject {
  data?: object
  value?: number
}

export interface Category {
  id: string
  name?: string
  champions?: Array<string>
  checked: boolean
  color?: string
  icon?: string
}

export type categories = Category[]

export interface dateObject {
  date: string
  patch: string
  time: string
}

<<<<<<< HEAD
=======
export interface UserPockets {
  all: Pocket[]
  archived: string[]
  pinned: string[]
}

>>>>>>> refs/remotes/origin/main
export interface Note {
  title: string
  content: string
  date: string
  heart?: boolean
  icon: string
}
