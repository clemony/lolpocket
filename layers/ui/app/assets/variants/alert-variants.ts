import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const alertVariants = cva(
  `border-b3/80 [&>svg]:text-bc relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:size-4 [&>svg+div]:-translate-y-1 [&>svg~*]:pl-7`,
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: 'bg-b1 text-bc',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
  }
)

export type AlertVariants = VariantProps<typeof alertVariants>
