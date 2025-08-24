import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const buttonBase = 'data-[state=active]:btn-active text-start data-[state=open]:btn-active has-[span:empty]:gap-0  [&_svg]:inline-flex align-middle text-3 font-normal items-center disabled:opacity-80 flex'

const variantStyles = {
  'base': 'btn bg-transparent hover:bg-transparent fx-0 shadow-0  border-0',

  /* ☑️ */
  'btn': 'px-3  btn  bg-tint-b2/60 border-b2',

  /* 🏷️ */
  'label': 'font-medium opacity-60',

  /* 😑 */
  'neutral': ' px-3 btn-neutral btn bg-neutral text-nc bg-neutral   *:text-nc  hover:text-nc shadow-sm drop-shadow-sm border-neutral hover:bg-n1/85 hover:**:text-nc',

  /* 🔳 */
  'outline': 'btn btn-outline px-3  border-b3',

  /* 2️⃣ */
  'secondary': 'btn bg-tint-b3/40 text-bc px-3 !border-b3  shadow-sm hover:inset-shadow-xs',

  /* 👻 */
  'ghost': 'btn btn-ghost  px-3 ',

  /* 🔗 */
  'link': 'text-bc underline-offset-2 hover:underline cursor-pointer font-medium px-0',

  /* 👥 */
  'shadow': 'btn px-3  shadow-xs shadow-black/6 hover:shadow-black-2 drop-shadow-black/2 drop-shadow-xs hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6 border-b3/80 bg-b1 btn-extras hover:bg-tint-b2/20 noise-sm [&.btn-active]:bg-tint-b2/20 ',

  /* 🛑 */
  'disabled': '',

  /* 🔲  */
  'shadow-outline': 'btn px-3  shadow-xs shadow-black/6 hover:shadow-black-2 drop-shadow-black/2 drop-shadow-xs hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6 border-b3/80 bg-transparent btn-extras hover:bg-tint-b3/30 noise-sm [&.btn-active]:bg-tint-b2/20 ',
}

const hoverStyles = {
  base: 'hover:bg-transparent',

  btn: 'hover:bg-b2 ',

  neutral: ' hover:!text-nc hover:!bg-neutral/85 hover:**:!text-nc hover:!border-n3 hover:shadow-sm hover:drop-shadow-sm ',

  outline: 'hover:inset-shadow-xxs hover:!border-bc/60 border ',

  secondary: 'hover:inset-shadow-xs',

  ghost: '',

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
      square: 'btn-square grid place-items-center aspect-square ',
      circle: '!btn-circle !rounded-full  grid place-items-center ',
    },
  },
})

export const labelVariants = cva('', {

  variants: {
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

export type ButtonVariants = VariantProps<typeof buttonVariants>
export type LabelVariants = VariantProps<typeof labelVariants>
