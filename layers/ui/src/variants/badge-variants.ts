import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

export const badgeVariants = tv({
  base: "badge inline-flex w-fit items-center rounded-lg text-sm leading-4 font-normal transition-colors focus:ring-2 focus:ring-neutral focus:ring-offset-2 focus:outline-none",
  defaultVariants: {
    size: "default",
    variant: "default",
  },
  extend: "baseVariants",
  variants: {
    size: {
      ...sizeVariants,
    },
    variant: {
      ...variantVariants,
      default: "badge-default",
      shortcut: "opacity-60",
    },
  },
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
