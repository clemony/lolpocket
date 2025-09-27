import type { VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'
import { cva } from 'class-variance-authority'

export interface SidebarProps {
  side?: 'left' | 'right'
  class?: HTMLAttributes['class']
  collapsible?: 'offcanvas' | 'icon' | 'none'
  variant?: 'sidebar' | 'floating' | 'inset'
}

export { useSidebar } from './utils'

export const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-3 justify-start  overflow-hidden rounded-lg p-2 text-left text-3 outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground  [&>span:last-child]:truncate [&>svg]:size-4.5 [&>svg]:shrink-0',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-8 text-3',
        icon: 'size-11 !p-0 !grid !place-items-center [&_svg]:shrink-0 [&_svg]:absolute [&_svg]:size-6 [&_span]:hidden  [&_span]:absolute  [&_span]:pointer-events-none !gap-0',
        lg: 'h-12 text-3 group-data-[collapsible=icon]:p-0!  [&_svg]:!size-5.5 ',
        sm: 'h-7 text-2',
      },
      variant: {
        default:
          'btn flex btn-ghost  rounded-lg hover:bg-b2 *:text-bc/80 hover:*:text-bc',
        link: 'btn btn-link no-underline hover:!bg-transparent underline-offset-2',
        neutral: 'btn-neutral text-nc hover:next-nc',
        outline:
          'bg-background shadow-[0_0_0_1px_hsl(var(--b3))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
        shadow: 'btn btn-shadow  btn not-hover:!bg-b1',
      },
    },
  }
)

export type SidebarMenuButtonVariants = VariantProps<
  typeof sidebarMenuButtonVariants
>
