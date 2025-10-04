import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const inputVariants = tv({
  base: 'input text-2 h-12 items-center [&>svg]:text-tint-bc/70 [&>svg]:**:stroke-[2.2] [&>svg]:size-5',
  defaultVariants: {
    size: 'default',
  },
  variants: {
    size: {
      default: 'text-2',
      header: 'text-10 font-bold tracking-tight [&_input]:text-10 [&_input]:font-bold [&_input]:tracking-tight',
    },
  },
})

export type InputVariantProps = VariantProps<typeof inputVariants>
export type InputSize = NonNullable<VariantProps<typeof inputVariants>['size']>