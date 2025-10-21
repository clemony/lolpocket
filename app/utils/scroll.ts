export interface Scroll {
  top: () => void
}

export function scrollToTop() {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}

export function scrollContainerToTop(container: HTMLElement | null) {
  console.log('hi')
  nextTick(() => {
    container?.scrollTo({ behavior: 'smooth', top: 0 })
  })
}
