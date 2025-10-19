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
  click?: () => void
  component?: Component
  icon?: IconObject | ComputedRef<IconObject>
  inset?: boolean
  items?: MenubarSubItem[] | MenubarPocket[]
  model?: MenubarItemModel
  options?: string[]
  pocket?: boolean
  shortcut?: {
    icon?: string
    text?: string
    class?: string
  }
  type?: 'checkbox' | 'radioItem' | 'radio' | 'submenu' | 'separator' | 'pocket' | 'group'
  value?: string
}

export interface MenubarSubItem extends MenubarItem {}
export interface MenubarPocket extends Pocket {
  component?: Component
  icon?: string
  inset?: boolean
  pocket?: boolean
  shortcut?: {
    icon?: string
    text?: string
    class?: string
  }
  type?: 'checkbox' | 'radioItem' | 'radio' | 'submenu' | 'separator' | 'pocket'
  value?: string
}

export interface MenubarRadioGroup extends MenubarItem {
  optionIcon?: (option: string) => Component
  optionName?: (option: string) => string
  options?: string[]
}
