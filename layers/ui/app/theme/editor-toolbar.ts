import { defineUiTheme } from "./defineUiTheme"

export const editorToolbarTheme = defineUiTheme({
  slots: {
    root: 'focus:outline-none',
    base: 'flex items-stretch gap-1.5',
    group: 'flex items-center gap-0.5',
    separator: 'w-px self-stretch bg-border'
  },
  variants: {
    layout: {
      bubble: {
        base: 'rounded-lg border border-default bg-default p-1'
      },
      floating: {
        base: 'rounded-lg border border-default bg-default p-1'
      },
      fixed: {
        base: ''
      }
    }
  }
})

export default editorToolbarTheme
