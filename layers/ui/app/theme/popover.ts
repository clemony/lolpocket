import { defineUiTheme } from "./defineUiTheme"

export const popoverTheme = defineUiTheme({
  slots: {
    content:
      "group/popover pointer-events-auto rounded-lg bg-p0/90 shadow-lg ring ring-p3 backdrop-blur-md focus:outline-none",
  },
})

export default popoverTheme
