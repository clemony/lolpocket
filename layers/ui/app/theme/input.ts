import { defineUiTheme } from "./defineUiTheme"
// i-plug
export const inputTheme = defineUiTheme({
  slots: {
    leading: "absolute inset-y-0 start-0 flex items-center",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    leadingIcon: "shrink-0 text-n5/80",
    root: "relative inline-flex items-center",
    trailing: "absolute inset-y-0 end-0 flex items-center",
    trailingIcon: "shrink-0 text-p5",
    base: [
      "peer input flex w-full shrink-0 appearance-none items-center rounded-lg border-0 placeholder:text-p5 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors",
    ],
  },
  variants: {
    color: {
      error: "",
      info: "",
      neutral: "",
      default: "",
    },
    variant: {
      ghost:
        "bg-transparent text-pc hover:bg-p1 focus:bg-p1 disabled:bg-transparent dark:disabled:bg-transparent",
      solid: "",
      none: "bg-transparent text-pc",
      outline: "bg-default text-pc ring ring-p3 ring-inset",
      soft: "bg-p1/50 text-pc hover:bg-p1 focus:bg-p1 disabled:bg-p1/50",
      subtle: "bg-p1 text-pc ring ring-p3 ring-inset",
      "ghost-outline":
        "bg-transparent text-pc ring ring-transparent hover:ring-pc/50 hover:ring-inset focus:bg-p2 disabled:bg-transparent dark:disabled:bg-transparent",
    },
    fieldGroup: {
      horizontal: {
        base: "group-not-last:group-not-first:rounded-none group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none",
        root: "group has-focus-visible:z-[1]",
      },
      vertical: {
        base: "group-not-last:group-not-first:rounded-none group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none",
        root: "group has-focus-visible:z-[1]",
      },
    },
    highlight: {
      true: "",
    },
    leading: {
      true: "",
    },
    loading: {
      true: "",
    },
    size: {
      lg: {
        base: "h-12 gap-2 px-3 py-2 text-sm",
        leading: "ps-3",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-4.5",
        trailing: "pe-3",
        trailingIcon: "size-5",
      },
      md: {
        root: "h-10",
        base: "flex h-full grow items-center gap-1.5 px-2.5 py-0 text-sm *:flex *:h-full *:items-center",
        leading: "ps-2.5",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-4.5",
        trailing: "pe-2.5",
        trailingIcon: "size-5",
      },
      sm: {
        base: "input-sm h-8 gap-1.5 px-2.5 py-1.5 text-xs",
        leading: "ps-2.5",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4.5",
        trailing: "pe-2.5",
        trailingIcon: "size-4",
      },
      xl: {
        base: "input-xl h-14 gap-2 px-3 py-0 text-base",
        leading: "ps-3",
        leadingAvatarSize: "xs",
        leadingIcon: "size-4.5",
        trailing: "pe-3",
        trailingIcon: "size-6",
      },
      xs: {
        base: "input-xs h-7 gap-1 px-2 py-0 text-xs",
        leading: "ps-2",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailing: "pe-2",
        trailingIcon: "size-4",
      },
    },
    trailing: {
      true: "",
    },
    type: {
      file: "file:me-1.5 file:font-medium file:text-muted file:outline-none",
      floating: "floating-label",
    },
  },
  compoundVariants: [
    {
      color: "default",
      variant: ["outline", "subtle"],
      class:
        "focus-visible:ring focus-visible:ring-n4 focus-visible:ring-inset",
    },
    {
      color: "default",
      class: "ring ring-n4 ring-inset",
      highlight: true,
    },
    {
      color: "neutral",
      variant: ["outline", "subtle"],
      class:
        "focus-visible:ring focus-visible:ring-nc focus-visible:ring-inset",
    },
    {
      color: "neutral",
      class: "ring ring-nc ring-inset",
      highlight: true,
    },
    {
      color: "neutral",
      variant: "solid",
      class:
        "bg-neutral/90 text-nc placeholder:text-nc/70 *:first:[&_svg]:text-nc",
    },

    {
      color: "neutral",
      variant: "soft",
      class: "bg-n3/95 text-nc placeholder:text-nc/70 *:first:[&_svg]:text-nc",
    },
    {
      class: "ps-7",
      leading: true,
      size: "xs",
    },
    {
      class: "ps-8",
      leading: true,
      size: "sm",
    },
    {
      class: "ps-9",
      leading: true,
      size: "md",
    },
    {
      class: "ps-10",
      leading: true,
      size: "lg",
    },
    {
      class: "ps-11",
      leading: true,
      size: "xl",
    },
    {
      class: "pe-7",
      size: "xs",
      trailing: true,
    },
    {
      class: "pe-8",
      size: "sm",
      trailing: true,
    },
    {
      class: "pe-9",
      size: "md",
      trailing: true,
    },
    {
      class: "pe-10",
      size: "lg",
      trailing: true,
    },
    {
      class: "pe-11",
      size: "xl",
      trailing: true,
    },
    {
      leading: true,
      loading: true,
      class: {
        leadingIcon: "animate-spin",
      },
    },
    {
      leading: false,
      loading: true,
      trailing: true,
      class: {
        trailingIcon: "animate-spin",
      },
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "outline",
    size: "md",
  },
})

export default inputTheme
