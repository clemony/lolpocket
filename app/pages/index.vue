<script setup lang="ts">
useSeoMeta({
  title: 'lolpocket',
  description: 'is that lp in your pocket?',
  ogTitle: 'lolpocket',
  ogDescription: 'is that lp in your pocket?',
  ogImage: '[og:image]',
  ogUrl: 'https://www.lolpocket.com',
  twitterTitle: 'lolpocket',
  twitterDescription: 'is that lp in your pocket?',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

definePageMeta({
  name: 'home',
  path: '/',
  layout: 'basic',
  meta: {
    title: 'lolpocket',
    searchKeys: ['home', 'landing', 'testimonials'],
    icon: 'teenyicons:home-alt-outline',
    parent: '/home',
  },
})

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
    heroVisible.value = entry?.isIntersecting || false
  },
)
</script>

<template>
  <div
    ref="homeWrapper"
    class="relative w-full overflow-x-hidden home-wrapper size-full overflow-y-scroll">
    <Hero
      :progress="stepProgress"
      :visible="heroVisible" />

    <div
      ref="hero"
      class="absolute pointer-events-none  left-0  size-px  overflow-hidden bg-transparent" />

    <div ref="steps">
      <LazyHomeSteps
        :scroll-ref="homeWrapper"
        :scroll-prog="stepProgress" />
    </div>

    <div ref="home">
      <LazyHomeAdditional :progress-y="progressY" />
    </div>

    <LazyUserReviews />

    <LazySiteMap />

    <HomeFooter />
  </div>
</template>

<style scoped></style>
