import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const itemVariants = cva(
  `
    group/item
    [a]:hover:bg-tint-b2/60/50
    flex flex-wrap items-center rounded-md border border-transparent
    transition-colors duration-100 outline-none
    focus-visible:border-ring focus-visible:ring-offset-background
    focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2
    [a]:transition-colors
  `,
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'p-4 gap-4 ',
        sm: 'py-3 px-4 gap-2.5',
      },
      variant: {
        b2: 'bg-b2/50',
        default: 'bg-transparent',
        outline: 'border-border',
      },
    },
  },
)

export const itemMediaVariants = cva(
  `
    flex shrink-0 items-center justify-center gap-2
    group-has-[[data-slot=item-description]]/item:translate-y-0.5
    group-has-[[data-slot=item-description]]/item:self-start
    [&_svg]:pointer-events-none
  `,
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: 'size-8 border rounded-sm bg-b2 [&_svg:not([class*=\'size-\'])]:size-4',
        image:
          'size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover',
      },
    },
  },
)

export type ItemVariants = VariantProps<typeof itemVariants>
export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>
