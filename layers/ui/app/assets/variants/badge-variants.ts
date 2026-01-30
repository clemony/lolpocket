import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const sizeVariants = buildSizeVariants()
const variantVariants = createVariants()

export const badgeVariants = tv({
  base: 'badge focus:ring-neutral inline-flex w-fit items-center rounded-lg text-sm/4 font-normal transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  extend: 'baseVariants()',
  variants: {
    size: {
      ...sizeVariants,
    },
    variant: {
      ...variantVariants,
      default: 'badge-default',
      shortcut: 'opacity-60',
    },
  },
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
