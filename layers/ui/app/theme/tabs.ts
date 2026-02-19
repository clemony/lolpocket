export default {
  slots: {
    indicator: "absolute transition-[translate,width] duration-200",
    list: "relative flex  group p-0",
    trigger:
      "group relative  inline-flex items-center min-w-0  font-medium  disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer text-2",

    root: "flex items-center gap-0  ",
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
        indicator: " shadow-sm shadow-black/6",
        list: " ring rounded-xl ring-none",
        trigger: "grow",
      },

      ghost: {
        indicator: "  shadow-sm shadow-black/6",
        list: "group-active:ring ring-none",
        trigger: "grow",
      },
      link: {
        list: "ring-b-0 ring-b-transparent",
        indicator:
          "after:h-0.5 after:w-[75%] grid after:justify-self-center after:absolute after:ring-b after:ring-pc/60 ds-2xs after:bg-p3 -translate-y-1",
        trigger: "focus:outline-none on:text-pc",
      },
      outline: {},
    },
    rounded: {
      md: {
        indicator: "rounded-md",
        list: "rounded-md",
      },
      lg: {
        indicator: "rounded-md",
        list: "rounded-lg",
      },
      xl: {
        indicator: "rounded-lg",
        list: "rounded-xl",
      },
      full: {
        indicator: "rounded-full",
      },
    },
    orientation: {
      horizontal: {
        list: "h-full px-1 py-0.5 ",
        indicator:
          "left-0 w-(--reka-tabs-indicator-size) h-[calc(100%-var(--spacing))] translate-x-(--reka-tabs-indicator-position) self-center",
        trigger: "justify-center h-full grow",
      },
      vertical: {
        list: "flex-col w-full items-center py-1 grow px-0.5!",
        trigger:
          "items-center  h-(--reka-tabs-indicator-size)) justify-self-center   grow",
        indicator:
          "top-0 h-(--reka-tabs-indicator-size) w-full  w-[calc(100%-var(--spacing))]  justify-self-center   translate-y-(--reka-tabs-indicator-position)",
      },
    },
    size: {
      xs: {
        trigger: "px-2 text-xs gap-1",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
      },
      sm: {
        trigger: "px-2.5 text-xs gap-1.5",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
      },
      md: {
        trigger: "px-3  text-xs gap-1.5",
        leadingIcon: "size-4.5",
        leadingAvatarSize: "2xs",
      },
      lg: {
        trigger: "px-3 text-sm gap-2",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
      },
      xl: {
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
        indicator: "bg-p0 ring-p3",
        list: "bg-p1   inset-shadow-xs inset-shadow-black/4  ring-p3/80 ",
        trigger:
          "data-[state=active]:text-pc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1  ",
      },
    },
    {
      color: "neutral",
      variant: "pill",
      class: {
        indicator:
          "bg-neutral/90 ring noise ring-p4/80 inset-shadow-xs inset-shadow-p1/10 ",
        list: "bg-p1   ring-p3/80 ",
        trigger:
          "text-pc focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-p1 data-[state=active]:text-nc active:hover:**:text-nc data-[state=active]:**:text-nc hover:text-pc!",
      },
    },
    /* ghost */

    {
      color: "neutral",
      variant: "ghost",
      class: {
        indicator:
          "bg-neutral/90 ring-n5/60 inset-shadow-xs inset-shadow-b1/8 noise",
        list: " ring-0! ring-0! bg-transparent noise-none",
        trigger:
          "text-pc  active:text-nc active:**:text-nc   active:hover:**:text-nc hover:text-n4 hover:underline",
      },
    },
    /* outline */
    {
      color: "neutral",
      variant: "outline",
      class: {
        indicator:
          "bg-neutral/90 ring noise ring-p4/80 inset-shadow-xs inset-shadow-p1/10 ",
        list: " rounded-lg  inset-shadow-xs ring-p4/70 ring",
        trigger:
          "text-pc    active:**:text-nc active:text-nc active:hover:**:text-nc! hover:text-pc!",
      },
      rounded: ["md", "lg", "xl", "full"],
    },

    /* size */

    {
      size: "xs",
      orientation: "horizontal",
      class: {
        root: " h-7 ",
      },
    },
    {
      size: "sm",
      orientation: "horizontal",
      class: {
        root: " h-8",
      },
    },
    {
      size: "md",
      orientation: "horizontal",
      class: {
        root: "h-10",
      },
    },
    {
      size: "lg",
      orientation: "horizontal",
      class: {
        root: "h-12",
      },
    },
    {
      size: "xl",
      orientation: "horizontal",
      class: {
        root: "h-14",
      },
    },

    {
      size: "xs",
      orientation: "vertical",
      class: {
        root: " w-7   ",
      },
    },
    {
      size: "sm",
      orientation: "vertical",
      class: {
        root: "w-8 ",
      },
    },
    {
      size: "md",
      orientation: "vertical",
      class: {
        root: "w-10",
      },
    },
    {
      size: "lg",
      orientation: "vertical",
      class: {
        root: "w-12",
      },
    },
    {
      size: "xl",
      orientation: "vertical",
      class: {
        root: "w-14 ",
      },
    },
  ],
  defaultVariants: {
    rounded: "lg",
    color: "default",
    variant: "pill",
  },
}
