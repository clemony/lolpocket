import { defineUiTheme } from "./defineUiTheme"

export const collapsibleTheme = defineUiTheme({
  slots: {
    root: "group/collapse w-full",
    content:
      "h-max w-full overflow-y-auto overscroll-auto data-[state=closed]:animate-[collapsible-up_200ms_ease-out] data-[state=open]:animate-[collapsible-down_200ms_ease-out]",
  },
})

export default collapsibleTheme
