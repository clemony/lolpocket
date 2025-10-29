import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const toggleVariants = tv({
  defaultVariants: {
    active: 'inset',
    base: 'btn',
    disabled: 'disabled',
    hover: 'inset',
    size: 'md',
    states: 'states',
    variant: 'outline',
  },
  extend: baseVariants,
  variants: {
    base: {
      trigger: 'btn btn-ghost ring-offset-background focus-visible:ring-ring on:bg-b2 on:border-b3/60 on:btn-active inline-flex items-center justify-center gap-2 font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none  disabled:opacity-50 [&_svg]:pointer-events-none'
    }
  },
})

export type ToggleGroupVariants = VariantProps<typeof toggleVariants>
export type ToggleVariants = VariantProps<typeof toggleVariants>