import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const sheetVariants = tv({
  base: 'fixed z-19 gap-4 bg-b1/94 shadow-lg backdrop-blur',

  defaultVariants: {
    side: 'right',
  },
  variants: {
    side: {
      bottom: 'inset-x-0 bottom-0 border border-b2',
      left: 'inset-y-0 left-0 h-full w-3/4 border border-b2 sm:max-w-sm',
      right: 'inset-y-0 right-0 h-full w-3/4 border border-b3 sm:max-w-sm',
      top: 'inset-x-0 top-0 border border-b2',
    },
  },
})

export type SheetVariants = VariantProps<typeof sheetVariants>
