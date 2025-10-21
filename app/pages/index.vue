<script setup lang="ts">
useSeoMeta({
  title: 'lolpocket',
  description: 'is that lp in your pocket?',
  ogDescription: 'is that lp in your pocket?',
  ogImage: '[og:image]',
  ogTitle: 'lolpocket',
  ogUrl: 'https://www.lolpocket.com',
  twitterCard: 'summary',
  twitterDescription: 'is that lp in your pocket?',
  twitterImage: '[twitter:image]',
  twitterTitle: 'lolpocket',
})

definePageMeta({
  name: 'home',
  layout: 'basic',
  meta: {
    title: 'lolpocket',
    icon: 'teenyicons:home-alt-outline',
    parent: '/home',
    searchKeys: ['home', 'landing', 'testimonials'],
  },
  path: '/',
  search: 'hidden',
})

const homeWrapper = useTemplateRef<HTMLElement | null>('homeWrapper')
const home = useTemplateRef<HTMLElement | null>('home')
const steps = useTemplateRef<HTMLElement | null>('steps')
const hero = useTemplateRef<HTMLElement | null>('hero')

const { scrollYProgress: stepProgress } = useMotionScroll({
  container: homeWrapper,
  offset: ['start end', 'end start'],
  target: steps,
})

const { scrollYProgress } = useMotionScroll({
  container: homeWrapper,
  offset: ['start end', 'end start'],
  target: home,
})

const progressY = ref(0)

useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  const x = latest * 80
  progressY.value = Math.round(x * 100) / 100
})

const heroVisible = shallowRef(false)

const { stop } = useIntersectionObserver(hero, ([entry], observerElement) => {
  heroVisible.value = entry?.isIntersecting || false
})
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
      class="absolute pointer-events-none left-0 size-px overflow-hidden bg-transparent" />

    <div ref="steps">
      <LazyHomeSteps
        :scroll-ref="homeWrapper"
        :scroll-prog="stepProgress" />
    </div>

    <div ref="home">
      <LazyHomeAdditional :progress-y="progressY" />
    </div>

    <LazyUserReviews />

    <SiteFooter />
  </div>
</template>

<style scoped></style>
