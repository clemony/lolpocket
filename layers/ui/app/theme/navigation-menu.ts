export default {
  slots: {
    childItem: "",
    childLabel: "text-xs  text-pc",
    childLink:
      "group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-lg focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    childLinkDescription: "text-n3",
    childLinkIcon: "size-5 shrink-0",
    childLinkLabel: "truncate",
    childLinkLabelExternalIcon: "inline-block size-3 align-top text-n5",
    childLinkWrapper: "min-w-0",
    childList: "isolate",
    content:
      "z-60 bg-p0/50! supports-[backdrop-filter]:bg-p0/35! backdrop-blur-md! p-0!",
    indicator:
      "absolute data-[state=visible]:animate-[fade-in_75ms_ease-out] data-[state=hidden]:animate-[fade-out_75ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-100",
    item: " group relative text-pc h-8   flex items-center  font-medium text-sm  ",
    label:
      "h-8 w-full flex text-pc items-center gap-1.5 font-semibold text-sm/5   px-3.5 py-1.5",
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
      "size-4 transform shrink-0 group-data-[state=open]:scale-y-100 transition-transform duration-150",
    list: "isolate h-10 min-w-0 self-center",
    root: "relative flex gap-1.5 [&>div]:min-w-0 ",
    separator: "px-2 h-px bg-p3",
    viewport:
      "relative overflow-hidden bg-p0/70 p-0 w-(--reka-navigation-menu-viewport-width) shadow-lg rounded-lg ring ring-default h-(--reka-navigation-menu-viewport-height)   transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] z-[1]",
    viewportWrapper:
      "absolute top-full left-0 flex w-full  backdrop-blur-md **: backdrop-blur-md",
  },

  variants: {
    color: {
      default: {
        link: `focus-visible:before:ring-p3`,
        childLink: `focus-visible:before:ring-p3`,
      },
      neutral: {
        link: "focus-visible:before:ring-inverted",
        childLink: "focus-visible:before:ring-inverted",
      },
    },
    highlightColor: {
      default: "",
      neutral: "",
    },
    variant: {
      pill: "",
      link: "",
    },
    orientation: {
      horizontal: {
        root: "items-center justify-between",
        list: "flex items-center",
        item: "py-2",
        link: "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
        childList: "grid p-2",
        childLink: "px-3 py-2 gap-2 before:inset-x-px before:inset-y-0",
        childLinkLabel: "font-medium",
        content:
          "absolute top-0 left-0 w-full max-h-[70vh] overflow-y-auto bg-p0/50 supports-[backdrop-filter]:bg-p0/35 backdrop-blur-md",
      },
      vertical: {
        root: "flex-col",
        link: "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0",
        childLabel: "px-1.5 py-0.5",
        childLink: "p-1.5 gap-1.5 before:inset-y-px before:inset-x-0",
      },
    },
    contentOrientation: {
      horizontal: {
        viewportWrapper: "justify-center",
        content:
          "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]",
      },
      vertical: {
        viewport:
          "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)",
      },
    },
    active: {
      true: {
        childLink: "before:bg-p0 text-pc",
        childLinkIcon: "text-pc",
      },
      false: {
        link: "text-muted",
        linkLeadingIcon: "text-dimmed",
        childLink: ["hover:before:bg-p0/50 text-pc hover:text-pc"],
        childLinkIcon: ["text-n4 group-hover:text-pc"],
      },
    },
    disabled: {
      true: {
        link: "cursor-not-allowed opacity-75",
      },
    },
    highlight: {
      true: "",
    },
    level: {
      true: "",
    },
    collapsed: {
      true: "",
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      contentOrientation: "horizontal",
      class: {
        childList: "grid-cols-2 gap-2",
      },
    },
    {
      orientation: "horizontal",
      contentOrientation: "vertical",
      class: {
        childList: "gap-1",
        content: "w-60",
      },
    },
    {
      orientation: "vertical",
      collapsed: false,
      class: {
        childList: "ms-5 border-s border-p3/80",
        childItem: "ps-1.5 -ms-px",
        content:
          "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden",
      },
    },
    {
      orientation: "vertical",
      collapsed: true,
      class: {
        link: "px-1.5",
        linkLabel: "hidden",
        linkTrailing: "hidden",
        content: "shadow-sm rounded-sm min-h-6 p-1",
      },
    },
    {
      orientation: "horizontal",
      highlight: true,
      class: {
        link: [
          "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
        ],
      },
    },
    {
      orientation: "vertical",
      highlight: true,
      level: true,
      class: {
        link: [
          "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
        ],
      },
    },
    {
      disabled: false,
      active: false,
      variant: "pill",
      class: {
        link: ["hover:text-highlighted hover:before:bg-p0/50"],
        linkLeadingIcon: ["group-hover:text-default"],
      },
    },
    {
      disabled: false,
      active: false,
      variant: "pill",
      orientation: "horizontal",
      class: {
        link: "data-[state=open]:text-pc",
        linkLeadingIcon: "group-data-[state=open]:text-default",
      },
    },
    {
      disabled: false,
      variant: "pill",
      highlight: true,
      orientation: "horizontal",
      class: {
        link: "data-[state=open]:before:bg-elevated/50",
      },
    },
    {
      disabled: false,
      variant: "pill",
      highlight: false,
      active: false,
      orientation: "horizontal",
      class: {
        link: "data-[state=open]:before:bg-elevated/50",
      },
    },

    {
      color: "default",
      variant: "pill",
      active: true,
      class: {
        link: "text-pc",
        linkLeadingIcon: "text-pc group-data-[state=open]:text-pc",
      },
    },
    {
      color: "neutral",
      variant: "pill",
      active: true,
      class: {
        link: "text-highlighted",
        linkLeadingIcon:
          "text-highlighted group-data-[state=open]:text-highlighted",
      },
    },
    {
      variant: "pill",
      active: true,
      highlight: false,
      class: {
        link: "before:bg-elevated",
      },
    },
    {
      variant: "pill",
      active: true,
      highlight: true,
      disabled: false,
      class: {
        link: ["hover:before:bg-elevated/50"],
      },
    },
    {
      disabled: false,
      active: false,
      variant: "link",
      class: {
        link: ["hover:text-highlighted"],
        linkLeadingIcon: ["group-hover:text-default"],
      },
    },
    {
      disabled: false,
      active: false,
      variant: "link",
      orientation: "horizontal",
      class: {
        link: "data-[state=open]:text-highlighted",
        linkLeadingIcon: "group-data-[state=open]:text-default",
      },
    },
    {
      color: "neutral",
      variant: "link",
      active: true,
      class: {
        link: "text-highlighted",
        linkLeadingIcon:
          "text-highlighted group-data-[state=open]:text-highlighted",
      },
    },
    {
      highlightColor: "neutral",
      highlight: true,
      level: true,
      active: true,
      class: {
        link: "after:bg-inverted",
      },
    },
  ],
  defaultVariants: {
    color: "default",
    highlightColor: "default",
    variant: "pill",
  },
}
