import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-base-100 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral/80 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:'bg-base-200 text-base-content hover:bg-base-300/80',
        neutral:'bg-neutral text-neutral-content hover:bg-neutral/90',
          primary: 'bg-primary text-primary-content hover:bg-primary/90',
        destructive:
          'bg-error text-error-content hover:bg-error/90',
        outline:
          'border border-input bg-background hover:bg-base-200/60 hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-base-200/60 hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7 rounded px-2',
        sm: 'h-8 rounded-md px-3',
                md: 'h-10 rounded-md px-5',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
