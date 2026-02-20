import { defineUiTheme } from "./defineUiTheme"

export const dashboardSidebarCollapseTheme = defineUiTheme({
  base: 'hidden lg:flex',
  variants: {
    side: {
      left: '',
      right: ''
    }
  }
})

export default dashboardSidebarCollapseTheme
