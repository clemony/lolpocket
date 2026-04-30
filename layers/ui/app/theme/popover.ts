import { defineUiTheme } from "./defineUiTheme"

export const popoverTheme = defineUiTheme({
  slots: {
    content:
      "group/popover pointer-events-auto z-[120] translate-3d transform-gpu rounded-xl bg-p0/90 shadow-lg ring shadow-black/8 ring-p0/60 ring-offset-1 ring-offset-p3 drop-shadow-none backdrop-blur-md focus:outline-none",
    arrow: "translate-y-0.25 scale-x-160 scale-y-150 fill-p0 stroke-p3 stroke-1"
  }
})

export default popoverTheme
