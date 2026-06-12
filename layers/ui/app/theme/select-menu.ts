import { defuFn } from "defu"
import { defineUiTheme } from "~~/layers/ui/app/theme/defineUiTheme"
import select from "./select"

export const selectMenuTheme = defineUiTheme({
  slots: {
    base: [
      "group relative inline-flex items-center rounded-lg focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    leading: "absolute inset-y-0 start-0 flex items-center",
    leadingIcon: "shrink-0 text-n4",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    trailing: "absolute inset-y-0 end-0 flex items-center",
    trailingIcon: "shrink-0 text-n4",
    value: "pointer-events-none truncate",
    placeholder: "truncate text-n4",
    arrow: "fill-bg stroke-default",
    content: [
      "pointer-events-auto flex max-h-60 w-(--reka-select-trigger-width) origin-(--reka-select-content-transform-origin) flex-col overflow-hidden rounded-xl bg-p0/94 shadow-lg ring ring-p3/90 backdrop-blur-sm",
      "w-(--reka-combobox-trigger-width) origin-(--reka-combobox-content-transform-origin)"
    ],
    viewport: "relative flex-1 scroll-py-1 overflow-y-auto",
    group: "isolate p-1",
    empty: "text-center text-n5",
    label: "font-semibold text-pc",
    separator: "-mx-1 my-1 h-px bg-p3",
    item: [
      "group relative flex w-full items-start text-pc outline-none select-none before:absolute before:inset-px before:z-[-1] before:rounded-lg data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:not-data-disabled:text-pc data-highlighted:not-data-disabled:before:bg-p1/50",
      "transition-colors before:transition-colors"
    ],
    itemLeadingIcon: [
      "shrink-0 text-n4 group-data-highlighted:not-group-data-disabled:text-pc",
      "transition-colors"
    ],
    itemLeadingAvatar: "shrink-0",
    itemLeadingAvatarSize: "",
    itemLeadingChip: "shrink-0",
    itemLeadingChipSize: "",
    itemTrailing: "ms-auto inline-flex items-center gap-1.5",
    itemTrailingIcon: "shrink-0",
    itemWrapper: "flex min-w-0 flex-1 flex-col",
    itemLabel: "truncate",
    itemDescription: "truncate text-n5",
    input: "border-b border-p3/80",
    focusScope: "flex min-h-0 flex-col",
    trailingClear: "p-0"
  },
  variants: {
    fieldGroup: {
      horizontal:
        "not-last:not-first:rounded-none not-only:first:rounded-e-none not-only:last:rounded-s-none focus-visible:z-[1]",
      vertical:
        "not-last:not-first:rounded-none not-only:first:rounded-b-none not-only:last:rounded-t-none focus-visible:z-[1]"
    },
    size: {
      xs: {
        base: "gap-1 px-2 py-1 text-xs",
        leading: "ps-2",
        trailing: "pe-2",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
        trailingIcon: "size-4",
        label: "gap-1 p-1 text-[10px]/3",
        item: "gap-1 p-1 text-xs",
        itemLeadingIcon: "size-4",
        itemLeadingAvatarSize: "3xs",
        itemLeadingChip: "size-4",
        itemLeadingChipSize: "sm",
        itemTrailingIcon: "size-4",
        empty: "p-2 text-xs"
      },
      sm: {
        base: "gap-1.5 px-2.5 py-1.5 text-xs",
        leading: "ps-2.5",
        trailing: "pe-2.5",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
        trailingIcon: "size-4",
        label: "gap-1.5 p-1.5 text-[10px]/3",
        item: "gap-1.5 p-1.5 text-xs",
        itemLeadingIcon: "size-4",
        itemLeadingAvatarSize: "3xs",
        itemLeadingChip: "size-4",
        itemLeadingChipSize: "sm",
        itemTrailingIcon: "size-4",
        empty: "p-2.5 text-xs"
      },
      md: {
        base: "h-10 gap-1.5 px-2.5 py-1.5 text-sm",
        leading: "ps-2.5",
        trailing: "pe-2.5",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
        trailingIcon: "size-4",
        label: "gap-1.5 p-1.5 text-xs",
        item: "gap-1.5 p-1.5 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-4",
        empty: "p-2.5 text-sm",
        input: "max-h-10"
      },
      lg: {
        base: "h-12 gap-2 rounded-xl px-3 py-2 text-sm",
        leading: "ps-3",
        trailing: "pe-3",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
        trailingIcon: "size-4",

        label: "gap-1.5 p-1.5 text-xs",
        item: "gap-1.5 p-1.5 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-4",
        empty: "p-2.5 text-sm",
        input: "max-h-10"
      },
      xl: {
        base: "gap-2 px-3 py-2 text-base",
        leading: "ps-3",
        trailing: "pe-3",
        leadingIcon: "size-6",
        leadingAvatarSize: "xs",
        trailingIcon: "size-6",
        label: "gap-2 p-2 text-sm",
        item: "gap-2 p-2 text-base",
        itemLeadingIcon: "size-6",
        itemLeadingAvatarSize: "xs",
        itemLeadingChip: "size-6",
        itemLeadingChipSize: "lg",
        itemTrailingIcon: "size-6",
        empty: "p-3 text-base"
      }
    },
    variant: {
      outline:
        "bg-transparent text-pc ring ring-accented ring-inset hover:bg-p1 disabled:bg-default",
      soft: "bg-p1/50 text-pc hover:bg-p1 focus:bg-p1 disabled:bg-p1/50",
      subtle:
        "bg-p1 text-pc ring ring-accented ring-inset hover:bg-accented/75 disabled:bg-p1",
      ghost:
        "bg-transparent text-pc hover:bg-p1 focus:bg-p1 disabled:bg-transparent dark:disabled:bg-transparent",
      none: "bg-transparent text-pc"
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
      info: "",
      warning: "",
      error: "",
      neutral: ""
    },
    leading: {
      true: ""
    },
    trailing: {
      true: ""
    },
    loading: {
      true: ""
    },
    highlight: {
      true: ""
    },
    fixed: {
      false: ""
    },
    type: {
      file: "file:me-1.5 file:font-medium file:text-n5 file:outline-none"
    },
    position: {
      popper: {
        content:
          "data-[state=closed]:animate-[scale-out_100ms_ease-in] data-[state=open]:animate-[scale-in_100ms_ease-out]"
      },
      "item-aligned": {
        content: ""
      }
    },
    virtualize: {
      true: {
        viewport: "isolate p-1"
      },
      false: {
        viewport: "divide-y divide-default"
      }
    }
  },
  compoundVariants: [
    {
      color: "primary",
      variant: ["outline", "subtle"],
      class:
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
    },
    {
      color: "primary",
      highlight: true,
      class: "ring ring-primary ring-inset"
    },
    {
      color: "neutral",
      variant: ["outline", "subtle"],
      class:
        "focus-visible:ring-2 focus-visible:ring-inverted focus-visible:ring-inset"
    },
    {
      color: "neutral",
      highlight: true,
      class: "ring ring-inverted ring-inset"
    },
    {
      leading: true,
      size: "xs",
      class: "ps-7"
    },
    {
      leading: true,
      size: "sm",
      class: "ps-8"
    },
    {
      leading: true,
      size: "md",
      class: "ps-9"
    },
    {
      leading: true,
      size: "lg",
      class: "ps-10"
    },
    {
      leading: true,
      size: "xl",
      class: "ps-11"
    },
    {
      trailing: true,
      size: "xs",
      class: "pe-7"
    },
    {
      trailing: true,
      size: "sm",
      class: "pe-8"
    },
    {
      trailing: true,
      size: "md",
      class: "pe-9"
    },
    {
      trailing: true,
      size: "lg",
      class: "pe-10"
    },
    {
      trailing: true,
      size: "xl",
      class: "pe-11"
    },
    {
      loading: true,
      leading: true,
      class: {
        leadingIcon: "animate-spin"
      }
    },
    {
      loading: true,
      leading: false,
      trailing: true,
      class: {
        trailingIcon: "animate-spin"
      }
    },
    {
      fixed: false,
      size: "xs",
      class: "md:text-xs"
    },
    {
      fixed: false,
      size: "sm",
      class: "md:text-xs"
    },
    {
      fixed: false,
      size: "md",
      class: "md:text-sm"
    },
    {
      fixed: false,
      size: "lg",
      class: "md:text-sm"
    }
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "outline",
    position: "popper"
  }
})

export default selectMenuTheme
