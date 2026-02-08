<script setup lang="ts">
import '@ui/css/plugins/embla.css'
import type { CarouselApi } from '~~/layers/ui/app/components/carousel/interface'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

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
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  selectedIndex.value = index
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, (emblaApi) => {
  if (!emblaApi) return

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
      class="relative -ml-6 w-full overflow-auto mask-x-from-transparent mask-x-from-0% mask-x-to-black mask-x-to-6% pl-6"
      :plugins="[WheelGesturesPlugin()]"
      :orientation="carouselOrientation"
      @init-api="(val) => (emblaThumbnailApi = val)">
      <CarouselContent class="-ml-6 scrollbar-hidden flex pt-22 pb-6">
        <CarouselItem
          v-for="(skin, index) in skins"
          :key="index"
          class="pl-46h-38 basis-1/6! cursor-pointer"
          @click="onThumbClick(index)">
          <div
            :class="
              cn(
                'hover:ring-b4 cursor-pointer rounded-xl transition-all duration-300 **:pointer-events-none hover:opacity-100 hover:ring',
                index === selectedIndex
                  ? 'ring-pc/40 ring-offset-p0 pointer-events-none opacity-100 ring ring-offset-5'
                  : 'opacity-80',
              )
            ">
            <Card
              class="h-38 overflow-hidden rounded-xl! border-0 p-0! shadow-sm shadow-black/20 drop-shadow-sm drop-shadow-black/20">
              <CardContent
                class="relative flex items-center justify-center p-0">
                <Img
                  class="inset-0 -mt-10 size-full object-cover"
                  :alt="skin.name"
                  :src="getSplash(champion.key, 'tile', skin)" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <Carousel
      class="relative size-full"
      :opts="{ loop: true }"
      :plugins="[WheelGesturesPlugin()]"
      @init-api="(val) => (emblaMainApi = val)">
      <CarouselContent class="embla__container pt-2 pb-20">
        <CarouselItem
          v-for="(skin, index) in skins"
          :key="index"
          class="rounded-xl!">
          <div class="embla__slide p-2">
            <Card
              class="embla__parallax rounded-xl! border-0 shadow-sm shadow-black/20 drop-shadow-sm drop-shadow-black/20">
              <CardContent
                class="embla__parallax__layer p-0 after:absolute after:size-full after:inset-shadow-[1px_1px_5px_rgba(0,0,0,0.25)]">
                <Img
                  class="embla__slide__img embla__parallax__img"
                  :alt="skin.name"
                  :src="getSplash(champion.key, 'uncentered', skin)" />

                <div
                  class="absolute bottom-4 left-6 grid w-max place-items-center rounded-full bg-black/70 px-5 py-1 text-lg font-medium text-white/80 italic opacity-90 backdrop-blur-sm">
                  {{ skin.name }}
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        class="left-10 size-16 rounded-xl border-0 bg-transparent fx-0 **:text-white/70 [&_svg]:size-6"
        variant="base"
        hover="neutral" />
      <CarouselNext
        class="right-6 size-16 rounded-xl border-0 bg-transparent fx-0 **:text-white/70 [&_svg]:size-6"
        variant="base"
        hover="neutral" />
    </Carousel>
  </div>
</template>
