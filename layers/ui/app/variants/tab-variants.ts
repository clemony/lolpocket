import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

 const sizeVariants = buildSizeVariants()
  const variantVariants = createVariants()


export const tabsTriggerVariants = tv({
  base: "z-2 inline-flex size-full cursor-pointer items-center justify-center gap-3 border border-transparent bg-transparent px-3 py-1 text-md font-medium whitespace-nowrap !text-bc/50 shadow-none transition-all **:!text-bc/50 hover:text-bc hover:**:text-bc focus-visible:outline-none disabled:pointer-events-none disabled:!text-bc/20 disabled:**:!text-bc/20",
  defaultVariants: {
    disabled: "disabled",
    hover: "none",
    on: "default",
  },
  variants: {
    on: {
      default: "data-[state=active]:!text-bc data-[state=active]:**:!text-bc",
    },
  },
})

export const tabIndicatorVariants = tv({
  extend: baseVariants(),
})

export const tabListVariants = tv({
  base: "relative grid w-full auto-cols-auto grid-flow-col items-center overflow-hidden rounded-xl border border-b3/80 px-1 py-1.5! inset-shadow-xs inset-shadow-black/2 dark:bg-b2/60 light:bg-tint-b2/40",

  variants: {
    color: { ...variantVariants },
    defaultVariants: {
      hover: "none",
    },
    orientation: {
      horizontal: "",
      vertical: "size-full",
    },
    size: { ...sizeVariants },
  },
})

export type TabIndicatorVariants = VariantProps<typeof tabIndicatorVariants>
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>
export type TabListVariants = VariantProps<typeof tabListVariants>
