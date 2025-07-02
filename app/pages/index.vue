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


const { signInOpen } = defineProps<{
signInOpen: boolean
}>()
const emit = defineEmits(['open:sign-in'])

const homeWrapper = ref<HTMLElement | null>()
const home = ref<HTMLElement | null>()
const steps = ref<HTMLElement | null>()
const hero = ref<HTMLElement | null>()

const { scrollYProgress: stepProgress } = useScroll({
  container: homeWrapper,
  target: steps,
  offset: ['start end', 'end start'],
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
})

const heroVisible = shallowRef(false)

const { stop } = useIntersectionObserver(
  hero,
  ([entry], observerElement) => {
    console.log('💠 - entry:', entry)
    heroVisible.value = entry?.isIntersecting || false
  },
)

watch(() => heroVisible.value, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <div
    ref="homeWrapper"
    class="relative w-screen overflow-x-hidden home-wrapper size-full overflow-y-scroll">
    <Hero :progress="stepProgress" :visible="heroVisible" @open:sign-in="emit('open:sign-in')"  :sign-in-open="signInOpen" />

    <div ref="hero" class="absolute pointer-events-none  left-0  size-px  overflow-hidden bg-transparent" />

    <div ref="steps">
      <LazyHomeSteps :scroll-ref="homeWrapper" :scroll-prog="stepProgress" hydrate-on-visible />
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
