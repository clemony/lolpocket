import { defineUiTheme } from "./defineUiTheme"

export const pageHeaderTheme = defineUiTheme({
  slots: {
    root: "relative border-b border-p2 pt-8 pb-6",
    container: "",
    wrapper:
      "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
    headline: "mb-2.5 flex items-center gap-1.5 text-xs font-semibold text-n5",
    title: "text-3xl font-bold text-pretty text-highlighted sm:text-4xl",
    description: "text-sm text-pretty text-muted",
    links: "flex flex-wrap items-center gap-1.5",
  },
  variants: {
    title: {
      true: {
        description: "mt-4",
      },
    },
  },
})

export default pageHeaderTheme
