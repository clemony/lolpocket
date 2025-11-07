export function closeAndNav(link: string) {
  ui().sidebarOpen = false
  navigateTo(link)
}