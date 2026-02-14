export default {
  slots: {
    childItem: "",
    childLabel: "text-xs  text-pc",
    childLink:
      "group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-lg focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    childLinkDescription: "text-p1",
    childLinkIcon: "size-5 shrink-0",
    childLinkLabel: "truncate",
    childLinkLabelExternalIcon: "inline-block size-3 align-top text-n5",
    childLinkWrapper: "min-w-0",
    childList: "isolate",
    content: "bg-p0",
    indicator:
      "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
    item: "h-10 min-w-0 flex items-center",
    label:
      "h-10 w-full flex text-pc items-center gap-1.5 font-semibold text-xs/5   px-3.5 py-1.5",
    link: "group relative text-pc h-8 w-full flex items-center gap-1.5  px-3.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-lg focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    linkLabel: "truncate text-pc",
    linkLabelExternalIcon: "inline-block size-3 align-top text-n5",
    linkLeadingAvatar: "shrink-0 transition-opacity duration-200",
    linkLeadingAvatarSize: "xs",
    linkLeadingIcon: "shrink-0 size-5 text-pc **:text-pc",
    linkTrailing: "group ms-auto inline-flex ml-0.5 gap-1.5 items-center",
    linkTrailingBadge: "shrink-0",
    linkTrailingBadgeSize: "sm",
    linkTrailingIcon:
      "size-4 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    list: "isolate h-10 min-w-0 self-center",
    root: "relative flex gap-1.5 [&>div]:min-w-0 ",
    separator: "px-2 h-px bg-p3",
    viewport:
      "bg-p0/90 relative overflow-hidden shadow-lg rounded-lg ring ring-p3 h-(--reka-navigation-menu-viewport-height) w-full    z-[1]",
    viewportWrapper: " absolute top-full left-0 flex w-full",
  },

  variants: {
    active: {
      false: {
        link: "text-n4",
        linkLeadingAvatar: "opacity-90 hover:opacity-100 ",
        linkLeadingIcon: "text-n4",
        childLink: [
          "hover:before:bg-elevated/50 text-pc hover:text-pc",
          "transition-colors before:transition-colors",
        ],
        childLinkIcon: ["text-n4 group-hover:text-pc", "transition-colors"],
      },
      true: {
        childLink: "before:bg-elevated text-pc",
        childLinkIcon: "text-pc",
        linkLeadingAvatar: "opacity-100",
      },
    },
  },

  defaultVariants: {
    variant: "pill",
  },
}
