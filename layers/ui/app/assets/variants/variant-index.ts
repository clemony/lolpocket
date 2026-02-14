import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

export function createVariants() {
  const vv = {
    hidden: "hidden",
    base: "backdrop-blur-sm  bg-p0/90  border-p3",
    border: "border fx-0 shadow-xs font-medium border-shade-p3/6",
    btn: "bg-tint-p2/60 border-p3/60 font-medium text-pc **:text-pc",
    error:
      "bg-dom hover:bg-dom/80 border-dom font-semibold text-white **:text-white",
    floating:
      "pointer-events-auto! fx-0 z-10 cursor-pointer! border-p3 bg-p0/80 shadow-sm  shadow-black/4 backdrop-blur-sm *:opacity-60 hover:*:opacity-80",
    ghost:
      "btn-ghost hover:bg-tint-p2/20 hover:border-p3/60 shadow-none drop-shadow-none  border-transparent fx-0  font-medium  ",
    ghostBase:
      "on:!bg-p0 open:!bg-p0 on:shadow-sm open:shadow-sm shadow-black/4 on:!border-p3/80 open:!border-p3/80  fx-0 font-medium  ",
    input:
      "btn-outline !bg-transparent inset-shadow-xs  font-medium border-p3 shadow-[1px_1px_1px_rgba(0,0,0,0.04)]",
    inset: "inset-shadow-xs fx-1 !border-p3/80 border !bg-p2",
    label: "font-medium opacity-50 items-center flex gap-3",
    link: "fx-0  justify-start bg-transparent border-0 shadow-0 text-pc underline-offset-2 on:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium ",
    neutral:
      "  btn-neutral bg-neutral text-nc bg-neutral  font-medium  *:text-nc  shadow-sm drop-shadow-sm border-neutral   **:text-nc",
    none: "items-center bg-transparent border-0 border-transparent shadow-transparent shadow-none inset-shadow-none inset-shadow-transparen drop-shadow-transparent drop-shadow-none p-0 fx-0 outline-0 ring-0",
    opacity: "",
    outline: "border fx-0 shadow-xs font-medium border-p3",
    p2: "bg-tint-p3/40 fx-1 text-pc !border-p3  font-medium shadow-xs shadow-black/7 hover:inset-shadow-xs",
  }
  return vv
}
export function baseVariants() {
  return tv({
    variants: {
      /* base */
      base: {
        btn: "has-not:[span:empty]:gap-2 btn relative flex shrink-0 items-center bg-transparent px-3 text-start align-middle text-md font-normal duration-100 focus:outline-0 focus-visible:ring-0 focus-visible:outline-0 disabled:opacity-80 has-[span:empty]:gap-0 has-[first:[&_svg]]:gap-3 [&_svg]:inline-flex",
        label: "flex items-center gap-4 font-medium select-none",
        none: "",
      },

      /* variant */
      variant: {
        ...createVariants(),
      },

      // disabled
      disabled: {
        disabled:
          "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-60",
      },
      // states
      states: {
        states: "open:btn-active active:btn-active on:btn-active",
      },

      color: {},
      // hover
      hover: {
        hidden: "hidden",
        base: "fx-0 hover:border-p3! hover:bg-p0!",
        btn: "hover:border-p3/80! hover:bg-p2! hover:text-pc! hover:**:text-pc!",
        error: "",
        ghost:
          "on:border-p3 on:bg-p3/36 on:shadow-xs on:fx-1! [&_.btn-active]:border-p3! [&_.btn-active]:bg-p2!",
        ghostBase:
          "px-3 font-medium shadow-black/4 fx-0 open:border-p3/80! open:bg-p0! open:shadow-sm on:border-p3/80! on:bg-p0! on:shadow-sm",
        input: "transition-all duration-200 hover:ring hover:ring-pc/50",
        inset:
          "border hover:border-p3/50! hover:bg-transparent! hover:inset-shadow-xs hover:fx-1",
        label: "",
        link: "underline-offset-2 hover:underline hover:opacity-100",
        neutral:
          "hover:border-n3! hover:bg-neutral/95! hover:text-nc! hover:shadow-sm hover:drop-shadow-sm hover:**:text-nc!",
        none: "border-0 bg-transparent! p-0 shadow-none inset-shadow-none drop-shadow-none fx-0! hover:bg-transparent!",
        opacity: "hover:opacity-80",
        outline: "hover:border! hover:border-p3! hover:shadow-xs hover:fx-0!",
        p2: "px-3 hover:border-p3! hover:bg-tint-p3/45! hover:shadow-xs hover:inset-shadow-xs hover:shadow-black/5 hover:inset-shadow-black/2",
      },
      // active
      on: {
        base: "shadow-black/4 fx-0 open:border-p3/80! open:bg-p0! open:shadow-sm on:border-p3/80! on:bg-p0! on:shadow-sm",
        btn: "on:border-p3/80! on:bg-p2!",
        floating:
          "pointer-events-auto! z-10 cursor-pointer! border-p3 bg-p0/80 shadow-sm shadow-black/4 backdrop-blur-sm fx-0 *:opacity-60 hover:*:opacity-80",
        ghost: "on:border-p3/40! on:bg-p2/40! on:fx-1",
        inset:
          "on:border! on:border-p3/80! on:bg-p2! on:inset-shadow-xs on:fx-1",
        link: "underline-offset-2 on:underline on:opacity-100",
        neutral:
          "on:border-n3! on:bg-neutral/95! on:text-nc! on:shadow-sm on:drop-shadow-sm on:**:text-nc!",
        none: "on:bg-transparent on:text-pc! on:opacity-100! on:fx-0!",
        outline: "on:border! on:border-p3! on:shadow-xs on:fx-0!",
        p2: "on:bg-p3/40 on:shadow-xs on:inset-shadow-xs on:fx-1",
      },

      // state
      state: {
        on: "btn-active",
        open: "btn-active",
      },
    },
  })
}
export const selectVariants = tv({
  extend: baseVariants(),
  defaultVariants: {
    variant: "none",
    base: "none",
    disabled: "disabled",
    states: "states",
  },
})

export const labelVariants = tv({
  extend: baseVariants(),
  defaultVariants: {
    base: "label",
    disabled: "disabled",
    states: "states",
  },
})
export const elementVariants = tv({
  extend: baseVariants(),
})

export const triggerVariants = tv({
  base: "flex w-fit items-center",
  extend: baseVariants(),
})

export const collapsibleTriggerVariants = tv({
  variants: {
    base: {
      collapsibleTrigger:
        "flex cursor-pointer items-center justify-between gap-3 [&_svg]:opacity-100 *:last:[&_svg]:opacity-60",
    },
  },
  extend: baseVariants(),
  defaultVariants: {
    base: "collapsibleTrigger",
  },
})

export type SelectVariants = VariantProps<typeof selectVariants>
export type ElementVariants = VariantProps<typeof elementVariants>
export type LabelVariants = VariantProps<typeof labelVariants>
export type TriggerVariants = VariantProps<typeof triggerVariants>
export type CollapsibleTriggerVariants = VariantProps<
  typeof collapsibleTriggerVariants
>
