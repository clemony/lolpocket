<script lang="ts" setup>
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { AspectRatio } from 'reka-ui'
import { vDraggable, VueDraggable } from 'vue-draggable-plus'
import '~/assets/css/plugins/embla.css'
import type { CarouselApi } from '~/base/carousel/carousel-index'
import {
  setupTweenParallax,
  teardownTweenParallax,
} from '~/assets/ts/embla-tween-parallax'
import { useCarousel } from '~/base/carousel/carousel-index'

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const emblaMainApi = ref<CarouselApi>()
const selectedIndex = ref(0)

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
      <h2 class="self-start dss tracking-tight">
        Selected Champions
      </h2>
      <div class="flex gap-2 items-center">
        <Button
          :disabled="!emblaMainApi?.canScrollPrev"
          variant="shadow"
          class="btn-square"
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
        <slot />
      </div>
    </div>
    <Carousel
      :opts="{ loop: true, slidesToScroll: 6, dragFree: true }"
      orientation="horizontal"
      align="start"
      :plugins="[WheelGesturesPlugin()]"
      class=" h-30 w-full !justify-start rounded-lg !overflow-y-visible overflow-x-hidden"

      @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent class="h-full  flex embla__container justify-start !-ml-4">
        <Popover
          v-for="champion in pocket.champions"
          :key="champion">
          <CarouselItem
            class=" h-30 basis-1/6 py-0 pl-4 pr-0">
            <PopoverTrigger
              class=" embla__slide  grid place-items-center size-full shrink-0">
              <div
                :class="cn('size-full group rounded-lg overflow-hidden relative border-0 grid place-items-center overflow-hidden embla__slide z-0 shrink-0 p-0 shadow-sm shadow-black/15 drop-shadow-sm',
                           'after:inset-0 after:bg-radial-[at_75%_25%] after:from-45% after:absolute after:from-transparent after:to-black/70 after:pointer-events-none after:z-2',
                )">
                <AspectRatio
                  :ratio="16 / 9"
                  class="embla__parallax__layer  p-0 size-full scale-[360%] inset-0  **:pointer-events-none  relative  object-center shrink-0">
                  <Champion
                    :k="champion"
                    type="centered"
                    class="embla__slide__img embla__parallax__img shrink-0 translate-y-6">
                    <input
                      v-model="pocket.champions"
                      :aria-label="`${champion}-select`"
                      type="checkbox"
                      :value="champion"
                      class="peer hidden" />
                  </Champion>
                </AspectRatio>
                <div class="absolute flex gap-2 items-center left-0 w-full px-2.5  justify-between bottom-2.5">
                <!--       <Button
                size="sm"
                class=" btn-square opacity-0  transition-all duration-300 grid place-items-center group-hover:opacity-70 hover:opacity-100 bg-b1/90 backdrop-blur  size-8"
                variant="base">
                <icon
                  name="x"
                  class="size-4" />
              </Button> -->
                <!--  <Button
                variant="base"
                size="sm"
                class="opacity-0 h-8 transition-all duration-300 group-hover:opacity-70 hover:opacity-100 bg-b1/90 backdrop-blur hover:underline  pr-2.5 font-medium pl-3 btn-sm text-2  "
                @click="navigateTo(`/champions/${champion}`)">
                {{ ix().champNameByKey(champion) }}
              </Button> -->
                </div>
              </div>
              <h1 class="text-white absolute dss bottom-1 left-2.5 font-bold">
                {{ champion }}
              </h1>
            </PopoverTrigger>
          </CarouselItem>
        </Popover>
      </CarouselContent>
    </Carousel>
  </div>
</template>
