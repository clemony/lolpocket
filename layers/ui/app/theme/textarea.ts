import { defineUiTheme } from "./defineUiTheme"

export const textareaTheme = defineUiTheme({
  slots: {
    root: "relative inline-flex items-center",
    base: [
      "w-full appearance-none rounded-md border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors",
    ],
    leading: "absolute start-0 flex items-start",
    leadingIcon: "shrink-0 text-dimmed",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    trailing: "absolute end-0 flex items-start",
    trailingIcon: "shrink-0 text-dimmed",
  },
  variants: {
    fieldGroup: {
      horizontal: {
        root: "group has-focus-visible:z-[1]",
        base: "group-not-last:group-not-first:rounded-none group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none",
      },
      vertical: {
        root: "group has-focus-visible:z-[1]",
        base: "group-not-last:group-not-first:rounded-none group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none",
      },
    },
    size: {
      xs: {
        base: "gap-1 px-2 py-1 text-xs",
        leading: "inset-y-1 ps-2",
        trailing: "inset-y-1 pe-2",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
        trailingIcon: "size-4",
      },
      sm: {
        base: "gap-1.5 px-2.5 py-1.5 text-xs",
        leading: "inset-y-1.5 ps-2.5",
        trailing: "inset-y-1.5 pe-2.5",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
        trailingIcon: "size-4",
      },
      md: {
        base: "gap-1.5 px-2.5 py-1.5 text-sm",
        leading: "inset-y-1.5 ps-2.5",
        trailing: "inset-y-1.5 pe-2.5",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
        trailingIcon: "size-5",
      },
      lg: {
        base: "gap-2 px-3 py-2 text-sm",
        leading: "inset-y-2 ps-3",
        trailing: "inset-y-2 pe-3",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
        trailingIcon: "size-5",
      },
      xl: {
        base: "gap-2 px-3 py-2 text-base",
        leading: "inset-y-2 ps-3",
        trailing: "inset-y-2 pe-3",
        leadingIcon: "size-6",
        leadingAvatarSize: "xs",
        trailingIcon: "size-6",
      },
    },
    variant: {
      outline: "bg-default text-highlighted ring ring-accented ring-inset",
      soft: "bg-elevated/50 text-highlighted hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      subtle: "bg-elevated text-highlighted ring ring-accented ring-inset",
      ghost:
        "bg-transparent text-highlighted hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      none: "bg-transparent text-highlighted",
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
      info: "",
      warning: "",
      error: "",
      neutral: "",
    },
    leading: {
      true: "",
    },
    trailing: {
      true: "",
    },
    loading: {
      true: "",
    },
    highlight: {
      true: "",
    },
    type: {
      file: "file:me-1.5 file:font-medium file:text-muted file:outline-none",
    },
    autoresize: {
      true: {
        base: "resize-none",
      },
    },
  },
  compoundVariants: [
    {
      color: "primary",
      variant: ["outline", "subtle"],
      class:
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
    },
    {
      color: "primary",
      highlight: true,
      class: "ring ring-primary ring-inset",
    },
    {
      color: "neutral",
      variant: ["outline", "subtle"],
      class:
        "focus-visible:ring-2 focus-visible:ring-inverted focus-visible:ring-inset",
    },
    {
      color: "neutral",
      highlight: true,
      class: "ring ring-inverted ring-inset",
    },
    {
      leading: true,
      size: "xs",
      class: "ps-7",
    },
    {
      leading: true,
      size: "sm",
      class: "ps-8",
    },
    {
      leading: true,
      size: "md",
      class: "ps-9",
    },
    {
      leading: true,
      size: "lg",
      class: "ps-10",
    },
    {
      leading: true,
      size: "xl",
      class: "ps-11",
    },
    {
      trailing: true,
      size: "xs",
      class: "pe-7",
    },
    {
      trailing: true,
      size: "sm",
      class: "pe-8",
    },
    {
      trailing: true,
      size: "md",
      class: "pe-9",
    },
    {
      trailing: true,
      size: "lg",
      class: "pe-10",
    },
    {
      trailing: true,
      size: "xl",
      class: "pe-11",
    },
    {
      loading: true,
      leading: true,
      class: {
        leadingIcon: "animate-spin",
      },
    },
    {
      loading: true,
      leading: false,
      trailing: true,
      class: {
        trailingIcon: "animate-spin",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "outline",
  },
})

export default textareaTheme
