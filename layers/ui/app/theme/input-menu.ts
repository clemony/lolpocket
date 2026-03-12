import { defineUiTheme } from "./defineUiTheme"
import input from "./input"

export const footerColumnsTheme = defineUiTheme({
  slots: {
    trailing:
      "group absolute inset-y-0 end-0 flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
    trailingClear: "p-0",
    base: "",
    arrow: "fill-p0",
    content:
      "pointer-events-auto flex max-h-60 w-(--reka-combobox-trigger-width) origin-(--reka-combobox-content-transform-origin) flex-col overflow-hidden rounded-xl bg-p0/96 shadow-lg ring ring-p3 backdrop-blur-md data-[state=closed]:animate-[scale-out_100ms_ease-in] data-[state=open]:animate-[scale-in_100ms_ease-out]",
    viewport: "relative flex-1 scroll-py-1 overflow-y-auto",
    group: "isolate p-1",
    empty: "text-center text-n5",
    label: "font-semibold text-pc",
    separator: "-mx-1 my-1 h-px bg-p3/80",
    item: [
      "group relative flex w-full items-start gap-1.5 p-1.5 text-sm text-pc outline-none select-none before:absolute before:inset-px before:z-[-1] before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
    ],
    itemLeadingIcon: [
      "shrink-0 text-n4 group-data-highlighted:not-group-data-disabled:text-pc",
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
    tagsItem:
      "inline-flex items-center gap-0.5 rounded-sm bg-p1 px-1.5 py-0.5 font-medium text-pc ring ring-p3/80 ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-75",
    tagsItemText: "truncate",
    tagsItemDelete: [
      "inline-flex items-center rounded-xs text-n5 hover:bg-p2/75 hover:text-pc disabled:pointer-events-none",
    ],
    tagsItemDeleteIcon: "shrink-0",
    tagsInput:
      "flex-1 border-0 bg-transparent placeholder:text-n5 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
  },
  variants: {
    virtualize: {
      true: {
        viewport: "isolate p-1",
      },
      false: {
        viewport: "divide-y divide-p3/80",
      },
    },
    multiple: {
      true: {
        root: "flex-wrap",
      },
      false: {
        base: "w-full border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      },
    },
    ...input.variants.color,
    ...input.variants.variant,
    ...input.variants.size,
  },
  compoundVariants: [
    {
      variant: "soft",
      multiple: true,
      class: "has-focus:bg-elevated",
    },
    {
      variant: "ghost",
      multiple: true,
      class: "has-focus:bg-elevated",
    },
    {
      color: "neutral",
      multiple: true,
      variant: ["outline", "subtle"],
      class: "has-focus-visible:ring-1 has-focus-visible:ring-n0/60",
    },
    {
      variant: "outline",
      color: "default",
      class:
        "focus:outline-0 focus-visible:outline-0 has-focus-within:outline-0 has-focus-visible:ring-1! has-focus-visible:ring-n0/60 has-focus-visible:outline-0 has-focus-visible:outline-offset-0!",
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "outline",
    size: "md",
  },
})
