import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const sheetVariants = cva(
  'bg-b1/92 data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-19 gap-4 shadow-lg backdrop-blur transition ease-out data-[state=closed]:duration-300 data-[state=open]:duration-300',
  {
    defaultVariants: {
      side: 'right',
    },
    variants: {
      side: {
        bottom:
          'border-b2 -t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border',
        left: 'border-b2 -r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border sm:max-w-sm',
        right:
          'border-b3 -l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border sm:max-w-sm',
        top: 'border-b2 -b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border',
      },
    },
  }
)

export type SheetVariants = VariantProps<typeof sheetVariants>
