<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { motion } from 'motion-v'
import type { CarouselApi } from '~/components/base/carousel/carousel-index'

const { progress: p, visible, signInOpen } = defineProps<{
  progress: MotionValue
  visible: boolean
  signInOpen: boolean
}>()

const emit = defineEmits(['open:sign-in'])
const prog = ref(0)
const as = useAccountStore()
useMotionValueEvent(p, 'change', (latest) => {
  let a = latest * 80
  a = Math.round(a * 100) / 100
  prog.value = a
})

const api = ref<CarouselApi>()
const carousel = ref()
const welcome = ref<HTMLElement>()
const selectedDisplay = ref(null)
const isVisible = ref(false)
const { x, y } = useMouse()

const autoplay = Autoplay({
  delay: 9000,
  stopOnMouseEnter: false,
  stopOnInteraction: false,
})

// pause carousel when not visible

watch(() => visible, (newVal) => {
  if (!api.value || !autoplay)
    return

  if (!visible)
    api.value.plugins().autoplay.stop()

  else if (visible)
    api.value.plugins().autoplay.play()
})

function setApi(val: CarouselApi) {
  api.value = val
}

//  hide element 3s after last movement
const { start, stop } = useTimeoutFn(() => {
  isVisible.value = false
}, 2500)

// Watch mouse
watch([x, y], () => {
  isVisible.value = true
  start() // restart
})
</script>

<template>
  <Carousel
    v-if="progress"
    ref="carousel"
    class="h-screen w-screen relative overflow-hidden *:size-full  *:z-0   top-0 left-0 z-0"
    :class="{ sticky: visible }"
    :opts="{
      loop: true,
    }"
    :plugins="[autoplay, Fade()]"
    @init-api="setApi"

    @autoplay:stop="console.log('hi')">
    <CarouselContent
      v-show="visible">
      <CarouselItem v-for="(video, i) in heroDisplays" :key="i" hydrate-on-visible as-child>
        <motion.div
          class="size-full z-0 overflow-hidden grid  items-start justify-start"
          :style="{ transform: `translate(0, -${prog}%)` }">
          <div class="h-screen w-screen relative">
            <Video
              :ref="video.ref"
              autoplay
              :src="video.url"
              class=" opacity-50  absolute grayscale"
              :class="video.class"
              @error="console.log('error')" />
          </div>
        </motion.div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>

  <div ref="welcome" class="absolute left-0 top-0 inset-0 grid grid-cols-2 z-1  place-items-center  from-b1 from-25% to-90% to-transparent bg-linear-to-r">
    <div class="justify-self-start ">
      <div class="grid items-center size-full relative max-w-140 w-140 pl-22">
        <LolpocketDefinition>
          <button
            v-show="!as.currentSession?.session"
            class=""
            :class="cn('pointer-events-auto w-28 justify-self-end relative hover:bg-n1 btn-lg mt-3 btn btn-outline border-b3 hover:text-nc text-2  self-end justify-self-end overflow-hidden shadow-xs transition-all duration-200', { '!bg-n1': signInOpen })"
            @click="emit('open:sign-in')">
            <i-ui-loading-bars v-if="signInOpen" class="**:!text-nc *:!stroke-nc !stroke-nc !fill-nc !text-nc absolute shrink-0 h-5 w-auto" />

            <span v-show="!signInOpen" class="absolute">
              Sign in
            </span>
          </button>
        </LolpocketDefinition>
      </div>

      <div class="absolute bottom-5 w-full self-end justify-center grid">
        <div class="place-items-center grid">
          <icon
            name="down-sm"
            class=" opacity-30  size-9" />
        </div>
      </div>
    </div>

    <HeroControls
      :api="api"
      :is-visible="isVisible"
      @restart-timer="start()" />
  </div>
</template>

<style scoped></style>
