export function getElementScrollMargin(
  scrollElement: HTMLElement,
  listElement: Element
) {
  return (
    listElement.getBoundingClientRect().top -
    scrollElement.getBoundingClientRect().top +
    scrollElement.scrollTop
  )
}

export function getVirtualItemTransform(start: number, scrollMargin: number) {
  return `translateY(${start - scrollMargin}px)`
}
