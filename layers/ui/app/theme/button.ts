import { colors } from "./colors"
import { defineUiTheme } from "./defineUiTheme"
export const buttonTheme = defineUiTheme({
  slots: {
    label: "grow truncate text-start text-sm font-medium",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    leadingIcon: "shrink-0 group-hover/btn:opacity-100",
    trailingIcon: "shrink-0",
    base: "group/btn inline-flex shrink-0 cursor-pointer items-center overflow-hidden duration-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75"
  },
  variants: {
    color: Object.fromEntries(
      colors.map((color) => [color, { [color]: `bg-${color}` }])
    ),
    size: {
      custom: {},
      "4xs": {
        base: "h-4! min-w-4! gap-1 px-1.5",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-3.25 **:stroke-[2.7]",
        trailingIcon: "size-3.5"
      },
      "3xs": {
        base: "h-5! min-w-5! gap-1 px-1.5",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-3.25 **:stroke-[2.7]",
        trailingIcon: "size-3.5"
      },
      "2xs": {
        base: "h-6! gap-2 px-2",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-3.5",
        trailingIcon: "size-3.5"
      },

      xs: {
        base: "h-7! min-w-7! gap-1 px-2 text-sm",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4"
      },
      sm: {
        base: "h-8! gap-1.5 px-2.5 text-sm",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4"
      },

      md: {
        base: "h-10! gap-1.5 px-2.5 text-sm",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-4.5",
        trailingIcon: "size-4 opacity-60 group-hover/btn:opacity-100"
      },

      lg: {
        base: "h-12! gap-2 px-3",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-5",
        trailingIcon: "size-5"
      },
      xl: {
        base: "h-14! gap-2 px-3",
        leadingAvatarSize: "xs",
        leadingIcon: "size-5",
        trailingIcon: "size-5"
      },
      "2xl": {
        base: "h-16! gap-2 px-3",
        leadingAvatarSize: "xs",
        leadingIcon: "size-5",
        trailingIcon: "size-5"
      }
    },
    square: {
      true: {
        base: "relative grid aspect-square shrink-0 place-items-center gap-0! p-0!",
        leadingIcon: "absolute",
        leadingAvatar: "absolute",
        label: "hidden"
      },
      false: "justify-start"
    },
    variant: {
      custom:
        "height-unset width-unset border-0 shadow-none ring-0 inset-shadow-none fx-0 disabled:bg-transparent aria-disabled:bg-transparent dark:aria-disabled:bg-transparent",
      solid: "btn shadow-sm",
      ghost:
        "hover:inset-shadow-xs disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent",
      outline:
        "btn border-0 ring ring-p3 btn-outline hover:bg-p1 hover:inset-shadow-xs",
      highlight: "btn btn-ghost",
      ring: "hover:inset-shadow-xs disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent",
      link: "inline-flex px-0 text-pc [&>[data-slot=label]]:text-start [&>[data-slot=label]]:font-medium [&>[data-slot=label]]:decoration-current hover:[&>[data-slot=label]]:underline",
      soft: "border border-p4/80 shadow-morphic transition-all duration-200 hover:shadow-none hover:inset-shadow-morphic",
      "ghost-soft":
        "hover:shadow-unset border border-transparent hover:border-p4/80 hover:inset-shadow-morphic-sm hover:fx-1 data-[state=active]:border-p4/80 data-[state=active]:shadow-morphic data-[state=active]:transition-all data-[state=active]:duration-200 data-[state=active]:hover:shadow-none"
    },
    active: {
      false: {
        base: ""
      },
      true: {
        base: ""
      }
    },
    fieldGroup: {
      horizontal: {
        base: "not-last:not-first:rounded-none not-only:first:rounded-e-none not-only:last:rounded-s-none focus-visible:z-[1]"
      },
      vertical: {
        base: "not-last:not-first:rounded-none not-only:first:rounded-b-none not-only:last:rounded-t-none focus-visible:z-[1]"
      }
    },
    rounded: {
      true: {
        base: "rounded-full"
      },
      false: {
        base: "rounded-lg"
      }
    }
  },
  compoundVariants: [
    /* SOLID */
    {
      color: "transparent",
      variant: "solid",
      class: {
        base: "ring-none border-0 bg-transparent hover:border-0"
      }
    },
    {
      color: "p0",
      variant: "solid",
      class: {
        base: "btn border-p2 bg-p0 text-pc ring-default fx-0 open:fx-1 hover:fx-1 data-[state=active]:bg-p1 data-[state=open]:bg-p1"
      }
    },
    {
      color: "p1",
      variant: "solid",
      class: {
        base: "btn border-p3/60 bg-p1 text-pc ring-0! depth-3 hover:border-b-p3 hover:shadow-xs hover:inset-shadow-xs"
      }
    },
    {
      color: "p2",
      variant: "solid",
      class: {
        base: "btn border-p3 bg-p2 text-pc ring-p2"
      }
    },
    {
      color: "p3",
      variant: "solid",
      class: {
        base: "btn border-p4 bg-p3 text-pc ring-p3"
      }
    },
    {
      color: "neutral",
      variant: "solid",
      class: {
        base: "btn bg-neutral font-semibold ring-0 inset-shadow-black/4 btn-neutral focus-visible:bg-neutral active:bg-neutral active:btn-neutral disabled:bg-p1 disabled:shadow-none disabled:ring disabled:inset-shadow-xs disabled:ring-p3/80 on:text-nc on:btn-neutral",
        leadingIcon:
          "focus-group-visible/btn:**:text-nc text-nc **:text-nc group-hover/btn:**:text-nc group-active/btn:**:text-nc group-data-[state=open]/btn:**:text-nc group-on/btn:**:text-nc",
        trailingIcon:
          "focus-group-visible/btn:**:text-nc text-nc **:text-nc group-hover/btn:**:text-nc group-active/btn:**:text-nc"
      }
    },
    /* GHOST */
    {
      color: "p0",
      variant: "ghost",
      class: {
        base: "active:noise on:noise btn border-3 border-transparent bg-clip-padding text-pc btn-ghost on:btn-active on:bg-p0/40! on:ring on:ring-p0 on:backdrop-blur-sm on:fx-1"
      }
    },
    {
      color: "p1",
      variant: "ghost",
      class: {
        base: "on:noise btn bg-clip-padding text-pc btn-ghost hover:bg-p1 on:border-p3 on:bg-p1 on:backdrop-blur-sm on:fx-1"
      }
    },
    {
      color: "p2",
      variant: "ghost",
      class: {
        base: "on:noise btn bg-clip-padding text-pc btn-ghost hover:bg-p2 on:border-p3 on:bg-p2 on:backdrop-blur-sm on:fx-1"
      }
    },
    {
      color: "p3",
      variant: "ghost",
      class: {
        base: "on:noise btn bg-clip-padding text-pc btn-ghost hover:bg-p3 on:border-p4 on:bg-p3 on:backdrop-blur-sm on:fx-1"
      }
    },
    {
      color: "neutral",
      variant: "ghost",
      class: {
        base: "btn text-pc btn-ghost hover:bg-neutral! hover:btn-neutral hover:**:text-nc! active:bg-neutral! active:btn-neutral active:**:text-nc! on:bg-neutral! on:btn-neutral"
      }
    },
    {
      color: ["p1", "p2", "p3"],
      variant: "outline",
      class: {
        base: "btn border-none bg-transparent text-pc ring-p3 btn-outline"
      }
    },
    // highlight
    {
      variant: "highlight",
      class: {
        base: "justify-start rounded-md! border-0 hover:bg-p1 active:bg-p1!",
        label: "grow",
        leadingIcon: "text-pc **:text-pc"
      }
    },
    // RING

    {
      color: ["p0", "p1", "p2", "p3"],
      variant: "ring",
      class: {
        base: "on:noise btn bg-clip-padding text-pc not-on:btn-ghost on:btn-active on:border-p3 on:bg-p1 on:ring on:ring-pc/50 on:backdrop-blur-sm on:fx-1"
      }
    },
    // LINK
    {
      variant: "link",
      class:
        "text-pc [&>[data-slot=label]]:text-pc [&>[data-slot=label]]:decoration-pc"
    },
    {
      color: "neutral",
      variant: "link",
      class: "[&>[data-slot=label]]:text-nc [&>[data-slot=label]]:decoration-nc"
    },
    {
      variant: ["soft", "ghost-soft"],
      color: ["p0", "p1", "p2", "p3"],
      class: {
        base: "bg-p0 hover:bg-p1"
      }
    },
    /* SHAPE */
    {
      size: "4xs",
      square: true,
      class: {
        base: "size-4"
      }
    },
    {
      size: "3xs",
      square: true,
      class: {
        base: "size-5"
      }
    },
    {
      size: "2xs",
      square: true,
      class: {
        base: "size-6"
      }
    },
    {
      size: "xs",
      square: true,
      class: {
        base: "size-7"
      }
    },
    {
      size: "sm",
      square: true,
      class: {
        base: "anchor size-8 gap-0"
      }
    },
    {
      size: "md",
      square: true,
      class: {
        base: "anchor size-10! gap-0 p-0"
      }
    },
    {
      size: "lg",
      square: true,
      class: {
        base: "size-12"
      }
    },
    {
      size: "xl",
      square: true,
      class: {
        base: "size-14"
      }
    },
    {
      class: {
        base: "rounded-lg"
      },
      rounded: false,
      size: ["sm", "md", "lg", "xl", "2xl"]
    },
    {
      class: {
        base: "rounded-md"
      },
      rounded: false,
      size: ["xs"]
    },
    {
      class: {
        base: "rounded-md"
      },
      rounded: false,
      size: ["3xs", "2xs"]
    },
    {
      rounded: true,
      size: ["3xs", "2xs", "xs", "sm", "md", "lg", "xl"],
      class: {
        base: "rounded-full!"
      }
    },
    {
      size: ["3xs", "2xs", "xs", "sm"],
      variant: ["solid"],
      class: {
        base: "hover:inset-shadow-xs"
      }
    },
    {
      size: "2xs",
      square: true,
      class: {
        base: "anchor size-6!"
      }
    }
  ],
  defaultVariants: {
    color: "p1",
    variant: "solid",
    size: "md"
  }
})

export default buttonTheme
