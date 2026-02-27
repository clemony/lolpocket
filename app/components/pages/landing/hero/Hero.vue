<script setup lang="ts">
import { motion } from "motion-v"
import { heroDisplays } from "~/domain/riot/media/video"

const { progress: p, visible } = defineProps<{
  progress?: any
  visible?: boolean
}>()

const video = heroDisplays[0] ?? { url: "", class: "" }
const prog = ref(0)

/* useMotionValueEvent(p, "change", (latest) => {
  let a = Number(latest) * 80
  a = Math.round(a * 100) / 100
  prog.value = a
}) */

const welcome = useTemplateRef<HTMLElement>("welcome")

const isVisible = ref(false)
const { x, y } = useMouse()
</script>

<template>
  <UPageSection class="h-screen w-screen">
    <motion.div
      :style="{ transform: `translate(0, -${prog}%)` }"
      class="top-0 z-0 grid h-screen w-screen items-start justify-start overflow-hidden">
      <div class="relative h-screen">
        <ClientOnly>
          <video
            :style="{
              display: 'block',
              height: '100vh',
            }"
            :class="
              cn('absolute block h-screen opacity-50 grayscale', video.class)
            "
            loop
            playsinline
            disablepictureinpicture
            autoplay
            muted>
            <source :src="video.url" type="video/mp4" />
          </video>
        </ClientOnly>
      </div>
    </motion.div>
    <UPageHero class="relative" :class="{ sticky: visible }">
      <div
        ref="welcome"
        class="absolute inset-0 top-0 left-0 z-1 grid grid-cols-2 place-items-center bg-linear-to-r from-p0 from-25% to-transparent to-90%">
        <div class="justify-self-start pl-44">
          <div class="relative grid size-full w-140 max-w-140 items-center">
            <LolpocketDefinition>
              <UButton
                variant="outline"
                size="lg"
                :class="
                  cn(
                    'pointer-events-auto relative mt-3 w-28 place-self-end overflow-hidden border-p3 text-sm shadow-xs transition-all duration-200 hover:bg-neutral hover:text-nc'
                  )
                "
                @click="navigateTo('/login')">
                Sign in
              </UButton>
            </LolpocketDefinition>
          </div>

          <div class="absolute bottom-5 grid w-full justify-center self-end">
            <div class="grid place-items-center">
              <icon class="size-9 opacity-30" name="down" />
            </div>
          </div>
        </div>
        <!--
        <HeroControls
          :api="api"
          :is-visible="isVisible"
          @restart-timer="start()" /> -->
      </div>
    </UPageHero>
  </UPageSection>
</template>
