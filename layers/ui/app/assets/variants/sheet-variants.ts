import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const sheetVariants = tv({
  base: 'bg-b1/94 fixed z-19 gap-4 shadow-lg backdrop-blur-sm',

  defaultVariants: {
    side: 'right',
  },
  variants: {
    side: {
      bottom: 'border-b2 inset-x-0 bottom-0 border',
      left: 'border-b2 inset-y-0 left-0 h-full w-3/4 border sm:max-w-sm',
      right: 'border-b3 inset-y-0 right-0 h-full w-3/4 border sm:max-w-sm',
      top: 'border-b2 inset-x-0 top-0 border',
    },
  },
})

export type SheetVariants = VariantProps<typeof sheetVariants>
