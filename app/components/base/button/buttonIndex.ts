import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-neutral text-nc shadow hover:bg-neutral/90',
        destructive:
          'bg-destructive text-destructive shadow-sm hover:bg-destructive/90',
        outline:
          'border border-b4/80 bg-background shadow-xs hover:bg-b2/60 hover:text-bc/60',
        secondary:
          'bg-b3 text-bc shadow-sm hover:bg-b3/80',
        ghost: 'hover:bg-b2/60 hover:text-b2/60',
        link: 'text-neutral underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7 rounded px-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
