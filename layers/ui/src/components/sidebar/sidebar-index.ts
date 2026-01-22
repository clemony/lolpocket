import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

export interface SidebarProps {
  side?: "left" | "right"
  class?: HTMLAttributes["class"]
  collapsible?: "offcanvas" | "icon" | "none"
  variant?: "sidebar" | "floating" | "inset"
}

export const sidebarMenuButtonVariants = tv({
  base: "peer/menu-button hover:text-sidebar-bc active:text-sidebar-bc data-[active=true]:text-sidebar-bc data-[state=open]:hover:text-sidebar-bc text-md flex w-full items-center justify-start gap-3 overflow-hidden rounded-lg p-2 text-left ring ring-bc/60 outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 hover:bg-b3 focus-visible:ring-2 active:bg-b3 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-b3 data-[active=true]:font-medium data-[state=open]:hover:bg-b3 [&>span:last-child]:truncate [&>svg]:size-4.5 [&>svg]:shrink-0",
  defaultVariants: {
    size: "default",
    variant: "default",
  },
  extend: baseVariants,
  variants: {
    size: {
      default: "text-md h-8",
      icon: "!grid size-11 !place-items-center !gap-0 !p-0 [&_span]:pointer-events-none [&_span]:absolute [&_span]:hidden [&_svg]:absolute [&_svg]:size-6 [&_svg]:shrink-0",
      lg: "text-md h-12 group-data-[collapsible=icon]:p-0! [&_svg]:!size-5.5",
      sm: "h-7 text-sm",
    },
    variant: {
      default:
        "btn flex rounded-lg btn-ghost *:text-bc/80 hover:bg-b2 hover:*:text-bc",
      link: "btn btn-link no-underline underline-offset-2 hover:!bg-transparent",
      neutral: "hover:next-nc text-nc btn-neutral",
      outline:
        "hover:text-sidebar-bc bg-b1 shadow-[0_0_0_1px_hsl(var(--b3))] hover:bg-b3 hover:shadow-[0_0_0_1px_hsl(var(--b3))]",
      shadow: "btn-shadow btn not-hover:!bg-b1",
    },
  },
})

export type SidebarMenuButtonVariants = VariantProps<
  typeof sidebarMenuButtonVariants
>
