import { defineUiTheme } from "./defineUiTheme"

export const tabsTheme = defineUiTheme({
  slots: {
    indicator:
      "absolute shrink-0 grow transform-gpu transition-transform duration-200 will-change-transform",
    list: "group/list relative flex rounded-xl p-1 inset-ring-0 inset-shadow-black/3 group-active:inset-ring-0",
    trigger:
      "group/trigger relative inline-flex min-w-0 shrink-0 grow cursor-pointer items-center rounded-lg text-sm font-medium disabled:cursor-not-allowed disabled:opacity-30",

    root: "group/tabs flex items-center gap-0 inset-ring-0",
    leadingIcon: "shrink-0",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    label: "truncate",
    trailingBadge: "shrink-0",
    trailingBadgeSize: "sm",
    content: "w-full focus:outline-none"
  },
  variants: {
    color: {
      neutral: "",
      transparent: "",
      default: ""
    },
    variant: {
      solid: {
        indicator: "shadow-sm shadow-black/6"
      },
      link: {
        list: "border-b-0 border-b-transparent",
        indicator:
          "grid -translate-y-1 after:absolute after:h-0.5 after:w-[75%] after:justify-self-center after:border-b",
        trigger: "focus:outline-none on:text-pc"
      },
      ghost: {
        list: "shadow-none inset-shadow-none"
      },
      lift: {
        list: "tabs-lift-list tabs-lift z-4! tabs flex h-auto items-center rounded-none border-0! p-0",
        root: "h-auto p-0",
        indicator: "tab-active absolute z-2 w-full rounded-b-none! border-b!",
        leadingIcon:
          "[color:unset] opacity-60 group-hover/trigger:opacity-100 group-data-[state-active]/trigger:opacity-100",
        trigger:
          "group/trigger tab z-5! flex items-center rounded-b-none! border-b-0 font-medium! tracking-normal",
        label:
          "pointer-events-none w-full leading-none after:absolute after:-bottom-px after:z-6 after:h-px after:w-full group-data-[state-active]/trigger:after:opacity-100 group-data-[state-inactive]/trigger:after:opacity-0",
        content:
          "tabs-content tabs-lift-content z-0 -translate-y-px overflow-hidden rounded-4xl border-x border-b"
      },
      outline: {}
    },
    orientation: {
      horizontal: {
        list: "h-full",
        indicator:
          "left-0 h-[calc(100%-var(--spacing))] w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) self-center",
        trigger: "h-full grow justify-center"
      },
      vertical: {
        list: "w-max flex-col items-center",
        trigger: "items-center justify-self-center",
        indicator:
          "top-0 left-[calc(50%-var(--reka-tabs-indicator-size)/2)] size-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position) justify-self-center"
      }
    },
    size: {
      xs: {
        trigger: "gap-0 p-0",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs"
      },
      sm: {
        indicator: "rounded-[0.47rem]",
        trigger: "gap-0 p-0",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs"
      },
      md: {
        indicator: "rounded-xl",
        trigger: "gap-0 p-0",
        leadingIcon: "size-4",
        leadingAvatarSize: "2xs"
      },
      lg: {
        indicator: "rounded-xl",
        trigger: "gap-0 p-0",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs"
      },
      xl: {
        indicator: "rounded-6xl",
        trigger: "gap-0 p-0",
        leadingIcon: "size-5",
        leadingAvatarSize: "xs"
      }
    }
  },
  compoundVariants: [
    {
      color: "base",
      variant: "lift",
      class: {
        root: "tabs-light tabs",
        indicator: "border-b-p0!",
        label: "after:bg-p0 group-not-[.background-tab]/trigger:after:bg-p0",
        leadingIcon: "",
        trigger: "border-border"
      }
    },
    {
      color: "neutral",
      variant: "lift",
      class: {
        indicator: "tab-dark bg-neutral",
        root: "tabs-dark tabs border-0! [--tab-bg:var(--color-neutral)]! [--tab-inset-color:var(--color-n2)]!",
        list: "border-0!",
        label:
          "group-data-[state-active]/trigger:text-nc! group-data-[state-active]/trigger:**:text-nc! group-not-[.background-tab]/trigger:after:bg-n0",
        trigger: "border-0!",
        leadingIcon:
          "group-data-[state-active]/trigger:text-nc! group-data-[state-active]/trigger:**:text-nc!"
      }
    },
    {
      color: "primary",
      variant: "lift",
      class: {
        indicator: "bg-p1",
        root: "tabs border-0! [--tab-bg:var(--color-p1)]! [--tab-inset-color:var(--color-border)]!",
        list: "border-0!",
        label: "group-not-[.background-tab]/trigger:after:bg-p1",
        trigger: "border-b-0! [--tab-bg:var(--color-p1)]!",
        content: "border border-t-0! border-border"
      }
    },
    {
      color: "base",
      variant: "pill",
      class: {
        content: "border-border!",
        indicator: "fx-depth bg-p0 shadow-xs inset-ring inset-ring-p3 depth-3",
        list: "noise bg-p1 inset-shadow-xs inset-ring inset-shadow-black/4 inset-ring-p3/80",
        trigger:
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-pc"
      }
    },

    {
      color: "base",
      variant: "link",
      class: {
        indicator: "after:border-pc/60 after:bg-pc",
        list: "",
        trigger:
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-pc"
      }
    },
    {
      color: "transparent",
      variant: "pill",
      class: {
        indicator: "bg-transparent shadow-none inset-ring-0",
        list: "bg-transparent shadow-none inset-ring-0",
        trigger:
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-pc"
      }
    },
    {
      color: "neutral",
      variant: "pill",
      class: {
        indicator:
          "noise bg-neutral/90 shadow-xs inset-shadow-xs inset-ring inset-shadow-p1/10 inset-ring-n4",
        list: "noise bg-p2/70 inset-ring inset-ring-p3/60",
        trigger:
          "text-pc hover:text-pc! focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-p1 active:hover:**:text-nc data-[state=active]:text-nc data-[state=active]:**:text-nc"
      }
    },

    {
      color: "neutral",
      variant: "ghost",
      class: {
        indicator:
          "noise bg-neutral/90 shadow-xs inset-shadow-xs inset-ring inset-shadow-p1/10 inset-ring-n4",
        list: "",
        trigger:
          "text-pc hover:text-pc! focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-p1 active:hover:**:text-nc data-[state=active]:text-nc data-[state=active]:**:text-nc"
      }
    },

    /* orientation */
    {
      orientation: "horizontal",
      class: {
        root: "grow"
      }
    },
    /* size */
    ...[
      ["xs", "size-6", "h-6", "h-7", "w-7", "gap-1 px-2 text-xs"],
      ["sm", "size-7", "h-7", "h-8", "w-8", "gap-1.5 px-2.5 text-xs"],
      [
        "md",
        "size-9",
        "h-9",
        "h-10.5",
        "w-10.5 max-w-10.5",
        "gap-1.5 px-3 text-xs"
      ],
      ["lg", "size-10", "h-10", "h-12", "w-12", "gap-2 px-3 text-sm"],
      ["xl", "size-12", "h-12", "h-14", "w-14", "gap-2 px-3 "]
    ].flatMap(([k, sizeClass, indicateH, hClass, wClass, recClass]) => [
      {
        size: k,
        variant: ["pill", "link", "soft", "subtle", "ghost"],
        class: { root: `tabs-${k}` }
      },
      {
        variant: ["pill", "link", "soft", "subtle", "ghost"],
        size: k,
        orientation: "horizontal",
        class: {
          indicator: indicateH,
          root: hClass
        }
      },
      /* {
        size: k,
        orientation: "vertical",
        class: {
          root: wClass
        }
      },*/ {
        size: k,
        class: {
          trigger: recClass
        }
      }
    ]),
    {
      variant: "lift",
      size: "xs",
      class: {
        list: "tabs-xs text-xs"
      }
    },
    {
      variant: "lift",
      size: "sm",
      class: {
        list: "tabs-sm text-sm"
      }
    },
    {
      variant: "lift",
      size: "md",
      class: {
        list: "h-10 tabs-md",
        trigger: "h-10 text-sm",
        content: "rounded-4xl"
      }
    },
    {
      variant: "lift",
      size: "lg",
      class: {
        list: "h-12 tabs-md",
        trigger: "h-12 max-w-32 rounded-t-2xl text-sm",
        content: "rounded-4xl"
      }
    },
    {
      variant: "lift",
      size: "xl",
      class: {
        list: "h-14 tabs-xl",
        trigger: "h-14 text-sm",
        content: "rounded-4xl"
      }
    },
    {
      variant: "lift",
      color: "base",
      class: {
        content: "border-p2 bg-p0"
      }
    }
  ],
  defaultVariants: {
    color: "base",
    variant: "pill",
    size: "md"
  }
})

export default tabsTheme
