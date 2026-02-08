export type NavType = 'navbar' | 'dropdown'

export interface NavInfo {
  children?: NavInfo[]
  description?: string
  external?: boolean
  icon?: string

  avatar?: string
  label: string
  to?: string
  ui?: Record<string, string>
}
