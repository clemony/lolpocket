<script lang="ts" setup>
import { reviews } from '#shared/data'
import { motion } from 'motion-v'
import type { CarouselApi } from '~/base/layout/carousel/carousel-index'
import { reviewVariants } from './variants'

const api = ref<CarouselApi>()
const inView = ref(0)
function setApi(val: CarouselApi) {
  api.value = val
}

computed(() => {
  if (!api.value)
    return null

  return api.value.selectedScrollSnap()
})

watchOnce(api, (api) => {
  if (!api)
    return

  api.on('select', () => {
    inView.value = api.selectedScrollSnap()
  })
})
</script>

<template>
  <div
    class="bg-b1 relative grid w-full items-center overflow-hidden px-30 pt-40 pb-40">
    <Carousel
      :opts="{
        loop: true,
      }"
      @init-api="setApi">
      <CarouselContent class="size-full">
        <CarouselItem
          v-for="(page, i) in reviews"
          :key="i"
          class="grid h-full w-full grid-cols-2 grid-rows-2 place-items-center gap-x-40 gap-y-60 justify-self-center p-30 **:[&_p]:leading-7">
          <motion.div
            v-for="r in page"
            :key="r.id"
            :variants="reviewVariants"
            :animate="api && inView === i ? 'visible' : 'hidden'"
            initial="hidden"
            exit="hidden"
            class="flex w-full flex-col gap-4"
            :transition="{
              type: 'spring',
              delay: 0.3,
              duration: 0.4,
            }">
            <h1 class="dst font-serif leading-9 font-black">
              “{{ r.title }}”
            </h1>

            <div class="flex items-start justify-start gap-8">
              <ChampionIcon
                :id="r.id"
                :alt="r.name"
                class="mt-4 size-22 shrink-0 overflow-hidden rounded-full" />

              <div>
                <p
                  class="text-bc text-4 dst mt-5 w-full [&_u]:decoration-dotted"
                  v-html="r.text" />

                <p
                  class="mt-2 flex items-center gap-2 justify-self-end text-right italic">
                  - {{ r.location }}
                  <icon
                    v-tippy="`${r.tip}`"
                    name="carbon:information"
                    class="size-4.5 stroke-2" />
                </p>
              </div>
            </div>
          </motion.div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious class="scale-120" />

      <CarouselNext class="scale-120" />
    </Carousel>

    <div class="flex w-full items-center justify-center gap-1 pt-10">
      <label
        v-for="i in 2"
        :key="i"
        class="group grid size-5 cursor-pointer place-items-center overflow-hidden rounded-full">
        <input
          type="radio"
          :value="i"
          class="peer hidden" />

        <div
          class="group-hover:bg-b4 ring-neutral bg-b3 btn btn-circle tldr-20 pointer-events-none size-2 ring-offset-2 group-hover:ring-1"
          :class="{ 'bg-neutral group-hover:bg-neutral': i === i }" />
      </label>
    </div>
  </div>
</template>

<style scoped>
b {
  font-weight: 500;
}
</style>
