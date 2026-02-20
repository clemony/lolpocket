import { defineUiTheme } from "./defineUiTheme"

export const dashboardToolbarTheme = defineUiTheme({
  slots: {
    root: 'flex min-h-[49px] shrink-0 items-center justify-between gap-1.5 overflow-x-auto border-b border-default px-4 sm:px-6',
    left: 'flex items-center gap-1.5',
    right: 'flex items-center gap-1.5'
  }
})

export default dashboardToolbarTheme
