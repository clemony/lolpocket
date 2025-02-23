import { cva, type VariantProps } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'inline-flex items-center rounded-md border border-b2  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-b2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border border-b2 -transparent bg-neutral text-neutral-bc shadow hover:bg-neutral/80',
        neutral:
          'border border-b2 -transparent bg-neutral text-neutral-bc hover:bg-neutral/80',
        destructive:
          'border border-b2 -transparent bg-destructive text-destructive-bc shadow hover:bg-destructive/80',
        outline: 'text-bc',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
