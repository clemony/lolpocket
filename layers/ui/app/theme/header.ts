import { defineUiTheme } from "./defineUiTheme"

export const headerTheme = defineUiTheme({
  slots: {
    root: "sticky flex h-15 w-full shrink-0 items-end justify-center border-x-0 border-b border-p0/40 bg-p0/70 px-4 shadow-md shadow-black/6 backdrop-blur-md backdrop-contrast-110 backdrop-saturate-110",
    container: "flex items-center justify-between gap-3 px-1!",
    left: "flex items-center gap-1.5 lg:flex-1",
    center: "hidden lg:flex",
    right: "flex items-center justify-end gap-1.5 lg:flex-1",
    title: "flex shrink-0 items-end gap-1.5 text-xl font-bold text-highlighted",
    toggle: "",
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
