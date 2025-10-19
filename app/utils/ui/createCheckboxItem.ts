// factories/menubarItem.ts
import type { Ref } from 'vue'
import type { MenubarRadioGroup } from '~/base/menubar/menubar.types'

export interface CheckboxItemFactory {
  name: () => string
  checkboxType?: 'tick' | 'tick-end' | 'switch' | 'checkbox'
  get: () => boolean
  icon: () => string
  iconClass?: string
  set: (v: boolean) => void
}

export function createCheckboxItem({
  name,
  checkboxType = 'tick-end',
  get,
  icon,
  iconClass,
  set,
}: CheckboxItemFactory) {
  return {
    name: computed(name),
    checkboxType,
    icon: computed(() => ({ name: icon(), class: iconClass })),
    model: {
      get,
      set,
      valueOf() {
        return get()
      }
    },
    type: 'checkbox' as const
  }
}

export function createRadioGroupItem<T extends string | number>(config: {
  name: string | (() => string)
  get: () => T
  set: (v: T) => void
  options: T[]
  optionName?: (option: T) => string
  optionIcon?: (option: T) => Component
  inset?: boolean
}) {
  return {
    name: computed(() =>
      typeof config.name === 'function' ? config.name() : config.name,
    ),
    inset: config.inset,
    model: {
      get: config.get,
      set: config.set,
      valueOf: config.get,
    },
    optionIcon: config.optionIcon,
    optionName: config.optionName,
    options: config.options,
    type: 'group',
  } as MenubarRadioGroup
}