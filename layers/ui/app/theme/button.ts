import { defineUiTheme } from "./defineUiTheme"

export const buttonTheme = defineUiTheme({
  slots: {
    label: "truncate text-start",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    leadingIcon: "shrink-0",
    trailingIcon: "shrink-0",
    base: "group/btn inline-flex shrink-0 cursor-pointer items-center overflow-hidden text-sm font-medium duration-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75",
  },
  variants: {
    color: {
      dom: {},
      neutral: {},
      p0: {},
      p1: {},
      p2: {},
      p3: {},
      transparent: {},
    },
    size: {
      custom: {},
      "3xs": {
        base: "h-5! min-w-5! gap-1 px-1.5",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-3.25 **:stroke-[2.7]",
        trailingIcon: "size-3.5",
      },
      "2xs": {
        base: "h-6! gap-2 px-2",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-3.5",
        trailingIcon: "size-3.5",
      },
      lg: {
        base: "h-12! gap-2 px-3",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-5",
        trailingIcon: "size-5",
      },
      md: {
        base: "h-10! gap-1.5 px-2.5 text-sm",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-4.5",
        trailingIcon: "size-4 opacity-60 group-hover/btn:opacity-100",
      },
      sm: {
        base: "h-8! gap-1.5 px-2.5 text-sm",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4",
      },
      xl: {
        base: "h-14! gap-2 px-3",
        leadingAvatarSize: "xs",
        leadingIcon: "size-6",
        trailingIcon: "size-6",
      },
      "2xl": {
        base: "h-16! gap-2 px-3",
        leadingAvatarSize: "xs",
        leadingIcon: "size-6",
        trailingIcon: "size-6",
      },
      xs: {
        base: "h-7! min-w-7! gap-1 px-2 text-sm",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4",
      },
    },
    square: {
      true: {
        base: "relative grid aspect-square shrink-0 place-items-center gap-0! p-0!",
        leadingIcon: "absolute",
        leadingAvatar: "absolute",
        label: "hidden",
      },
      false: {
        base: "justify-start",
      },
    },
    variant: {
      solid: {
        base: "btn shadow-sm hover:inset-shadow-xs",
      },
      ghost: {
        base: "hover:inset-shadow-xs disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent",
      },
      outline: {
        base: "btn btn-outline hover:inset-shadow-xs",
      },

      highlight: {
        base: "btn btn-ghost",
      },
      ring: {
        base: "hover:inset-shadow-xs disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent",
      },
      link: {
        base: "group/link inline-flex text-pc hover:underline",
        label: "text-start font-medium group-hover/link:underline",
      },
    },
    active: {
      false: {
        base: "",
      },
      true: {
        base: "",
      },
    },
    fieldGroup: {
      horizontal: {
        base: "not-last:not-first:rounded-none not-only:first:rounded-e-none not-only:last:rounded-s-none focus-visible:z-[1]",
      },
      vertical: {
        base: "not-last:not-first:rounded-none not-only:first:rounded-b-none not-only:last:rounded-t-none focus-visible:z-[1]",
      },
    },
    rounded: {
      true: {
        base: "rounded-full",
      },
      false: {
        base: "rounded-lg",
      },
    },
  },
  compoundVariants: [
    /* SOLID */
    {
      color: "transparent",
      variant: "solid",
      class: {
        base: "ring-none border-transparent bg-transparent hover:border-transparent",
      },
    },
    {
      color: "p0",
      variant: "solid",
      class: {
        base: "btn border-p2 bg-p0 text-pc ring-default",
      },
    },
    {
      color: "p1",
      variant: "solid",
      class: {
        base: "btn border-p3 bg-p1 text-pc ring-p3",
      },
    },
    {
      color: "p2",
      variant: "solid",
      class: {
        base: "btn border-p3 bg-p2 text-pc ring-p2",
      },
    },
    {
      color: "p3",
      variant: "solid",
      class: {
        base: "btn border-p4 bg-p3 text-pc ring-p3",
      },
    },
    {
      color: "neutral",
      variant: "solid",
      class: {
        base: "btn bg-neutral font-semibold btn-neutral focus-visible:bg-neutral active:bg-neutral active:btn-neutral on:text-nc on:btn-neutral",
        leadingIcon:
          "focus-group-visible/btn:**:text-nc text-nc **:text-nc group-hover/btn:**:**:text-nc group-active/btn:**:text-nc",
        trailingIcon:
          "focus-group-visible/btn:**:text-nc text-nc **:text-nc group-hover/btn:**:text-nc group-active/btn:**:text-nc",
      },
    },
    /* GHOST */
    {
      color: "p0",
      variant: "ghost",
      class: {
        base: "on:fx-1 active:noise on:noise btn border-3 border-transparent bg-clip-padding text-pc btn-ghost on:btn-active on:bg-p0/40! on:ring on:ring-p0 on:backdrop-blur-sm",
      },
    },
    {
      color: ["p1", "p2", "p3"],
      variant: "ghost",
      class: {
        base: "on:fx-1 on:noise btn bg-clip-padding text-pc btn-ghost on:border-p3 on:bg-p1 on:backdrop-blur-sm",
      },
    },
    {
      color: "neutral",
      variant: "ghost",
      class: {
        base: "btn not-on:not-hover:btn-ghost hover:btn-neutral active:btn-neutral on:btn-neutral",
        leadingIcon:
          "focus-group-visible/btn:**:text-nc group-hover/btn:**:**:text-nc group-active/btn:**:text-nc",
        trailingIcon:
          "focus-group-visible/btn:**:text-nc group-hover/btn:**:text-nc group-active/btn:**:text-nc",
      },
    },
    {
      color: ["p1", "p2", "p3"],
      variant: "outline",
      class: {
        base: "btn border-none bg-transparent text-pc ring-p3 btn-outline",
      },
    },
    // highlight
    {
      variant: "highlight",
      class: {
        base: "justify-start rounded-md! border-0 hover:bg-p2/60 active:bg-p2/80! on:bg-p2/80!",
        label: "grow",
        leadingIcon: "text-pc **:text-pc",
      },
    },
    // RING

    {
      color: ["p0", "p1", "p2", "p3"],
      variant: "ring",
      class: {
        base: "on:fx-1 on:noise btn bg-clip-padding text-pc not-on:btn-ghost on:btn-active on:border-p3 on:bg-p1 on:ring on:ring-pc/50 on:backdrop-blur-sm",
      },
    },
    // LINK
    {
      variant: "link",
      class: {
        base: "px-0",
        label: "text-pc decoration-pc",
      },
    },
    {
      color: "neutral",
      variant: "link",
      class: {
        base: "",
        label: "text-nc decoration-nc",
      },
    },
    /* SHAPE */
    {
      size: "3xs",
      square: true,
      class: {
        base: "size-5",
      },
    },
    {
      size: "2xs",
      square: true,
      class: {
        base: "size-6",
      },
    },
    {
      size: "xs",
      square: true,
      class: {
        base: "size-7",
      },
    },
    {
      size: "sm",
      square: true,
      class: {
        base: "size-8",
      },
    },
    {
      size: "md",
      square: true,
      class: {
        base: "anchor size-10! gap-0 p-0",
      },
    },
    {
      size: "lg",
      square: true,
      class: {
        base: "size-12",
      },
    },
    {
      size: "xl",
      square: true,
      class: {
        base: "size-14",
      },
    },
    {
      class: {
        base: "rounded-lg",
      },
      rounded: false,
      size: ["sm", "md", "lg", "xl", "2xl"],
    },
    {
      class: {
        base: "rounded-sm",
      },
      rounded: false,
      size: ["3xs", "2xs", "xs"],
    },
    {
      rounded: true,
      size: ["3xs", "2xs", "xs", "sm", "md", "lg", "xl"],
      class: {
        base: "rounded-full!",
      },
    },
    {
      size: ["3xs", "2xs", "xs", "sm"],
      variant: ["solid"],
      class: {
        base: "hover:inset-shadow-xs",
      },
    },
    {
      size: "2xs",
      square: true,
      class: {
        base: "anchor size-6!",
      },
    },
  ],
  defaultVariants: {
    color: "p1",
    variant: "solid",
    size: "md",
  },
})

export default buttonTheme
