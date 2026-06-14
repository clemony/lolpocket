import type { SidebarSearchEntry } from "~/domain/app/utils/searchEntries"

export interface SidebarEvent {
  to?: string
  onClick?: () => void
}

export interface UseSidebar {
  close: (e?: SidebarEvent) => void
  openPopover: (id: SidebarSearchEntry) => void
}
