import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const labelVariants = cva(
  'text-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rounded-md',
  {
    variants: {
      button: {
        true: 'inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-2 font-medium ring-offset-b1 transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-n1/80 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 ',
      },
      variant: {
        default: 'bg-b2 text-bc hover:bg-b3/80',
        n1: 'bg-n1 !text-nc hover:bg-n1/80  **:!text-nc !hover:text-nc rounded-md shadow-sm shadow-n1/10',
        destructive: 'bg-error text-error-content hover:bg-error/90',
        outline:
          'border border-b2  border border-b2 -b3 bg-transparent hover:bg-b2/60 hover:text-bc shadow-sm',
        ghost: 'hover:bg-b2/60 hover:text-accent-bc',
        link: 'text-n1 underline-offset-4 hover:underline',
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
  },
)

export type LabelVariants = VariantProps<typeof labelVariants>
