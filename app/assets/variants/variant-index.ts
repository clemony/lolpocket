import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const sizeVariants = {
  lg: 'rounded-lg h-12',
  md: 'rounded-lg h-10',
  none: '',
  sm: 'h-9 text-2 rounded-lg',
  xl: 'rounded-lg h-14',
  xs: 'h-8 text-2 rounded-md',
  xxs: 'h-6 text-2 rounded-md',
}

export const variantVariants = {
  base: '  bg-b1/90 px-3  border-b3',
  btn: 'px-3  bg-tint-b2/60 border-b2 [&_.btn-active]:!bg-tint-b2/10  [&_.btn-active]:!border-b3/80 font-medium',
  emboss: 'btn-outline px-3  font-medium border-b3 shadow-xs shadow-black/6 drop-shadow-xs hover:inset-shadow-xs hover:inset-shadow-black/6 ',
  field: 'btn field-box',
  ghost: 'btn-ghost hover:bg-tint-b2/20 hover:border-b3/60  font-medium px-3 on:border-b3 on:shadow-xs on:bg-b3/36 on:!fx-1  [&_.btn-active]:!bg-b2 [&_.btn-active]:!border-b3',
  input: 'btn btn-outline px-3 !bg-transparent inset-shadow-xs  font-medium border-b3 shadow-[1px_1px_1px_rgba(0,0,0,0.04)]',
  label: 'font-medium opacity-50 items-center flex gap-3',
  link: 'fx-0 h-auto justify-start p-0 bg-transparent border-0 shadow-0 text-bc underline-offset-2 active:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium px-0',
  neutral:
    '  btn-neutral bg-neutral px-3 text-nc bg-neutral  font-medium  *:text-nc  hover:text-nc shadow-sm drop-shadow-sm border-neutral hover:bg-neutral/85 hover:**:text-nc **:text-nc',
  none: 'btn bg-transparent hover:bg-transparent shadow-none border-transparent inset-shadow-none fx-0  drop-shadow-transparent shadow-none drop-shadow-none [--btn-depth:unset] [--btn-shadow:unset]  border-0',
  outline: 'btn btn-outline px-3 !bg-transparent  font-medium border-b3',
  red: ' btn px-3  bg-domination hover:bg-domination/80 border-domination/60 font-semibold text-white **:text-white',
  secondary:
    'btn bg-tint-b3/40 fx-1 text-bc px-3 !border-b3  font-medium shadow-xs shadow-black/7 hover:inset-shadow-xs',
  shadow:
    'btn px-3  font-medium shadow-xs shadow-black/6 hover:shadow-black-2 drop-shadow-black/2 drop-shadow-xs hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6 border-b3/80  bg-transparent  hover:bg-tint-b3/30 noise-sm [&.btn-active]:bg-tint-b2/20 ',
}

const baseVariants = tv({
  variants: {

    // disabled
    disabled: {
      disabled: 'has-disabled:opacity-60 has-disabled:pointer-events-none has-disabled:cursor-not-allowed '
    },
    states: {
      states: 'active:btn-active on:btn-active open:btn-active'
    },

    /* base */
    base: {
      btn: 'btn focus:outline-0 focus-visible:outline-0 focus-visible:ring-0   has-[first:[&_svg]]:gap-3 has-not-[span:empty]:gap-2 text-start has-[span:empty]:gap-0 [&_svg]:inline-flex align-middle text-3 font-normal items-center disabled:opacity-80 flex',
      label: 'font-medium opacity-60',
      none: '',
      toggle: 'inline-flex items-center justify-center btn btn-ghost font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 on:bg-b2 on:border-b3/60 [&_svg]:pointer-events-none  gap-2 on:btn-active',
    },
    /* hover */
    hover: {
      base: 'hover:!bg-b1 hover:!border-b3 fx-0 ',
      btn: 'hover:!bg-b2  hover:!border-b3/80',
      emboss: '',
      field: '',
      ghost: 'hover:!bg-b2/40 hover:!border-b3/40 hover:fx-1',
      input: 'hover:ring hover:ring-bc/50 transition-all duration-200',
      label: '',
      link: 'underline-offset-2 hover:underline',
      neutral:
    ' hover:!text-nc hover:!bg-neutral/95 hover:**:!text-nc hover:!border-n3 hover:shadow-sm hover:drop-shadow-sm ',
      none: 'hover:bg-transparent',
      outline: 'hover:inset-shadow-xxs hover:!border-b3/50 hover:!bg-transparent border ',
      red: '',
      secondary: 'hover:inset-shadow-xs',
      shadow:
    'hover:shadow-black-2  hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6  hover:bg-tint-b2/20 ',
    },

    /* size */
    size: {
      icon: 'btn-square size-11 !grid !place-items-center rounded-lg !p-0',
      ...sizeVariants
    },

    /* shape */
    shape: {
      circle: '!btn-circle grid !p-0 place-items-center overflow-hidden',
      square: 'grid aspect-square place-items-center ',
    },

    /* variant */
    variant: {
      ...variantVariants
    },

    /* active */
    active: {
      base: 'on:!bg-b1 on:shadow-sm shadow-black/4 on:!border-b3/80 fx-0 ',
      btn: 'on:!bg-b2  on:!border-b3/80',
      ghost: 'on:!bg-b2/40 on:!border-b3/40 on:fx-1',
      link: 'underline-offset-2 on:underline',
      neutral:
    ' on:!text-nc on:!bg-neutral/95 on:**:!text-nc on:!border-n3 on:shadow-sm on:drop-shadow-sm ',
      none: 'on:bg-transparent',
      outline: 'on:inset-shadow-xxs on:!border-bc/60 border ',
      secondary: 'on:inset-shadow-xs',
      shadow:
    'on:shadow-black-2  on:inset-shadow-xs on:drop-shadow-none on:inset-shadow-black/6  on:bg-tint-b2/20 ',
    }
  },
})

export const buttonVariants = tv({
  defaultVariants: {
    base: 'btn',
    disabled: 'disabled',
    size: 'md',
    states: 'states',
    variant: 'btn',
  },
  extend: baseVariants,
})

export const labelVariants = tv({
  defaultVariants: {
    base: 'btn',
    disabled: 'disabled',
    states: 'states',
  },
  extend: baseVariants,
})

export const toggleVariants = tv({
  defaultVariants: {
    base: 'toggle',
    disabled: 'disabled',
    size: 'md',
    states: 'states',
    variant: 'shadow',
  },
  extend: baseVariants,
})
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type LabelVariants = VariantProps<typeof labelVariants>
export type ToggleVariants = VariantProps<typeof toggleVariants>
export type ToggleGroupVariants = VariantProps<typeof toggleVariants>