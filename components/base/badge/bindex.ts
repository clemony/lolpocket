import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

// export { default as Badge } from './Badge.vue'

export const badgeVariants = cva('inline-flex items-center rounded-md border border-b2  px-2.5 py-0.5 text-2  transition-colors   ', {
  variants: {
    variant: {
      default: 'border border-b2 -transparent bg-b2 text-bc hover:bg-b2/80',
      neutral: 'border border-b2 -transparent bg-neutral text-neutral-content hover:bg-neutral/80',
      error: 'border border-b2 -transparent bg-error text-error-content hover:bg-error/80',

      sorcery: 'border border-b2 -transparent bg-sorcery/90 hover:bg-sorcery/80',
      resolve: 'border border-b2 -transparent bg-resolve/90 hover:bg-resolve/80 text-white',

      precision: 'border border-b2 -transparent bg-precision/90 hover:bg-precision/80 text-white',
      inspiration: 'border border-b2 -transparent bg-inspiration/90 hover:bg-inspiration/80 text-white',

      outline: 'border border-b2 -b3',
    },
    size: {
      sm: 'text-2 h-6 px-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
