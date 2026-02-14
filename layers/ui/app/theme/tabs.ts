export default {
  slots: {
    indicator: "absolute transition-[translate,width] duration-200",
    list: "relative flex h-full  p-0.5 group",
    trigger:
      "group relative h-full inline-flex items-center min-w-0  font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer text-2",

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
    color: {
      neutral: "",
      transparent: "",
      default: "",
    },
    variant: {
      pill: {
        indicator: "rounded-lg shadow-sm shadow-black/6",
        list: " border rounded-xl ring-none",
        trigger: "grow",
      },

      ghost: {
        indicator: "rounded-lg  shadow-sm shadow-black/6",
        list: " ring-none",
        trigger: "grow",
      },
      link: {
        list: "border-b-0 border-b-transparent",
        indicator:
          "after:h-0.5 after:w-[75%] grid after:justify-self-center after:absolute after:border-b after:border-pc/60 ds-2xs after:bg-p3 -translate-y-1",
        trigger: "focus:outline-none on:text-pc",
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
        root: " h-7 max-h-7 ",
        trigger: "px-2 text-xs gap-1",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
      },
      sm: {
        root: " h-8 max-h-8",
        trigger: "px-2.5 text-xs gap-1.5",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
      },
      md: {
        root: "h-10",
        trigger: "px-3  text-xs gap-1.5",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
      },
      lg: {
        root: "h-12",
        trigger: "px-3 text-sm gap-2",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
      },
      xl: {
        root: "h-14 ",
        trigger: "px-3 text-md gap-2",
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
        list: "bg-p1  border   border-p3/80 ",
        trigger:
          "text-pc focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-p1 data-[state=active]:text-nc active:hover:**:text-nc data-[state=active]:**:text-nc hover:text-pc!",
      },
    },
    {
      color: "transparent",
      variant: "pill",
      class: {
        indicator: "bg-neutral/90 border-nc/60 noise",
        list: "  bg-transparent noise-none",
        trigger:
          "text-pc focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-p1 data-[state=active]:text-nc active:hover:**:text-nc data-[state=active]:**:text-nc",
      },
    },

    /* ghost */

    {
      color: "neutral",
      variant: "ghost",
      class: {
        indicator: "bg-neutral/90 border-nc/60 noise",
        list: " border-0! ring-0! bg-transparent noise-none",
        trigger:
          "text-pc  active:text-nc active:**:text-nc   active:hover:**:text-nc hover:text-n4 hover:underline",
      },
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "pill",
  },
}
