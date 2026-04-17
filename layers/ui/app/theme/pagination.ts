import { defineUiTheme } from "./defineUiTheme"

export const paginationTheme = defineUiTheme({
  slots: {
    root: "",
    list: "flex items-center gap-1",
    ellipsis: "pointer-events-none",
    label: "min-w-5 text-center",
    first: "",
    prev: "",
    item: "",
    next: "",
    last: ""
  }
})

export default paginationTheme
