export interface Scroll {
  top: () => void
}

export function scrollToTop() {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}

export function scrollContainerToTop(container: HTMLElement | null) {
  container?.scrollTo({ behavior: 'smooth', top: 0 })
}
