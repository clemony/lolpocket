import { defineUiTheme } from "./defineUiTheme"

export const dashboardResizeHandleTheme = defineUiTheme({
  base: 'relative hidden cursor-ew-resize touch-none select-none before:absolute before:inset-y-0 before:-right-1.5 before:-left-1.5 before:z-1 lg:block'
})

export default dashboardResizeHandleTheme
