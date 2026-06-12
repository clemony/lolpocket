export interface SlidebarEvent {
  to?: string
  onClick?: () => void
}

export interface UseSlidebar {
  close: (e?: SlidebarEvent) => void
}
