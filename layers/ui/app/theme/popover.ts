import { defineUiTheme } from "./defineUiTheme"

export const popoverTheme = defineUiTheme({
  slots: {
    content:
      "group/popover pointer-events-auto z-[120] rounded-lg border border-p0 bg-p0/96 shadow-lg ring shadow-black/8 ring-p3 drop-shadow-none backdrop-blur-sm focus:outline-none",
    arrow: "translate-y-0.25 scale-x-160 scale-y-150 fill-p0 stroke-p3 stroke-1"
  }
})

export default popoverTheme
