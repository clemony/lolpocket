export interface MenubarGroup {
  name: string
  class?: string
  items: MenubarItem[]
}

export interface MenubarItemModel {

  get: () => boolean | string
  set: (v: boolean | string) => void
  valueOf: () => boolean | string
}
export type MenubarItemType = MenubarItem | MenubarSubItem | MenubarPocket | MenubarRadioGroup

export interface MenubarItem {
  key?: string
  name?: string | ComputedRef<string>
  checkboxType?: 'tick' | 'switch' | 'checkbox' | 'tick-end'
  class?: Record<string, string>
  click?: () => void
  component?: Component
  icon?: IconObject | ComputedRef<IconObject> | string
  inset?: boolean
  items?: MenubarSubItem[] | MenubarPocket[] | any[]
  model?: MenubarItemModel
  options?: string[]
  pocket?: boolean
  shortcut?: {
    icon?: string
    component?: Component
    text?: string
    class?: string
  }
  type?: 'checkbox' | 'radioItem' | 'radio' | 'submenu' | 'separator' | 'pocket' | 'group'
  value?: string
}

export interface MenubarSubItem extends MenubarItem {}
export interface MenubarPocket extends Pocket {
  class?: Record<string, string>
  component?: Component
  icon?: string
  inset?: boolean
  options?: string[]
  pocket?: boolean
  shortcut?: {
    icon?: string
    text?: string
    class?: string
    component?: Component
  }
  type?: 'checkbox' | 'radioItem' | 'radio' | 'submenu' | 'separator' | 'pocket'
  value?: string
}

export interface MenubarRadioGroup extends MenubarItem {
  optionIcon?: (option: string) => Component
  optionName?: (option: string) => string
  options?: string[]
}
