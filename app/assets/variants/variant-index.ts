import type { PrimitiveProps } from 'reka-ui'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const gc = 'relative grid aspect-square place-items-center p-0 shrink-0'
const sv = {
  lg: [gc, 'h-12'],
  md: [gc, 'size-10'],
  sm: [gc, 'size-9 text-2'],
  xl: [gc, 'size-14'],
  xs: [gc, 'size-8 text-2'],
  xxs: [gc, 'size-6 text-2'],
}

export const sizeVariants = {
  'lg': 'rounded-lg h-12',
  'md': 'rounded-lg h-10',
  'none': '',
  'sm': 'h-9 text-2 rounded-lg',
  'xl': 'rounded-lg h-14',
  'xs': 'h-8 text-2 rounded-lg',
  'xxs': 'h-6 text-2 rounded-md',

  /* square */
  'sq': [...gc, 'rounded-lg'],
  'sq-lg': [...sv.lg, 'rounded-lg'],
  'sq-md': [...sv.md, 'rounded-lg'],
  'sq-sm': [...sv.sm, 'rounded-lg'],
  'sq-xl': [...sv.xl, 'rounded-lg'],
  'sq-xs': [...sv.xs, 'rounded-md'],
  'sq-xxs': [...sv.xxs, 'rounded-md'],

  // anchor
  'icon': ' grid aspect-square relative place-items-center size-4.5 *:absolute',
  'icon-sm': ' grid aspect-square relative place-items-center size-4 *:absolute',

  /* circle */
  'c': [...gc, 'rounded-full'],
  'c-lg': [...sv.lg, 'rounded-full'],
  'c-md': [...sv.md, 'rounded-full'],
  'c-sm': [...sv.sm, 'rounded-full'],
  'c-xl': [...sv.xl, 'rounded-full'],
  'c-xs': [...sv.xs, 'rounded-full'],
  'c-xxs': [...sv.xxs, 'rounded-full'],
}

export const variantVariants = {
  hidden: 'hidden',
  base: 'backdrop-blur  bg-b1/90 px-3  border-b3',
  btn: 'px-3  bg-tint-b2/60 border-b3/60 font-medium text-bc **:text-bc',
  ghost: 'btn-ghost hover:bg-tint-b2/20 hover:border-b3/60 shadow-none drop-shadow-none fx-0  font-medium px-3 ',
  ghostBase: 'on:!bg-b1 open:!bg-b1 on:shadow-sm open:shadow-sm shadow-black/4 on:!border-b3/80 open:!border-b3/80  fx-0 font-medium px-3 ',
  input: 'btn-outline px-3 !bg-transparent inset-shadow-xs  font-medium border-b3 shadow-[1px_1px_1px_rgba(0,0,0,0.04)]',
  inset: 'inset-shadow-xs fx-1 !border-b3/80 border !bg-b2',
  label: 'font-medium opacity-50 items-center flex gap-3',
  link: 'fx-0 h-auto justify-start p-0 bg-transparent border-0 shadow-0 text-bc underline-offset-2 active:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium px-0',
  neutral:
    '  btn-neutral bg-neutral px-3 text-nc bg-neutral  font-medium  *:text-nc  shadow-sm drop-shadow-sm border-neutral   **:text-nc',
  none: 'items-center bg-transparent border-0 border-transparent shadow-transparent shadow-none inset-shadow-none drop-shadow-none p-0 fx-0 outline-0 ring-0',
  opacity: '',
  outline: 'border px-3 fx-0 shadow-xs font-medium border-b3',
  red: 'px-3  bg-domination hover:bg-domination/80 border-domination/60 font-semibold text-white **:text-white',
  secondary:
    'bg-tint-b3/40 fx-1 text-bc px-3 !border-b3  font-medium shadow-xs shadow-black/7 hover:inset-shadow-xs',
}

