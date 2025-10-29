import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const elementBaseVariants = {
  btn: 'btn focus:outline-0 focus-visible:outline-0 relative focus-visible:ring-0 flex bg-transparent has-[first:[&_svg]]:gap-3 has-not-[span:empty]:gap-2 text-start has-[span:empty]:gap-0 [&_svg]:inline-flex align-middle text-3 font-normal items-center disabled:opacity-80 flex',
  indicator: 'py-0.5 h-9 bg-b2 px-1 items-center justify-center grid  rounded-xl inset-shadow-xs inset-shadow-black/3  border text-bc/50 relative',
  label: 'font-medium flex gap-4 items-center',
  none: '',
}

export const variantVariants = {
  hidden: 'hidden',
  base: 'backdrop-blur  bg-b1/90 px-3  border-b3',
  btn: 'px-3  bg-tint-b2/60 border-b3/60 font-medium text-bc **:text-bc',
<<<<<<< HEAD
  ghost: 'btn-ghost hover:bg-tint-b2/20 hover:border-b3/60 shadow-none drop-shadow-none fx-0  font-medium px-3 ',
  ghostBase: 'on:!bg-b1 open:!bg-b1 on:shadow-sm open:shadow-sm shadow-black/4 on:!border-b3/80 open:!border-b3/80  fx-0 font-medium px-3 ',
  input: 'btn-outline px-3 !bg-transparent inset-shadow-xs  font-medium border-b3 shadow-[1px_1px_1px_rgba(0,0,0,0.04)]',
  inset: 'inset-shadow-xs fx-1 !border-b3/80 border !bg-b2',
=======
  emboss: 'btn-outline px-3  font-medium border-b3 shadow-xs shadow-black/6 drop-shadow-xs hover:inset-shadow-xs hover:inset-shadow-black/6 ',
  field: 'field-box',
  ghost: 'btn-ghost hover:bg-tint-b2/20 hover:border-b3/60  font-medium px-3 ',
  ghostBase: 'on:!bg-b1 open:!bg-b1 on:shadow-sm open:shadow-sm shadow-black/4 on:!border-b3/80 open:!border-b3/80  fx-0 font-medium px-3 ',
  input: 'btn-outline px-3 !bg-transparent inset-shadow-xs  font-medium border-b3 shadow-[1px_1px_1px_rgba(0,0,0,0.04)]',
>>>>>>> refs/remotes/origin/main
  label: 'font-medium opacity-50 items-center flex gap-3',
  link: 'fx-0 h-auto justify-start p-0 bg-transparent border-0 shadow-0 text-bc underline-offset-2 active:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium px-0',
  neutral:
    '  btn-neutral bg-neutral px-3 text-nc bg-neutral  font-medium  *:text-nc  shadow-sm drop-shadow-sm border-neutral   **:text-nc',
  none: 'items-center bg-transparent border-0 border-transparent shadow-transparent shadow-none inset-shadow-none inset-shadow-transparen drop-shadow-transparent drop-shadow-none p-0 fx-0 outline-0 ring-0',
  opacity: '',
=======
  none: 'bg-transparent border-0 shadow-none inset-shadow-none drop-shadow-none p-0',
>>>>>>> refs/remotes/origin/main
  outline: 'border px-3 fx-0 shadow-xs font-medium border-b3',
  red: 'px-3  bg-domination hover:bg-domination/80 border-domination/60 font-semibold text-white **:text-white',
  secondary:
    'bg-tint-b3/40 fx-1 text-bc px-3 !border-b3  font-medium shadow-xs shadow-black/7 hover:inset-shadow-xs',
}

