import { defineUiTheme } from "./defineUiTheme"

export const editorSuggestionMenuTheme = defineUiTheme({
  slots: {
    content:
      "flex max-h-96 max-w-60 min-w-48 origin-(--reka-dropdown-menu-content-transform-origin) flex-col overflow-hidden rounded-md bg-default shadow-lg ring ring-default data-[state=closed]:animate-[scale-out_100ms_ease-in] data-[state=open]:animate-[scale-in_100ms_ease-out]",
    viewport:
      "relative flex-1 scroll-py-1 divide-y divide-default overflow-y-auto",
    group: "isolate p-1",
    label: "flex w-full items-center font-semibold text-highlighted",
    separator: "-mx-1 my-1 h-px bg-border",
    item: "group relative flex w-full items-start outline-none select-none before:absolute before:inset-px before:z-[-1] before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    itemLeadingIcon: "flex shrink-0 items-center justify-center",
    itemLeadingAvatar: "shrink-0",
    itemLeadingAvatarSize: "",
    itemWrapper: "flex min-w-0 flex-1 flex-col text-start",
    itemLabel: "truncate",
    itemDescription: "truncate text-muted",
    itemLabelExternalIcon: "inline-block size-3 align-top text-dimmed",
  },
  variants: {
    size: {
      xs: {
        label: "gap-1 p-1 text-[10px]/3",
        item: "gap-1 p-1 text-xs",
        itemLeadingIcon: "size-4 text-sm",
        itemLeadingAvatarSize: "3xs",
      },
      sm: {
        label: "gap-1.5 p-1.5 text-[10px]/3",
        item: "gap-1.5 p-1.5 text-xs",
        itemLeadingIcon: "size-4 text-sm",
        itemLeadingAvatarSize: "3xs",
      },
      md: {
        label: "gap-1.5 p-1.5 text-xs",
        item: "gap-1.5 p-1.5 text-sm",
        itemLeadingIcon: "size-5 text-base",
        itemLeadingAvatarSize: "2xs",
      },
      lg: {
        label: "gap-2 p-2 text-xs",
        item: "gap-2 p-2 text-sm",
        itemLeadingIcon: "size-5 text-base",
        itemLeadingAvatarSize: "2xs",
      },
      xl: {
        label: "gap-2 p-2 text-sm",
        item: "gap-2 p-2 text-base",
        itemLeadingIcon: "size-6 text-xl",
        itemLeadingAvatarSize: "xs",
      },
    },
    active: {
      true: {
        item: "text-highlighted before:bg-elevated/75",
        itemLeadingIcon: "text-default",
      },
      false: {
        item: [
          "text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
        ],
        itemLeadingIcon: [
          "text-dimmed group-data-highlighted:not-group-data-disabled:text-default",
        ],
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export default editorSuggestionMenuTheme
