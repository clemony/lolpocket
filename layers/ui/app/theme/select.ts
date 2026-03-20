import { defineUiTheme } from "./defineUiTheme"

export const selectTheme = defineUiTheme({
  slots: {
    root: "",
    base: "group on:focus-ring relative inline-flex cursor-pointer items-center rounded-lg duration-0 focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 **:trail-icon:size-4.5 **:trail-icon:opacity-70 on:**:trail-icon:opacity-100",
    value: "pointer-events-none truncate",
    placeholder: "truncate text-n5",
    arrow: "fill-p0 text-p0",
    content:
      "pointer-events-auto flex max-h-60 w-(--reka-select-trigger-width) origin-(--reka-select-content-transform-origin) flex-col overflow-hidden rounded-lg bg-p0/94 shadow-lg ring ring-p3/60 backdrop-blur-md",
    viewport: "relative flex-1 scroll-py-1 divide-y divide-p3 overflow-y-auto",
    group: "isolate p-1",
    empty: "text-center text-n5",
    label: "font-semibold text-pc",
    separator: "-mx-1 my-1 h-px bg-p3",
    item: "group relative flex w-full items-start text-pc outline-none select-none before:absolute before:inset-px before:z-[-1] before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:not-data-disabled:text-pc data-highlighted:not-data-disabled:before:bg-p3/80",
    itemLeadingIcon:
      "shrink-0 text-n5 group-data-highlighted:not-group-data-disabled:text-pc",
    itemLeadingAvatar: "shrink-0",
    itemLeadingAvatarSize: "",
    itemLeadingChip: "shrink-0",
    itemLeadingChipSize: "",
    itemTrailing: "ms-auto inline-flex items-center gap-1.5",
    itemTrailingIcon: "size-4 shrink-0",
    itemWrapper: "flex min-w-0 flex-1 flex-col",
    itemLabel: "truncate",
    itemDescription: "truncate text-n5"
  },
  variants: {
    size: {
      xs: {
        base: "h-7 rounded-md",
        label: "gap-1 p-1 text-[10px]/3",
        item: "gap-1 px-2 py-1 text-xs",
        itemLeadingIcon: "size-4",
        itemLeadingAvatarSize: "3xs",
        itemLeadingChip: "size-4",
        itemLeadingChipSize: "sm",
        itemTrailingIcon: "size-4",
        empty: "p-1 text-xs"
      },
      sm: {
        base: "h-8 rounded-md",
        label: "gap-1.5 p-1.5 text-[10px]/3",
        item: "gap-1.5 p-1.5 text-xs",
        itemLeadingIcon: "size-4",
        itemLeadingAvatarSize: "3xs",
        itemLeadingChip: "size-4",
        itemLeadingChipSize: "sm",
        itemTrailingIcon: "size-4",
        empty: "p-1.5 text-xs"
      },
      md: {
        base: "h-10",
        label: "gap-1.5 p-1.5 text-xs",
        item: "gap-1.5 p-1.5 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-5",
        empty: "p-1.5 text-sm"
      },
      lg: {
        base: "h-12",
        label: "gap-2 p-2 text-xs",
        item: "gap-2 p-2 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-5",
        empty: "p-2 text-sm"
      },
      xl: {
        base: "h-14",
        label: "gap-2 p-2 text-sm",
        item: "gap-2 p-2 text-base",
        itemLeadingIcon: "size-6",
        itemLeadingAvatarSize: "xs",
        itemLeadingChip: "size-6",
        itemLeadingChipSize: "lg",
        itemTrailingIcon: "size-6",
        empty: "p-2 text-base"
      }
    },
    variant: {
      ghost:
        "bg-transparent text-pc hover:bg-p1 focus:bg-p1 disabled:bg-transparent dark:disabled:bg-transparent",
      none: "bg-transparent text-pc shadow-none ring-0 inset-shadow-none focus-visible:ring-0 on:ring-0",
      outline:
        "border border-p3 bg-p0 text-pc inset-shadow-xs ring-transparent",
      soft: "bg-p1/50 text-pc hover:bg-p1 focus:bg-p1 disabled:bg-p1/50",
      subtle: "border border-p3/60 bg-p1 text-pc ring-0",
      "ghost-outline":
        "bg-transparent text-pc disabled:bg-transparent dark:disabled:bg-transparent"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
})

export default selectTheme
