import type useEmblaCarousel from 'embla-carousel-vue'
import type { EmblaCarouselVueType } from 'embla-carousel-vue'
import type { HTMLAttributes, UnwrapRef } from 'vue'

type EmblaApi = EmblaCarouselVueType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
export type CarouselApi = UnwrapRef<EmblaApi>

export interface CarouselProps {
  opts?: CarouselOptions
  orientation?: 'horizontal' | 'vertical'
  plugins?: CarouselPlugin
}

export interface CarouselEmits {
  (e: 'init-api', payload: CarouselApi): void
}

export interface WithClassAsProps {
  class?: HTMLAttributes['class']
}
