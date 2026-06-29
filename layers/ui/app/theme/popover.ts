import { defineUiTheme } from "./defineUiTheme"

export const popoverTheme = defineUiTheme({
  slots: {
    content:
      "group/popover pointer-events-auto z-[120] translate-3d transform-gpu rounded-xl bg-p0/90 shadow-lg ring shadow-black/8 ring-p2 drop-shadow-none backdrop-blur-md focus:outline-none",
    arrow:
      "translate-y-[1.25px] scale-x-160 scale-y-150 fill-p0 stroke-p2 stroke-[1.5]",
  },
})

export default popoverTheme
