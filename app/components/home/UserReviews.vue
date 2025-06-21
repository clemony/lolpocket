<script lang="ts" setup>
import { motion } from 'motion-v'
import { reviewVariants } from './variants'
</script>

<template>
  <div class="w-full bg-b1 items-center pt-40 pb-40 px-30 grid items-center relative  overflow-hidden">
    <Carousel
      :opts="{
        loop: true,
      }">
      <CarouselContent class="size-full">
        <CarouselItem
          v-for="page, i in reviews" :key="i"
          class="**:[&_p]:leading-7 w-full place-items-center justify-self-center grid grid-cols-2 grid-rows-2 p-30 gap-x-40 gap-y-60 h-full items-center">
          <motion.div
            v-for="r in page" :key="r.id"
            :variants="reviewVariants"
            initial="hidden" class="flex w-full flex-col gap-4"
            while-in-view="visible"
            :transition="{
              type: 'spring',
              delay: 0.3,
              duration: 0.4,
            }">
            <h1 class=" dst  font-black font-serif leading-9">
              “{{ r.title }}”
            </h1>

            <div class="flex gap-8 justify-start items-start">
              <ChampionIcon :id="r.id" :alt="r.name" class=" size-22 overflow-hidden rounded-full shrink-0 mt-4" />

              <div>
                <p class="text-bc text-4 w-full [&_u]:decoration-dotted   dst mt-5" v-html="r.text" />

                <p class="text-right mt-2 italic  justify-self-end flex gap-2 items-center">
                  - {{ r.location }}
                  <icon v-tippy="`${r.tip}`" name="carbon:information" class="size-4.5 stroke-2" />
                </p>
              </div>
            </div>
          </motion.div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious class="scale-120" />

      <CarouselNext class="scale-120" />
    </Carousel>

    <div class="w-full flex justify-center items-center gap-1 pt-10">
      <label
        v-for="i in 2" :key="i"
        class="size-5   cursor-pointer rounded-full grid place-items-center overflow-hidden group ">
        <input type="radio" :value="i" class="peer hidden" />

        <div class="group-hover:bg-b4 group-hover:ring-1 ring-neutral  bg-b3 size-2 btn btn-circle pointer-events-none tldr-20 ring-offset-2" :class="{ 'bg-neutral group-hover:bg-neutral': i == i }" />
      </label>
    </div>
  </div>
</template>

<style scoped>
b {
  font-weight: 500;
}
</style>
