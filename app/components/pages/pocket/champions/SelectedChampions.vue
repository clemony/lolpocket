<script lang="ts" setup>
import type { EmblaOptionsType } from 'embla-carousel'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import '~/assets/css/plugins/embla.css'
import type { CarouselApi } from '~/base/carousel/carousel-index'
import type { CarouselProps } from '~/base/carousel/interface'
import {
  setupTweenParallax,
  teardownTweenParallax,
} from '~/assets/ts/embla-tween-parallax'

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const carousel = useTemplateRef<HTMLElement>('carousel')

const emblaMainApi = ref<CarouselApi>()

const { width } = useElementBounding(carousel)

watch(() => width.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
const slideConfig = computed (() => {
  const s = 4 // width.value > 980 ? 6 : width.value > 768 ? 4 : 3
  return {
    paddingClass: `pr-${(s - 1) * 2}`,
    placeholders: (s - (s % pocket?.champions?.length)) - 1
  }
})

watchOnce(emblaMainApi, (emblaApi) => {
  if (!emblaApi)
    return

  const teardown = setupTweenParallax(emblaApi)

  tryOnScopeDispose(() => {
    teardown()
    teardownTweenParallax(emblaApi)
  })
})
</script>

<template>
  <div class="w-full space-y-6">
    <div class="flex pl-px pr-1 justify-between items-center">
      <div class="flex gap-2 items-center">
        <Button
          :disabled="!emblaMainApi?.canScrollPrev"
          variant="shadow"
          class="btn-square disabled:pointer-events-none disabled:opacity-60"
          @click="emblaMainApi?.scrollPrev()">
          <icon
            name="left"
            class="size-4" />
        </Button>

        <Button
          :disabled="!emblaMainApi?.canScrollNext"
          variant="shadow"
          class="btn-square"
          @click="emblaMainApi?.scrollNext()">
          <icon
            name="right"
            class="size-4" />
        </Button>
        <h2 class="dss tracking-tight ml-3">
          Selected Champions
        </h2>
      </div>
      <slot />
    </div>
    <Carousel
      :opts="{
        loop: true,
        slidesToScroll: 3,
        breakpoints: {
          '(min-width: 768px)': {
            slidesToScroll: 4,
          },
          '(min-width: 1280px)': {
            slidesToScroll: 6,
          },
        },
      }"

      orientation="horizontal"
      align="start"
      :plugins="[WheelGesturesPlugin()]"
      class=" h-30 w-full !justify-start rounded-lg !overflow-y-visible overflow-x-hidden "
      @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent
        ref="carousel"
        :class="cn('h-full @container gap-2 flex embla__container  w-full justify-start  *:first:-ml-1', slideConfig.paddingClass)">
        <template v-if="pocket.champions.length">
          <SelectedChampion
            v-for="champion in pocket.champions"
            :key="champion"
            :champion="ix().champions.find(c => c.key === champion)"
            :pocket />
        </template>
        <!--  <template v-if="slideConfig?.placeholders">
          <div
            v-for="i in slideConfig?.placeholders"
            :key="i"
            class="shrink-0 p-1.5 h-30 @7xl:basis-1/6 basis-1/3 @3xl:basis-1/4 ">
            <div class="field-box shrink-0 size-full ">
              <div class="size-full shrink-0 grid place-items-center">
                <i-lol-champ class="!size-10 text-b3/40" />
              </div>
            </div>
            <span class="invisible size-px hidden embla__parallax__layer   embla__slide  embla__slide__img embla__parallax__img " />
          </div>
        </template> -->
      </CarouselContent>
    </Carousel>
  </div>
</template>
