import { defineUiTheme } from "./defineUiTheme"

export const paginationTheme = defineUiTheme({
  slots: {
    root: "",
    list: "flex items-center gap-1.5",
    ellipsis: "pointer-events-none",
    label: "min-w-5 text-center",
    first: "[&_svg]:opacity-60 [&_svg]:hover:opacity-100",
    prev: "[&_svg]:opacity-60 [&_svg]:hover:opacity-100",
    item: "[&_svg]:opacity-60 [&_svg]:active:opacity-100",
    next: "[&_svg]:opacity-60 [&_svg]:hover:opacity-100",
    last: "[&_svg]:opacity-60 [&_svg]:hover:opacity-100"
  }
})

export default paginationTheme
