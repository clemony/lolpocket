import type { VariantProps } from 'tailwind-variants'
import { tv } from 'tailwind-variants'

export interface SidebarProps {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  class?: HTMLAttributes['class']
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

export const sidebarMenuButtonVariants = tv({
  variants: {
    variant: {
      default:
        'btn btn-ghost *:text-pc/80 hover:bg-p2 hover:*:text-pc flex rounded-lg',
      link: 'btn btn-link no-underline underline-offset-2 hover:bg-transparent!',
      neutral: 'hover:next-nc text-nc btn-neutral',
      outline:
        'hover:text-sidebar-bc bg-p0 hover:bg-p3 shadow-[0_0_0_1px_hsl(var(--p3))] hover:shadow-[0_0_0_1px_hsl(var(--p3))]',
      shadow: 'btn-shadow btn not-hover:bg-p0!',
    },
    size: {
      default: 'text-md h-8',
      icon: 'grid! size-11 place-items-center! gap-0! p-0! [&_span]:pointer-events-none [&_span]:absolute [&_span]:hidden [&_svg]:absolute [&_svg]:size-6 [&_svg]:shrink-0',
      lg: 'text-md h-12 group-data-[collapsible=icon]:p-0! [&_svg]:size-5.5!',
      sm: 'h-7 text-sm',
    },
  },
  base: 'peer/menu-button hover:text-sidebar-bc active:text-sidebar-bc data-[active=true]:text-sidebar-bc data-[state=open]:hover:text-sidebar-bc text-md ring-pc/60 hover:bg-p3 active:bg-p3 data-[active=true]:bg-p3 data-[state=open]:hover:bg-p3 flex w-full items-center justify-start gap-3 overflow-hidden rounded-lg p-2 text-left ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4.5 [&>svg]:shrink-0',
  extend: baseVariants(),
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export type SidebarMenuButtonVariants = VariantProps<
  typeof sidebarMenuButtonVariants
>
