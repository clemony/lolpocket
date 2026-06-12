import { defineUiTheme } from "./defineUiTheme"

export const pageLinksTheme = defineUiTheme({
  slots: {
    root: "flex flex-col gap-3",
    title: "flex items-center gap-1.5 text-sm font-semibold antialiased",
    list: "flex flex-col gap-2",
    item: "relative",
    link: "group group/link flex items-center gap-1.5 text-sm focus-visible:outline-primary",
    linkLeadingIcon: "size-4.5 shrink-0",
    linkLabel: "truncate",
    linkLabelExternalIcon: "absolute top-0 size-3 text-dimmed",
  },
  variants: {
    active: {
      true: {
        link: "font-medium text-primary",
      },
      false: {
        link: ["text-muted hover:text-default"],
      },
    },
  },
})

export default pageLinksTheme
