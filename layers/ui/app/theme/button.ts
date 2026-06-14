import { cn } from "~~/layers/lib/app/utils/tw"
import { colors } from "./colors"
import { defineUiTheme } from "./defineUiTheme"
export const buttonTheme = defineUiTheme({
  slots: {
    label: "grow truncate text-start text-sm font-medium",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    leadingIcon:
      "pointer-events-none shrink-0 align-icon group-hover/btn:opacity-100",
    trailingIcon: "pointer-events-none shrink-0 align-icon",
    base: "group/btn ring-unset inline-flex shrink-0 cursor-pointer items-center overflow-hidden rounded-lg border-0 duration-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75",
  },
  variants: {
    color: Object.fromEntries(colors.map((color) => [color, { [color]: `` }])),
    size: {
      _xs: {
        base: "h-6! min-w-6! gap-1 px-2 text-xs",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4",
      },
      xs: {
        base: "h-7! min-w-7! gap-1 px-2 text-xs",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4",
      },
      sm: {
        base: "h-8! gap-1.5 px-2.5 text-sm",
        leadingAvatarSize: "3xs",
        leadingIcon: "size-4",
        trailingIcon: "size-4",
      },

      sm_: {
        base: "h-9! gap-1.5 px-2.5 text-sm",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-4.5",
        trailingIcon: "size-4 opacity-60 group-hover/btn:opacity-100",
      },
      md: {
        base: "h-10! gap-1.5 px-2.5 text-sm",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-4.5",
        trailingIcon: "size-4 opacity-60 group-hover/btn:opacity-100",
      },

      lg: {
        base: "h-12! gap-2 px-3",
        leadingAvatarSize: "2xs",
        leadingIcon: "size-5",
        trailingIcon: "size-5",
      },
      xl: {
        base: "h-14! gap-2 px-3",
        leadingAvatarSize: "xs",
        leadingIcon: "size-5",
        trailingIcon: "size-5",
      },
    },
    square: {
      true: {
        base: "relative grid aspect-square shrink-0 place-items-center gap-0! p-0!",
        leadingIcon: "absolute",
        leadingAvatar: "absolute",
        label: "hidden",
      },
      false: "justify-start",
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
    variant: {
      solid: "btn shadow-xs",
      ghost: [
        "disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent",
        "btn border-0 text-pc btn-ghost",
        "hover:inset-ring on:inset-ring",
      ],
      highlight: [
        "disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent",
        "btn border-0 text-pc btn-ghost",
        "hover:inset-ring hover:fx-0! on:inset-ring",
      ],
      outline:
        "btn border-0 ring ring-p3 btn-outline hover:bg-p1 hover:inset-shadow-xs",
      subtle:
        "hover:inset-shadow-xs disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent",
      link: "inline-flex px-0 text-pc",
      soft: "btn border-0 shadow-sm ring-0",
      ring: [
        "disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent",
        "btn border-0 text-pc btn-ghost",
        "hover:inset-ring on:inset-ring",
      ],
      tab: "tab",
      none: "",
      "ghost-outline": "",
    },
  },
  compoundVariants: [
    /* NEUTRAL */
    {
      color: "neutral",
      variant: "solid",
      class: {
        base: "bg-neutral font-semibold inset-ring inset-ring-n1 btn-neutral depth-5 focus-visible:bg-neutral active:bg-neutral active:btn-neutral disabled:bg-n1 disabled:shadow-none on:text-nc on:btn-neutral",
        leadingIcon: "text-nc! **:text-nc",
        trailingIcon: "text-nc!",
      },
    },
    {
      color: "neutral",
      variant: "soft",
      class: {
        base: cn(
          "bg-n0/60! font-semibold inset-ring inset-ring-n5/30 backdrop-blur-sm btn-neutral",
          "hover:bg-n1/40! focus-visible:bg-n3/20 focus-visible:inset-ring-n5/80",
          "active:bg-n3/40 active:btn-neutral",
          "disabled:bg-n3/60! disabled:shadow-none disabled:inset-shadow-xs disabled:inset-ring-n5/30 on:text-nc on:btn-neutral"
        ),
        leadingIcon: cn(
          "focus-group-visible/btn:**:text-nc",
          "**:text-nc/80 group-hover/btn:**:text-nc",
          "group-data-[state=open]/btn:**:text-nc",
          "group-active/btn:**:text-nc",
          "text-nc/80 group-on/btn:**:text-nc",
          "group-disabled/btn:**:text-nc/40"
        ),
        label: "text-nc/80",
        trailingIcon:
          "focus-group-visible/btn:**:text-nc text-nc **:text-nc group-hover/btn:**:text-nc group-active/btn:**:text-nc",
      },
    },
    {
      color: "neutral",
      variant: "ghost",
      class: {
        base: "hover:bg-neutral! hover:btn-neutral active:bg-neutral! active:btn-neutral on:bg-neutral! on:btn-neutral",
        label:
          "text-pc group-hover/btn:text-nc group-active/btn:text-nc group-data-[state=open]/btn:text-nc",
        leadingIcon:
          "group-hover/btn:**:text-nc group-disabled/btn:text-nc/40 group-data-[state=active]/btn:**:text-nc group-[aria=expanded]/btn:**:text-nc",
      },
    },
    {
      color: "neutral",
      variant: "link",
      class:
        "[&>[data-slot=label]]:text-nc [&>[data-slot=label]]:decoration-nc",
    },
    {
      color: "neutral",
      variant: "outline",
      class: {
        base: "btn border-none bg-transparent text-nc ring-nc/80 btn-outline hover:text-pc",
        leadingIcon: "text-nc group-hover/btn:**:text-pc",
        trailingIcon: "text-nc group-hover/btn:**:text-pc",
      },
    },
    /* BASE */
    {
      color: ["base", "primary", "secondary", "tertiary"],
      variant: "link",
      /*      class: {
        label:
          "text-start font-medium decoration-[inherit] group-hover/btn:underline"
      } */
    },
    {
      color: "base",
      variant: "solid",
      class: {
        base: "btn bg-base text-pc shadow-sm inset-ring shadow-black/5 inset-ring-p3/80 depth-3 noise-0 open:shadow-none open:inset-shadow-sm open:fx-1 hover:bg-p1 hover:fx-1 data-[state=active]:bg-p1",
      },
    },
    {
      color: "base",
      variant: "ghost",
      class: {
        base: "text-pc on:btn-active on:bg-p0/40! on:ring on:ring-p0",
      },
    },
    {
      color: "base",
      variant: "tab",
      class: {
        base: "data-[state=active]:tab-active [on=true]:tab-active checked:tab-active tab rounded-b-none font-medium! tracking-normal text-pc inset-ring-0 data-[state=active]:overflow-visible",
        label:
          "opacity-60 group-hover/btn:opacity-100 group-has-[.tab-active]:opacity-100",
        leadingIcon:
          "opacity-60 group-hover/btn:opacity-100 group-has-[.tab-active]:opacity-100",
      },
    },
    /* TRANSPARENT */
    {
      color: "transparent",
      variant: ["solid", "ghost"],
      class: {
        base: "inset-ring-none bg-transparent text-pc shadow-none drop-shadow-none fx-0! hover:bg-transparent hover:inset-ring-0 hover:fx-0!",
        leadingIcon: "text-pc",
      },
    },
    /* PRIMARY */
    {
      color: "primary",
      variant: "solid",
      class: {
        base: "btn bg-p1 text-pc ring-0! inset-ring inset-ring-p3 depth-3 open:shadow-none hover:bg-p3! hover:shadow-xs hover:inset-shadow-xs hover:inset-ring-p4/60 disabled:bg-p1!",
      },
    },
    {
      color: "primary",
      variant: "soft",
      class: {
        base: "btn bg-p1 text-pc shadow-none ring-0! inset-ring inset-ring-p2/80 fx-1 disabled:bg-p1! disabled:opacity-80",
      },
    },
    {
      color: "primary",
      variant: "ring",
      class: {
        base: "text-pc hover:bg-p1 hover:shadow-sm hover:inset-ring hover:shadow-black/4 hover:inset-ring-pc/60! data-[state=open]:bg-transparent data-[state=open]:shadow-none data-[state=open]:inset-ring data-[state=open]:inset-ring-pc/60!",
      },
    },
    {
      color: "primary",
      variant: "ghost",
      class: {
        base: "text-pc hover:bg-p1 hover:shadow-sm hover:inset-ring hover:shadow-black/4 hover:inset-ring-p3/40! hover:drop-shadow-xs on:bg-p1",
      },
    },
    {
      color: "primary",
      variant: "highlight",
      class: {
        base: "text-pc hover:bg-p1 hover:shadow-none hover:inset-ring hover:inset-ring-p3/40! hover:drop-shadow-none on:bg-p1",
      },
    },
    /* SECONDARY */
    {
      color: "secondary",
      variant: "solid",
      class: {
        base: "bg-p2 text-pc inset-ring inset-ring-p3 hover:bg-p2/70!",
      },
    },
    {
      color: "secondary",
      variant: "ghost",
      class: {
        base: "text-pc hover:bg-p2! on:bg-p2! on:inset-ring-p3",
      },
    },
    /* TERTIARY */
    {
      color: "tertiary",
      variant: "solid",
      class: {
        base: "bg-p3 ring-p3",
      },
    },
    {
      color: "tertiary",
      variant: "ghost",
      class: {
        base: "text-pc hover:bg-p3! on:bg-p3! on:inset-ring-p4/60",
      },
    },
    /* OUTLINE */
    {
      color: ["base", "primary", "secondary", "tertiary"],
      variant: "outline",
      class: {
        base: "btn border-0 bg-transparent text-pc shadow-xs ring-0 inset-ring inset-ring-p3 ring-offset-0 hover:bg-p2/60",
      },
    },
    // soft
    {
      variant: "soft",
      class: {
        base: "justify-start rounded-md! border-0 hover:bg-p1 active:bg-p1!",
        label: "grow",
        leadingIcon: "text-pc **:text-pc",
      },
    },
    // subtle

    {
      color: ["base", "primary", "secondary", "tertiary"],
      variant: "subtle",
      class: {
        base: "on:noise btn bg-clip-padding text-pc not-on:btn-ghost on:btn-active on:border-p3 on:bg-p1 on:ring on:ring-pc/50 on:backdrop-blur-sm on:fx-1",
      },
    },
    // LINK
    {
      variant: "link",
      class: {
        base: "text-pc [&>[data-slot=label]]:text-pc [&>[data-slot=label]]:decoration-pc group-hover/btn:**:[&>[data-slot=label]]:underline",
      },
    },
    {
      variant: ["soft"],
      color: ["base", "primary", "secondary", "tertiary"],
      class: {
        base: "bg-p0 hover:bg-p1",
      },
    },
    {
      size: "xs",
      square: true,
      class: {
        base: "size-7",
        leadingIcon: "size-3.5",
        label: "text-xs",
      },
    },
    {
      size: "sm",
      square: true,
      class: {
        base: "anchor size-8 gap-0",
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
  ],
  defaultVariants: {
    color: "primary",
    variant: "solid",
    size: "md",
  },
})

export default buttonTheme