export const baseVariants = tv({
=======
export const shapeVariants = {
  circle: '!btn-square rounded-full grid !p-0 place-items-center overflow-hidden',
  square: 'grid aspect-square place-items-center ',
}

export const elementBaseVariants = {
  btn: 'btn focus:outline-0 focus-visible:outline-0 focus-visible:ring-0  bg-transparent has-[first:[&_svg]]:gap-3 has-not-[span:empty]:gap-2 text-start has-[span:empty]:gap-0 [&_svg]:inline-flex align-middle text-3 font-normal items-center disabled:opacity-80 flex',
  indicator: 'py-0.5 h-9 bg-b2 px-1 items-center justify-center grid  rounded-xl inset-shadow-xs inset-shadow-black/3  border text-bc/50 relative',
  label: 'font-medium flex gap-4 items-center',
  none: '',
  toggle: 'inline-flex items-center justify-center btn btn-ghost font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 on:bg-b2 on:border-b3/60 [&_svg]:pointer-events-none  gap-2 on:btn-active'
}

const baseVariants = tv({
>>>>>>> refs/remotes/origin/main
  variants: {

    /* base */
    base: {
      ...elementBaseVariants
    },

    /* variant */
    variant: {
      ...variantVariants
    },

    // states
    states: {
      states: 'active:btn-active on:btn-active open:btn-active'
    },
    // disabled
    disabled: {
<<<<<<< HEAD
      disabled: 'has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-60 '
=======
      disabled: 'has-disabled:opacity-60 has-disabled:pointer-events-none has-disabled:cursor-not-allowed '
>>>>>>> refs/remotes/origin/main
    },

    // hover
    hover: {
      hidden: 'hidden',
      base: 'hover:!bg-b1 hover:!border-b3 fx-0 ',
      btn: 'hover:!bg-b2  hover:!border-b3/80 hover:!text-bc hover:**:!text-bc',
<<<<<<< HEAD
      ghost: 'on:border-b3 on:shadow-xs on:bg-b3/36 on:!fx-1  [&_.btn-active]:!bg-b2 [&_.btn-active]:!border-b3',
      ghostBase: 'on:!bg-b1 open:!bg-b1 on:shadow-sm on:!border-b3/80 open:!border-b3/80 fx-0 px-3  font-medium shadow-black/4 open:shadow-sm ',
      input: 'hover:ring-bc/50 transition-all duration-200 hover:ring',
      inset: 'hover:!border-b3/50 hover:fx-1 border hover:!bg-transparent hover:inset-shadow-xs ',
      label: '',
      link: 'underline-offset-2 hover:underline hover:opacity-100',
      neutral:
    ' hover:!text-nc hover:!bg-neutral/95 hover:**:!text-nc hover:!border-n3 hover:shadow-sm hover:drop-shadow-sm ',
      none: '!fx-0 border-0 !bg-transparent p-0 inset-shadow-none shadow-none drop-shadow-none hover:!bg-transparent',
      opacity: 'opacity-84',
      outline: 'hover:!fx-0 hover:!border-b3 hover:!border hover:shadow-xs',
      red: '',
      secondary: ' hover:!bg-tint-b3/40 hover:!border-b3 px-3   hover:inset-shadow-xs hover:shadow-xs hover:shadow-black/7',
=======
      emboss: '',
      field: '',
      ghost: 'on:border-b3 on:shadow-xs on:bg-b3/36 on:!fx-1  [&_.btn-active]:!bg-b2 [&_.btn-active]:!border-b3',
      input: 'hover:ring hover:ring-bc/50 transition-all duration-200',
      label: '',
      link: 'underline-offset-2 hover:underline',
      neutral:
    ' hover:!text-nc hover:!bg-neutral/95 hover:**:!text-nc hover:!border-n3 hover:shadow-sm hover:drop-shadow-sm ',
      none: 'hover:bg-transparent',
      outline: 'hover:inset-shadow-xxs hover:!border-b3/50 hover:!bg-transparent border ',
      red: '',
      secondary: ' hover:!bg-tint-b3/40 px-3 hover:!border-b3   hover:shadow-xs hover:shadow-black/7 hover:inset-shadow-xs',
>>>>>>> refs/remotes/origin/main
    },

    // active
    active: {
<<<<<<< HEAD
      base: 'on:!bg-b1 open:!bg-b1 on:shadow-sm on:!border-b3/80 open:!border-b3/80 fx-0 shadow-black/4  open:shadow-sm ',
      btn: 'on:!bg-b2  on:!border-b3/80',
      ghost: 'on:!bg-b2/40 on:!border-b3/40 on:fx-1',
      inset: 'on:inset-shadow-xs on:fx-1 on:!border-b3/80 on:!border on:!bg-b2',
      link: 'on:underline on:opacity-100 underline-offset-2 ',
      neutral:
    ' on:!text-nc on:!bg-neutral/95 on:**:!text-nc on:!border-n3 on:shadow-sm on:drop-shadow-sm ',
      none: 'on:bg-transparent on:!fx-0 on:!text-bc on:!opacity-100',
      outline: 'on:!fx-0 on:shadow-xs on:!border on:!border-b3',
=======
      base: 'btn-base-active on:!bg-b1 open:!bg-b1 on:shadow-sm open:shadow-sm shadow-black/4 on:!border-b3/80 open:!border-b3/80  fx-0 ',
      btn: 'on:!bg-b2  on:!border-b3/80',
      ghost: 'on:!bg-b2/40 on:!border-b3/40 on:fx-1',
      link: 'underline-offset-2 on:underline',
      neutral:
    ' on:!text-nc on:!bg-neutral/95 on:**:!text-nc on:!border-n3 on:shadow-sm on:drop-shadow-sm ',
      none: 'on:bg-transparent',
      outline: 'on:inset-shadow-xxs on:!border-bc/60 border ',
>>>>>>> refs/remotes/origin/main
      secondary: 'on:inset-shadow-xs',
    },

    // state
    state: {
      on: 'btn-active',
      open: 'btn-active',
    },

    /* size */
    size: {
      ...sizeVariants
    },
  },
})

export const buttonVariants = tv({
  extend: baseVariants,

  // variants
  defaultVariants: {
    base: 'btn',
    disabled: 'disabled',
    size: 'md',
    states: 'states',
    variant: 'btn',
  },
  variants: {
    size: {
      icon: 'btn-square !grid size-11 !place-items-center rounded-lg !p-0',
    }
  }
})

export const selectVariants = tv({
  defaultVariants: {
    base: 'none',
    disabled: 'disabled',
    states: 'states',
    variant: 'none',
  },
  extend: baseVariants,
})

export const labelVariants = tv({
  defaultVariants: {
    base: 'label',
    disabled: 'disabled',
    states: 'states',
  },
  extend: baseVariants,
})

export const elementVariants = tv({
  defaultVariants: {
    base: 'none',
    disabled: 'disabled',
    states: 'states',
  },
  extend: baseVariants,
})

export const triggerVariants = tv({
  base: 'flex w-fit items-center',
  extend: baseVariants,
})

export const collapsibleTriggerVariants = tv({
  defaultVariants: {
    base: 'collapsibleTrigger',
  },
  extend: baseVariants,
  variants: {
    base: {
      collapsibleTrigger: 'flex cursor-pointer items-center justify-between gap-3 [&_svg]:opacity-60 [&_svg]:opacity-100'
    }
  },
})

export const kbdVariants = tv({
  base: 'pointer-events-none  relative inline-flex w-fit min-w-5 items-center justify-center   gap-1 rounded-md border  p-1 !text-[0.92rem] shadow-xs select-none [&_svg:not([class*="size-"])]:size-3 ',
  defaultVariants: {
    variant: 'secondary',
  },
  extend: baseVariants,

})
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type SelectVariants = VariantProps<typeof selectVariants>
export type ElementVariants = VariantProps<typeof elementVariants>
export type LabelVariants = VariantProps<typeof labelVariants>
export type KbdVariants = VariantProps<typeof kbdVariants>
export type TriggerVariants = VariantProps<typeof triggerVariants>
export type CollapsibleTriggerVariants = VariantProps<typeof collapsibleTriggerVariants>
