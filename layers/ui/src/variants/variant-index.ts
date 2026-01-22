import { sizeVariants } from "@ui"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

export const elementBaseVariants = {
  btn: "shrink-0 btn relative focus:outline-0 duration-100 focus-visible:outline-0 relative focus-visible:ring-0 flex bg-transparent has-[first:[&_svg]]:gap-3 has-not:[span:empty]:gap-2 text-start has-[span:empty]:gap-0 [&_svg]:inline-flex align-middle text-md font-normal items-center disabled:opacity-80 flex px-3",
  label: "font-medium flex gap-4 items-center select-none",
  none: "",
}

export const variantVariants = {
  hidden: "hidden",
  base: "backdrop-blur  bg-b1/90  border-b3",
  btn: "bg-tint-b2/60 border-b3/60 font-medium text-bc **:text-bc",
  error:
    "bg-domination hover:bg-domination/80 border-domination font-semibold text-white **:text-white",
  floating:
    "pointer-events-auto! fx-0 z-10 cursor-pointer! border-b3 bg-b1/80 shadow-sm  shadow-black/4 backdrop-blur *:opacity-60 hover:*:opacity-80",
  ghost:
    "btn-ghost hover:bg-tint-b2/20 hover:border-b3/60 shadow-none drop-shadow-none  border-transparent fx-0  font-medium  ",
  ghostBase:
    "on:!bg-b1 open:!bg-b1 on:shadow-sm open:shadow-sm shadow-black/4 on:!border-b3/80 open:!border-b3/80  fx-0 font-medium  ",
  input:
    "btn-outline !bg-transparent inset-shadow-xs  font-medium border-b3 shadow-[1px_1px_1px_rgba(0,0,0,0.04)]",
  inset: "inset-shadow-xs fx-1 !border-b3/80 border !bg-b2",
  label: "font-medium opacity-50 items-center flex gap-3",
  link: "fx-0  justify-start bg-transparent border-0 shadow-0 text-bc underline-offset-2 on:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium ",
  neutral:
    "  btn-neutral bg-neutral text-nc bg-neutral  font-medium  *:text-nc  shadow-sm drop-shadow-sm border-neutral   **:text-nc",
  none: "items-center bg-transparent border-0 border-transparent shadow-transparent shadow-none inset-shadow-none inset-shadow-transparen drop-shadow-transparent drop-shadow-none p-0 fx-0 outline-0 ring-0",
  opacity: "",
  outline: "border fx-0 shadow-xs font-medium border-b3",
  border: "border fx-0 shadow-xs font-medium border-shade-b3/6",
  secondary:
    "bg-tint-b3/40 fx-1 text-bc !border-b3  font-medium shadow-xs shadow-black/7 hover:inset-shadow-xs",
}
function createVariant({ size, variant }: { size: number; variant: string }) {
  // :variant="{10, neutral, ^btn, @inset, _btn}"
}
export const baseVariants = tv({
  variants: {
    /* base */
    base: {
      ...elementBaseVariants,
    },

    /* variant */
    variant: {
      ...variantVariants,
    },

    // states
    states: {
      states: "open:btn-active active:btn-active on:btn-active",
    },
    // disabled
    disabled: {
      disabled:
        "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-60",
    },

    // hover
    hover: {
      hidden: "hidden",
      base: "fx-0 hover:!border-b3 hover:!bg-b1",
      btn: "hover:!border-b3/80 hover:!bg-b2 hover:!text-bc hover:**:!text-bc",
      error: "",
      ghost:
        "on:border-b3 on:bg-b3/36 on:shadow-xs on:!fx-1 [&_.btn-active]:!border-b3 [&_.btn-active]:!bg-b2",
      ghostBase:
        "px-3 font-medium shadow-black/4 fx-0 open:!border-b3/80 open:!bg-b1 open:shadow-sm on:!border-b3/80 on:!bg-b1 on:shadow-sm",
      input: "transition-all duration-200 hover:ring hover:ring-bc/50",
      inset:
        "border hover:!border-b3/50 hover:!bg-transparent hover:inset-shadow-xs hover:fx-1",
      label: "",
      link: "underline-offset-2 hover:underline hover:opacity-100",
      neutral:
        "hover:!border-n3 hover:!bg-neutral/95 hover:!text-nc hover:shadow-sm hover:drop-shadow-sm hover:**:!text-nc",
      none: "border-0 !bg-transparent p-0 shadow-none inset-shadow-none drop-shadow-none !fx-0 hover:!bg-transparent",
      opacity: "hover:opacity-80",
      outline: "hover:!border hover:!border-b3 hover:shadow-xs hover:!fx-0",
      secondary:
        "px-3 hover:!border-b3 hover:!bg-tint-b3/45 hover:shadow-xs hover:inset-shadow-xs hover:shadow-black/5 hover:inset-shadow-black/2",
    },

    // active
    on: {
      base: "shadow-black/4 fx-0 open:!border-b3/80 open:!bg-b1 open:shadow-sm on:!border-b3/80 on:!bg-b1 on:shadow-sm",
      btn: "on:!border-b3/80 on:!bg-b2",
      floating:
        "pointer-events-auto! z-10 cursor-pointer! border-b3 bg-b1/80 shadow-sm shadow-black/4 backdrop-blur fx-0 *:opacity-60 hover:*:opacity-80",
      ghost: "on:!border-b3/40 on:!bg-b2/40 on:fx-1",
      inset: "on:!border on:!border-b3/80 on:!bg-b2 on:inset-shadow-xs on:fx-1",
      link: "underline-offset-2 on:underline on:opacity-100",
      neutral:
        "on:!border-n3 on:!bg-neutral/95 on:!text-nc on:shadow-sm on:drop-shadow-sm on:**:!text-nc",
      none: "on:bg-transparent on:!text-bc on:!opacity-100 on:!fx-0",
      outline: "on:!border on:!border-b3 on:shadow-xs on:!fx-0",
      secondary: "on:bg-b3/40 on:shadow-xs on:inset-shadow-xs on:fx-1",
    },

    // state
    state: {
      on: "btn-active",
      open: "btn-active",
    },

    /* size */
    size: {
      ...sizeVariants,
    },
  },
})

