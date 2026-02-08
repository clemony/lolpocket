// factories/menubarItem.ts

import type { MenubarRadioGroup } from '~/components/pocket/menu/types.menubar'

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
    type: 'checkbox' as const,
    model: {
      get,
      set,
      valueOf() {
        return get()
      },
    },
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
      typeof config.name === 'function' ? config.name() : config.name
    ),
    inset: config.inset,
    optionIcon: config.optionIcon,
    optionName: config.optionName,
    options: config.options,
    type: 'radio',
    model: {
      get: config.get,
      set: config.set,
      valueOf: config.get,
    },
  } as MenubarRadioGroup
}
