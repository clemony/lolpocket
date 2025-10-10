import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const toggleVariants = cva(
  'inline-flex items-center justify-center btn btn-ghost font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-b2 data-[state=on]:border-b3/60 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 gap-2',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-10 px-3 min-w-10',
        lg: 'h-11 px-5 min-w-11',
        sm: 'h-9 px-2.5 min-w-9',
      },
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent hover:bg-tint-b2/60 hover:text-bc',
      },
    },
  }
)

export type ToggleVariants = VariantProps<typeof toggleVariants>
