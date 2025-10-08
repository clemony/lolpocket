import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const baseVariants = tv({
  variants: {

    // disabled
    disabled: {
      disabled: 'has-disabled:opacity-60 has-disabled:pointer-events-none has-disabled:cursor-not-allowed '
    },

    /* base */
    base: {
      btn: 'btn focus-visible:outline-0 focus-visible:ring-1 focus-visible:ring-bc/60 data-[state=active]:btn-active data-[state=checked]:btn-active group-data-[state=open]:btn-active data-[state=open]:btn-active has-[first:[&_svg]]:gap-3 has-not-[span:empty]:gap-2 text-start data-[state=open]:btn-active has-[span:empty]:gap-0  [&_svg]:inline-flex align-middle text-3 font-normal items-center disabled:opacity-80 flex',
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
      label: '',
      link: 'underline-offset-2 hover:underline',
      neutral:
    ' hover:!text-nc hover:!bg-neutral/95 hover:**:!text-nc hover:!border-n3 hover:shadow-sm hover:drop-shadow-sm ',
      none: 'hover:bg-transparent',
      outline: 'hover:inset-shadow-xxs hover:!border-bc/60 border ',
      red: '',
      secondary: 'hover:inset-shadow-xs',
      shadow:
    'hover:shadow-black-2  hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6  hover:bg-tint-b2/20 ',
    },

    /* size */
    size: {
      icon: 'btn-square size-11 !grid !place-items-center rounded-lg !p-0',
      lg: 'rounded-lg h-12',
      md: 'rounded-lg h-10',
      none: '',
      sm: 'h-9 text-2 rounded-lg',
      xl: 'rounded-lg h-14',
      xs: 'h-8 text-2 rounded-md',
      xxs: 'h-6 text-2 rounded-md',
    },

    /* shape */
    shape: {
      circle: '!btn-circle grid !p-0 place-items-center overflow-hidden',
      square: 'grid aspect-square place-items-center ',
    },

    /* variant */
    variant: {
      base: '  bg-b1/90 px-3  border-b3',
      btn: 'px-3  bg-tint-b2/60 border-b2 [&_.btn-active]:!bg-tint-b2/10  [&_.btn-active]:!border-b3/80 font-medium',
      emboss: 'btn-outline px-3  font-medium border-b3 shadow-xs shadow-black/6 drop-shadow-xs hover:inset-shadow-xs hover:inset-shadow-black/6 ',
      field: 'btn field-box',
      ghost: 'btn-ghost hover:bg-tint-b2/20 hover:border-b3/60  font-medium px-3 data-[state=checked]:border-b3 data-[state=checked]:shadow-xs data-[state=checked]:bg-b3/36 data-[state=checked]:!fx-1  [&_.btn-active]:!bg-b2 [&_.btn-active]:!border-b3',
      label: 'font-medium opacity-50 items-center flex gap-3',
      link: 'fx-0 h-auto justify-start p-0 bg-transparent border-0 shadow-0 text-bc underline-offset-2 data-[state=active]:underline group-data-[state=visible]:underline hover:underline cursor-pointer font-medium px-0',
      neutral:
    '  btn-neutral bg-neutral px-3 text-nc bg-neutral  font-medium  *:text-nc  hover:text-nc shadow-sm drop-shadow-sm border-neutral hover:bg-neutral/85 hover:**:text-nc **:text-nc',
      none: 'btn bg-transparent hover:bg-transparent shadow-none border-transparent inset-shadow-none fx-0  drop-shadow-transparent shadow-none drop-shadow-none [--btn-depth:unset] [--btn-shadow:unset]  border-0',
      outline: 'btn btn-outline px-3  font-medium border-b3',
      red: ' btn px-3  bg-domination hover:bg-domination/80 border-domination/60 font-semibold text-white **:text-white',
      secondary:
    'btn bg-tint-b3/40 fx-1 text-bc px-3 !border-b3  font-medium shadow-xs shadow-black/7 hover:inset-shadow-xs',
      shadow:
    'btn px-3  font-medium shadow-xs shadow-black/6 hover:shadow-black-2 drop-shadow-black/2 drop-shadow-xs hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6 border-b3/80  bg-transparent  hover:bg-tint-b3/30 noise-sm [&.btn-active]:bg-tint-b2/20 ',
    },

    /* active */
    active: {
      base: '[&.btn-active]:!bg-b1 [&.btn-active]:shadow-sm shadow-black/4 [&.btn-active]:!border-b3/80 fx-0 ',
      btn: '[&.btn-active]:!bg-b2  [&.btn-active]:!border-b3/80',
      ghost: '[&.btn-active]:!bg-b2/40 [&.btn-active]:!border-b3/40 [&.btn-active]:fx-1',
      link: 'underline-offset-2 [&.btn-active]:underline',
      neutral:
    ' [&.btn-active]:!text-nc [&.btn-active]:!bg-neutral/95 [&.btn-active]:**:!text-nc [&.btn-active]:!border-n3 [&.btn-active]:shadow-sm [&.btn-active]:drop-shadow-sm ',
      none: '[&.btn-active]:bg-transparent',
      outline: '[&.btn-active]:inset-shadow-xxs [&.btn-active]:!border-bc/60 border ',
      secondary: '[&.btn-active]:inset-shadow-xs',
      shadow:
    '[&.btn-active]:shadow-black-2  [&.btn-active]:inset-shadow-xs [&.btn-active]:drop-shadow-none [&.btn-active]:inset-shadow-black/6  [&.btn-active]:bg-tint-b2/20 ',
    }
  },
})

export const buttonVariants = tv({
  defaultVariants: {
    base: 'btn',
    disabled: 'disabled',
    size: 'md',
    variant: 'btn',
  },
  extend: baseVariants,
})

export const labelVariants = tv({
  defaultVariants: {
    base: 'btn',
    disabled: 'disabled',
  },
  extend: baseVariants,
})

export const toggleVariants = tv({
  defaultVariants: {
    base: 'toggle',
    disabled: 'disabled',
    size: 'md',
    variant: 'ghost'
  },
  extend: baseVariants,
})
export type ButtonVariantProps = VariantProps<typeof buttonVariants>
export type ToggleVariantProps = VariantProps<typeof toggleVariants>