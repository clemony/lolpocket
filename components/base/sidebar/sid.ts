import { cva, type VariantProps } from 'class-variance-authority';

export { default as Sidebar } from './Sidebar.vue';
export { default as SidebarContent } from './SidebarContent.vue';
export { default as SidebarFooter } from './SidebarFooter.vue';
export { default as SidebarGroup } from './SidebarGroup.vue';
export { default as SidebarGroupAction } from './SidebarGroupAction.vue';
export { default as SidebarGroupContent } from './SidebarGroupContent.vue';
export { default as SidebarGroupLabel } from './SidebarGroupLabel.vue';
export { default as SidebarHeader } from './SidebarHeader.vue';
export { default as SidebarInput } from './SidebarInput.vue';
export { default as SidebarInset } from './SidebarInset.vue';
export { default as SidebarMenu } from './SidebarMenu.vue';
export { default as SidebarMenuAction } from './SidebarMenuAction.vue';
export { default as SidebarMenuBadge } from './SidebarMenuBadge.vue';
export { default as SidebarMenuButton } from './SidebarMenuButton.vue';
export { default as SidebarMenuItem } from './SidebarMenuItem.vue';
export { default as SidebarMenuSkeleton } from './SidebarMenuSkeleton.vue';
export { default as SidebarMenuSub } from './SidebarMenuSub.vue';
export { default as SidebarMenuSubButton } from './SidebarMenuSubButton.vue';
export { default as SidebarMenuSubItem } from './SidebarMenuSubItem.vue';
export { default as SidebarProvider } from './SidebarProvider.vue';
export { default as SidebarRail } from './SidebarRail.vue';
export { default as SidebarSeparator } from './SidebarSeparator.vue';
export { default as SidebarTrigger } from './SidebarTrigger.vue';

export { useSidebar } from './utils';

export const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-4 overflow-hidden rounded-md p-2 text-left text-3 outline-hidden ring-neutral/5 transition-[width,height,padding] hover:bg-b2 hover:text-bc focus-visible:ring-1 active:bg-neutral/5 active:text-bc disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-neutral/5 data-[active=true]: data-[active=true]:text-bc data-[state=open]:hover:bg-b2 data-[state=open]:hover:text-bc group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-0 [&>span:last-child]:truncate [&>svg]:size-4.5 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'hover:bg-b2 hover:text-bc',
        outline: 'bg-transparent shadow-[0_0_0_1px_hsl(var(--b3))] hover:bg-b3 hover:text-bc hover:shadow-[0_0_0_1px_hsl(var(--sidebar-neutral))]',
      },
      size: {
        default: 'h-8 text-3',
        icon: 'aspect-square size-10',
        sm: 'h-7 text-3',
        lg: 'h-12 text-3 group-data-[collapsible=icon]:p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>;
