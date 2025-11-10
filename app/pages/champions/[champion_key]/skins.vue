<script setup lang="ts">
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import '~/assets/css/plugins/embla.css'
import { skinIndex } from '~~/shared/indexes'
import type { CarouselApi } from '~/base/layout/carousel/carousel-index'
import { setupTweenParallax } from '~/assets/ts/embla-tween-parallax'

const { champion } = defineProps<{
  champion: Champion
}>()

definePageMeta({
  name: 'champion_skins',
  title: 'skins',
  level: 4,
  order: 3,
  path: '/champions/:champion_key/skins',
})

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const carouselOrientation = ref<'horizontal' | 'vertical'>('horizontal')
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = index
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaApi) => {
  if (!emblaApi)
    return

  onSelect()

  const teardown = setupTweenParallax(emblaApi, {
    axisRef: carouselOrientation,
    factor: 3.5, // tweak this freely
  })

  onBeforeUnmount(() => {
    teardown()
  })
})

const img = useImage()
const skins = computed(() => skinIndex[champion.key])
</script>

<template>
  <div class="-ml-10 size-full gap-14 overflow-hidden pr-22">
    <Carousel
      :plugins="[WheelGesturesPlugin()]"
      :orientation="carouselOrientation"
      class="mask-x-from-0% mask-x-to-6% mask-x-from-transparent mask-x-to-black relative -ml-6 w-full overflow-auto  pl-6"
      @init-api="(val) => (emblaThumbnailApi = val)">
      <CarouselContent
        class="scrollbar-hidden -ml-6 flex  pt-22 pb-6">
        <CarouselItem
          v-for="(skin, index) in skins"
          :key="index"
          class="pl-46h-38 !basis-1/6 cursor-pointer"
          @click="onThumbClick(index)">
          <div :class="cn('transition-all cursor-pointer duration-300 rounded-xl hover:opacity-100 hover:ring hover:ring-b4 **:pointer-events-none', index === selectedIndex ? 'opacity-100 ring ring-bc/40 pointer-events-none ring-offset-5 ring-offset-b1' : 'opacity-80')">
            <Card
              class="drop-shadow-black/20 h-38 overflow-hidden !rounded-xl border-0 !p-0 shadow-sm shadow-black/20 drop-shadow-sm">
              <CardContent
                class="relative flex items-center justify-center p-0">
                <Img
                  :alt="skin.name"
                  :img="getSplash(champion.key, 'tile', skin)"
                  class="inset-0 -mt-10 size-full object-cover" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <Carousel
      :opts="{ loop: true }"
      :plugins="[WheelGesturesPlugin()]"
      class="relative size-full"
      @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent class="embla__container pt-2 pb-20">
        <CarouselItem
          v-for="(skin, index) in skins"
          :key="index"
          class="!rounded-xl">
          <div class="embla__slide p-2">
            <Card
              class="embla__parallax drop-shadow-black/20 !rounded-xl border-0 shadow-sm shadow-black/20 drop-shadow-sm">
              <CardContent
                class="embla__parallax__layer p-0 after:absolute after:size-full after:inset-shadow-[1px_1px_5px_rgba(0,0,0,0.25)]">
                <Img
                  :alt="skin.name"
                  :img="getSplash(champion.key, 'uncentered', skin)"
                  class="embla__slide__img embla__parallax__img" />

                <div
                  class="text-4 absolute bottom-4 left-6 grid w-max place-items-center rounded-full bg-black/70 px-5 py-1 font-medium text-white/80 italic opacity-90 backdrop-blur ">
                  {{ skin.name }}
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        variant="base"
        hover="neutral"
        class="fx-0 left-10 size-16 rounded-xl border-0 bg-transparent **:text-white/70 [&_svg]:size-6" />
      <CarouselNext
        variant="base"
        hover="neutral"
        class="fx-0 right-6 size-16 rounded-xl border-0 bg-transparent **:text-white/70 [&_svg]:size-6" />
    </Carousel>
  </div>
</template>
