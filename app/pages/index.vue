<script setup lang="ts">
import { motion } from 'motion-v'

definePageMeta({
  name: 'home',
  path: '/',
  title: 'lolpocket',
  searchKeys: ['home', 'landing', 'testimonials'],
  icon: 'teenyicons:home-alt-outline',
  section: 'home',
})

const homeWrapper = ref<HTMLElement | null>()
const home = ref<HTMLElement | null>()
const steps = ref<HTMLElement | null>()

const { scrollYProgress: stepProgress } = useScroll({
  container: homeWrapper,
  target: steps,
  offset: ['start end', 'end start'],
})

const progStep = ref(0)

useMotionValueEvent(stepProgress, 'change', (latest) => {
  const x = latest * 80
  progStep.value = Math.round(x * 100) / 100

  if (progStep.value)
    console.log('💠 - useMotionValueEvent - progStep.value:', progStep.value)
})

const { scrollYProgress } = useScroll({
  container: homeWrapper,
  target: home,
  offset: ['start end', 'end start'],
})

const progressY = ref(0)

useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  const x = latest * 80
  progressY.value = Math.round(x * 100) / 100

  if (progressY.value > 0)
    console.log('💠 - useMotionValueEvent - progressY.value:', progressY.value)
})
</script>

<template>
  <div
    ref="homeWrapper"
    class="relative home-wrapper size-full overflow-y-scroll">
    <Hero :progress="progStep" />

    <div ref="steps">
      <HomeSteps :scroll-ref="homeWrapper" />
    </div>

    <div ref="home">
      <LazyHomeAdditional :progress-y="progressY" hydrate-on-visible />
    </div>
    <LazyUserReviews hydrate-on-visible />
    <LazySiteMap hydrate-on-visible />
    <HomeFooter />
  </div>
</template>

<style scoped></style>
