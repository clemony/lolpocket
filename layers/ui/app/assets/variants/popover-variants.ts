import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const popoverContentVariants = tv({
  defaultVariants: {
    variant: 'base',
  },
  extend: baseVariants(),
  slots: {
    arrow: 'fill-b1/96 text-b1/96 **:fill-b1/96 **:text-b1/96',
    base: 'tippy data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-(--reka-popover-trigger-width) w-72 rounded-lg border px-1 py-1.5 shadow-md backdrop-blur-md outline-none',
  },
  variants: {
    variant: {
      base: {
        arrow: '',
        base: 'border-b3/60 bg-b1/94 text-bc',
      },
      input: {
        base: 'max-h-120-translate-y-[calc(var(--reka-popover-trigger-height)+9px)] border-b3 border-b3/60 bg-b1/94 text-bc grid h-120 overflow-hidden p-0',
      },
      neutral: {
        arrow: 'text-neutral/77!',
        base: 'border-black-30! bg-neutral/70 text-nc/90 **:decoration-nc/90 [&_h4]:text-nc/90 rounded-xl drop-shadow-md backdrop-blur-lg',
      },
    },
  },
})

export type PopoverContentVariants = VariantProps<typeof popoverContentVariants>
