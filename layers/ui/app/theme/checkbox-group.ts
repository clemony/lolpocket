import { defineUiTheme } from "./defineUiTheme"

export const checkboxGroupTheme = defineUiTheme({
  slots: {
    root: "relative",
    fieldset: "slot-fieldset flex gap-x-2",
    legend: "mb-1 block font-semibold text-n5",
    item: "slot-item cursor-pointer",
  },
  variants: {
    orientation: {
      horizontal: {
        fieldset: "flex-row",
      },
      vertical: {
        fieldset: "flex-col",
      },
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      info: {},
      warning: {},
      error: {},
      neutral: {},
    },
    variant: {
      list: {},
      select: {
        item: "rounded-md",
      },
      card: {},
      table: {
        item: "border border-muted",
      },
    },
    size: {
      xs: {
        fieldset: "gap-y-0.5",
        legend: "text-xs",
      },
      sm: {
        fieldset: "gap-y-0.5",
        legend: "text-xs",
      },
      md: {
        fieldset: "gap-y-1",
        legend: "text-sm",
      },
      lg: {
        fieldset: "gap-y-1",
        legend: "text-sm",
      },
      xl: {
        fieldset: "gap-y-1.5",
        legend: "text-base",
      },
    },
    required: {
      true: {
        legend: "after:ms-0.5 after:text-error after:content-['*']",
      },
    },
    disabled: {
      true: {},
    },
  },
  compoundVariants: [
    /* SELECT */
    {
      size: "md",
      variant: "select",
      class: {
        item: "rounded-lg px-3 py-1.5",
        legend: "px-1",
      },
    },
    {
      size: "lg",
      variant: "select",
      class: {
        item: "p-1",
        legend: "px-1",
        base: "rounded-sm",
      },
    },
    {
      color: "primary",
      variant: "select",
      class: {
        item: "hover:noise has-data-[state=checked]:hover:noise hover:bg-p3 has-data-[state=checked]:z-[1] has-data-[state=checked]:bg-p2",
      },
    },
    {
      color: "neutral",
      variant: "select",
      class: {
        item: "hover:noise has-data-[state=checked]:noise hover:bg-p2/80 has-data-[state=checked]:z-[1] has-data-[state=checked]:bg-neutral has-data-[state=checked]:shadow-sm has-data-[state=checked]:drop-shadow-xs has-data-[state=checked]:**:text-nc has-data-[state=checked]:hover:bg-n2",
      },
    },
    /* TABLE */
    {
      size: "xs",
      variant: "table",
      class: {
        item: "p-2.5",
      },
    },
    {
      size: "sm",
      variant: "table",
      class: {
        item: "p-3",
      },
    },
    {
      size: "md",
      variant: "table",
      class: {
        item: "p-3.5",
      },
    },
    {
      size: "lg",
      variant: "table",
      class: {
        item: "p-4",
      },
    },
    {
      size: "xl",
      variant: "table",
      class: {
        item: "p-4.5",
      },
    },
    {
      orientation: "horizontal",
      variant: "table",
      class: {
        item: "first-of-type:rounded-s-lg last-of-type:rounded-e-lg",
        fieldset: "gap-0 -space-x-px",
      },
    },
    {
      orientation: "vertical",
      variant: "table",
      class: {
        item: "first-of-type:rounded-t-lg last-of-type:rounded-b-lg",
        fieldset: "gap-0 -space-y-px",
      },
    },
    {
      color: "primary",
      variant: "table",
      class: {
        item: "has-data-[state=checked]:z-[1] has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/10",
      },
    },
    {
      color: "neutral",
      variant: "table",
      class: {
        item: "has-data-[state=checked]:z-[1] has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:bg-elevated",
      },
    },
    {
      variant: ["table", "select"],
      disabled: true,
      class: {
        item: "cursor-not-allowed",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "list",
    color: "primary",
  },
})

export default checkboxGroupTheme
