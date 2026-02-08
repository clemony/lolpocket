export default {
  button: {
    slots: {
      label: "truncate",
      leadingAvatar: "shrink-0",
      leadingAvatarSize: "",
      leadingIcon: "shrink-0",
      trailingIcon: "shrink-0",
      base: [
        "group/btn font-medium  text-xs  inline-flex items-center disabled:cursor-not-allowed text-pc duration-0 aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 cursor-pointer",
      ],
    },
    variants: {
      color: {
        domination: "",
        neutral: "",
        p0: "",
        p1: "",
        p2: "",
        p3: "",
        transparent: "",
      },
      variant: {
        solid:
          "btn shadow-sm  hover:inset-shadow-sm active:inset-shadow-sm on:inset-shadow-sm open:inset-shadow-sm focus:inset-shadow-sm focus-visible:inset-shadow-sm",
        ghost:
          "disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent  hover:inset-shadow-sm active:inset-shadow-sm on:inset-shadow-sm open:inset-shadow-sm focus:inset-shadow-sm focus-visible:inset-shadow-sm",
        outline:
          "btn btn-outline hover:inset-shadow-sm active:inset-shadow-sm on:inset-shadow-sm open:inset-shadow-sm focus:inset-shadow-sm focus-visible:inset-shadow-sm",
        link: {
          base: "hover:**:underline hover:*:underline!",
          label:
            "group-hover/btn:underline group-hover/btn:**:underline font-medium",
        },
      },
      active: {
        false: {
          base: "",
        },
        true: {
          base: "on",
        },
      },
      fieldGroup: {
        horizontal:
          "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
        vertical:
          "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]",
      },
      rounded: {
        true: {
          base: "",
        },
      },
      size: {
        "3xs": {
          base: "px-1.5 h-5 gap-1.5",
          leadingAvatarSize: "3xs",
          leadingIcon: "size-3.5",
          trailingIcon: "size-3.5",
        },
        "2xs": {
          base: "px-2 h-6 gap-2",
          leadingAvatarSize: "3xs",
          leadingIcon: "size-3.5",
          trailingIcon: "size-3.5",
        },
        lg: {
          base: "px-3 h-12 gap-2",
          leadingAvatarSize: "2xs",
          leadingIcon: "size-5",
          trailingIcon: "size-5",
        },
        md: {
          base: "px-2.5 h-10 gap-1.5  ",
          leadingAvatarSize: "2xs",
          leadingIcon: "size-5",
          trailingIcon: "size-5",
        },
        sm: {
          base: "px-2.5 h-8 gap-1.5  ",
          leadingAvatarSize: "3xs",
          leadingIcon: "size-4",
          trailingIcon: "size-4",
        },
        xl: {
          base: "px-3 h-14 gap-2 ",
          leadingAvatarSize: "xs",
          leadingIcon: "size-6",
          trailingIcon: "size-6",
        },
        xs: {
          base: "px-2 h-7 gap-1 ",
          leadingAvatarSize: "3xs",
          leadingIcon: "size-4",
          trailingIcon: "size-4",
        },
      },
      square: {
        true: {
          base: "",
        },
      },
    },
    compoundVariants: [
      {
        color: "transparent",
        variant: "solid",
        class: "",
      },
      {
        color: "p2",
        variant: "solid",
        class: "text-pc btn bg-p2 ",
      },
      {
        color: "p3",
        variant: "solid",
        class: "text-pc btn bg-p3 ",
      },
      /* 🎨 P0 */
      {
        color: "p0",
        variant: "solid",
        class: "text-pc btn bg-p0 ring-default border-p2 ",
      },
      {
        color: "p0",
        variant: "ghost",
        class:
          "data-[state=checked]:bg-p0 checked:border-p3/60 data-[state=checked]:btn-active checked:bg-p0 text-pc  btn btn-ghost on:border-p3/60 ",
      },
      {
        color: "p0",
        variant: "link",
        class: {
          base: "btn btn-ghost text-pc hover:*:underline!  hover:**:underline! hover:underline hover:bg-transparent hover:fx-0 hover:border-0 hover:inset-shadow-none",
          label:
            "group-hover/btn:underline group-hover/btn:**:underline decoration-bc",
        },
      },
      /* 🎨 p1 */
      {
        color: "p1",
        variant: "solid",
        class: "text-pc btn bg-p1 border-p3 ring-p1",
      },
      {
        color: "p1",
        variant: "ghost",
        class:
          "text-pc btn btn-ghost on:backdrop-blur-sm bg-clip-padding on:btn-active on:border-p1/40 on:ring-2    on:ring-p1/80 on:bg-p1  on:fx-1 on:btn-active ",
      },
      /* 🎨 p2 */
      {
        color: "p2",
        variant: "solid",
        class: "text-pc btn bg-p2 border-p3 ring-p2",
      },
      {
        color: "p2",
        variant: "ghost",
        class:
          "text-pc btn btn-ghost on:backdrop-blur-sm bg-clip-padding on:btn-active on:border-p2/40 on:ring-2    on:ring-p2/80 on:bg-p2  on:fx-1 on:btn-active ",
      },
      /* 🎨 p3 */
      {
        color: "p3",
        variant: "solid",
        class: "text-pc btn bg-p3 border-p4 ring-p3",
      },
      {
        color: "p3",
        variant: "ghost",
        class:
          "text-pc btn btn-ghost on:backdrop-blur-sm bg-clip-padding on:btn-active on:fx-1 on:btn-active on:border-p3/40 on:ring-2    on:ring-p3/80 on:bg-p3",
      },
      {
        color: "p3",
        variant: "outline",
        class:
          "text-pc btn bg-p3 border-none 8 bg-transparent shadow-xs  ring-p3",
      },
      /* 🎨 NEUTRAL */
      {
        color: "neutral",
        variant: "solid",
        class: {
          base: "btn-neutral btn  bg-neutral on:text-nc  on:btn-neutral active:btn-neutral  on:btn-neutral focus-visible:bg-neutral active:bg-neutral",
          leadingIcon:
            "group-hover/btn:**:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc ",
          trailingIcon:
            "group-hover/btn:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc ",
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
      {
        color: "neutral",
        variant: "solid",
        class: "on:inset-shadow-default/14 text-nc",
      },
      {
        color: "neutral",
        variant: "link",
        class: {
          base: "text-nc **:text-nc hover:underline hover:**:underline  hover:*:text-nc btn-ghost hover:bg-transparent hover:fx-0 hover:border-0 hover:inset-shadow-none hover:text-nc decoration-nc",
          label: "group-hover/btn:underline group-hover/btn:**:underline ",
        },
      },
      {
        color: "transparent",
        variant: "solid",
        class: "btn btn-ghost bg-transparent on:inset-shadow-black/5",
      },

      /* 🟠 SHAPE */
      {
        class: "anchor rounded-lg",
        rounded: false,
        size: ["sm", "md", "lg", "xl"],
      },
      {
        class: "anchor rounded-md",
        rounded: false,
        size: ["3xs", "2xs", "xs"],
      },
      {
        rounded: true,
        size: ["3xs", "2xs", "xs", "sm", "md", "lg", "xl"],
        class: {
          base: "anchor rounded-full!",
        },
      },
      {
        size: ["3xs", "2xs", "xs", "sm"],
        variant: ["solid"],
        class: "hover:inset-shadow-xs",
      },
    ],
    defaultVariants: {
      color: "p1",
      variant: "solid",
      size: "md",
    },
  },
}
