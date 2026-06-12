import type { DropdownMenuItem, DropdownMenuSlots } from "@nuxt/ui"
import { defineUiTheme } from "./defineUiTheme"
import { dropdownMenuTheme } from "./dropdown-menu"
import { inputTheme } from "./input"

const inputRoot = inputTheme.slots.root
const inputBase = inputTheme.slots.base

export const inputMenuTheme = defineUiTheme({
  slots: {
    root: inputRoot,
    trailing:
      "absolute inset-y-0 end-0 flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
    trailingClear: "p-0",
    base: "",
    arrow: "fill-p0",
    content:
      "pointer-events-auto z-[120] flex max-h-60 w-(--reka-combobox-trigger-width) origin-(--reka-combobox-content-transform-origin) flex-col overflow-hidden rounded-xl bg-p0/90 shadow-lg ring shadow-black/8 ring-p3 drop-shadow-none backdrop-blur-sm data-[state=closed]:animate-[scale-out_100ms_ease-in] data-[state=open]:animate-[scale-in_100ms_ease-out]",
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
      "inline-flex items-center gap-1 rounded-md bg-p1 px-1.5 py-0.5 font-medium text-pc ring-0 inset-ring inset-ring-p3/60 data-disabled:cursor-not-allowed data-disabled:opacity-75",
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
        base: [
          inputBase,
          "w-full border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
        ],
      },
    },
    color: {
      base: "",
      neutral: "",
      primary: "",
      transparent: "",
    },
    variant: {
      ghost:
        "bg-transparent text-pc hover:bg-p1 focus:bg-p1 disabled:bg-transparent dark:disabled:bg-transparent",
      none: "bg-transparent text-pc",
      outline:
        "bg-transparent ring inset-shadow-xs delay-0 focus-visible:shadow-xs focus-visible:ring-offset-0",

      solid:
        "fx-depth fx-noise bg-p1 text-pc inset-ring inset-ring-p2 hover:bg-p2 focus:bg-p2 disabled:bg-p1/50",
      soft: "",
      subtle: "bg-p1 text-pc ring ring-p3 ring-inset",
      "ghost-outline":
        "bg-transparent text-pc ring ring-transparent hover:ring-pc/50 hover:ring-inset focus:bg-p2 disabled:bg-transparent dark:disabled:bg-transparent",
    },
    size: {
      xs: {
        base: "gap-1 px-2 py-1 text-sm/4",
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
        tagsItem: "text-[10px]/3",
        tagsItemDeleteIcon: "size-3",
        empty: "p-2 text-xs",
      },
      sm: {
        base: "gap-1.5 px-2.5 py-1.5 text-sm/4",
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
        tagsItem: "text-[10px]/3",
        tagsItemDeleteIcon: "size-3",
        empty: "p-2.5 text-xs",
      },
      md: {
        base: "flex h-10 items-center gap-1.5 px-2.5 py-0 text-sm *:flex *:h-full *:items-center",
        leading: "ps-2.5",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-4.5",
        trailing: "pe-2",
        trailingIcon: "size-5",
        label: "gap-1.5 p-1.5 text-xs",
        item: "gap-1.5 p-1.5 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-5",
        tagsItem: "text-xs",
        tagsItemDeleteIcon: "size-3.5",
        empty: "p-2.5 text-sm",
      },
      lg: {
        base: "h-12 gap-2 rounded-xl px-3 py-0 text-sm",
        leading: "ps-3",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-4.5",
        trailing: "pe-3",
        trailingIcon: "size-5",
        label: "gap-2 p-2 text-xs",
        item: "align-center inline-flex h-10 items-center gap-2 p-2 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-5",
        tagsItem: "text-xs",
        tagsItemDeleteIcon: "size-3.5",
        empty: "p-3 text-sm",
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
        tagsItem: "text-sm",
        tagsItemDeleteIcon: "size-4",
        empty: "p-3 text-base",
      },
    },
  },
  compoundVariants: [
    {
      variant: "soft",
      multiple: true,
      class: { base: "has-focus:bg-elevated" },
    },

    {
      color: "base",
      variant: ["outline", "solid"],
      class: {
        base: "text-pc ring-p3/80 hover:bg-transparent hover:ring-pc/70 focus-visible:bg-transparent focus-visible:ring-1 focus-visible:inset-shadow-sm focus-visible:ring-pc/70 focus-visible:ring-offset-p3 disabled:bg-p1/40",
      },
    },
    {
      color: "base",
      variant: "ghost",
      class: {
        base: "bg-transparent! hover:bg-transparent! focus-visible:bg-transparent! disabled:bg-transparent!",
      },
      highlight: true,
    },
    {
      color: "neutral",
      variant: ["outline", "subtle"],
      class: {
        base: "focus-visible:ring focus-visible:ring-nc focus-visible:ring-inset",
      },
    },
    {
      color: "neutral",
      class: { base: "ring ring-nc ring-inset" },
      highlight: true,
    },
    {
      color: "neutral",
      variant: "soft",
      class: {
        base: "bg-n2 text-nc ring ring-n5 ring-inset placeholder:text-nc/70 hover:bg-n2/90 focus:bg-n2 disabled:bg-neutral/86 *:first:[&_svg]:text-nc",
        leadingIcon: "text-nc/40",

        trailingIcon: "text-nc/40",
      },
    },
  ],
  defaultVariants: {
    color: "base",
    variant: "outline",
    size: "md",
  },
})

export default inputMenuTheme
