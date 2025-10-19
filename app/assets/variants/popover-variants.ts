import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const popoverContentVariants = tv({
  base: 'z-50 w-72 rounded-lg border backdrop-blur-md px-1 py-1.5 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  defaultVariants: {
    variant: 'base'
  },
  variants: {
    variant: {
      base: 'text-bc  border-b3/60  bg-b1/94',
      neutral: 'rounded-xl text-nc/90 backdrop-blur-lg drop-shadow-md !border-black-30  bg-neutral/84',
    }
  },
})

export const popoverArrowVariants = tv({
  base: '',
  defaultVariants: {
    variant: 'base'
  },
  variants: {
    variant: {
      base: 'text-b1/90',
      neutral: '!text-neutral/77',
    }
  },
})

export type PopoverContentVariants = VariantProps<typeof popoverContentVariants>
export type PopoverArrowVariants = VariantProps<typeof popoverArrowVariants>