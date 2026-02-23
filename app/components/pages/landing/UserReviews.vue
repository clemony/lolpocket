<script lang="ts" setup>
import { motion } from "motion-v"
import { reviews } from "~/domain/lp/content/reviews"
import type { CarouselApi } from "~~/layers/ui/app/components/carousel/interface"
import { reviewVariants } from "./variants"

const api = ref<CarouselApi>()
const inView = ref(0)
function setApi(val: CarouselApi) {
  api.value = val
}

computed(() => {
  if (!api.value) return null

  return api.value.selectedScrollSnap()
})

watchOnce(api, (api) => {
  if (!api) return

  api.on("select", () => {
    inView.value = api.selectedScrollSnap()
  })
})
</script>

<template>
  <div
    class="relative grid w-full items-center overflow-hidden bg-p0 px-30 py-40">
    <Carousel
      :opts="{
        loop: true,
      }"
      @init-api="setApi">
      <CarouselContent class="size-full">
        <CarouselItem
          v-for="(page, i) in reviews"
          :key="i"
          class="grid size-full grid-cols-2 grid-rows-2 place-items-center gap-x-40 gap-y-60 justify-self-center p-30 **:[&_p]:leading-7">
          <motion.div
            v-for="r in page"
            :key="r.id"
            class="flex w-full flex-col gap-4"
            :variants="reviewVariants"
            :animate="api && inView === i ? 'visible' : 'hidden'"
            initial="hidden"
            exit="hidden"
            :transition="{
              type: 'spring',
              delay: 0.3,
              duration: 0.4,
            }">
            <h1 class="dst font-serif leading-9 font-black">“{{ r.title }}”</h1>

            <div class="flex items-start justify-start gap-8">
              <Champion
                :id="r.id"
                class="mt-4 size-22 shrink-0 overflow-hidden rounded-full"
                :alt="r.name" />

              <div>
                <p
                  class="mt-5 w-full text-lg text-pc ds-2xs [&_u]:decoration-dotted"
                  v-html="r.text" />

                <p
                  class="mt-2 flex items-center gap-2 justify-self-end text-right italic">
                  - {{ r.location }}
                  <icon
                    label="`${r.tip}`"
                    class="size-4.5 stroke-2"
                    name="carbon:information" />
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
        <input class="peer hidden" type="radio" :value="i" />

        <div
          class="tldr-20 group-hover:bg-b4 btn pointer-events-none btn-circle size-2 bg-p3 ring-neutral ring-offset-2 group-hover:ring-1"
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
