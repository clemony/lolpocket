<script setup lang="ts">
import type { MotionValue } from 'motion-v'
import { motion } from 'motion-v'
import { heroDisplays } from '~~/shared/data/video'

const { progress: p, visible } = defineProps<{
  progress: MotionValue
  visible: boolean
}>()

const video = heroDisplays[0]
const videoRef = ref<any>()
const prog = ref(0)

useMotionValueEvent(p, 'change', (latest) => {
  let a = latest * 80
  a = Math.round(a * 100) / 100
  prog.value = a
})

const welcome = useTemplateRef<HTMLElement>('welcome')

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

onMounted(() => {
  videoRef.value.player.play()
})
</script>

<template>
  <div
    class="relative top-0 left-0 z-0 h-[100vh] w-full overflow-hidden *:z-0 *:size-full"
    :class="{ sticky: visible }">
    <motion.div
      class="top-0 z-0 grid h-screen w-full items-start justify-start overflow-hidden">
      <!--   :style="{ transform: `translate(0, -${prog}%)` }" -->
      <div class="relative h-screen w-screen">
        <video-background
          ref="videoRef"
          :autoplay="true"
          :src="video.url"
          :class="
            cn('h-[100vh] opacity-50  absolute grayscale block', video.class)
          "
          :style="{
            display: 'block',
            height: '100vh',
          }"
          @load="videoRef.player.play()"
          @error="console.log('error')" />
      </div>
    </motion.div>

    <div
      ref="welcome"
      class="from-b1 absolute inset-0 top-0 left-0 z-1 grid grid-cols-2 place-items-center bg-linear-to-r from-25% to-transparent to-90%">
      <div class="justify-self-start">
        <div class="relative grid size-full w-140 max-w-140 items-center">
          <LolpocketDefinition>
            <Button
              variant="outline"
              size="12"
              :class="
                cn(
                  'pointer-events-auto w-28 justify-self-end relative hover:bgneutral  mt-3  border-b3 hover:text-nc text-2  self-end justify-self-end overflow-hidden shadow-xs transition-all duration-200',
                )
              "
              @click="navigateTo('/login')">
              Sign in
            </Button>
          </LolpocketDefinition>
        </div>

        <div class="absolute bottom-5 grid w-full justify-center self-end">
          <div class="grid place-items-center">
            <icon
              name="down"
              class="size-9 opacity-30" />
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
