import button from "./button"
import { defineUiTheme } from "./defineUiTheme"

export const checkboxTheme = defineUiTheme({
  slots: {
    root: "group/x relative flex items-start **:cursor-pointer",
    container: "flex items-center",
    base: "focus-visible:focus-ring relative overflow-visible! rounded-sm ring-1 before:hidden before:rounded-md! focus-visible:outline-0",
    indicator: "flex size-full items-center justify-center rounded-[inherit]",
    icon: "size-full shrink-0 **:stroke-[2.14]",
    wrapper: "w-full",
    label: "block font-medium text-pc group-hover/x:underline",
    description: "text-n4",
  },
  variants: {
    color: {
      ...button.variants.color,
      primary: {
        base: "bg-p1 ring-p4/60 not-on:focus-visible:ring-p4/60 on:ring-neutral",
        indicator: "bg-neutral",
        icon: "text-p1! **:text-p1",
      },
      neutral: {
        base: "border-neutral bg-neutral",
        indicator: "text-nc **:text-nc",
      },
    },
    variant: {
      ...button.variants.variant,
      list: {
        root: "",
      },
      card: {
        root: "rounded-lg border border-muted",
      },
    },
    indicator: {
      start: {
        root: "flex-row",
        wrapper: "ms-2",
      },
      end: {
        root: "flex-row-reverse",
        wrapper: "me-2",
      },
      hidden: {
        base: "sr-only",
        wrapper: "text-center",
      },
    },
    size: {
      xs: {
        base: "size-3",
        container: "h-4 rounded-sm",
        wrapper: "text-xs",
      },
      sm: {
        base: "size-3.5",
        container: "h-4 rounded-sm",
        wrapper: "text-xs",
      },
      md: {
        base: "size-4",
        container: "h-5",
        wrapper: "text-sm",
      },
      lg: {
        base: "size-4.5",
        container: "h-5",
        wrapper: "text-sm",
      },
      xl: {
        base: "size-5",
        container: "h-6",
        wrapper: "text-sm",
      },
      "2xl": {
        base: "size-6",
        container: "h-7",
        icon: "size-4",
        wrapper: "text-sm",
      },
      "3xl": {
        base: "size-7",
        container: "h-8",
        icon: "size-4",
        wrapper: "text-sm",
      },
      "4xl": {
        base: "size-8",
        container: "h-9",
        icon: "size-4",
        wrapper: "text-sm",
      },
      "5xl": {
        base: "size-10",
        container: "h-11",
        icon: "size-4",
        wrapper: "text-sm",
      },
      "6xl": {
        base: "size-12",
        container: "h-13",
        icon: "size-5",
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
    ...button.compoundVariants,
    {
      color: "neutral",
      variant: "card",
      class: {
        root: "has-data-[state=checked]:border-neutral",
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
    color: "primary",
    variant: "list",
    indicator: "start",
  },
})

export default checkboxTheme
