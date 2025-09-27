import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex text-2 items-center rounded-lg badge w-fit leading-4 font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-neutral focus:ring-offset-2',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'px-2.5 py-1 ',
        lg: 'badge-lg',
        sm: ' text-2 py-0.75 px-2.5',
        xl: 'badge-xl rounded-field',
        xs: 'badge-xs **:text-1 px-1.5 !py-px h-5 rounded-md',
      },
      variant: {
        default: 'badge-default',
        ghost: 'badge-ghost',
        neutral: 'bg-neutral text-nc **:text-nc badge-neutral ',
        outline: 'text-bc badge border-b4/70 shadow-xs shadow-black/4',
        secondary: 'border-transparent bg-b2 text-bc',
        shortcut: 'opacity-60',
      },
    },
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
