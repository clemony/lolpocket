export default {
  slots: {
    root: "",
    list: "",
    item: "relative",
    link: "group text-sm flex items-center gap-1.5 py-1 focus-visible:outline-neutral",
    linkLeading: "rounded-lg p-1.5 inline-flex ring-inset   ring",
    linkLeadingIcon: "size-4 shrink-0",
    linkLabel: "truncate",
    linkLabelExternalIcon: "size-3 absolute top-0 text-dimmed",
  },
  variants: {
    active: {
      true: {
        link: "text-neutral font-semibold",
        linkLeading: "bg-neutral ring-neutral text-nc **:text-nc",
      },
      false: {
        link: ["text-muted hover:text-default font-medium"],
        linkLeading: [
          "bg-p1 ring-p3 text-n4 group-hover:bg-neutral group-hover:ring-neutral group-hover:text-nc",
        ],
      },
    },
  },
}
