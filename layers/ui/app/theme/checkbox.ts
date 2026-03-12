import { defineUiTheme } from "./defineUiTheme"

export const checkboxTheme = defineUiTheme({
  slots: {
    root: "group/x relative flex items-start **:cursor-pointer",
    container:
      "focus-visible:focus-ring flex items-center before:hidden before:rounded-md!",
    base: "relative overflow-hidden rounded-sm ring-1 focus-visible:outline-0",
    indicator: "flex size-full items-center justify-center rounded-[inherit]",
    icon: "size-full shrink-0 **:stroke-[2.14]",
    wrapper: "w-full",
    label: "block font-medium text-pc group-hover/x:underline",
    description: "text-n4",
  },
  variants: {
    color: {
      ghost: {
        base: "bg-transparent",
      },
      default: {
        base: "bg-p1 ring-p4/60 not-on:focus-visible:ring-p4/60 on:ring-neutral",
        indicator: "bg-neutral",
        icon: "text-p1! **:text-p1",
      },
      neutral: {
        base: "bg-transparent group-checked/x:text-nc",
        label: "z-2 group-checked/x:text-nc",
        indicator: "bg-neutral",
        wrapper:
          "group-checked/x:**:text-nc group-checked/x:hover:no-underline",
        icon: "text-p1! **:text-p1",
      },
    },
    variant: {
      list: {
        root: "",
      },
      card: {
        root: "rounded-lg border border-muted",
      },
      select: {},
      ghost: {},
    },
    indicator: {
      start: {
        root: "flex-row",
        wrapper: "ms-2",
        base: "rounded-sm",
      },
      end: {
        root: "flex-row-reverse",
        wrapper: "me-2",
        base: "rounded-sm",
      },
      hidden: {
        base: "sr-only",
        wrapper: "text-center",
        indicator: "hidden",
      },
    },
    size: {
      xs: {
        base: "size-3 rounded-sm",
        container: "h-4 rounded-sm",
        wrapper: "text-xs",
      },
      sm: {
        base: "size-3.5 rounded-sm",
        container: "h-4 rounded-sm",
        wrapper: "text-xs",
      },
      md: {
        base: "size-4 rounded-sm",
        container: "h-5 rounded-sm",
        wrapper: "text-sm",
      },
      lg: {
        base: "size-4.5",
        container: "rounded-m h-5",
        wrapper: "text-sm",
      },
      xl: {
        base: "size-5",
        container: "h-6",
        wrapper: "text-sm",
      },
    },
    required: {
      true: {
        label: "after:ms-0.5 after:text-error after:content-['*']",
      },
    },
    disabled: {
      true: {
        root: "opacity-75",
        base: "cursor-not-allowed",
        label: "cursor-not-allowed",
        description: "cursor-not-allowed",
      },
    },
    checked: {
      true: "",
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "card",
      class: {
        root: "has-data-[state=checked]:border-neutral",
      },
    },
    {
      color: "neutral",
      variant: "select",
      class: {
        base: "ring-0!",
      },
    },
    {
      color: "default",
      variant: "select",
      class: {
        base: "border-0 bg-transparent! ring-0! ring-transparent! not-on:ring-0! on:ring-0!",
        indicator: "bg-transparent!",
        icon: "text-pc **:text-pc",
      },
    },
    {
      variant: "card",
      disabled: true,
      class: {
        root: "cursor-not-allowed",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    color: "default",
    variant: "list",
    indicator: "start",
  },
})

export default checkboxTheme
