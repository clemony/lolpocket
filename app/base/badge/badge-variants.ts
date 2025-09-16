import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex text-xs items-center rounded-lg badge w-fit leading-4 font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-neutral focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'badge-default',
        neutral: 'bg-neutral text-nc **:text-nc badge-neutral ',
        secondary: 'border-transparent bg-b2 text-bc',
        outline: 'text-bc badge border-b4/70 shadow-xs shadow-black/4',
        shortcut: 'opacity-60',
        ghost: 'badge-ghost',
      },

      size: {
        xs: 'badge-xs **:text-xxs px-1.5 !py-px h-5 rounded-md',
        sm: ' text-xs py-0.75 px-2.5',
        default: 'px-2.5 py-1 ',
        lg: 'badge-lg',
        xl: 'badge-xl rounded-field',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
