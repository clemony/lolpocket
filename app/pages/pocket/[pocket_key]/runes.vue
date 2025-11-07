<script setup lang="ts">
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import type { CarouselApi } from '~/base/layout/carousel/carousel-index'
import { addRuneSet } from '~~/shared/schema'

definePageMeta({
  name: 'pocket-runes',
  title: 'runes',
  order: 3,
  path: '/pocket/:pocket_key/runes',
  search: 'hidden',
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value
console.log('🌱 - pocket:', pocket.runes[0])

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

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi)
    return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})

watch(
  () => selectedIndex.value,
  (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
  }
)

function handleAdd() {
  const l = pocket.runes.length - 1
  addRuneSet(pocket)
  emblaMainApi.value.scrollTo(l)
}
</script>

<template>
  <div
    class="z-auto flex size-full max-h-full flex-col items-center -space-y-6 overflow-y-scroll pt-10 pr-16 pl-10 *:max-w-[1200px]">
    <!-- thumbnails -->
    <Carousel
      class="bg-b1/60 mask-x-from-0% mask-x-to-10% mask-x-from-transparent mask-x-to-black sticky -top-10 z-1 flex w-full flex-shrink-1 items-center justify-center gap-2 py-4 backdrop-blur-md"
      :opts="{ loop: true }"
      :plugins="[WheelGesturesPlugin()]"
      @init-api="(val) => (emblaThumbnailApi = val)">
      <CarouselContent
        class="scrollbar-none ml-0 w-fit max-w-full overflow-x-scroll overscroll-auto scroll-smooth"
        as-child>
        <TransitionScalePop
          group
          class="flex w-fit items-center gap-2 px-32 py-0">
          <CarouselItem
            v-for="(thumbSet, index) in pocket.runes"
            :key="index"
            :class="
              cn(
                'p-1 basis-1 grow  cursor-pointer',
                index === selectedIndex ? '' : 'opacity-50',
              )
            "
            @click="onThumbClick(index)">
            <Card
              class="h-22 w-40"
              as-child>
              <KeystoneAndPath :set="thumbSet" />
            </Card>
          </CarouselItem>

          <!-- add button -->

          <CarouselItem
            :class="
              cn(
                'p-1 basis-1  opacity-60 has-disabled:opacity-40 has-disabled:cursor-not-allowed has-[not-disabled]:hover:opacity-100 grow w-min cursor-pointer',
              )
            ">
            <Card
              v-tippy="{
                content:
                  pocket.runes.length >= 10
                    ? 'Max amount of sets reached'
                    : 'Add rune set',
                theme: 'basic',
                arrow: false,
              }"
              as-child>
              <Button
                variant="base"
                hover="btn"
                :disabled="pocket.runes.length >= 10"
                class="grid h-22 w-40 place-items-center"
                @click="handleAdd()">
                <icon name="add" />
              </Button>
            </Card>
          </CarouselItem>
        </TransitionScalePop>
      </CarouselContent>
    </Carousel>
    <!-- main page -->

    <Carousel
      :plugins="[WheelGesturesPlugin()]"
      :opts="{ loop: true, align: 'center' }"
      class="size-full"
      @init-api="(val) => (emblaMainApi = val)">
      <CarouselPrevious
        class="sticky left-10"
        @click="emblaMainApi.scrollPrev()" />
      <CarouselNext
        class="!sticky left-[calc(100%-60px)]"
        @click="emblaMainApi.scrollNext()" />
      <CarouselContent>
        <CarouselItem
          v-for="(set, index) in pocket.runes"
          :key="index"
          class="size-full pb-14">
          <PocketRunesLayout
            :set="set"
            @update:slide="emblaMainApi.scrollNext()" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
