<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { motion } from 'motion-v'
import type { CarouselApi } from '~/components/base/carousel/carousel-index'

const { progress: p, visible } = defineProps<{
  progress: MotionValue
  visible: boolean
}>()

const prog = ref(0)

useMotionValueEvent(p, 'change', (latest) => {
  let a = latest * 80
  a = Math.round(a * 100) / 100
  prog.value = a
})

const as = useAccountStore()
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

// pause carousel when not visible

watch(() => visible, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
  if (!api.value || !autoplay)
    return

  if (!visible)
    api.value.plugins().autoplay.stop()

  else if (visible)
    api.value.plugins().autoplay.play()
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
    <div class="justify-self-start">
      <HeroWelcome />
    </div>

    <div class=" z-2  size-full transition-opacity duration-500 pointer-events-auto  opacity-0 gap-3 flex justify-end pr-5 items-end pb-5 " :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }">
      <div class="flex items-center gap-2 ">
        <HoverBtnSm :tip="isPlaying ? 'Pause' : 'Play'" @click="togglePlay">
          <icon v-if="isPlaying" name="pause" class="opacity-60" />

          <icon v-else name="play" class="opacity-60" />
        </HoverBtnSm>

        <motion.progress
          v-if="api" class="progress opacity-60 w-26" :value="timeLeft" max="9000"
          :transition="{ type: 'spring' }" />

        <HoverBtnSm tip="Previous" @click="handlePrev()">
          <icon name="next" class="rotate-180 size-4 opacity-60" />
        </HoverBtnSm>

        <HoverBtnSm tip="Next" @click="handleNext()">
          <icon name="next" class=" size-4  opacity-60" />
        </HoverBtnSm>

        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <HoverBtnSm tip="Options">
              <icon name="gear-solid" class="size-4 opacity-50" />
            </HoverBtnSm>
          </DropdownMenuTrigger>

          <ContrastDropdownContent side="top" align="end" :align-offset="-10" class="mr-3 w-60">
            <div class="w-full items-center px-1.5 gap-3 flex py-1 text-2 text-nc/80">
              <icon :name=" as.userAccount.settings.motion ? 'ph:video-camera-fill' : 'ph:video-camera-slash'" class=" opacity-90 shrink-0" />
              {{ as.userAccount.settings.motion ? 'Motion On' : 'Motion Off' }}
              <Grow />

              <Switch v-model="as.userAccount.settings.motion" class=" data-[state=unchecked]:bg-b3/40 inset-shadow-xs data-[state=checked]:bg-linear-to-br to-ah/90 to-60% from-lime-400/90 border-b4/50 justify-self-end scale-85" />
            </div>

            <DropdownMenuSub>
              <ContrastDropdownSubTrigger>
                Jump To...
              </ContrastDropdownSubTrigger>

              <ContrastDropdownSubContent :align-offset="-3" :side-offset="4">
                <DropdownMenuRadioGroup v-model:model-value="as.userAccount.settings.hero">
                  <DropdownRadioItemCT :value="null">
                    All
                  </DropdownRadioItemCT>

                  <DropdownRadioItemCT v-for="video in heroDisplays" :key="video.champ" :value="video.champ" class="">
                    {{ video.champ }}
                  </DropdownRadioItemCT>
                </DropdownMenuRadioGroup>
              </ContrastDropdownSubContent>
            </DropdownMenuSub>
          </ContrastDropdownContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
