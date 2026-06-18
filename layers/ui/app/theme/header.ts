import { defineUiTheme } from "./defineUiTheme"

export const headerTheme = defineUiTheme({
  slots: {
    root: "sticky top-4 flex h-(--ui-header-height) w-full shrink-0 items-end justify-center border-0 bg-transparent backdrop-blur-none",
    container:
      "mx-0! flex max-w-(--ui-container) items-center justify-between gap-3 rounded-2xl bg-p0/60 px-8 ring ring-p0/80 backdrop-blur-md backdrop-contrast-110 backdrop-saturate-110",
    left: "flex items-center gap-1.5 lg:flex-1",
    center: "hidden lg:flex",
    right: "flex items-center justify-end gap-1.5 lg:flex-1",
    title: "flex shrink-0 items-end gap-1.5 text-xl font-bold text-highlighted",
    toggle: "lg:block!",
    content: "lg:block",
    overlay: "lg:block",
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
