import { defineUiTheme } from "./defineUiTheme"

export const popoverTheme = defineUiTheme({
  slots: {
    content:
      "group/popover pointer-events-auto rounded-lg bg-p0/94 shadow-none ring ring-p3 drop-shadow-md backdrop-blur-md focus:outline-none",
    arrow:
      "translate-y-0.25 scale-x-160 scale-y-150 fill-p0 stroke-p3 stroke-1",
  },
})

export default popoverTheme
