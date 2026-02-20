import { defineUiTheme } from "./defineUiTheme"

export const pageAnchorsTheme = defineUiTheme({
  slots: {
    root: "",
    list: "",
    item: "relative",
    link: "group flex items-center gap-1.5 py-1 text-sm focus-visible:outline-neutral",
    linkLeading: "inline-flex rounded-lg p-1.5 ring ring-inset",
    linkLeadingIcon: "size-4 shrink-0",
    linkLabel: "truncate",
    linkLabelExternalIcon: "absolute top-0 size-3 text-dimmed",
  },
  variants: {
    active: {
      true: {
        link: "font-semibold text-neutral",
        linkLeading: "bg-neutral text-nc ring-neutral **:text-nc",
      },
      false: {
        link: ["font-medium text-muted hover:text-default"],
        linkLeading: [
          "bg-p1 text-n4 ring-p3 group-hover:bg-neutral group-hover:text-nc group-hover:ring-neutral",
        ],
      },
    },
  },
})

export default pageAnchorsTheme
