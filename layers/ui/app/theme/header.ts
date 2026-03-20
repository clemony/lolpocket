import { defineUiTheme } from "./defineUiTheme"

export const headerTheme = defineUiTheme({
  slots: {
    root: "sticky top-0 flex h-(--ui-header-height) shrink-0 items-end justify-start border-b border-groove border-p3/70 bg-p0/60 px-8 backdrop-blur-md backdrop-contrast-110 backdrop-saturate-90",
    container:
      "mx-0! flex max-w-screen! items-center justify-between gap-3 rounded-xl",
    left: "flex items-center gap-1.5 lg:flex-1",
    center: "hidden lg:flex",
    right: "flex items-center justify-end gap-1.5 lg:flex-1",
    title: "flex shrink-0 items-end gap-1.5 text-xl font-bold text-highlighted",
    toggle: "lg:block!",
    content: "lg:block",
    overlay: "lg:block",
    header:
      "flex h-(--ui-header-height) shrink-0 items-center justify-between gap-3 px-4 sm:px-6",
    body: "overflow-y-auto p-4 sm:p-6"
  },
  variants: {
    toggleSide: {
      left: {
        toggle: "-ms-1.5"
      },
      right: {
        toggle: "-me-1.5"
      }
    }
  }
})

export default headerTheme
