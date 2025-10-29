import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const tabsTriggerVariants = tv({
  base: 'text-3 hover:text-bc hover:**:text-bc **:text-bc text-bc  disabled:text-bc/20  disabled:**:text-bc/20 z-2 inline-flex cursor-pointer  items-center justify-center gap-3 border border-transparent px-3  py-1.25 font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none data-[state=active]:bg-transparent  data-[state=active]:shadow-none',
  defaultVariants: {
    active: 'none',
    base: 'none',
    disabled: 'disabled',
    hover: 'inset',
    size: 'md',
    states: 'states',
  },
  extend: baseVariants,
})

export const tabIndicatorVariants = tv({
  extend: baseVariants,
})

export const tabListVariants = tv({
  base: 'text-bc relative grid auto-cols-auto grid-flow-col items-center justify-center p-1',
  extend: baseVariants,
  variants: {
    defaultVariants: {
      base: 'btn',
      hover: 'none'
    },
    orientation: {
      vertical: '!size-full',
    }
  },
})

export type TabIndicatorVariants = VariantProps<typeof tabIndicatorVariants>
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>
export type TabListVariants = VariantProps<typeof tabListVariants>