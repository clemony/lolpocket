export default {
  slots: {
    indicator: "absolute transition-[translate,width] duration-200",
    list: "relative flex  p-0.5 group rounded-xl ring-none",
    trigger:
      "group relative  inline-flex items-center min-w-0 data-[state=inactive]:text-muted hover:data-[state=inactive]:not-disabled:text-default font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-75 cursor-pointer text-2",

    root: "flex items-center gap-2",
    leadingIcon: "shrink-0",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    label: "truncate",
    trailingBadge: "shrink-0",
    trailingBadgeSize: "sm",
    content: "focus:outline-none w-full",
  },
  variants: {
    variant: {
      pill: {
        indicator: "rounded-lg shadow-sm shadow-black/6 border",
        list: "",
        trigger: "grow",
      },
    },
    rounded: {
      true: {
        trigger: "rounded-full",
      },
    },
    orientation: {
      horizontal: {
        root: "flex-col",
        list: "w-full",
        indicator:
          "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) h-[90%] self-center",
        trigger: "justify-center",
      },
      vertical: {
        list: "flex-col",
        indicator:
          "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)",
      },
    },
    size: {
      xs: {
        trigger: "px-2 h-7 text-xs gap-1",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
      },
      sm: {
        trigger: "px-2.5 h-8 text-xs gap-1.5",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
      },
      md: {
        trigger: "px-3 h-10 text-sm gap-1.5",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
      },
      lg: {
        trigger: "px-3 h-14 text-sm gap-2",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
      },
      xl: {
        trigger: "px-3 h-14 text-md gap-2",
        leadingIcon: "size-6",
        leadingAvatarSize: "xs",
      },
    },
  },
  compoundVariants: [
    {
      color: "default",
      variant: "pill",
      class: {
        indicator: "bg-p0 border-p3",
        list: "bg-p1 border inset-shadow-xs inset-shadow-black/4  border-p3/80 ",
        trigger:
          "data-[state=active]:text-pc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1  ",
      },
    },
    {
      color: "neutral",
      variant: "pill",
      class: {
        indicator: "bg-neutral/90 border-nc/60 noise",
        list: "bg-p1 noise border-p3/80 ",
        trigger:
          "text-pc focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-nc active:hover:**:text-pc data-[state=active]:**:text-nc",
      },
    },
    {
      color: "transparent",
      variant: "pill",
      class: {
        indicator: "bg-neutral/90 border-nc/60 noise",
        list: "  bg-transparent noise-none",
        trigger:
          "text-pc focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-nc active:hover:**:text-pc data-[state=active]:**:text-nc",
      },
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "pill",
  },
}
