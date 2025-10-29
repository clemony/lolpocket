import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const popoverContentVariants = tv({
  defaultVariants: {
    variant: 'base'
  },
  slots: {
    arrow: '',
    base: 'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-lg border px-1 py-1.5 shadow-md backdrop-blur-md outline-none',
  },
  variants: {
    variant: {
      base: {
        arrow: '**:fill-b1/90 **:text-b1/90',
        base: 'text-bc  border-b3/60  bg-b1/94',
      },
      input: {
        base: 'text-bc  border-b3/60  bg-b1/94 border-b3 grid h-120 max-h-120 w-[var(--reka-popover-trigger-width)] -translate-y-[calc(var(--reka-popover-trigger-height)+9px)] overflow-hidden p-0'
      },
      neutral: {
        arrow: 'fill-neutral/90',
        base: 'text-nc/90 !border-black-30 bg-neutral/84 **:decoration-nc/90 [&_h4]:text-nc/90  rounded-xl drop-shadow-md backdrop-blur-lg',
      },
    },
  }
})

export const popoverArrowVariants = tv({
  base: '',
  defaultVariants: {
    variant: 'base'
  },
  variants: {
    variant: {
      base: 'text-b1/90',
      input: '',
      neutral: '!text-neutral/77',
    }
  },
})

export type PopoverContentVariants = VariantProps<typeof popoverContentVariants>
export type PopoverArrowVariants = VariantProps<typeof popoverArrowVariants>