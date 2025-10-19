import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const inputVariants = tv({
  base: 'input text-2 h-12 items-center [&>svg]:text-tint-bc/70 [&>svg]:**:stroke-[2.2] [&>svg]:size-4.5 focus-within:outline-0 focus-within:outline-offset-0 text-2   focus-within:ring-n1/50 focus-within:ring-1 w-full ring-offset-b1  inset-shadow-black/4  inset-shadow-xs border-b3 **:text-2 h-10',
  defaultVariants: {
    hover: 'ring',
    size: 'default',
  },
  variants: {
    hover: {
      ring: 'hover:ring hover:ring-bc/50 transition-all duration-200'
    },
    size: {
      ...sizeVariants,
      default: 'text-2',
      header: 'text-10 font-bold tracking-tight **:text-10 shrink-0 [&_input]:text-10 [&_input]:font-bold [&_input]:tracking-tight',
    },
    variant: {
      ...variantVariants
    }
  },
})

export const inputGroupAddonVariants = tv({
  base: 'text-bc/60 flex h-auto cursor-text items-center justify-center gap-2 py-1.5  font-medium select-none [&>svg:not([class*=\'size-\'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50',
  defaultVariants: {
    align: 'inline-start',
  },
  variants: {
    align: {
      'block-end':
          'order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5',
      'block-start':
          'order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5',
      'inline-end':
          'order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]',
      'inline-start':
          'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
    },
  },
})

export const inputGroupButtonVariants = tv({
  base: ' shadow-none flex gap-2 items-center',
  defaultVariants: {
    size: 'xs',
    variant: 'ghost',
  },
  variants: {
    /* shape */
    shape: {
      ...shapeVariants
    },
    size: {
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
      'icon-xs': '[&_svg]:size-3.5 size-6 rounded-sm p-0 has-[>svg]:p-0',
      /*       'sm': 'h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5',
      'xs': 'h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=\'size-\'])]:size-3.5 has-[>svg]:px-2', */
      ...sizeVariants
    },
    variant: {
      ...variantVariants
    }
  },
})

export type InputVariants = VariantProps<typeof inputVariants>
export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>
export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>
