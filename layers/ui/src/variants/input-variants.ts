import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

export const inputVariants = tv({
  base: "input h-10 h-12 w-full items-center border-b3 text-sm inset-shadow-xs inset-shadow-black/4 ring-offset-b1 **:text-sm focus-within:ring-1 focus-within:ring-n1/50 focus-within:outline-0 focus-within:outline-offset-0 [&>svg]:size-4.5 [&>svg]:text-tint-bc/70 [&>svg]:**:stroke-[2.2]",

  extend: "baseVariants",
  defaultVariants: {
    hover: "ring",
    size: "default",
  },
  variants: {
    hover: {
      ring: "transition-all duration-200 hover:ring hover:ring-bc/50",
    },
    size: {
      ...sizeVariants,
    },
    variant: {
      ...variantVariants,
      none: "ring-none border-none bg-transparent shadow-none inset-shadow-none drop-shadow-none outline-none",
      header:
        "shrink-0 text-xxs font-bold tracking-tight **:text-xxs [&_input]:text-xxs [&_input]:font-bold [&_input]:tracking-tight",
    },
  },
})

export const inputGroupAddonVariants = tv({
  base: 'flex h-auto cursor-text items-center justify-center gap-2 py-1.5 font-medium text-bc/60 select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*="size-"])]:size-4',

  extend: "baseVariants",
  defaultVariants: {
    align: "inline-start",
    color: "none",
    size: "sq-6",
  },
  variants: {
    base: { ...baseVariants },
    color: { ...variantVariants },
    size: { ...sizeVariants },
    //
    align: {
      "block-end":
        "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3",
      "block-start":
        "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
      "inline-end":
        "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
      "inline-start":
        "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
    },
  },
})

export const inputGroupButtonVariants = tv({
  base: "flex items-center gap-2 shadow-none",

  extend: "baseVariants",
  defaultVariants: {
    size: sizeVariants["sq-8"],
    variant: "ghost",
  },
  variants: {
    size: sizeVariants,
    variant: {
      ...variantVariants,
    },
  },
})

export const inputGroupVariants = tv({
  base: cn(
    "group/input-group relative flex w-full items-center rounded-field border inset-shadow-xs ring-bc/60 transition-[color,box-shadow] transition-all duration-200 outline-none focus-within:ring",
    `h-10 min-w-0 has-[>textarea]:h-auto`,

    // Variants based on alignment.
    "has-[>[data-align=inline-start]]:[&>input]:pl-2",
    `has-[>[data-align=inline-end]]:[&>input]:pr-2`,
    `has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3`,
    `has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3`,

    // Focus state.
    `has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2`
  ),
  defaultVariants: {
    variant: "default",
    size: "11",
  },
  extend: baseVariants,
  variants: {
    size: sizeVariants,
    variant: {
      default: "border-b3 inset-shadow-black/4 hover:ring-bc/50",
    },
  },
})
export type InputVariants = VariantProps<typeof inputVariants>
export type InputGroupAddonVariants = VariantProps<
  typeof inputGroupAddonVariants
>
export type InputGroupVariants = VariantProps<typeof inputGroupVariants>
export type InputGroupButtonVariants = VariantProps<
  typeof inputGroupButtonVariants
>
