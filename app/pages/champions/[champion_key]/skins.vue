<script setup lang="ts">
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import '~/assets/css/plugins/embla.css'
import {
  setupTweenParallax,
  teardownTweenParallax,
} from '~/assets/ts/embla-tween-parallax'
import type { CarouselApi } from '~/base/carousel/carousel-index'

const { champion } = defineProps<{
  champion: Champion
}>()

definePageMeta({
  name: 'champion_skins',
  title: 'skins',
  path: '/champions/:champion_key/skins',
  level: 4,
  order: 3,
})

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
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
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaApi) => {
  if (!emblaApi)
    return

  onSelect()
  const teardown = setupTweenParallax(emblaApi)

  onBeforeUnmount(() => {
    teardown()
    teardownTweenParallax(emblaApi)
  })
})

const img = useImage()
const skins = computed(() => ix().skins[champion.key])
</script>

<template>
  <div class="size-full flex overflow-hidden gap-14 pr-22">
    <Carousel
      orientation="vertical"
      class="relative size-full max-h-full overflow-auto max-w-64 mask-y-from-0% mask-y-to-6% mask-y-from-transparent mask-y-to-black"
      @init-api="(val) => (emblaThumbnailApi = val)">
      <CarouselContent
        class="overflow-y-auto scrollbar-hidden flex py-22 gap-1 ml-0">
        <CarouselItem
          v-for="(skin, index) in skins"
          :key="index"
          class="cursor-pointer"
          @click="onThumbClick(index)">
          <div :class="index === selectedIndex ? '' : 'opacity-80'">
            <Card
              class="overflow-hidden !p-0 !rounded-xl h-38 shadow-sm drop-shadow-sm shadow-black/20 drop-shadow-black/20">
              <CardContent
                class="flex p-0 items-center relative justify-center">
                <Img
                  :alt="skin.name"
                  :img="getSkinSplash(champion.key, skin, 'tile')"
                  class="object-cover -mt-10 inset-0 size-full" />
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
      <CarouselContent class="embla__container py-20">
        <CarouselItem
          v-for="(skin, index) in skins"
          :key="index"
          class="!rounded-xl">
          <div class="embla__slide p-2">
            <Card
              class="embla__parallax border-0 !rounded-xl shadow-sm drop-shadow-sm shadow-black/20 drop-shadow-black/20">
              <CardContent
                class="p-0 embla__parallax__layer after:inset-shadow-[1px_1px_5px_rgba(0,0,0,0.25)] after:size-full after:absolute">
                <Img
                  :alt="skin.name"
                  :img="getSkinSplash(champion.key, skin, 'uncentered')"
                  class="embla__slide__img embla__parallax__img" />

                <div
                  class="opacity-90 absolute bg-black/70 px-5 w-max py-1 backdrop-blur rounded-full grid place-items-center text-md font-medium italic text-white/80 left-6 bottom-4">
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
        class="**:text-white/70 rounded-xl fx-0 left-10 bg-transparent [&_svg]:size-6 border-0 size-16" />
      <CarouselNext
        variant="base"
        hover="neutral"
        class="**:text-white/70 rounded-xl fx-0 right-6 bg-transparent [&_svg]:size-6 border-0 size-16" />
    </Carousel>
  </div>
</template>
