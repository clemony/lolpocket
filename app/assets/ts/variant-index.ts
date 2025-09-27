import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const buttonBase
  = 'data-[state=active]:btn-active data-[state=checked]:btn-active data-[state=open]:btn-active has-[first:[&_svg]]:gap-3 has-not-[span:empty]:gap-2 text-start data-[state=open]:btn-active has-[span:empty]:gap-0  [&_svg]:inline-flex align-middle text-3 font-normal items-center disabled:opacity-80 flex'

export const toggleBase
  = 'inline-flex items-center justify-center btn btn-ghost font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-b2 data-[state=on]:border-b3/60 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 gap-2 '

const variantStyles = {
  hidden: 'hidden',
  base: 'btn bg-transparent hover:bg-transparent shadow-none border-transparent inset-shadow-none fx-0  drop-shadow-transparent shadow-none drop-shadow-none [--btn-depth:unset] [--btn-shadow:unset]  border-0',
  btn: 'px-3  btn  bg-tint-b2/60 border-b2 [&_.btn-active]:!bg-tint-b2/10  [&_.btn-active]:!border-b3/80 font-medium',
  disabled: '',
  emboss: 'btn btn-outline px-3  font-medium border-b3 shadow-xs shadow-black/6 drop-shadow-xs hover:inset-shadow-xs hover:inset-shadow-black/6 ',
  field: 'btn field-box',
  ghost: 'btn btn-ghost hover:bg-tint-b2/20 hover:border-b3/60  font-medium px-3 data-[state=checked]:border-b3 data-[state=checked]:shadow-xs data-[state=checked]:bg-b3/36 data-[state=checked]:!fx-1  [&_.btn-active]:bg-b2/60 [&_.btn-active]:border-b3/60',
  label: 'font-medium opacity-50 items-center flex gap-3',
  link: 'text-bc underline-offset-2 data-[state=active]:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium px-0',
  neutral:
    ' px-3 btn-neutral btn bg-neutral text-nc bg-neutral  font-medium  *:text-nc  hover:text-nc shadow-sm drop-shadow-sm border-neutral hover:bg-neutral/85 hover:**:text-nc',
  outline: 'btn btn-outline px-3  font-medium border-b3',
  red: 'px-3  btn  bg-domination hover:bg-domination/80 border-domination/60 font-semibold text-white **:text-white',
  secondary:
    'btn bg-tint-b3/40 text-bc px-3 !border-b3  font-medium shadow-sm hover:inset-shadow-xs',
  shadow:
    'btn px-3  font-medium shadow-xs shadow-black/6 hover:shadow-black-2 drop-shadow-black/2 drop-shadow-xs hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6 border-b3/80  bg-transparent  hover:bg-tint-b3/30 noise-sm [&.btn-active]:bg-tint-b2/20 ',
  tick: 'btn border-transparent hover:border-b3/60 bg-transparent hover:bg-tint-b2/60 fx-0 hover:fx-1 text-bc  font-medium ',
}

const hoverStyles = {
  b1: 'hover:!bg-b1 hover:!border-b3 fx-0 ',
  base: 'hover:bg-transparent',
  btn: 'hover:!bg-b2  hover:!border-b3/80',
  ghost: 'hover:!bg-b2/40 hover:!border-b3/40 hover:fx-1',
  link: 'underline-offset-2 hover:underline',
  neutral:
    ' hover:!text-nc hover:!bg-neutral/85 hover:**:!text-nc hover:!border-n3 hover:shadow-sm hover:drop-shadow-sm ',
  none: '',
  outline: 'hover:inset-shadow-xxs hover:!border-bc/60 border ',
  secondary: 'hover:inset-shadow-xs',
  shadow:
    'hover:shadow-black-2  hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6  hover:bg-tint-b2/20 ',
}

const activeStyles = {
  b1: '[&.btn-active]:!bg-b1 [&.btn-active]:!border-b4/60 fx-0 ',
  base: '[&.btn-active]:bg-transparent',
  btn: '[&.btn-active]:!bg-b2  [&.btn-active]:!border-b3/80',
  ghost: '[&.btn-active]:!bg-b2/40 [&.btn-active]:!border-b3/40 [&.btn-active]:fx-1',
  link: 'underline-offset-2 [&.btn-active]:underline',
  neutral:
    ' [&.btn-active]:!text-nc [&.btn-active]:!bg-neutral/85 [&.btn-active]:**:!text-nc [&.btn-active]:!border-n3 [&.btn-active]:shadow-sm [&.btn-active]:drop-shadow-sm ',
  none: '',
  outline: '[&.btn-active]:inset-shadow-xxs [&.btn-active]:!border-bc/60 border ',
  secondary: '[&.btn-active]:inset-shadow-xs',
  shadow:
    '[&.btn-active]:shadow-black-2  [&.btn-active]:inset-shadow-xs [&.btn-active]:drop-shadow-none [&.btn-active]:inset-shadow-black/6  [&.btn-active]:bg-tint-b2/20 ',
}

const sizes = {
  base: '',
  icon: 'aspect-square rounded-lg',
  lg: 'rounded-lg h-12',
  md: 'rounded-lg h-10',
  sm: 'h-9 text-2 rounded-lg',
  xl: 'rounded-lg h-14',
  xs: 'h-8 text-2 rounded-md',
  xxs: 'h-6 text-2 rounded-md',
}

export const buttonVariants = cva(buttonBase, {
  variants: {
    active: {
      ...activeStyles
    },
    defaultVariants: {
      hover: 'btn',
      size: 'md',
      variant: 'btn',
    },
    hover: {
      ...hoverStyles,
      default: 'btn',
    },
    shape: {
      circle: '!btn-circle grid  place-items-center !rounded-full ',
      square: 'grid aspect-square place-items-center ',
    },
    size: {
      base: '',
      default: 'md',
      icon: 'aspect-square rounded-lg',
      lg: 'btn-lg rounded-lg',
      md: 'btn-md rounded-lg',
      sm: 'btn-sm rounded-lg text-2',
      xl: 'btn-xl rounded-lg',
      xs: 'btn-xs rounded-md text-2',
      xxs: 'h-6 rounded-md text-2',
    },
    variant: {
      ...variantStyles,
      default: 'btn',
    },
  },
})

export const labelVariants = cva('', {
  variants: {
    hover: {
      ...hoverStyles,
      default: 'outline',
    },
    size: {
      ...sizes,
      default: 'sm',
    },
    type: {},
    variant: {
      ...variantStyles,
      default: 'font-medium opacity-60',
    },
  },
})

export const toggleVariants = cva('', {
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  variants: {
    size: {
      ...sizes,
      default: 'md',
    },
    type: {
      default: toggleBase,
    },
    variant: {
      default: 'bg-transparent',
      outline:
        'border-input hover:bg-accent hover:text-accent-foreground border bg-transparent',
    },
  },
})

export type ToggleVariants = VariantProps<typeof toggleVariants>

export type ButtonVariants = VariantProps<typeof buttonVariants>
export type LabelVariants = VariantProps<typeof labelVariants>
