import { defineUiTheme } from "./defineUiTheme"

export const dashboardSearchButtonTheme = defineUiTheme({
  slots: {
    base: '',
    label: '',
    trailing: 'ms-auto hidden items-center gap-0.5 lg:flex'
  },
  variants: {
    collapsed: {
      true: {
        label: 'hidden',
        trailing: 'lg:hidden'
      }
    }
  }
})

export default dashboardSearchButtonTheme
