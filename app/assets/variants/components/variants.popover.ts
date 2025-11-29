import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const popoverContentVariants = tv({
  defaultVariants: {
    variant: 'base',
  },
  extend: baseVariants,
  slots: {
    arrow: 'fill-b1/96 text-b1/96 **:fill-b1/96 **:text-b1/96',
    base: 'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 w-[var(--reka-popover-trigger-width)] rounded-lg border px-1 py-1.5 shadow-md backdrop-blur-md outline-none',
  },
  variants: {
    variant: {
      base: {
        arrow: '',
        base: 'border-b3/60 bg-b1/94 text-bc',
      },
      input: {
        base: 'max-h-120-translate-y-[calc(var(--reka-popover-trigger-height)+9px)] grid h-120 overflow-hidden border-b3 border-b3/60 bg-b1/94 p-0 text-bc',
      },
      neutral: {
        arrow: '!text-neutral/77',
        base: 'rounded-xl !border-black-30 bg-neutral/70 text-nc/90 drop-shadow-md backdrop-blur-lg **:decoration-nc/90 [&_h4]:text-nc/90',
      },
    },
  },
})

export type PopoverContentVariants = VariantProps<typeof popoverContentVariants>
