export interface AuthRoleJwtPayload extends JWTPayload {
    user_role: string
}

export interface Category {
    id: string
    displayName?: string
    checked: boolean // Add the checked property
    color?: string
    champions?: Array<string>
}

export type categories = Category[]

export type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any
type CallbackFunctionVariadic = (...args: any[]) => void

export type navData = navGroup[]

export interface navGroup {
    name: string
    url?: string
    icon?: string
    array?: Array<any>
    isActive?: boolean
    open?: boolean
    items?: navItem[]
    submenu?: navGroup[]
}

export interface navItem {
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

export interface drawer {
    component?: any
    id?: string
    direction?: string
    title?: string
    description?: string
    submitText?: string
}

export interface dateObject {
    patch: string
    date: string
    time: string
}
