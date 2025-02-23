import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

// export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-2 font-medium ring-offset-b1 transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral/80 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 border border-b2 -b3 shadow-sm',
  {
    variants: {
      variant: {
        default: 'bg-b2 hover:bg-b3/80',
        neutral: 'bg-neutral !text-nc hover:bg-neutral/80 hover:text-nc',

        outline: 'border border-b2   bg-b1 hover:bg-b2/60 shadow-none',

        ghost: 'hover:bg-b2/60 shadow-none',
        simple: '[&_svg]:opacity-70 [&_svg]:hover:opacity-100 [&_svg]:hover:stroke-2 [&_svg]:hover:drop-shadow-sm',
        link: 'text-neutral underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7 rounded-sm px-2',
        sm: 'h-8 rounded-md px-3',
        md: 'h-10 rounded-md px-6',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
