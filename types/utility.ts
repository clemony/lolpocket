import type { JwtPayload } from 'jwt-decode'

declare global {
  interface AuthRoleJwtPayload extends JwtPayload {
    app_metadata: {
      user_role: string
    }
  }

  interface Folder {
    name: string
    key: string
    type: string
    items: any[]
    icon?: string
    permanent?: boolean
    locked?: boolean
  }
  interface Category {
    id: string
    displayName?: string
    checked: boolean // Add the checked property
    color?: string
    champions?: Array<string>
  }

  type categories = Category[]

  type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any
  type CallbackFunctionVariadic = (...args: any[]) => void

  type navData = navGroup[]

  interface navGroup {
    name: string
    url?: string
    icon?: string
    array?: Array<any>
    isActive?: boolean
    open?: boolean
    items?: navItem[]
    submenu?: navGroup[]
  }

  interface navItem {
    name: string
    url?: string
    icon?: string
    isActive?: boolean
    hash?: string
    ref?: any
    isVisible?: boolean
    type?: string
    trigger?: boolean
    data?: Array<any>
  }

  interface drawer {
    component?: any
    id?: string
    direction?: string
    title?: string
    description?: string
    submitText?: string
  }

  interface dateObject {
    patch: string
    date: string
    time: string
  }
}
export {}
