import img from './icons/icon-img.json'
import symbols from './icons/icon-symbols.json'
import badge from './variants/badge'
import breadcrumb from './variants/breadcrumb'
import button from './variants/button'
import card from './variants/card'
import chip from './variants/chip'
import colors from './variants/colors'
import command from './variants/commandPalette'
import dropdownMenu from './variants/dropdownMenu'
import input from './variants/input'
import kbd from './variants/kbd'
import modal from './variants/modal'
import navigationMenu from './variants/navigationMenu'
import pageSection from './variants/pageSection'
import popover from './variants/popover'
import separator from './variants/separator'
import tabs from './variants/tabs'
import toast from './variants/toast'
import tooltip from './variants/tooltip'
import user from './variants/user'

export const appConfig = {
  icon: {
    class: 'text-[var(--color-pc)] shrink-0 pointer-events-none',
    mode: 'svg',
    size: '16px',
    aliases: {
      ...symbols,
      ...img
    }
  },
  ui: {
    ...pageSection,
    ...user,
    ...input,
    ...breadcrumb,
    ...command,
    ...modal,
    ...card,
    ...chip,
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