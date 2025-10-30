import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const badgeVariants = tv({
  base: 'text-2 badge focus:ring-neutral inline-flex w-fit items-center rounded-lg leading-4 font-normal transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  extend: 'baseVariants',
  variants: {
    size: {
      ...sizeVariants,
      default: 'px-2.5 py-1 ',
      lg: 'badge-lg',
      sm: ' text-2 px-2.5 py-0.75',
      xl: 'badge-xl rounded-field',
      xs: 'badge-xs **:text-1 h-5 rounded-md px-1.5 !py-px',
    },
    variant: {
      default: 'badge-default',
      ghost: 'badge-ghost',
      neutral: 'bg-neutral text-nc **:text-nc badge-neutral ',
      outline: 'text-bc badge border-b4/70 shadow-xs shadow-black/4',
      secondary: 'bg-b2 text-bc border-transparent',
      shortcut: 'opacity-60',
    },
  }
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
