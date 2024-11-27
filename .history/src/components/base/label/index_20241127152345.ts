
import { cva, type VariantProps } from 'class-variance-authority'
export { default as Label } from './Label.vue'

export const labelVariants = cva(
  'text-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {      
        button: {
        true:   'inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-2 font-medium ring-offset-b1 transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral/80 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50',
      },
      variant: {
        default:'bg-b2 text-4-content hover:bg-b3/80',
        neutral:'bg-neutral text-neutral-content hover:bg-neutral/90',
          primary: 'bg-primary text-primary-content hover:bg-primary/90',
        destructive:
          'bg-error text-error-content hover:bg-error/90',
        outline:
          'border border-input bg-background hover:bg-b2/60 hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-b2/60 hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7 rounded-sm px-2',
        sm: 'h-8 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },

    },
  },
)

export type LabelVariants = VariantProps<typeof labelVariants>
