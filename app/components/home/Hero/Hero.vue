<script setup lang="ts">
import type { MotionValue } from 'motion-v'
import { motion } from 'motion-v'

const { progress: p, visible } = defineProps<{
  progress: MotionValue
  visible: boolean
}>()

const video = heroDisplays[0]
const videoRef = ref()
console.log('💠 - videoRef:', videoRef)
const prog = ref(0)
const as = useAccountStore()
useMotionValueEvent(p, 'change', (latest) => {
  let a = latest * 80
  a = Math.round(a * 100) / 100
  prog.value = a
})

const welcome = ref<HTMLElement>()

const isVisible = ref(false)
const { x, y } = useMouse()

//  hide element 3s after last movement
const { start, stop } = useTimeoutFn(() => {
  isVisible.value = false
}, 2500)

// Watch mouse
watch([x, y], () => {
  isVisible.value = true
  start() // restart
})

const { toggleSignIn, signInOpen } = inject('signIn', {
  signInOpen: ref(false),
  toggleSignIn: () => {},
})
console.log('💠 - toggleSignIn:', toggleSignIn)
console.log('💠 - signInOpen:', signInOpen)

onMounted(() => {
  videoRef.value.player.play()
})
</script>

<template>
  <div
    class="h-screen w-screen relative overflow-hidden *:size-full *:z-0 top-0 left-0 z-0"
    :class="{ sticky: visible }">
    <motion.div
      class="size-full z-0 overflow-hidden grid items-start justify-start"
      :style="{ transform: `translate(0, -${prog}%)` }">
      <div class="h-screen w-screen relative">
        <video-background
          ref="videoRef"
          :autoplay="true"
          :src="video.url"
          :class="
            cn('h-[100vh] opacity-50  absolute grayscale block', video.class)
          "
          :style="{
            display: 'block',
          }"
          @load="videoRef.player.play()"
          @error="console.log('error')" />
      </div>
    </motion.div>

    <div
      ref="welcome"
      class="absolute left-0 top-0 inset-0 grid grid-cols-2 z-1 place-items-center from-b1 from-25% to-90% to-transparent bg-linear-to-r">
      <div class="justify-self-start">
        <div class="grid items-center size-full relative max-w-140 w-140 pl-22">
          <LolpocketDefinition>
            <button
              v-show="!as.userAccount?.id"
              class=""
              :class="
                cn(
                  'pointer-events-auto w-28 justify-self-end relative hover:bg-n1 btn-lg mt-3 btn btn-outline border-b3 hover:text-nc text-2  self-end justify-self-end overflow-hidden shadow-xs transition-all duration-200',
                  { '!bg-n1': signInOpen },
                )
              "
              @click="toggleSignIn()">
              <i-ui-loading-bars
                v-if="signInOpen"
                class="**:!text-nc *:!stroke-nc !stroke-nc !fill-nc !text-nc absolute shrink-0 h-5 w-auto" />

              <span
                v-show="!signInOpen"
                class="absolute">Sign in</span>
            </button>
          </LolpocketDefinition>
        </div>

        <div class="absolute bottom-5 w-full self-end justify-center grid">
          <div class="place-items-center grid">
            <icon
              name="down-sm"
              class="opacity-30 size-9" />
          </div>
        </div>
      </div>
      <!--
      <HeroControls
        :api="api"
        :is-visible="isVisible"
        @restart-timer="start()" /> -->
    </div>
  </div>
</template>

<style scoped></style>
