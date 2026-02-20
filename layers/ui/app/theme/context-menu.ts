import { defineUiTheme } from "./defineUiTheme"

export const contextMenuTheme = defineUiTheme({
  slots: {
    content:
      "flex min-w-32 origin-(--reka-context-menu-content-transform-origin) flex-col overflow-hidden rounded-md bg-default shadow-lg ring ring-default data-[state=closed]:animate-[scale-out_100ms_ease-in] data-[state=open]:animate-[scale-in_100ms_ease-out]",
    viewport:
      "relative flex-1 scroll-py-1 divide-y divide-default overflow-y-auto",
    group: "isolate p-1",
    label: "flex w-full items-center font-semibold text-highlighted",
    separator: "-mx-1 my-1 h-px bg-border",
    item: "group relative flex w-full items-start outline-none select-none before:absolute before:inset-px before:z-[-1] before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    itemLeadingIcon: "shrink-0",
    itemLeadingAvatar: "shrink-0",
    itemLeadingAvatarSize: "",
    itemTrailing: "ms-auto inline-flex items-center gap-1.5",
    itemTrailingIcon: "shrink-0",
    itemTrailingKbds: "hidden shrink-0 items-center lg:inline-flex",
    itemTrailingKbdsSize: "",
    itemWrapper: "flex min-w-0 flex-1 flex-col text-start",
    itemLabel: "truncate",
    itemDescription: "truncate text-muted",
    itemLabelExternalIcon: "inline-block size-3 align-top text-dimmed",
  },
  variants: {
    active: {
      true: {
        item: "text-highlighted before:bg-elevated",
        itemLeadingIcon: "text-default",
      },
      false: {
        item: [
          "text-default data-highlighted:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:text-highlighted data-[state=open]:before:bg-elevated/50",
        ],
        itemLeadingIcon: [
          "text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default",
        ],
      },
    },
    loading: {
      true: {
        itemLeadingIcon: "animate-spin",
      },
    },
    size: {
      xs: {
        label: "gap-1 p-1 text-xs",
        item: "gap-1 p-1 text-xs",
        itemLeadingIcon: "size-4",
        itemLeadingAvatarSize: "3xs",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
      },
      sm: {
        label: "gap-1.5 p-1.5 text-xs",
        item: "gap-1.5 p-1.5 text-xs",
        itemLeadingIcon: "size-4",
        itemLeadingAvatarSize: "3xs",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
      },
      md: {
        label: "gap-1.5 p-1.5 text-sm",
        item: "gap-1.5 p-1.5 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemTrailingIcon: "size-5",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "md",
      },
      lg: {
        label: "gap-2 p-2 text-sm",
        item: "gap-2 p-2 text-sm",
        itemLeadingIcon: "size-5",
        itemLeadingAvatarSize: "2xs",
        itemTrailingIcon: "size-5",
        itemTrailingKbds: "gap-1",
        itemTrailingKbdsSize: "md",
      },
      xl: {
        label: "gap-2 p-2 text-base",
        item: "gap-2 p-2 text-base",
        itemLeadingIcon: "size-6",
        itemLeadingAvatarSize: "xs",
        itemTrailingIcon: "size-6",
        itemTrailingKbds: "gap-1",
        itemTrailingKbdsSize: "lg",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
  },
})

export default contextMenuTheme
