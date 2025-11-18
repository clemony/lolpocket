import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const tabsTriggerVariants = tv({
  base: 'z-2 inline-flex cursor-pointer items-center justify-center gap-3 border border-transparent px-3 py-1.25 text-3 font-medium whitespace-nowrap text-bc transition-all **:text-bc hover:text-bc hover:**:text-bc focus-visible:outline-none disabled:pointer-events-none disabled:text-bc/20 disabled:**:text-bc/20 data-[state=active]:bg-transparent data-[state=active]:shadow-none',
  defaultVariants: {
    base: 'none',
    disabled: 'disabled',
    hover: 'inset',
    on: 'none',
    size: 'md',
    states: 'states',
  },
  extend: baseVariants,
})

export const tabIndicatorVariants = tv({
  extend: baseVariants,
})

export const tabListVariants = tv({
  base: 'relative grid h-9 auto-cols-auto grid-flow-col items-center justify-center justify-stretch rounded-xl border border-b3/80 bg-tint-b2/40 px-1 py-0.5 text-bc text-bc/50 inset-shadow-xs inset-shadow-black/2',
  extend: baseVariants,
  variants: {
    defaultVariants: {
      hover: 'none',
    },
    orientation: {
      vertical: '!size-full',
    },
  },
})

export type TabIndicatorVariants = VariantProps<typeof tabIndicatorVariants>
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>
export type TabListVariants = VariantProps<typeof tabListVariants>
