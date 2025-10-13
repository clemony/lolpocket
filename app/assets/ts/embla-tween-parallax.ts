import type { EmblaCarouselType } from 'embla-carousel'

export function setupTweenParallax(
  emblaApi: EmblaCarouselType,
  options?: {
    axisRef?: Ref<'horizontal' | 'vertical'>
    factor?: number
  },
) {
  const isVertical = computed(() => options?.axisRef?.value === 'vertical')
  const tweenFactor = options?.factor ?? 1.2

  const tweenNodes = emblaApi.slideNodes().map(node =>
    node.querySelector('.embla__parallax__layer') as HTMLElement
  )

  const applyTween = () => {
    const scrollProgress = emblaApi.scrollProgress()
    emblaApi.slideNodes().forEach((slideNode, index) => {
      const diffToTarget = emblaApi.scrollSnapList()[index] - scrollProgress
      const translate = diffToTarget * (-1 * tweenFactor) * 100
      const tweenNode = tweenNodes[index]
      if (!tweenNode)
        return

      tweenNode.style.transform = isVertical.value
        ? `translateY(${translate}%)`
        : `translateX(${translate}%)`
    })
  }

  emblaApi.on('scroll', applyTween)
  emblaApi.on('reInit', applyTween)
  applyTween()

  return () => {
    emblaApi.off('scroll', applyTween)
    emblaApi.off('reInit', applyTween)
  }
}