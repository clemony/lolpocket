import { defineUiTheme } from "./defineUiTheme"

const baseVariants = ["solid", "ghost", "link", "outline", "solid"] as const
const squareVariants = baseVariants.map((v) => `${v}-sq`)
const nonSquareVariants = [...baseVariants]

export const tabsTheme = defineUiTheme({
  slots: {
    indicator:
      "absolute shrink-0 grow transform-gpu transition-transform duration-200 will-change-transform",
    list: "group relative flex p-1 ring-0 group-active:ring-0",
    trigger:
      "group text-2 relative inline-flex min-w-0 shrink-0 grow cursor-pointer items-center font-medium disabled:cursor-not-allowed disabled:opacity-30",

    root: "flex items-center gap-0 ring-0",
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
      ghost: {
        indicator: "shadow-sm shadow-black/6"
      },
      neumorphic: {
        indicator: "rounded-[0.56rem]! border ring-0 inset-shadow-morphic",
        list: "border px-2! shadow-sm ring-0 shadow-black/5 drop-shadow-sm drop-shadow-black/5"
      },
      link: {
        list: "border-b-0 border-b-transparent",
        indicator:
          "grid -translate-y-1 ds-2xs after:absolute after:h-0.5 after:w-[75%] after:justify-self-center after:border-b after:border-pc/60 after:bg-p3",
        trigger: "focus:outline-none on:text-pc"
      },
      outline: {},
      "solid-sq": {},
      "outline-sq": {},
      "ghost-sq": {},
      ...Object.fromEntries(squareVariants.map((variant) => [variant, {}]))
    },
    rounded: {
      md: {
        indicator: "rounded-md",
        list: "rounded-md"
      },
      lg: {
        indicator: "rounded-md",
        list: "rounded-lg"
      },
      xl: {
        indicator: "rounded-lg",
        list: "rounded-xl"
      },
      full: {
        indicator: "rounded-full"
      }
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
        trigger: "gap-0 p-0",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs"
      },
      md: {
        trigger: "gap-0 p-0",
        leadingIcon: "size-4",
        leadingAvatarSize: "2xs"
      },
      lg: {
        trigger: "gap-0 p-0",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs"
      },
      xl: {
        trigger: "gap-0 p-0",
        leadingIcon: "size-6",
        leadingAvatarSize: "xs"
      }
    }
  },
  compoundVariants: [
    {
      color: "default",
      variant: ["solid", "solid-sq"],
      class: {
        indicator: "bg-p0 ring-p3",
        list: "noise bg-p1 ring inset-shadow-xs ring-p3/80 inset-shadow-black/4",
        trigger:
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-pc"
      }
    },
    {
      color: "default",
      variant: "neumorphic",
      class: {
        indicator: "border-p4/70",
        list: "border-p3/80 border-r-p4/80 border-b-p4/80 bg-p0",
        trigger: ""
      }
    },
    {
      color: "neutral",
      variant: ["solid", "solid-sq"],
      class: {
        indicator:
          "noise bg-neutral/90 shadow-xs ring inset-shadow-xs ring-p4/80 inset-shadow-p1/10",
        list: "noise bg-p2/70 ring ring-p3/60",
        trigger:
          "text-pc hover:text-pc! focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-p1 active:hover:**:text-nc data-[state=active]:text-nc data-[state=active]:**:text-nc"
      }
    },
    /* ghost */

    {
      color: "neutral",
      variant: ["ghost", "ghost-sq"],
      class: {
        indicator:
          "inset-shadow-b1/8 noise bg-neutral/90 inset-shadow-xs ring-n5/60",
        list: "noise-none bg-transparent",
        trigger:
          "text-nc not-active:hover:text-nc! active:text-nc active:**:text-nc active:hover:**:text-nc"
      }
    },
    /* outline */
    {
      color: "neutral",
      variant: ["outline", "outline-sq"],
      class: {
        indicator:
          "noise bg-neutral/90 ring inset-shadow-xs ring-p4/80 inset-shadow-p1/10",
        list: "rounded-lg border border-p3",
        trigger:
          "text-pc hover:text-pc! active:text-nc active:**:text-nc active:hover:**:text-nc!"
      },
      rounded: ["md", "lg", "xl", "full"]
    },

    /* orientation */
    {
      orientation: "horizontal",
      variant: nonSquareVariants,
      class: {
        root: "grow"
      }
    },

    {
      variant: squareVariants,
      orientation: "horizontal",
      class: {
        trigger:
          "grid aspect-square shrink-0 basis-auto place-items-center p-0",
        indicator: "aspect-square shrink-0 self-center",
        list: "h-full p-1"
      }
    },
    {
      variant: squareVariants,
      orientation: "vertical",
      class: {
        trigger:
          "grid aspect-square shrink-0 basis-auto place-items-center p-0",
        indicator: "self-center",
        list: "w-full p-1"
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
        variant: squareVariants,
        class: {
          indicator: sizeClass,
          trigger: sizeClass
        }
      },
      {
        size: k,
        orientation: "horizontal",
        class: {
          indicator: indicateH,
          root: hClass
        }
      },
      {
        size: k,
        orientation: "vertical",
        class: {
          root: wClass
        }
      },
      {
        size: k,
        variant: nonSquareVariants,
        class: {
          trigger: recClass
        }
      }
    ]),
    {
      size: "md",
      class: {
        indicator: "rounded-lg"
      }
    },
    {
      size: "md",
      variant: "neumorphic",
      orientation: "horizontal",
      class: {
        indicator: "h-7.5! max-h-7.5!"
      }
    },
    {
      size: "lg",
      variant: "neumorphic",
      orientation: "horizontal",
      class: {
        indicator: "h-9! max-h-9!"
      }
    },
    {
      size: "md",
      orientation: "horizontal",
      class: {
        list: "rounded-xl"
      }
    },
    {
      size: ["lg", "xl"],
      class: {
        list: "rounded-xl",
        indicator: "rounded-lg"
      }
    }
  ],
  defaultVariants: {
    rounded: "lg",
    color: "default",
    variant: "solid"
  }
})

export default tabsTheme
