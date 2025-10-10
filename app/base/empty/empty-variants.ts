import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const emptyMediaVariants = cva(
  'mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: 'bg-b2 text-bc flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*=\'size-\'])]:size-6',
      },
    },
  },
)

export type EmptyMediaVariants = VariantProps<typeof emptyMediaVariants>
