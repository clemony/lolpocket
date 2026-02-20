import { defineUiTheme } from "./defineUiTheme"

export const dashboardNavbarTheme = defineUiTheme({
  slots: {
    root: 'flex h-(--ui-header-height) shrink-0 items-center justify-between gap-1.5 border-b border-default px-4 sm:px-6',
    left: 'flex min-w-0 items-center gap-1.5',
    icon: 'me-1.5 size-5 shrink-0 self-center',
    title: 'flex items-center gap-1.5 truncate font-semibold text-highlighted',
    center: 'hidden lg:flex',
    right: 'flex shrink-0 items-center gap-1.5',
    toggle: ''
  },
  variants: {
    toggleSide: {
      left: {
        toggle: ''
      },
      right: {
        toggle: ''
      }
    }
  }
})

export default dashboardNavbarTheme
