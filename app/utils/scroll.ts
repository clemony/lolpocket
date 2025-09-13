export interface Scroll {
  top: () => void
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function scrollContainerToTop(container: HTMLElement | null) {
  container?.scrollTo({ top: 0, behavior: 'smooth' })
}
