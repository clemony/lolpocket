import { defineUiTheme } from "./defineUiTheme"

export const badgeTheme = defineUiTheme({
  slots: {
    base: "inline-flex w-fit items-center align-middle ring drop-shadow-xs",
    leadingIcon: "inline align-icon",
  },
  variants: {
    variant: {
      solid: "",
      outline: "",
      soft: "",
      subtle: "",
      ghost: "bg-transparent text-pc ring-transparent drop-shadow-none",
    },
    size: {
      xs: {
        base: "h-5 gap-1 rounded-[0.5rem] px-2 text-2xs/3",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-3.5 **:stroke-[2.4]",
        trailingIcon: "size-3.5 **:stroke-[2.4]",
      },
      sm: {
        base: "h-6 gap-1.5 rounded-[0.52rem] px-2.5 align-middle text-xs/3.5",
        leadingAvatarSize: "3xs",
        label: "align-middle",
        leadingIcon: "size-3.5 align-middle **:stroke-[2.4]",
        trailingIcon: "size-3.5 align-middle **:stroke-[2.4]",
      },
      md: {
        base: "h-7 gap-1.5 rounded-[0.55rem] px-2.5 text-xs/4",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-3.5 **:stroke-[2.4]",
        trailingIcon: "size-3.5 **:stroke-[2.4]",
      },
      lg: {
        base: "gap-1 rounded-lg px-3 py-1 text-xs",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4",
      },
      xl: {
        base: "gap-1.5 rounded-lg px-2 py-1 text-sm",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-5",
        trailingIcon: "size-5",
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
        "noise text-white ring-ad **:text-white dark:bg-ad/90 dark:font-bold light:bg-ad/70 light:font-semibold",
    },
    {
      color: "base",
      variant: "solid",
      class: "fx-depth-p1 fx-noise bg-p0 text-pc ring ring-p4/60 fx-1",
    },
    {
      color: "base",
      variant: "outline",
      class: "text-pc ring ring-p4/60",
    },
    {
      color: "primary",
      variant: "solid",
      class: "bg-p1 text-pc ring ring-p3",
    },
    {
      color: "secondary",
      variant: "solid",
      class: "bg-p2 font-semibold text-pc ring-p3",
    },
    {
      color: ["primary", "secondary", "base", "tertiary"],
      variant: "outline",
      class: "text-pc ring-p3",
    },
    {
      color: "transparent",
      variant: "solid",
      class: "text-pc/60 ring-0",
    },
    {
      color: "transparent",
      variant: "subtle",
      class:
        "px-0 text-pc shadow-none ring-0 inset-shadow-none drop-shadow-none fx-0",
    },

    // neutral

    {
      color: "neutral",
      variant: "solid",
      class:
        "fx-depth-neutral fx-noise bg-n0/90 text-nc ring ring-n1 backdrop-blur-sm **:text-nc [&_svg]:text-nc",
    },
    {
      color: "neutral",
      variant: "subtle",
      class:
        "hover:noise ring ring-transparent hover:bg-n0/85 hover:text-nc hover:ring-n3 hover:**:text-nc",
    },

    {
      color: "neutral",
      variant: "ghost",
      class:
        "hover:fx-depth-neutral text-pc! ring backdrop-blur-sm hover:fx-noise hover:bg-n0/90 hover:text-nc! hover:ring-n1 hover:**:text-nc! hover:[&_svg]:text-nc",
    },
    // dom
    {
      color: "dom",
      variant: "solid",
      class: "bg-dom font-semibold text-white ring-dom",
    },
    {
      color: "dom",
      variant: "soft",
      class: "bg-dom/40 font-semibold text-pc/70 ring-dom/50",
    },

    // sorc
    {
      color: "sorc",
      variant: "soft",
      class: "noise bg-sorc/40 font-semibold text-pc/70 ring-sorc/50",
    },
    {
      color: "sorc",
      variant: "solid",
      class: "bg-sorc font-semibold text-white ring-sorc",
    },

    // insp
    {
      color: "insp",
      variant: "solid",
      class: "text-insp-content bg-insp font-semibold ring-insp",
    },

    {
      color: "insp",
      variant: "outline",
      class: "font-semibold text-pc ring-insp-offset/40",
    },
    {
      color: "insp",
      variant: "soft",
      class: "bg-insp-content/50 noise font-semibold text-pc ring ring-insp/40",
    },

    // pre
    {
      color: "pre",
      variant: "soft",
      class: "bg-pre/40 font-semibold text-pc/70 ring-pre/50",
    },
    {
      color: "pre",
      variant: "solid",
      class: "bg-pre font-semibold text-white ring-pre",
    },

    // gold
    {
      color: "gold",
      variant: "solid",
      class: "bg-g/80 font-semibold text-white ring-g **:text-white",
    },
    {
      color: "gold",
      variant: "soft",
      class: "bg-g/40 font-semibold text-pc/70 ring-g/50",
    },

    // res
    {
      color: "res",
      variant: "soft",
      class: "bg-res/40 text-pc/70 ring-res/50",
    },
    {
      color: "res",
      variant: "solid",
      class: "bg-res text-white ring-res",
    },

    //ghost
    {
      color: "base",
      variant: "ghost",
      class: "text-pc",
    },

    {
      color: "neutral",
      variant: "ghost",
      class: "text-nc",
    },
  ],
  defaultVariants: {
    color: "primary",
    variant: "solid",
  },
})

export default badgeTheme
