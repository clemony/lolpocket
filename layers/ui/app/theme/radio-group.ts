import { defineUiTheme } from "./defineUiTheme"

export const radioGroupTheme = defineUiTheme({
  slots: {
    root: "relative",
    fieldset: "flex gap-x-2",
    legend: "mb-1 block font-medium text-default",
    item: "flex items-start",
    container: "flex items-center",
    base: "overflow-hidden rounded-full ring ring-accented ring-inset focus-visible:outline-2 focus-visible:outline-offset-2",
    indicator:
      "flex size-full items-center justify-center after:rounded-full after:bg-default",
    wrapper: "w-full",
    label: "block font-medium text-default",
    description: "text-muted",
  },
  variants: {
    color: {
      p0: {
        base: "focus-visible:outline-p3",
        indicator: "bg-p0",
      },
      neutral: {
        base: "focus-visible:outline-inverted",
        indicator: "bg-inverted",
      },
    },
    variant: {
      list: {
        item: "",
      },
      card: {
        item: "rounded-lg border border-muted",
      },
      table: {
        item: "border border-muted",
      },
    },
    orientation: {
      horizontal: {
        fieldset: "flex-row",
      },
      vertical: {
        fieldset: "flex-col",
      },
    },
    indicator: {
      start: {
        item: "flex-row",
        wrapper: "ms-2",
      },
      end: {
        item: "flex-row-reverse",
        wrapper: "me-2",
      },
      hidden: {
        base: "sr-only",
        wrapper: "text-center",
      },
    },
    size: {
      xs: {
        fieldset: "gap-y-0.5",
        legend: "text-xs",
        base: "size-3",
        item: "text-xs",
        container: "h-4",
        indicator: "after:size-1",
      },
      sm: {
        fieldset: "gap-y-0.5",
        legend: "text-xs",
        base: "size-3.5",
        item: "text-xs",
        container: "h-4",
        indicator: "after:size-1",
      },
      md: {
        fieldset: "gap-y-1",
        legend: "text-sm",
        base: "size-4",
        item: "text-sm",
        container: "h-5",
        indicator: "after:size-1.5",
      },
      lg: {
        fieldset: "gap-y-1",
        legend: "text-sm",
        base: "size-4.5",
        item: "text-sm",
        container: "h-5",
        indicator: "after:size-1.5",
      },
      xl: {
        fieldset: "gap-y-1.5",
        legend: "text-base",
        base: "size-5",
        item: "text-base",
        container: "h-6",
        indicator: "after:size-2",
      },
    },
    disabled: {
      true: {
        item: "opacity-75",
        base: "cursor-not-allowed",
        label: "cursor-not-allowed",
        description: "cursor-not-allowed",
      },
    },
    required: {
      true: {
        legend: "after:ms-0.5 after:text-error after:content-['*']",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "list",
    orientation: "vertical",
    indicator: "start",
  },
})

export default radioGroupTheme
