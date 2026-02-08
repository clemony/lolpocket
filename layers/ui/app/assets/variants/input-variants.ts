import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

const sizeVariants = buildSizeVariants()
const variantVariants = createVariants()

export const inputVariants = tv({
  base: 'focus-within:ring-n1/50 input border-p3 ring-offset-p0 [&>svg]:text-tint-bc/70 h-10 h-12 w-full items-center text-sm inset-shadow-xs inset-shadow-black/4 **:text-sm focus-within:ring-1 focus-within:outline-0 focus-within:outline-offset-0 [&>svg]:size-4.5 [&>svg]:**:stroke-[2.2]',

  variants: {
    variant: {
      ...variantVariants,
      header:
        'text-2xs **:text-2xs [&_input]:text-2xs shrink-0 font-bold tracking-tight [&_input]:font-bold [&_input]:tracking-tight',
      none: 'ring-none border-none bg-transparent shadow-none inset-shadow-none drop-shadow-none outline-none',
    },
    hover: {
      ring: 'hover:ring-pc/50 transition-all duration-200 hover:ring',
    },
    size: {
      ...sizeVariants,
    },
  },
  extend: 'baseVariants()',
  defaultVariants: {
    hover: 'ring',
    size: 'default',
  },
})

export const inputGroupAddonVariants = tv({
  base: 'text-pc/60 flex h-auto cursor-text items-center justify-center gap-2 py-1.5 font-medium select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*="size-"])]:size-4',

  variants: {
    color: { ...variantVariants },
    //
    align: {
      'block-end':
        'order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3',
      'block-start':
        'order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3',
      'inline-end':
        'order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]',
      'inline-start':
        'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
    },
    base: { ...baseVariants() },
    size: { ...sizeVariants },
  },
  extend: 'baseVariants()',
  defaultVariants: {
    color: 'none',
    align: 'inline-start',
    size: 'sq-6',
  },
})

export const inputGroupButtonVariants = tv({
  base: 'flex items-center gap-2 shadow-none',

  variants: {
    variant: {
      ...variantVariants,
    },
    size: sizeVariants,
  },
  extend: 'baseVariants()',
  defaultVariants: {
    variant: 'ghost',
    size: sizeVariants['sq-8'],
  },
})

export const inputGroupVariants = tv({
  variants: {
    variant: {
      default: 'border-p3 hover:ring-pc/50 inset-shadow-black/4',
    },
    size: sizeVariants,
  },
  base: cn(
    'group/input-group rounded-field ring-pc/60 relative flex w-full items-center border inset-shadow-xs transition-[color,box-shadow] transition-all duration-200 outline-none focus-within:ring',
    `h-10 min-w-0 has-[>textarea]:h-auto`,

    // Variants based on alignment.
    'has-[>[data-align=inline-start]]:[&>input]:pl-2',
    `has-[>[data-align=inline-end]]:[&>input]:pr-2`,
    `has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3`,
    `has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3`,

    // Focus state.
    `has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2`
  ),
  extend: baseVariants(),
  defaultVariants: {
    variant: 'default',
    size: '11',
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
