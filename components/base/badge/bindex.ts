import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

// export { default as Badge } from './Badge.vue'

export const badgeVariants = cva('inline-flex items-center rounded-md border px-2.5 py-0.5 text-2  transition-colors   ', {
  variants: {
    variant: {
      default: 'border-transparent bg-b2 text-bc hover:bg-b2/80',
      primary: 'border-transparent bg-primary text-primary-content hover:bg-primary/80',
      neutral: 'border-transparent bg-neutral !text-nc hover:bg-neutral/80',
      error: 'border-transparent bg-error text-error-content hover:bg-error/80',

      sorcery: 'border-transparent bg-sorcery/90 hover:bg-sorcery/80',
      resolve: 'border-transparent bg-resolve/90 hover:bg-resolve/80 text-white',

      precision: 'border-transparent bg-precision/90 hover:bg-precision/80 text-white',
      inspiration: 'border-transparent bg-inspiration/90 hover:bg-inspiration/80 text-white',

      outline: 'border-b3',
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
