import { defineUiTheme } from "./defineUiTheme"

export const dashboardSidebarToggleTheme = defineUiTheme({
  base: 'lg:hidden',
  variants: {
    side: {
      left: '',
      right: ''
    }
  }
})

export default dashboardSidebarToggleTheme
