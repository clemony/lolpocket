import { defineUiTheme } from "./defineUiTheme"

export const scrollAreaTheme = defineUiTheme({
  slots: {
    root: 'relative',
    viewport: 'relative flex',
    item: ''
  },
  variants: {
    orientation: {
      vertical: {
        root: 'overflow-x-hidden overflow-y-auto',
        viewport: 'flex-col',
        item: ''
      },
      horizontal: {
        root: 'overflow-x-auto overflow-y-hidden',
        viewport: 'flex-row',
        item: ''
      }
    }
  }
})

export default scrollAreaTheme
