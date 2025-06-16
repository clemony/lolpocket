<script setup lang="ts">
import type { CarouselApi } from 'components/base/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { motion } from 'motion-v'

const { progress } = defineProps<{
  progress: number
}>()

const api = ref<CarouselApi>()
const carousel = ref()

function setApi(val: CarouselApi) {
  api.value = val
}

const autoplay = Autoplay({
  delay: 9000,
  stopOnMouseEnter: false,
  stopOnInteraction: false,
})

const timer = ref(9000)
const timeLeft = computed (() => 9000 - timer.value)
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    if (api.value) {
      timer.value = api.value.plugins().autoplay.timeUntilNext()
    }
  }, 100)
})

onUnmounted(() => {
  if (interval !== undefined)
    clearInterval(interval)
})

const isPlaying = ref(true)

function togglePlay() {
  if (!api.value)
    return
  const autoplayPlugin = api.value.plugins().autoplay

  if (autoplayPlugin.isPlaying()) {
    api.value.plugins().autoplay.stop()
    isPlaying.value = false
  }
  else {
    api.value.plugins().autoplay.play()
    isPlaying.value = true
  }
}

function handlePrev() {
  api.value.scrollPrev()
  api.value.plugins().autoplay.reset()
}

function handleNext() {
  api.value.scrollNext()
  api.value.plugins().autoplay.reset()
}
</script>

<template>
  <Carousel
    ref="carousel"
    class="h-screen w-screen relative *:size-full relative *:z-0  sticky top-0 left-0 "
    :opts="{
      loop: true,
    }"
    :plugins="[autoplay, Fade()]"
    @init-api="setApi"
    @autoplay:stop="console.log('hi')">
    <CarouselContent>
      <CarouselItem v-for="(video, i) in heroDisplays" :key="i" hydrate-on-visible as-child>
        <motion.div class="size-full z-0" :style="{ transform: `translateY(-${progress}%)` }">
          <video-background
            :src="video"
            :style="{
              height: '100vh',
              backgroundPosition: '50% 50%',
            }"
            class="ml-[30vh]  -scale-x-100  opacity-50 brightness-125 contrast-160 grayscale" />
        </motion.div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>

  <div class="absolute left-0 top-0 inset-0 grid grid-cols-2 z-1  place-items-center pointer-events-none from-b1 from-25% to-90% to-transparent bg-linear-to-r">
    <div class="">
    <HeroWelcome />
  </div>
     <div class=" z-2  size-full  gap-3 flex justify-end pr-5 items-end pb-5 ">
      <div class="flex items-center gap-2 pointer-events-auto">
      <button
        v-tippy="isPlaying ? 'Pause' : 'Play'"
        class="btn btn-square btn-ghost btn-sm"
        @click="togglePlay">
        <icon v-if="isPlaying" name="teenyicons:pause-solid" class="opacity-60" />
        <icon v-else name="teenyicons:play-solid" class="opacity-60" />
      </button>
      <motion.progress
        v-if="api" class="progress opacity-60 w-26" :value="timeLeft" max="9000"
        :transition="{ type: 'spring' }" />


      <button
        v-tippy="'Previous'"
        class="btn btn-square btn-ghost btn-sm"
        @click="handlePrev()">
        <icon name="teenyicons:next-solid" class="rotate-180 size-4 opacity-60" />
      </button>
      <button
        v-tippy="'Next'"
        class="btn-ghost btn btn-square btn-sm"
        @click="handleNext()">
        <icon name="teenyicons:next-solid" class=" size-4  opacity-60" />
      </button>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
