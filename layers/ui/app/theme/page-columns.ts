import { defineUiTheme } from "./defineUiTheme"

export const pageColumnsTheme = defineUiTheme({
  base: 'column-1 relative gap-8 space-y-8 *:break-inside-avoid-column *:will-change-transform md:columns-2 lg:columns-3'
})

export default pageColumnsTheme
