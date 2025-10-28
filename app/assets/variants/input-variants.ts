import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export const inputVariants = tv({
  base: 'input text-2 [&>svg]:text-tint-bc/70 text-2 focus-within:ring-n1/50 ring-offset-b1 border-b3 **:text-2 h-10 h-12   w-full items-center inset-shadow-xs inset-shadow-black/4  focus-within:ring-1  focus-within:outline-0 focus-within:outline-offset-0 [&>svg]:size-4.5 [&>svg]:**:stroke-[2.2]',
  defaultVariants: {
    hover: 'ring',
    size: 'default',
  },
  variants: {
    hover: {
      ring: 'hover:ring-bc/50 transition-all duration-200 hover:ring'
    },
    size: {
      ...sizeVariants,
      default: 'text-2',
      header: 'text-10 **:text-10 [&_input]:text-10 shrink-0 font-bold tracking-tight [&_input]:font-bold [&_input]:tracking-tight',
    },
    variant: {
      ...variantVariants
    }
  },
})

export const inputGroupAddonVariants = tv({
  base: 'text-bc/60 flex h-auto cursor-text items-center justify-center gap-2 py-1.5  font-medium select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*="size-"])]:size-4',
  defaultVariants: {
    align: 'inline-start',
  },
  variants: {
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
  },
})

export const inputGroupButtonVariants = tv({
  base: ' flex items-center gap-2 shadow-none',
  defaultVariants: {
    size: 'xs',
    variant: 'ghost',
  },
  variants: {
    size: {
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
      'icon-xs': 'size-6 rounded-sm p-0 has-[>svg]:p-0 [&_svg]:size-3.5',
      /*       'sm': 'h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5',
      'xs': 'h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=\'size-\'])]:size-3.5 has-[>svg]:px-2', */
      ...sizeVariants
    },
    variant: {
      ...variantVariants
    }
  },
})

export const inputGroupVariants = tv({
  base: cn('group/input-group   hover:ring  transition-all duration-200 relative flex w-full items-center rounded-field border inset-shadow-xs transition-[color,box-shadow] outline-none', 'h-10 min-w-0 has-[>textarea]:h-auto',

    // Variants based on alignment.
    'has-[>[data-align=inline-start]]:[&>input]:pl-2', 'has-[>[data-align=inline-end]]:[&>input]:pr-2', 'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3', 'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

    // Focus state.
    'has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background'),
  defaultVariants: {
    variant: 'default'
  },
  extend: baseVariants,
  variants: {
    size: {
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
      'icon-xs': 'size-6 rounded-sm p-0 has-[>svg]:p-0 [&_svg]:size-3.5',
      /*       'sm': 'h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5',
      'xs': 'h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*=\'size-\'])]:size-3.5 has-[>svg]:px-2', */
    },
    variant: {
      default: 'border-b3 hover:ring-bc/50 inset-shadow-black/4'
    }
  },
})
export type InputVariants = VariantProps<typeof inputVariants>
export type InputGroupAddonVariants = VariantProps<typeof inputGroupAddonVariants>
export type InputGroupVariants = VariantProps<typeof inputGroupVariants>
export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>
