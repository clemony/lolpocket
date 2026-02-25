import { defineUiTheme } from "./defineUiTheme"

export const badgeTheme = defineUiTheme({
  slots: {
    base: "flex w-fit items-center border ds-xs",
  },
  variants: {
    color: {
      ad: "",
      dom: "",
      gold: "",
      insp: "",
      neutral: "",
      p0: "",
      p1: "",
      p2: "",
      p3: "",
      pre: "",
      res: "",
      sorc: "",
      transparent: "",
    },
    variant: {
      solid: "",
      outline: "",
      soft: "",
    },
    size: {
      lg: {
        base: "gap-1.5 rounded-lg px-2 py-1 text-sm",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-5",
        trailingIcon: "size-5",
      },
      md: {
        base: "gap-1 rounded-lg px-2 py-1 text-xs",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4",
      },
      sm: {
        base: "gap-1.5 rounded-lg px-2 py-0.75 text-xs/4",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-3.5 **:stroke-[2.4]",
        trailingIcon: "size-3.5 **:stroke-[2.4]",
      },
      xl: {
        base: "gap-1.5 rounded-lg px-2.5 py-1 text-pc",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-6",
        trailingIcon: "size-6",
      },
      xs: {
        base: "gap-1.5 rounded-lg px-1.5 py-0.5 text-[10px]/3.5",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-3.5 **:stroke-[2.4]",
        trailingIcon: "size-3.5 **:stroke-[2.4]",
      },
      "2xs": {
        base: "gap-1 rounded-md px-1 py-0 text-[10px]/3",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-3.5 **:stroke-[2.4]",
        trailingIcon: "size-3.5 **:stroke-[2.4]",
      },
    },
    square: {
      true: "",
    },
  },
  compoundVariants: [
    {
      color: "ad",
      variant: "solid",
      class:
        "border-ad text-white **:text-white dark:bg-ad/90 dark:font-bold light:bg-ad/70 light:font-semibold",
    },
    {
      color: "p0",
      variant: "solid",
      class: "border border-p3 bg-p0 font-medium text-pc ring-p2",
    },
    {
      color: "p1",
      variant: "solid",
      class: "border border-p3 bg-p1 font-medium text-pc ring-p2",
    },
    {
      color: "p2",
      variant: "solid",
      class: "border-p3 bg-p2 font-semibold text-pc",
    },
    {
      color: "p3",
      variant: "outline",
      class: "border-p3 font-medium text-pc",
    },
    {
      color: "transparent",
      variant: "ghost",
      class: "ring-none border-none text-pc shadow-none fx-0",
    },

    // neutral

    {
      color: "neutral",
      variant: "solid",
      class: "noise border border-n2 bg-n0/85 font-semibold text-nc ring-n3",
    },

    // dom
    {
      color: "dom",
      variant: "solid",
      class: "border-dom bg-dom font-semibold text-white",
    },
    {
      color: "dom",
      variant: "soft",
      class: "border-dom/50 bg-dom/40 font-semibold text-pc/70",
    },

    // sorc
    {
      color: "sorc",
      variant: "soft",
      class: "noise border-sorc/50 bg-sorc/40 font-semibold text-pc/70",
    },
    {
      color: "sorc",
      variant: "solid",
      class: "border-sorc bg-sorc font-semibold text-white",
    },

    // insp
    {
      color: "insp",
      variant: "solid",
      class: "text-insp-content border-insp bg-insp font-semibold",
    },

    {
      color: "insp",
      variant: "outline",
      class: "border-insp-offset/40 font-semibold text-pc",
    },
    {
      color: "insp",
      variant: "soft",
      class:
        "bg-insp-content/50 noise border border-p3 font-semibold text-pc ring-insp/40",
    },

    // pre
    {
      color: "pre",
      variant: "soft",
      class: "border-pre/50 bg-pre/40 font-semibold text-pc/70",
    },
    {
      color: "pre",
      variant: "solid",
      class: "border-pre bg-pre font-semibold text-white",
    },

    // gold
    {
      color: "gold",
      variant: "solid",
      class: "border-g bg-g/80 font-semibold text-white **:text-white",
    },
    {
      color: "gold",
      variant: "soft",
      class: "border-g/50 bg-g/40 font-semibold text-pc/70",
    },

    // res
    {
      color: "res",
      variant: "soft",
      class: "border-res/50 bg-res/40 font-medium text-pc/70",
    },
    {
      color: "res",
      variant: "solid",
      class: "border-res bg-res font-medium text-white",
    },
  ],
  defaultVariants: {
    color: "p1",
    variant: "solid",
  },
})

export default badgeTheme
