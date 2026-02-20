import { defineUiTheme } from "./defineUiTheme"

export const pageListTheme = defineUiTheme({
  base: 'relative flex flex-col',
  variants: {
    divide: {
      true: '*:not-last:after:absolute *:not-last:after:inset-x-1 *:not-last:after:bottom-0 *:not-last:after:h-px *:not-last:after:bg-border'
    }
  }
})

export default pageListTheme
