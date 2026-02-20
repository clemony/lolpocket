import { defineUiTheme } from "./defineUiTheme"

export const dropdownMenuTheme = defineUiTheme({
  slots: {
    arrow: "fill-p0",
    content: [
      "! t z-99 flex min-w-32 origin-(--reka-dropdown-menu-content-transform-origin) flex-col overflow-hidden rounded-lg shadow-lg ring shadow-black/8 drop-shadow-sm drop-shadow-black/6 select-none",
    ],
    group: "isolate p-1",
    item: "group relative flex w-full items-center outline-none select-none before:absolute before:inset-px before:z-[-1] before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    itemDescription: "truncate text-p1",
    itemLabel: "truncate font-medium",
    itemLabelExternalIcon: "ml-px inline-block size-2.75 align-[2px] text-pc",
    itemLeadingAvatar: "shrink-0",
    itemLeadingAvatarSize: "",
    itemLeadingIcon: "shrink-0",
    itemTrailing: "ms-auto inline-flex items-center gap-1.5",
    itemTrailingIcon: "shrink-0",
    itemTrailingKbds:
      "hidden shrink-0 items-center font-mono text-xs text-pc/50 lg:inline-flex",
    itemTrailingKbdsSize: "",
    itemWrapper: "flex min-w-0 flex-1 flex-col text-start",
    label: "flex w-full items-center text-xs font-semibold opacity-50",
    viewport: "flex-1 scroll-py-1 divide-y overflow-y-auto bg-p0",
  },
  variants: {
    color: {
      neutral: "",
      default: {
        arrow: "fill-p0",
        content: "ring-p3/60",
        viewport: "divide-p2 bg-p0",
        label: "text-n5/80",
      },
    },
    active: {
      false: {
        item: [
          "text-pc data-pc:text-pc data-pc:before:bg-p2/50 data-[state=open]:text-pc data-[state=open]:before:bg-p2/50",
          "transition-colors before:transition-colors",
        ],
        itemLeadingIcon: [
          "text-n4 group-data-pc:text-pc group-data-[state=open]:text-pc",
          "transition-colors",
        ],
      },
      true: {
        item: "text-pc before:bg-p2",
        itemLeadingIcon: "text-pc",
      },
    },
    loading: {
      true: {
        itemLeadingIcon: "animate-spin",
      },
    },
    size: {
      lg: {
        item: "gap-2 p-2 text-sm",
        itemLeadingAvatarSize: "2xs",
        itemLeadingIcon: "size-5",
        itemTrailingIcon: "size-5",
        itemTrailingKbds: "gap-1",
        itemTrailingKbdsSize: "md",
        label: "gap-2 p-2 text-sm",
      },
      md: {
        item: "gap-1.75 p-1.5 text-sm",
        itemLeadingAvatarSize: "xs",
        itemLeadingIcon: "size-4.25",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "md",
        label: "gap-1.5 p-1.5 text-sm",
      },
      sm: {
        item: "gap-1.5 p-1.5 text-xs",
        itemLeadingAvatarSize: "2xs",
        itemLeadingIcon: "size-4",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
        label: "gap-1.5 p-1.5 text-xs",
      },
      xl: {
        item: "gap-2 p-2 text-pc",
        itemLeadingAvatarSize: "xs",
        itemLeadingIcon: "size-6",
        itemTrailingIcon: "size-6",
        itemTrailingKbds: "gap-1",
        itemTrailingKbdsSize: "lg",
        label: "gap-2 p-2 text-pc",
      },
      xs: {
        item: "gap-1 p-1 text-xs",
        itemLeadingAvatarSize: "2xs",
        itemLeadingIcon: "size-4",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
        label: "gap-1 p-1 text-xs",
      },
    },
  },
  compoundVariants: [
    {
      color: "default",
      active: false,
      class: {
        item: "data-pc:before:noise text-pc/60 data-pc:text-pc data-pc:before:bg-p3! data-[state=open]:before:bg-p3/60!",
        itemLeadingIcon:
          "text-pc/60 group-data-pc:text-pc/60 group-data-[state=open]:text-pc",
      },
    },
    {
      color: "default",
      active: true,
      class: {
        item: "before:noise text-pc before:bg-p3/80!",
        itemLeadingIcon: "text-pc",
      },
    },
  ],
  defaultVariants: {
    color: "default",
    size: "md",
  },
})

export default dropdownMenuTheme
