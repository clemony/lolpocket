import type { RefOrElement } from "vue-draggable-plus"

declare global {
  interface OgResponse {
    title: string
    description: string
    image: string
    url: string
  }
  interface PatchNotesData extends OgResponse {
    patch: string
  }

  interface IconObject {
    name: string
    class?: string
  }

  interface BadgeObject {
    text?: string
    icon?: IconObject
    class?: string
  }

  interface ImgObject {
    src: string
    class?: string
  }

  type LinkGroup = LinkObject[]

  interface LinkObject {
    name: string
    link?: string
    links?: LinkObject[]
    icon?: IconObject
    img?: ImgObject
    external?: boolean
    component?: any
    blurb?: string
  }
  interface DataObject extends LinkObject {
    data?: object
    new?: number
  }

  interface Category {
    id: string
    displayName?: string
    checked: boolean
    icon?: string
    color?: string
    champions?: Array<string>
  }

  type categories = Category[]

  interface Module {
    name?: string
    component?: DefineComponent
    ghost?: DefineComponent
    queue?: string
    title?: string
  }

  type ModuleSlot = Module | null

  type ModuleList = (Module | null)[]

  interface dateObject {
    patch: string
    date: string
    time: string
  }
}
export {}
