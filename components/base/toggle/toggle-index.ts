import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

// export { default as Toggle } from './Toggle.vue'

export const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-xs font-medium ring-offset-b1 transition-colors hover:bg-b2 hover:text-base-content/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-b2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-base-200/60 data-[state=on]:text-neutral-bc',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-b2  border border-b2 -input bg-transparent hover:bg-base-200/60 hover:text-neutral-bc',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ToggleVariants = VariantProps<typeof toggleVariants>
