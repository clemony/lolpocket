import type { PrimitiveProps } from 'reka-ui'
import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const gc = 'relative grid aspect-square place-items-center p-0 shrink-0'
const sv = {
  lg: [...gc, 'h-12'],
  md: [...gc, 'size-10'],
  sm: [...gc, 'size-9 text-2'],
  xl: [...gc, 'size-14'],
  xs: [...gc, 'size-8 text-2'],
  xxs: [...gc, 'size-6 text-2'],
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
  'icon': ' grid aspect-square place-items-center size-4.5',

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
  emboss: 'btn-outline px-3  font-medium border-b3 shadow-xs shadow-black/6 drop-shadow-xs hover:inset-shadow-xs hover:inset-shadow-black/6 ',
  field: 'field-box',
  ghost: 'btn-ghost hover:bg-tint-b2/20 hover:border-b3/60  font-medium px-3 ',
  ghostBase: 'on:!bg-b1 open:!bg-b1 on:shadow-sm open:shadow-sm shadow-black/4 on:!border-b3/80 open:!border-b3/80  fx-0 font-medium px-3 ',
  input: 'btn-outline px-3 !bg-transparent inset-shadow-xs  font-medium border-b3 shadow-[1px_1px_1px_rgba(0,0,0,0.04)]',
  label: 'font-medium opacity-50 items-center flex gap-3',
  link: 'fx-0 h-auto justify-start p-0 bg-transparent border-0 shadow-0 text-bc underline-offset-2 active:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium px-0',
  neutral:
    '  btn-neutral bg-neutral px-3 text-nc bg-neutral  font-medium  *:text-nc  shadow-sm drop-shadow-sm border-neutral   **:text-nc',
  none: 'bg-transparent border-0 shadow-none inset-shadow-none drop-shadow-none p-0',
  outline: 'border px-3 fx-0 shadow-xs font-medium border-b3',
  red: 'px-3  bg-domination hover:bg-domination/80 border-domination/60 font-semibold text-white **:text-white',
  secondary:
    'bg-tint-b3/40 fx-1 text-bc px-3 !border-b3  font-medium shadow-xs shadow-black/7 hover:inset-shadow-xs',
}

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
      disabled: 'has-disabled:opacity-60 has-disabled:pointer-events-none has-disabled:cursor-not-allowed '
    },

    // hover
    hover: {
      hidden: 'hidden',
      base: 'hover:!bg-b1 hover:!border-b3 fx-0 ',
      btn: 'hover:!bg-b2  hover:!border-b3/80 hover:!text-bc hover:**:!text-bc',
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
    },

    // active
    active: {
      base: 'btn-base-active on:!bg-b1 open:!bg-b1 on:shadow-sm open:shadow-sm shadow-black/4 on:!border-b3/80 open:!border-b3/80  fx-0 ',
      btn: 'on:!bg-b2  on:!border-b3/80',
      ghost: 'on:!bg-b2/40 on:!border-b3/40 on:fx-1',
      link: 'underline-offset-2 on:underline',
      neutral:
    ' on:!text-nc on:!bg-neutral/95 on:**:!text-nc on:!border-n3 on:shadow-sm on:drop-shadow-sm ',
      none: 'on:bg-transparent',
      outline: 'on:inset-shadow-xxs on:!border-bc/60 border ',
      secondary: 'on:inset-shadow-xs',
    },

    // state
    state: {
      on: 'btn-active',
      open: 'btn-active',
    },

    /* size */
    size: {
      'icon': 'btn-square size-11 !grid !place-items-center rounded-lg !p-0',
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

export const elementVariants = tv({
  defaultVariants: {
    base: 'none',
    disabled: 'disabled',
    states: 'states',
  },
  extend: baseVariants,
})

export const tabListVariants = tv({
  base: 'inline-flex items-center justify-center p-1 text-bc',
  extend: baseVariants,
  variants: {
    orientation: {
      vertical: '!size-full',
    },
    variant: {
      default: 'rounded-lg bg-b2',
      transparent: '!bg-transparent fx-0 border-none shadow-none inset-shadow-none',
    }
  },
})

export const tabTriggerVariants = tv({
  base: 'inline-flex gap-3 items-center justify-center whitespace-nowrap  px-3  py-1.25 text-3 z-2 cursor-pointer  hover:text-bc hover:**:text-bc **:text-bc text-bc ring-b3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral focus-visible:ring-offset-2 disabled:pointer-events-none disabled:text-bc/20 disabled:**:text-bc/20  data-[state=active]:bg-transparent font-medium  data-[state=active]:shadow-none',
  variants: {
    variant: {}
  }
})
export const tabIndicatorVariants = tv({
  extend: baseVariants,
})

export const toggleVariants = tv({
  defaultVariants: {
    base: 'toggle',
    disabled: 'disabled',
    size: 'md',
    states: 'states',
    variant: 'outline',
  },
  extend: baseVariants,
})
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type SelectVariants = VariantProps<typeof selectVariants>
export type ElementVariants = VariantProps<typeof elementVariants>
export type TabIndicatorVariants = VariantProps<typeof tabIndicatorVariants>
export type LabelVariants = VariantProps<typeof labelVariants>
export type ToggleVariants = VariantProps<typeof toggleVariants>
export type TabListVariants = VariantProps<typeof tabListVariants>
export type TabTriggerVariants = VariantProps<typeof tabTriggerVariants>
export type ToggleGroupVariants = VariantProps<typeof toggleVariants>

export interface ButtonProps extends PrimitiveProps {
  active?: ButtonVariants['active']
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}
