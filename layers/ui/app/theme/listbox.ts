import { defineUiTheme } from "~~/layers/ui/app/theme/defineUiTheme"

export const listboxTheme = defineUiTheme({
  slots: {
    root: "group/listbox flex min-h-0 min-w-0 flex-col overflow-hidden rounded-xl ring ring-default ring-inset",
    input: "border-b border-border",
    content:
      "relative max-h-60 flex-1 scroll-py-1 overflow-y-auto focus:outline-none",
    group: "isolate p-1",
    label: "font-semibold text-pc",
    separator: "-mx-1 my-1 h-px bg-border",
    empty: "text-center text-n5",
    loading: "flex items-center justify-center text-n5",
    loadingIcon: "shrink-0 animate-spin",
    item: [
      "group relative flex w-full items-start text-pc outline-none select-none before:absolute before:inset-px before:z-[-1] before:rounded-lg data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-p1/50"
    ],
    itemLeadingIcon: [
      "shrink-0 text-n3 group-data-highlighted:not-group-data-disabled:text-pc"
    ],
    itemLeadingAvatar: "shrink-0",
    itemLeadingAvatarSize: "",
    itemLeadingChip: "shrink-0",
    itemLeadingChipSize: "",
    itemWrapper: "flex min-w-0 flex-1 flex-col",
    itemLabel: "truncate",
    itemDescription: "truncate text-n5",
    itemTrailing: "ms-auto inline-flex items-center gap-1.5",
    itemTrailingIcon: "shrink-0"
  },
  variants: {
    size: {
      xs: {
        label: "gap-1 p-1 text-[10px]/3",
        empty: "py-3 text-xs",
        loading: "py-3",
        loadingIcon: "size-4",
        item: "gap-1 p-1 text-xs",
        itemLeadingIcon: "size-4",
        itemLeadingAvatarSize: "3xs",
        itemLeadingChip: "size-4",
        itemLeadingChipSize: "sm",
        itemTrailingIcon: "size-4"
      },
      sm: {
        label: "gap-1.5 p-1.5 text-[10px]/3",
        empty: "py-4 text-xs",
        loading: "py-4",
        loadingIcon: "size-4",
        item: "gap-1.5 p-1.5 text-xs",
        itemLeadingIcon: "size-4",
        itemLeadingAvatarSize: "3xs",
        itemLeadingChip: "size-4",
        itemLeadingChipSize: "sm",
        itemTrailingIcon: "size-4"
      },
      md: {
        label: "gap-1.5 p-1.5 text-xs",
        empty: "py-6 text-sm",
        loading: "py-6",
        loadingIcon: "size-5",
        item: "gap-1.5 p-1.5 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-5"
      },
      lg: {
        label: "gap-2 p-2 text-xs",
        empty: "py-7 text-sm",
        loading: "py-7",
        loadingIcon: "size-5",
        item: "gap-2 p-2 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemTrailingIcon: "size-5"
      },
      xl: {
        label: "gap-2 p-2 text-sm",
        empty: "py-8 text-base",
        loading: "py-8",
        loadingIcon: "size-6",
        item: "gap-2 p-2 text-base",
        itemLeadingIcon: "size-6",
        itemLeadingAvatarSize: "xs",
        itemLeadingChip: "size-6",
        itemLeadingChipSize: "lg",
        itemTrailingIcon: "size-6",
        itemDescription: "text-sm"
      }
    },
    variant: {
      menu: {
        root: "border-l border-l-p3 before:absolute"
      }
    },
    virtualize: {
      true: {
        content: "isolate p-1"
      },
      false: {
        content: "divide-y divide-default"
      }
    },
    disabled: {
      true: {
        root: "cursor-not-allowed opacity-75"
      }
    },
    highlight: {
      true: ""
    }
  },

  defaultVariants: {
    size: "md"
  }
})

export default listboxTheme
