import { defineUiTheme } from "./defineUiTheme"

export const dropdownMenuTheme = defineUiTheme({
  slots: {
    arrow: "fill-p0",
    content: [
      "z-[120] flex min-w-42 origin-(--reka-dropdown-menu-content-transform-origin) flex-col overflow-hidden rounded-xl bg-p0/80 bg-blend-screen shadow-lg ring shadow-black/8 ring-p3 drop-shadow-none backdrop-blur-md select-none"
    ],
    group: "isolate p-0.5",
    separator: "my-1 h-px bg-n0/8",
    item: "group relative flex w-full cursor-pointer items-center outline-none select-none before:absolute before:z-[-1] before:rounded-lg data-disabled:cursor-not-allowed data-disabled:opacity-75",
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
    label: "flex w-full items-center text-xs font-semibold",
    viewport: "flex-1 scroll-py-1 divide-y overflow-y-auto"
  },
  variants: {
    color: {
      neutral: "",
      base: {
        arrow: "fill-p0",
        content: "",
        item: "hover:fx-1 hover:before:bg-p2!",
        viewport: "divide-p2 ring ring-p3/60",
        label: ""
      }
    },
    active: {
      false: {
        item: [
          "data-[state=open]:before:trasnparent text-pc data-pc:text-pc data-pc:before:bg-transparent data-[state=open]:text-pc",
          "transition-colors before:transition-colors"
        ],
        itemLeadingIcon: [
          "text-n4 group-data-pc:text-pc group-data-[state=open]:text-pc",
          "transition-colors"
        ]
      },
      true: {
        item: "text-pc before:bg-p2",
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
        item: "h-7 gap-1 rounded-md p-1 text-xs",
        itemLeadingAvatarSize: "2xs",
        itemLeadingIcon: "size-4",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
        label: "gap-1 p-1 text-xs"
      },
      sm: {
        item: "h-8 gap-1.5 rounded-md p-1.5 text-xs",
        itemLeadingAvatarSize: "2xs",
        itemLeadingIcon: "size-4",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
        label: "gap-1.5 p-1.5 text-xs"
      },
      md: {
        item: "h-10 gap-1.5 rounded-md px-2 text-sm",
        itemLeadingAvatarSize: "xs",
        itemLeadingIcon: "size-4 **:stroke-[2.2]",
        itemTrailingIcon: "size-4",
        group: "p-1",
        itemTrailingKbds:
          "gap-1 *:aspect-square *:size-5 *:opacity-100 *:ring *:ring-p3",
        itemTrailingKbdsSize: "md",
        label: "gap-1.5 p-1.5 text-xs"
      },
      lg: {
        label: "gap-2 p-2 text-sm font-medium",
        item: "gap-2 p-2 text-sm font-medium",
        itemLeadingIcon: "size-4 **:stroke-[10%]",
        itemLeadingAvatarSize: "2xs",
        itemTrailingIcon: "size-4.5",
        itemTrailingKbds: "gap-1",
        itemTrailingKbdsSize: "md"
      },
      xl: {
        item: "gap-2 p-2 text-pc",
        itemLeadingAvatarSize: "xs",
        itemLeadingIcon: "size-6",
        itemTrailingIcon: "size-6",
        itemTrailingKbds: "gap-1",
        itemTrailingKbdsSize: "lg",
        label: "gap-2 p-2 text-pc"
      }
    }
  },
  compoundVariants: [
    {
      color: "base",
      active: false,
      class: {
        item: "data-pc:before:noise text-pc/60 hover:before:bg-p2 data-pc:text-pc data-pc:before:bg-p3! data-[state=open]:before:bg-p3/60!",
        itemLeadingIcon:
          "text-pc/60 group-data-pc:text-pc/60 group-data-[state=open]:text-pc"
      }
    },
    {
      color: "base",
      active: true,
      class: {
        item: "before:noise text-pc before:bg-p3/80!",
        itemLeadingIcon: "text-pc"
      }
    }
  ],
  defaultVariants: {
    color: "base",
    size: "md"
  }
})

export default dropdownMenuTheme
