import { defineUiTheme } from "./defineUiTheme"

export const selectTheme = defineUiTheme({
  slots: {
    root: "",
    base: "group/select relative inline-flex w-full cursor-pointer items-center justify-start rounded-lg font-medium duration-0 hover:inset-ring focus:ring-0! focus:inset-ring focus-visible:inset-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-75",
    value: "pointer-events-none w-full truncate text-start capitalize",
    placeholder: "truncate text-n5",
    leading: "[&>svg]:translate-x-0.5 [&>svg]:-translate-y-px",
    trailing:
      "opacity-70 group-hover/select:opacity-100 group-active/select:opacity-100 [&>svg]:size-4 [&>svg]:align-icon [&>svg]:**:stroke-[2.4]",
    arrow: "fill-p0 text-p0",
    content:
      "pointer-events-auto z-[120] flex max-h-60 w-(--reka-select-trigger-width) origin-(--reka-select-content-transform-origin) flex-col overflow-hidden rounded-xl bg-p0/90 p-0 shadow-lg ring shadow-black/8 ring-p3/60 drop-shadow-none backdrop-blur-sm",
    viewport:
      "relative flex-1 scroll-py-1 divide-y divide-p3 overflow-y-auto bg-transparent p-0",
    group: "isolate px-0.5 py-1",
    empty: "text-center text-n5",
    label: "font-semibold text-pc",
    separator: "-mx-1 my-1 h-px bg-p3",
    item: "group relative flex w-full items-start text-n5 outline-none select-none before:absolute before:inset-px before:z-[-1] before:rounded-md checked:text-pc hover:text-pc data-disabled:cursor-not-allowed data-disabled:opacity-35 data-highlighted:not-data-disabled:text-pc data-highlighted:not-data-disabled:before:bg-p3/80",
    itemLeadingIcon:
      "shrink-0 align-icon text-n3 group-data-highlighted:not-group-data-disabled:text-pc",
    itemLeadingAvatar: "shrink-0",
    itemLeadingAvatarSize: "",
    itemLeadingChip: "shrink-0",
    itemLeadingChipSize: "",
    itemTrailing: "ms-auto inline-flex items-center gap-1.5",
    itemTrailingIcon: "size-4 shrink-0 align-icon **:stroke-[2.4]",
    itemWrapper: "flex min-w-0 flex-1 flex-col",
    itemLabel: "truncate font-medium capitalize",
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
        base: "h-8 rounded-md px-2",
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
        base: "h-10 rounded-lg",
        label: "gap-1.5 p-1.5 text-xs",
        leading: "[&>svg]:size-4.5 [&>svg]:**:stroke-[2.4]",
        item: "min-h-10 items-center gap-1.5 rounded-lg px-2 text-sm",
        itemLeadingIcon: "size-4.5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-4",
        empty: "p-1.5 text-sm"
      },
      lg: {
        base: "h-12",
        label: "gap-2 p-2 text-xs",
        item: "min-h-12 items-center gap-2 rounded-lg p-2 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-4",
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
        itemTrailingIcon: "size-4",
        empty: "p-2 text-base"
      }
    },
    variant: {
      ghost:
        "bg-transparent text-pc hover:bg-transparent hover:inset-shadow-xs hover:inset-shadow-pc/30 hover:inset-ring-pc/60 focus:inset-shadow-xs focus:inset-ring-pc/60",
      none: "bg-transparent text-pc shadow-none ring-0 inset-shadow-none focus-visible:ring-0 on:ring-0",
      outline:
        "bg-transparent text-pc inset-shadow-xs inset-ring inset-ring-p3 hover:bg-transparent hover:inset-shadow-pc/30 hover:inset-ring-pc/60 focus:inset-ring-pc/60",
      solid:
        "fx-depth fx-noise bg-p1 text-pc inset-ring inset-ring-p2 hover:bg-p2 focus:bg-p2 disabled:bg-p1/50",
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