export const buttonVariants = tv({
  extend: baseVariants,

  // variants
  defaultVariants: {
    base: "btn",
    disabled: "disabled",
    size: "md",
    states: "states",
    variant: "btn",
  },
  variants: {
    size: {
      icon: "!grid btn-square size-11 !place-items-center rounded-lg !p-0",
    },
  },
})

export const selectVariants = tv({
  defaultVariants: {
    base: "none",
    disabled: "disabled",
    states: "states",
    variant: "none",
  },
  extend: baseVariants,
})

export const labelVariants = tv({
  defaultVariants: {
    base: "label",
    disabled: "disabled",
    states: "states",
  },
  extend: baseVariants,
})

export const elementVariants = tv({
  extend: baseVariants,
})

export const triggerVariants = tv({
  base: "flex w-fit items-center",
  extend: baseVariants,
})

export const collapsibleTriggerVariants = tv({
  defaultVariants: {
    base: "collapsibleTrigger",
  },
  extend: baseVariants,
  variants: {
    base: {
      collapsibleTrigger:
        "flex cursor-pointer items-center justify-between gap-3 [&_svg]:opacity-60 [&_svg]:opacity-100",
    },
  },
})

export const kbdVariants = tv({
  base: 'pointer-events-none relative inline-flex w-fit min-w-5 items-center justify-center gap-1 rounded-md border p-1 !text-[0.92rem] shadow-xs select-none [&_svg:not([class*="size-"])]:size-3',
  defaultVariants: {
    size: "6",
    variant: "secondary",
  },
  extend: baseVariants,
})
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type SelectVariants = VariantProps<typeof selectVariants>
export type ElementVariants = VariantProps<typeof elementVariants>
export type LabelVariants = VariantProps<typeof labelVariants>
export type KbdVariants = VariantProps<typeof kbdVariants>
export type TriggerVariants = VariantProps<typeof triggerVariants>
export type CollapsibleTriggerVariants = VariantProps<
  typeof collapsibleTriggerVariants
>