export const elementBaseVariants = {
  btn: 'btn focus:outline-0 focus-visible:outline-0 relative focus-visible:ring-0 flex bg-transparent has-[first:[&_svg]]:gap-3 has-not-[span:empty]:gap-2 text-start has-[span:empty]:gap-0 [&_svg]:inline-flex align-middle text-3 font-normal items-center disabled:opacity-80 flex',
  indicator: 'py-0.5 h-9 bg-b2 px-1 items-center justify-center grid  rounded-xl inset-shadow-xs inset-shadow-black/3  border text-bc/50 relative',
  label: 'font-medium flex gap-4 items-center',
  none: '',
}

export const baseVariants = tv({
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
      disabled: 'has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-60 '
    },

    // hover
    hover: {
      hidden: 'hidden',
      base: 'hover:!bg-b1 hover:!border-b3 fx-0 ',
      btn: 'hover:!bg-b2  hover:!border-b3/80 hover:!text-bc hover:**:!text-bc',
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
    },

    // active
    active: {
      base: 'on:!bg-b1 open:!bg-b1 on:shadow-sm on:!border-b3/80 open:!border-b3/80 fx-0 shadow-black/4  open:shadow-sm ',
      btn: 'on:!bg-b2  on:!border-b3/80',
      ghost: 'on:!bg-b2/40 on:!border-b3/40 on:fx-1',
      inset: 'on:inset-shadow-xs on:fx-1 on:!border-b3/80 on:!border on:!bg-b2',
      link: 'on:underline on:opacity-100 underline-offset-2 ',
      neutral:
    ' on:!text-nc on:!bg-neutral/95 on:**:!text-nc on:!border-n3 on:shadow-sm on:drop-shadow-sm ',
      none: 'on:bg-transparent on:!fx-0 on:!text-bc on:!opacity-100',
      outline: 'on:!fx-0 on:shadow-xs on:!border on:!border-b3',
      secondary: 'on:inset-shadow-xs',
    },

    // state
    state: {
      on: 'btn-active',
      open: 'btn-active',
    },

    /* size */
    size: {
      'icon': 'btn-square !grid size-11 !place-items-center rounded-lg !p-0',
      'sq-icon': '',
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

export const tabsTriggerVariants = tv({
  base: 'text-3 hover:text-bc hover:**:text-bc **:text-bc text-bc  disabled:text-bc/20  disabled:**:text-bc/20 z-2 inline-flex cursor-pointer  items-center justify-center gap-3 border border-transparent px-3  py-1.25 font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none data-[state=active]:bg-transparent  data-[state=active]:shadow-none',
  defaultVariants: {
    active: 'none',
    base: 'none',
    disabled: 'disabled',
    hover: 'inset',
    size: 'md',
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

export const tabListVariants = tv({
  base: 'text-bc relative grid auto-cols-auto grid-flow-col items-center justify-center p-1',
  extend: baseVariants,
  variants: {
    defaultVariants: {
      base: 'btn',
      hover: 'none'
    },
    orientation: {
      vertical: '!size-full',
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

export const tabIndicatorVariants = tv({
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

export const toggleVariants = tv({
  defaultVariants: {
    active: 'inset',
    base: 'trigger',
    disabled: 'disabled',
    hover: 'inset',
    size: 'md',
    states: 'states',
    variant: 'outline',
  },
  extend: baseVariants,
  variants: {
    base: {
      trigger: 'btn btn-ghost ring-offset-background focus-visible:ring-ring on:bg-b2 on:border-b3/60 on:btn-active inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none  disabled:opacity-50 [&_svg]:pointer-events-none'
    }
  },
})
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type SelectVariants = VariantProps<typeof selectVariants>
export type ElementVariants = VariantProps<typeof elementVariants>
export type TabIndicatorVariants = VariantProps<typeof tabIndicatorVariants>
export type LabelVariants = VariantProps<typeof labelVariants>
export type ToggleVariants = VariantProps<typeof toggleVariants>
export type KbdVariants = VariantProps<typeof kbdVariants>
export type TriggerVariants = VariantProps<typeof triggerVariants>
export type CollapsibleTriggerVariants = VariantProps<typeof collapsibleTriggerVariants>
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>
export type TabListVariants = VariantProps<typeof tabListVariants>
export type ToggleGroupVariants = VariantProps<typeof toggleVariants>

export interface ButtonProps extends PrimitiveProps {
  active?: ButtonVariants['active']
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}
