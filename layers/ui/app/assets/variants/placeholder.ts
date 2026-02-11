import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

export const placeholderVariants = tv({
  variants: {
    color: {
      neutral: "bg-n0",
      p0: "bg-p0",
      p1: "bg-p1",
      p2: "bg-p2",
      p3: "bg-p3/80",
    },
    size: {
      "2xl": "h-7",
      "2xs": "h-1.5",
      "3xl": "h-8",
      "3xs": "h-1",
      lg: "h-5",
      md: "h-4",
      sm: "h-3",
      xl: "h-6",
      xs: "h-2",
    },
  },
  base: "rounded-xl",
  defaultVariants: {
    color: "p3",
    size: "md",
  },
})

export type PlaceholderVariants = VariantProps<typeof placeholderVariants>
