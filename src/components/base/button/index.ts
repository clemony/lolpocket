import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
    'inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-b1 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/80 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-b2 text-ac hover:bg-b3/80',
                accent: 'bg-accent text-ac hover:bg-accent/90',
                primary: 'bg-primary text-primary-content hover:bg-primary/90',
                destructive: 'bg-error text-error-content hover:bg-error/90',
                outline: 'border border-input bg-background hover:bg-b2/60 ',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-b2/60 ',
                simple: '[&_svg]:opacity-70 hover:[&_svg]:opacity-100 hover:[&_svg]:stroke-[2] hover:[&_svg]:drop-shadow-sm',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-9 px-4 py-2',
                xs: 'h-7 rounded px-2',
                sm: 'h-8 rounded-md px-3',
                md: 'h-10 rounded-md px-6',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
