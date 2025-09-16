import { useRoute } from 'vue-router'

export function useScrollToHash(containerSelector: string, offset?: number) {
  const route = useRoute()

  const scrollToHash = (opts?: { instant?: boolean }) => {
    const hash = route.hash
    if (!hash)
      return

    const container = document.querySelector<HTMLElement>(containerSelector)
    const target = container?.querySelector<HTMLElement>(hash)

    if (container && target) {
      container.scrollTo({
        top: target.offsetTop - container.offsetTop + (offset || 0),
        behavior: opts?.instant ? 'auto' : 'smooth',
      })
    }
  }

  return { scrollToHash }
}
