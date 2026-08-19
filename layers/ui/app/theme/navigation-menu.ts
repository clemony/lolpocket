import { defineUiTheme } from "./defineUiTheme"

export const navigationMenuTheme = defineUiTheme({
  slots: {
    childItem: "",
    childLabel: "text-xs text-pc",
    childLink:
      "group relative flex size-full items-start text-start text-sm before:absolute before:z-[-1] before:rounded-lg focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset dark:focus-visible:outline-none",
    childLinkDescription: "text-n3",
    childLinkIcon: "size-5 shrink-0",
    childLinkLabel: "truncate",
    childLinkLabelExternalIcon: "inline-block size-3 align-top text-n5",
    childLinkWrapper: "min-w-0",
    childList: "isolate",
    content:
      "z-60 bg-p0/50! p-0! backdrop-blur-md! supports-[backdrop-filter]:bg-p0/35!",
    indicator:
      "absolute bottom-0 z-[2] flex h-2.5 w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) items-end justify-center overflow-hidden transition-[translate,width] duration-100 data-[state=hidden]:animate-[fade-out_75ms_ease-in] data-[state=hidden]:opacity-0 data-[state=visible]:animate-[fade-in_75ms_ease-out]",
    item: "group relative items-center text-sm font-medium text-pc",
    label:
      "flex h-8 w-full items-center gap-1.5 px-3.5 py-1.5 text-sm/5 font-semibold text-pc",
    link: "group relative flex h-8 w-full items-center gap-1.5 px-3.5 text-sm font-medium text-pc before:absolute before:z-[-1] before:rounded-lg focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset dark:focus-visible:outline-none",
    linkLabel: "truncate text-pc",
    linkLabelExternalIcon: "inline-block size-3 align-top text-n5",
    linkLeadingAvatar: "shrink-0 transition-opacity duration-200",
    linkLeadingAvatarSize: "xs",
    linkLeadingIcon: "size-4.5 shrink-0 text-pc **:text-pc",
    linkTrailing: "group ms-auto ml-0.5 inline-flex items-center gap-1.5",
    linkTrailingBadge: "shrink-0",
    linkTrailingBadgeSize: "sm",
    linkTrailingIcon:
      "size-4 shrink-0 transform transition-transform duration-150 group-data-[state=open]:scale-y-100",
    list: "isolate h-10 min-w-0 self-center",
    root: "relative gap-1.5 [&>div]:min-w-0",
    separator: "h-px bg-p3 px-2",
    viewport:
      "relative z-[1] h-(--reka-navigation-menu-viewport-height) w-(--reka-navigation-menu-viewport-width) origin-[top_center] overflow-hidden rounded-lg bg-p0/70 p-0 shadow-lg ring ring-default transition-[width,height,left] duration-200 data-[state=closed]:animate-[scale-out_100ms_ease-in] data-[state=open]:animate-[scale-in_100ms_ease-out]",
    viewportWrapper:
      "**: absolute top-full left-0 flex w-full backdrop-blur-md",
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
        childLink: "gap-2 px-3 py-2 before:inset-x-px before:inset-y-0",
        childLinkLabel: "font-medium",
        content:
          "absolute top-0 left-0 max-h-[70vh] w-full overflow-y-auto bg-p0/50 backdrop-blur-md supports-[backdrop-filter]:bg-p0/35",
      },
      vertical: {
        root: "flex-col",
        link: "flex-row px-2.5 py-1.5 before:inset-x-0 before:inset-y-px",
        childLabel: "px-1.5 py-0.5",
        childLink: "gap-1.5 p-1.5 before:inset-x-0 before:inset-y-px",
      },
    },
    contentOrientation: {
      horizontal: {
        viewportWrapper: "justify-center",
        content:
          "data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease]",
      },
      vertical: {
        viewport:
          "left-(--reka-navigation-menu-viewport-left) sm:w-(--reka-navigation-menu-viewport-width)",
      },
    },
    active: {
      true: {
        childLink: "text-pc before:bg-p0",
        childLinkIcon: "text-pc",
      },
      false: {
        link: "text-muted",
        linkLeadingIcon: "text-dimmed",
        childLink: ["text-pc hover:text-pc hover:before:bg-p0/50"],
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
        childItem: "-ms-px ps-1.5",
        content:
          "overflow-hidden data-[state=closed]:animate-[collapsible-up_200ms_ease-out] data-[state=open]:animate-[collapsible-down_200ms_ease-out]",
      },
    },
    {
      orientation: "vertical",
      collapsed: true,
      class: {
        link: "px-1.5",
        linkLabel: "hidden",
        linkTrailing: "hidden",
        content: "min-h-6 rounded-sm p-1 shadow-sm",
      },
    },
    {
      orientation: "horizontal",
      highlight: true,
      class: {
        link: [
          "after:absolute after:inset-x-2.5 after:-bottom-2 after:block after:h-px after:rounded-full",
        ],
      },
    },
    {
      orientation: "vertical",
      highlight: true,
      level: true,
      class: {
        link: [
          "after:absolute after:inset-y-0.5 after:-start-1.5 after:block after:w-px after:rounded-full",
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
})

export default navigationMenuTheme
