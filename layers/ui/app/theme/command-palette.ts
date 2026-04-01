import { defineUiTheme } from "./defineUiTheme"

export const commandPaletteTheme = defineUiTheme({
  slots: {
    back: "",
    close: "",
    content: "relative flex w-full max-w-full flex-col",
    empty: "grid h-max w-full max-w-full items-start overflow-y-auto p-0!",
    footer: "p-1",
    group: "isolate",
    input: "shrink",
    item: "group group/item hover:noise relative inline-flex h-9 w-full cursor-pointer items-center gap-2 rounded-lg border border-transparent outline-none select-none before:absolute before:inset-px before:z-[-1] before:rounded-md hover:border-p3/60 hover:bg-p1 data-disabled:cursor-not-allowed data-disabled:opacity-75",
    itemDescription: "truncate text-n5",
    itemLabel: "space-x-1 truncate text-pc capitalize",
    itemLabelBase:
      "font-medium text-pc capitalize [&>mark]:bg-n0 [&>mark]:text-nc",
    itemLabelPrefix: "text-xs text-n5",
    itemLabelSuffix: "text-n4 [&>mark]:bg-n0 [&>mark]:text-nc",
    itemLeadingAvatar: "shrink-0",
    itemLeadingAvatarSize: "sm",
    itemLeadingChip: "shrink-0",
    itemLeadingChipSize: "",
    itemLeadingIcon: "shrink-0",
    itemTrailing: "ms-auto inline-flex items-center",
    itemTrailingIcon: "shrink-0",
    itemTrailingKbds: "hidden shrink-0 items-center lg:inline-flex",
    itemTrailingKbdsSize: "",
    itemTrailingpcIcon:
      "hidden shrink-0 text-n5/60 group-data-highlighted:inline-flex",
    itemWrapper: "flex min-w-0 flex-1 flex-col px-1 text-start",
    label:
      "z-0 mb-2 translate-x-8 text-start align-bottom font-semibold text-pc after:absolute after:-bottom-0.5 after:-left-7 after:h-px after:w-[98.5%] after:bg-p3",
    root: "flex min-h-0 min-w-0 flex-col divide-y divide-p3/80",
    viewport:
      "relative h-max w-full flex-1 scroll-py-1 overflow-y-auto p-0 focus:outline-none"
  },
  variants: {
    active: {
      false: {
        item: [
          "text-pc duration-0! data-highlighted:not-data-disabled:text-pc data-highlighted:not-data-disabled:before:bg-transparent"
        ],
        itemLeadingIcon: [
          "text-pc group-data-highlighted:not-group-data-disabled:text-pc"
        ]
      },
      true: {
        item: "text-pc before:bg-transparent",
        itemLeadingIcon: "text-pc"
      }
    },
    loading: {
      true: {
        itemLeadingIcon: "animate-spin"
      }
    },
    size: {
      xs: {
        empty: "py-3 text-xs",
        input: "[&>input]:h-10",
        item: "gap-1 p-1 text-xs",
        itemLeadingAvatarSize: "3xs",
        itemLeadingChip: "size-4",
        itemLeadingChipSize: "sm",
        itemLeadingIcon: "size-4",
        itemTrailing: "gap-1",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
        itemTrailingpcIcon: "size-4",
        label: "gap-1 p-1 text-[10px]/3"
      },
      sm: {
        empty: "py-4 text-xs",
        input: "[&>input]:h-11",
        item: "gap-1.5 p-1.5 text-xs",
        itemLeadingAvatarSize: "3xs",
        itemLeadingChip: "size-4",
        itemLeadingChipSize: "sm",
        itemLeadingIcon: "size-4",
        itemTrailing: "gap-1.5",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
        itemTrailingpcIcon: "size-4",
        label: "gap-1.5 p-1.5 text-[10px]/3"
      },
      md: {
        empty: "py-6 text-sm",
        input: "[&_svg]:text-unset [&_svg]:size-4! [&>input]:h-12",
        item: "gap-1.5 p-1.5 text-sm",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemLeadingIcon: "size-4",
        itemTrailing: "gap-1.5",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "md",
        itemTrailingpcIcon: "size-5",
        label: "gap-1.5 px-1.5 pt-2 pb-1 text-xs",
        root: "[&_svg]:text-unset!"
      },
      lg: {
        empty: "pt-4 pb-2 text-sm",
        input: "inline-flex items-center py-0 [&>input]:h-12",
        item: "gap-2 px-3 py-2 text-sm",
        itemLeadingAvatarSize: "2xs",
        itemLeadingChip: "size-5",
        itemLeadingChipSize: "md",
        itemLeadingIcon: "size-4.5",
        itemTrailing: "gap-2",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "md",
        itemTrailingpcIcon: "size-4.5",
        label: "gap-2 text-xs"
      },
      xl: {
        empty: "py-8 text-base",
        input: "[&>input]:h-14",
        item: "gap-2 p-2 text-base",
        itemLeadingAvatarSize: "xs",
        itemLeadingChip: "size-6",
        itemLeadingChipSize: "lg",
        itemLeadingIcon: "size-6",
        itemTrailing: "gap-2",
        itemTrailingIcon: "size-6",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "lg",
        itemTrailingpcIcon: "size-6",
        label: "gap-2 p-2 text-sm"
      }
    },
    virtualize: {
      false: {
        viewport: "divide-y divide-p3"
      },
      true: {
        viewport: "isolate p-1"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
})

export default commandPaletteTheme
