export default {
  slots: {
    label: "truncate text-start",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    leadingIcon: "shrink-0",
    trailingIcon: "shrink-0",
    base: " overflow-hidden font-medium text-xs inline-flex items-center disabled:cursor-not-allowed shrink-0  duration-0 aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 cursor-pointer",
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
        base: "px-1.5 h-5! min-w-5! gap-1",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-3.25 **:stroke-[2.7]",
        trailingIcon: "size-3.5",
      },
      "2xs": {
        base: "px-2 h-6! gap-2",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-3.5",
        trailingIcon: "size-3.5",
      },
      lg: {
        base: "px-3 h-12! gap-2",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-5",
        trailingIcon: "size-5",
      },
      md: {
        base: "px-2.5 h-10! gap-1.5",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-4",
        trailingIcon: "size-5",
      },
      sm: {
        base: "px-2.5 h-8! gap-1.5  ",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4",
      },
      xl: {
        base: "px-3 h-14! gap-2 ",
        leadingAvatarSize: "xs",
        leadingIcon: "size-6",
        trailingIcon: "size-6",
      },
      "2xl": {
        base: "px-3 h-16! gap-2 ",
        leadingAvatarSize: "xs",
        leadingIcon: "size-6",
        trailingIcon: "size-6",
      },
      xs: {
        base: "px-2 h-7! min-w-7! gap-1 ",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4",
      },
    },
    square: {
      true: {
        base: "anchor   shrink-0 p-0! *:absolute",
      },
    },
    variant: {
      solid: {
        base: "btn shadow-sm  hover:inset-shadow-xs ",
      },
      ghost: {
        base: "disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent  hover:inset-shadow-xs ",
      },
      outline: {
        base: "btn btn-outline hover:inset-shadow-xs ",
      },
      ring: {
        base: "disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent  hover:inset-shadow-xs ",
      },
      link: {
        base: "group/link hover:underline inline-flex",
        label: "group-hover/link:underline text-start  font-medium",
      },
    },
    active: {
      false: {
        base: "",
      },
      true: {
        base: "btn-active",
      },
    },
    fieldGroup: {
      horizontal: {
        base: "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      },
      vertical: {
        base: "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]",
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
        base: "border-transparent hover:border-transparent bg-transparent ring-none",
      },
    },
    {
      color: "p0",
      variant: "solid",
      class: {
        base: "text-pc btn bg-p0 ring-default border-p2 ",
      },
    },
    {
      color: "p1",
      variant: "solid",
      class: {
        base: "text-pc btn bg-p1 border-p3 ring-p3",
      },
    },
    {
      color: "p2",
      variant: "solid",
      class: {
        base: "text-pc btn bg-p2 border-p3 ring-p2",
      },
    },
    {
      color: "p3",
      variant: "solid",
      class: {
        base: "text-pc btn bg-p3 border-p4 ring-p3",
      },
    },
    {
      color: "neutral",
      variant: "solid",
      class: {
        base: "btn-neutral btn font-semibold  bg-neutral on:text-nc  on:btn-neutral active:btn-neutral  on:btn-neutral focus-visible:bg-neutral active:bg-neutral",
        leadingIcon:
          "group-hover/btn:**:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc text-nc **:text-nc",
        trailingIcon:
          "group-hover/btn:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc text-nc **:text-nc",
      },
    },
    {
      color: ["p1", "p2", "p3"],
      variant: "outline",
      class: {
        base: "text-pc btn bg-p3 border-none btn-outline  bg-transparent shadow-xs  ring-p3",
      },
    },
    /* GHOST */
    {
      color: ["p0", "p1", "p2", "p3"],
      variant: "ghost",
      class: {
        base: "text-pc btn btn-ghost on:backdrop-blur-sm bg-clip-padding on:btn-active on:fx-1 on:btn-active on:border-p3   on:noise    on:bg-p1",
      },
    },
    {
      color: "neutral",
      variant: "ghost",
      class: {
        base: "btn btn-ghost on:text-nc hover:**:text-nc hover:btn-neutral hover:bg-neutral",
        leadingIcon:
          "group-hover/btn:**:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc ",
        trailingIcon:
          "group-hover/btn:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc ",
      },
    },
    // RING

    {
      color: ["p0", "p1", "p2", "p3"],
      variant: "ring",
      class: {
        base: "text-pc btn btn-ghost on:backdrop-blur-sm bg-clip-padding on:btn-active on:fx-1 on:btn-active on:border-p3 on:ring on:noise  on:ring-pc/50 on:bg-p1",
      },
    },
    // LINK
    {
      variant: "link",
      class: {
        base: "hover:underline group/link px-0",
        label: "group-hover/link:underline decoration-pc text-pc",
      },
    },
    {
      color: "neutral",
      variant: "link",
      class: {
        base: "hover:underline group/link",
        label: "group-hover/link:underline decoration-nc text-nc",
      },
    },
    /* SHAPE */
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
        base: "size-6! anchor",
      },
    },
  ],
  defaultVariants: {
    color: "p1",
    variant: "solid",
    size: "md",
  },
}
