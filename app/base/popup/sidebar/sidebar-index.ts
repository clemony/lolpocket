import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export interface SidebarProps {
  side?: "left" | "right";
  class?: HTMLAttributes["class"];
  collapsible?: "offcanvas" | "icon" | "none";
  variant?: "sidebar" | "floating" | "inset";
}

export { useSidebar } from "./sidebar-utils";

export const sidebarMenuButtonVariants = tv({
  base: "peer/menu-button text-3 ring-bc/60 hover:bg-b3 hover:text-sidebar-bc active:bg-b3  active:text-sidebar-bc data-[active=true]:bg-b3 data-[active=true]:text-sidebar-bc data-[state=open]:hover:bg-b3 data-[state=open]:hover:text-sidebar-bc flex w-full items-center justify-start gap-3 overflow-hidden rounded-lg p-2 text-left ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium  [&>span:last-child]:truncate [&>svg]:size-4.5 [&>svg]:shrink-0",
  defaultVariants: {
    size: "default",
    variant: "default",
  },
  extend: baseVariants,
  variants: {
    size: {
      default: "text-3 h-8",
      icon: "!grid size-11 !place-items-center !gap-0 !p-0 [&_span]:pointer-events-none [&_span]:absolute [&_span]:hidden  [&_svg]:absolute  [&_svg]:size-6 [&_svg]:shrink-0",
      lg: "text-3 h-12 group-data-[collapsible=icon]:p-0!  [&_svg]:!size-5.5 ",
      sm: "text-2 h-7",
    },
    variant: {
      default:
        "btn btn-ghost hover:bg-b2  *:text-bc/80 hover:*:text-bc flex rounded-lg",
      link: "btn btn-link no-underline underline-offset-2 hover:!bg-transparent",
      neutral: "btn-neutral text-nc hover:next-nc",
      outline:
        "bg-b1 hover:bg-b3 hover:text-sidebar-bc shadow-[0_0_0_1px_hsl(var(--b3))] hover:shadow-[0_0_0_1px_hsl(var(--b3))]",
      shadow: "btn btn-shadow  btn not-hover:!bg-b1",
    },
  },
});

export type SidebarMenuButtonVariants = VariantProps<
  typeof sidebarMenuButtonVariants
>;
