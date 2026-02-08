import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const itemVariants = cva(
  `group/item [a]:hover:bg-tint-p2/60/50 focus-visible:border-ring focus-visible:ring-offset-background focus-visible:ring-ring flex flex-wrap items-center rounded-md border border-transparent transition-colors duration-100 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [a]:transition-colors`,
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border-border',
        p2: 'bg-p2/50',
      },
      size: {
        default: 'gap-4 p-4',
        sm: 'gap-2.5 px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export const itemMediaVariants = cva(
  `flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none`,
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: 'bg-p2 size-8 rounded-sm border [&_svg:not([class*=\'size-\'])]:size-4',
        image:
          'size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type ItemVariants = VariantProps<typeof itemVariants>
export type ItemMediaVariants = VariantProps<typeof itemMediaVariants>
