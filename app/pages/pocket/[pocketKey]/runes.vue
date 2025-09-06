<script setup lang="ts">
import { addRuneSet } from '#shared/utils'
import type { CarouselApi } from '/base/carousel/carousel-index'

definePageMeta({
  name: 'pocket-runes',
  title: 'runes',
  path: '/pocket/:pocketKey/runes',
  level: 3,
  order: 3,
  parent: '/pocket',
  search: false,
})

const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey))).value
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

watch(() => selectedIndex.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <div class="w-full pl-10 h-fit flex gap-16">
    <!-- main page -->

    <Carousel
      class="relative w-full  grow "
      @init-api="(val) => emblaMainApi = val">
      <div class="relative size-full overflow-hidden ">
        <CarouselPrevious class=" left-0" />
        <CarouselContent>
          <CarouselItem
            v-for="(set, index) in pocket.runes"
            :key="index">
            <PocketRunesLayout :set="set" />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext class="right-0" />
      </div>
    </Carousel>

    <!-- thumbnails -->

    <Carousel
      class="relative flex-shrink-1 items-center pb-16 pt-18 "
      @init-api="(val) => emblaThumbnailApi = val">
      <CarouselContent class="flex flex-col py-0 gap-2 ml-0 items-center">
        <!-- menu buttons -->

        <div class="w-full h-12 flex flex-nowrap items-center px-1 mb-4 gap-2">
          <Button
            variant="outline"
            title="Delete Set"
            class="h-full w-max grow shadow-sm shadow-black/6"
            @click="deleteRuneSet(pocket, pocket.runes[selectedIndex])">
            <icon
              name="trash" />
          </Button>
          <Button
            variant="outline"
            title="Reset set runes"
            class="h-full w-max grow  shadow-sm shadow-black/6"
            @click="resetRuneSet(pocket.runes[selectedIndex])">
            <icon
              name="reset"
              class="size-4.5" />
          </Button>
        </div>
        <CarouselItem
          v-for="thumbSet, index in pocket.runes"
          :key="index"
          :class="cn('p-1  w-max cursor-pointer', index === selectedIndex ? '' : 'opacity-50')"
          @click="onThumbClick(index)">
          <Card
            class=" w-40 h-22 shadow-smshadow-black/8 gap-3 grid grid-cols-2 !justify-end items-center">
            <!--         <span class="text-2   absolute bottom-0 right-3">
                  {{ index + 1 }}
                </span> -->

            <span class="size-full relative grid items-center justify-end">
              <img
                v-if="thumbSet?.keystone"
                c
                :title="String(ix().runeNameById(thumbSet?.keystone))"
                :alt="thumbSet?.keystone.toString()"
                :src="`/img/runes/${thumbSet?.primary?.path}/${thumbSet?.keystone}.webp`"
                class="!w-14 shrink-0 absolute !justify-self-end drop-shadow-sm -right-1" />

              <Placeholder
                v-else
                class="rounded-full size-11 bg-b2/80 justify-end  shrink-0" />
            </span>
            <img
              v-if="thumbSet?.secondary?.path"
              :title="thumbSet?.secondary?.path"
              :alt="thumbSet?.secondary?.path"
              :src="`/img/paths/${thumbSet?.secondary?.path}.webp`"
              class="w-7 drop-shadow-sm  justify-self-start ml-1" />
            <Placeholder
              v-else
              class="rounded-full size-11 bg-b2/80 shrink-0 justify-start" />
          </Card>
        </CarouselItem>

        <!-- add button -->

        <CarouselItem
          :class="cn('p-1  w-min cursor-pointer')">
          <Card
            class=""
            as-child>
            <Button
              variant="base"
              hover="btn"
              title="Add rune set"
              class="grid place-items-center *:opacity-60 hover:*:opacity-100  w-40 h-22 d5"
              @click="addRuneSet(pocket)">
              <icon name="add" />
            </Button>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
