import { defineUiTheme } from "./defineUiTheme"

export const tabsTheme = defineUiTheme({
  slots: {
    indicator:
      "absolute shrink-0 grow transform-gpu transition-transform duration-200 will-change-transform",
    list: "group relative flex rounded-xl p-1 inset-ring-0 inset-shadow-black/3 group-active:inset-ring-0",
    trigger:
      "group text-2 relative inline-flex min-w-0 shrink-0 grow cursor-pointer items-center rounded-lg font-medium disabled:cursor-not-allowed disabled:opacity-30",

    root: "flex items-center gap-0 inset-ring-0",
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
        indicator: "rounded-xl",
        trigger: "gap-0 p-0",
        leadingIcon: "size-6",
        leadingAvatarSize: "xs"
      }
    }
  },
  compoundVariants: [
    {
      color: "base",
      variant: "pill",
      class: {
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
        class: { root: `tabs-${k}` }
      },
      {
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
    ])
  ],
  defaultVariants: {
    color: "base",
    variant: "pill"
  }
})

export default tabsTheme
