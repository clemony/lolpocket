import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

// One master style definition
export const variantStyle = cva('data-[state=active]:btn-active text-start data-[state=open]:btn-active has-[span:empty]:gap-0  [&_svg]:inline-flex align-middle text-3 font-normal items-center disabled:opacity-80 flex', {
  variants: {
    variant: {
      'default': '',
      'base': 'btn bg-transparent hover:bg-transparent fx-0 shadow-0  border-0',
      'btn': 'px-3  btn  bg-tint-b2/60 border-b2',
      'neutral': ' px-3 btn-neutral btn bg-neutral text-nc bg-n1   *:text-nc  hover:text-nc shadow-sm drop-shadow-sm border-n1 hover:bg-n1/85 hover:**:text-nc',

      'outline': 'btn btn-outline px-3  border-b3',
      'secondary': 'bg-b3 text-bc px-3  shadow-sm hover:bg-b3/80',
      'ghost': 'btn btn-ghost px-3 ',
      'link': 'text-bc underline-offset-2 hover:underline cursor-pointer font-medium px-0',
      'shadow': 'btn px-3  shadow-xs shadow-black/6 hover:shadow-black-2 drop-shadow-black/2 drop-shadow-xs hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6 border-b3/80 bg-b1 btn-extras hover:bg-tint-b2/20 noise-sm [&.btn-active]:bg-tint-b2/20 ',
      'label': 'font-medium opacity-60',
      'disabled': '',
      'shadow-outline': 'btn btn-shadow px-3 ',
    },
    size: {
      default: '',
      base: '',
      xs: 'btn-xs h-8 text-1 rounded-md',
      sm: 'btn-sm h-9 text-2 rounded-lg',
      md: 'btn-md h-10',
      lg: 'btn-lg h-12',
      xl: 'btn-xl h-14',
      icon: 'btn-square',
    },
    shape: {
      square: 'btn-square grid place-items-center ',
      circle: '!btn-circle !rounded-full  grid place-items-center ',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export type VariantStyleProps = VariantProps<typeof variantStyle>

// Helpers for each component type
export function buttonVariants(props?: Partial<VariantStyleProps>) {
  return variantStyle({ variant: 'btn', size: 'md', ...props })
}

export function labelVariants(props?: Partial<VariantStyleProps>) {
  return variantStyle({ variant: 'label', size: 'sm', ...props })
}