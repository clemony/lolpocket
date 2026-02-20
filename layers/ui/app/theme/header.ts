import { defineUiTheme } from "./defineUiTheme"

export const headerTheme = defineUiTheme({
  slots: {
    root: "sticky top-0 flex h-(--ui-header-height) items-end justify-start border-0 border-p0/50 bg-p0/75 bg-blend-darken ring ring-p2 backdrop-blur-sm",
    container:
      "mx-0! flex max-w-screen! items-center justify-between gap-3 rounded-xl",
    left: "flex items-center gap-1.5 lg:flex-1",
    center: "hidden lg:flex",
    right: "flex items-center justify-end gap-1.5 lg:flex-1",
    title: "flex shrink-0 items-end gap-1.5 text-xl font-bold text-highlighted",
    toggle: "lg:hidden",
    content: "lg:hidden",
    overlay: "lg:hidden",
    header:
      "flex h-(--ui-header-height) shrink-0 items-center justify-between gap-3 px-4 sm:px-6",
    body: "overflow-y-auto p-4 sm:p-6",
  },
  variants: {
    toggleSide: {
      left: {
        toggle: "-ms-1.5",
      },
      right: {
        toggle: "-me-1.5",
      },
    },
  },
})

export default headerTheme
