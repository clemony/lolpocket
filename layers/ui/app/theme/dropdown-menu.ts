export default {
  slots: {
    arrow: "fill-p0",
    content: [
      "min-w-32 shadow-lg shadow-black/8 drop-shadow-sm drop-shadow-black/6 rounded-lg ring  overflow-hidden z-99  origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col select-none    !  overflow-hidden  t",
    ],
    group: "p-1 isolate",
    item: "group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75",
    itemDescription: "truncate text-p1",
    itemLabel: "truncate font-medium",
    itemLabelExternalIcon: "inline-block size-2.75 ml-px align-[2px] text-pc",
    itemLeadingAvatar: "shrink-0",
    itemLeadingAvatarSize: "",
    itemLeadingIcon: "shrink-0",
    itemTrailing: "ms-auto inline-flex gap-1.5 items-center",
    itemTrailingIcon: "shrink-0",
    itemTrailingKbds:
      "hidden lg:inline-flex text-xs items-center shrink-0 text-pc/50 font-mono",
    itemTrailingKbdsSize: "",
    itemWrapper: "flex-1 flex flex-col text-start min-w-0",
    label: "w-full flex items-center font-semibold text-xs opacity-50 ",
    viewport: "divide-y scroll-py-1 overflow-y-auto flex-1  bg-p0",
  },
  variants: {
    color: {
      neutral: "",
      default: {
        arrow: "fill-p0",
        content: " ring-p3/60",
        viewport: "divide-p2 bg-p0",
        label: "text-n5/80",
      },
    },
    active: {
      false: {
        item: [
          "text-pc data-pc:text-pc data-[state=open]:text-pc data-pc:before:bg-p2/50 data-[state=open]:before:bg-p2/50",
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
        item: "p-2 text-sm gap-2",
        itemLeadingAvatarSize: "2xs",
        itemLeadingIcon: "size-5",
        itemTrailingIcon: "size-5",
        itemTrailingKbds: "gap-1",
        itemTrailingKbdsSize: "md",
        label: "p-2 text-sm gap-2",
      },
      md: {
        item: "p-1.5 text-sm gap-1.75",
        itemLeadingAvatarSize: "xs",
        itemLeadingIcon: "size-4.25",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "md",
        label: "p-1.5 text-sm gap-1.5",
      },
      sm: {
        item: "p-1.5 text-xs gap-1.5",
        itemLeadingAvatarSize: "2xs",
        itemLeadingIcon: "size-4",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
        label: "p-1.5 text-xs gap-1.5",
      },
      xl: {
        item: "p-2 text-pc gap-2",
        itemLeadingAvatarSize: "xs",
        itemLeadingIcon: "size-6",
        itemTrailingIcon: "size-6",
        itemTrailingKbds: "gap-1",
        itemTrailingKbdsSize: "lg",
        label: "p-2 text-pc gap-2",
      },
      xs: {
        item: "p-1 text-xs gap-1",
        itemLeadingAvatarSize: "2xs",
        itemLeadingIcon: "size-4",
        itemTrailingIcon: "size-4",
        itemTrailingKbds: "gap-0.5",
        itemTrailingKbdsSize: "sm",
        label: "p-1 text-xs gap-1",
      },
    },
  },
  compoundVariants: [
    {
      color: "default",
      active: false,
      class: {
        item: "text-pc/60 data-pc:text-pc data-pc:before:noise data-pc:before:bg-p3! data-[state=open]:before:bg-p3/60!",
        itemLeadingIcon:
          "text-pc/60 group-data-pc:text-pc/60 group-data-[state=open]:text-pc",
      },
    },
    {
      color: "default",
      active: true,
      class: {
        item: "text-pc before:noise before:bg-p3/80!",
        itemLeadingIcon: "text-pc",
      },
    },
  ],
  defaultVariants: {
    color: "default",
    size: "md",
  },
}
