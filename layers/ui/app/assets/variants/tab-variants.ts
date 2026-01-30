import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const sizeVariants = buildSizeVariants()
const variantVariants = createVariants()

export const tabsTriggerVariants = tv({
  base: 'text-md text-bc/50! **:text-bc/50! hover:text-bc hover:**:text-bc disabled:text-bc/20! disabled:**:text-bc/20! z-2 inline-flex size-full cursor-pointer items-center justify-center gap-3 border border-transparent bg-transparent px-3 py-1 font-medium whitespace-nowrap shadow-none transition-all focus-visible:outline-none disabled:pointer-events-none',
  defaultVariants: {
    disabled: 'disabled',
    hover: 'none',
    on: 'default',
  },
  variants: {
    on: {
      default: 'data-[state=active]:text-bc! data-[state=active]:**:text-bc!',
    },
  },
})

export const tabIndicatorVariants = tv({
  extend: baseVariants(),
})

export const tabListVariants = tv({
  base: 'border-b3/80 dark:bg-b2/60 light:bg-tint-b2/40 relative grid w-full auto-cols-auto grid-flow-col items-center overflow-hidden rounded-xl border px-1 py-1.5! inset-shadow-xs inset-shadow-black/2',

  variants: {
    color: { ...variantVariants },
    defaultVariants: {
      hover: 'none',
    },
    orientation: {
      horizontal: '',
      vertical: 'size-full',
    },
    size: { ...sizeVariants },
  },
})

export type TabIndicatorVariants = VariantProps<typeof tabIndicatorVariants>
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>
export type TabListVariants = VariantProps<typeof tabListVariants>
