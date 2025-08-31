import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const buttonBase = 'data-[state=active]:btn-active has-[first:[&_svg]]:gap-3 has-not-[span:empty]:gap-2 text-start data-[state=open]:btn-active has-[span:empty]:gap-0  [&_svg]:inline-flex align-middle text-3 font-normal items-center disabled:opacity-80 flex'

export const toggleBase = 'inline-flex items-center justify-center btn btn-ghost font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-b2 data-[state=on]:border-b3/60 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 gap-2'

const variantStyles = {
  base: 'btn bg-transparent hover:bg-transparent shadow-none border-transparent inset-shadow-none fx-0  drop-shadow-none  border-0',

  btn: 'px-3  btn  bg-tint-b2/60 border-b2 [&_.btn-active]:bg-tint-b2/80 font-medium',

  label: 'font-medium opacity-60',

  neutral: ' px-3 btn-neutral btn bg-neutral text-nc bg-neutral  font-medium  *:text-nc  hover:text-nc shadow-sm drop-shadow-sm border-neutral hover:bg-neutral/85 hover:**:text-nc',

  outline: 'btn btn-outline px-3  font-medium border-b3',

  secondary: 'btn bg-tint-b3/40 text-bc px-3 !border-b3  font-medium shadow-sm hover:inset-shadow-xs',

  ghost: 'btn btn-ghost hover:!bg-tint-b2/40 font-medium px-3 ',

  link: 'text-bc underline-offset-2 data-[state=active]:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium px-0',

  tick: 'btn border-transparent hover:border-b3/60 bg-transparent hover:bg-tint-b2/60 fx-0 hover:fx-1 text-bc  font-medium ',

  shadow: 'btn px-3  font-medium shadow-xs shadow-black/6 hover:shadow-black-2 drop-shadow-black/2 drop-shadow-xs hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6 border-b3/80  bg-transparent  hover:bg-tint-b3/30 noise-sm [&.btn-active]:bg-tint-b2/20 ',

  disabled: '',
  hidden: 'hidden',
}

const hoverStyles = {
  base: 'hover:bg-transparent',

  btn: 'hover:bg-b2 ',

  neutral: ' hover:!text-nc hover:!bg-neutral/85 hover:**:!text-nc hover:!border-n3 hover:shadow-sm hover:drop-shadow-sm ',

  outline: 'hover:inset-shadow-xxs hover:!border-bc/60 border ',

  secondary: 'hover:inset-shadow-xs',

  ghost: 'hover:!bg-b2/40 hover:!border-b3/40 hover:fx-1',

  link: 'underline-offset-2 hover:underline',

  shadow: 'hover:shadow-black-2  hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6  hover:bg-tint-b2/20 ',

}

const sizes = {
  base: '',
  xxs: 'h-6 text-2 rounded-md',
  xs: 'h-8 text-2 rounded-md',
  sm: 'h-9 text-2 rounded-lg',
  md: 'rounded-lg h-10',
  lg: 'rounded-lg h-12',
  xl: 'rounded-lg h-14',
  icon: 'aspect-square rounded-lg',

}

export const buttonVariants = cva(buttonBase, {
  variants: {
    variant: {
      ...variantStyles,
      default: 'btn',
    },
    hover: {
      ...hoverStyles,
      default: 'btn',
    },
    size: {
      ...sizes,
      default: 'md',
    },
    shape: {
      square: 'grid place-items-center aspect-square ',
      circle: '!btn-circle !rounded-full  grid place-items-center ',
    },
  },
})

export const labelVariants = cva('', {

  variants: {
    type: {},
    variant: {
      ...variantStyles,
      default: 'font-medium opacity-60',
    },
    size: {
      ...sizes,
      default: 'sm',
    },
    hover: {
      ...hoverStyles,
      default: 'outline',
    },
  },
})

export const toggleVariants = cva('', {
  variants: {
    type: {
      default: toggleBase,
    },
    variant: {
      default: 'bg-transparent',
      outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      ...sizes,
      default: 'md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export type ToggleVariants = VariantProps<typeof toggleVariants>

export type ButtonVariants = VariantProps<typeof buttonVariants>
export type LabelVariants = VariantProps<typeof labelVariants>
