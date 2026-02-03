import img from './icons/img.json'
import symbols from './icons/symbols.json'
import badge from './variants/badge'
import button from './variants/button'
import card from './variants/card'
import colors from './variants/colors'
import dropdownMenu from './variants/dropdownMenu'
import kbd from './variants/kbd'
import navigationMenu from './variants/navigationMenu'
import popover from './variants/popover'
import separator from './variants/separator'
import tabs from './variants/tabs'
import toast from './variants/toast'
import tooltip from './variants/tooltip'
import user from './variants/user'

export const appConfig = {
  icon: {
    aliases: {
      ...symbols,
      ...img
    },
    class: 'text-[var(--color-bc)] shrink-0 pointer-events-none',
    mode: 'svg',
    size: '16px'
  },
  ui: {
    ...card,
    ...user,
    ...dropdownMenu,
    ...badge,
    ...kbd,
    ...colors,
    ...navigationMenu,
    ...tooltip,
    ...tabs,
    ...toast,
    ...separator,
    ...popover,
    ...button,
  }
}