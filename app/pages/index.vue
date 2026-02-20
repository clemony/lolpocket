<script setup lang="ts">
import { useScroll } from "motion-v"

useSeoMeta({
  title: "lolpocket",
  description: "is that lp in your pocket?",
  ogDescription: "is that lp in your pocket?",
  ogImage: "[og:image]",
  ogTitle: "lolpocket",
  ogUrl: "https://www.lolpocket.com",
  twitterCard: "summary",
  twitterDescription: "is that lp in your pocket?",
  twitterImage: "[twitter:image]",
  twitterTitle: "lolpocket",
})

definePageMeta({
  name: "home",
  layout: "default",
  path: "/",
  search: "hidden",
  title: "lolpocket",
  icon: "teenyicons:home-alt-outline",
  searchKeys: ["home", "landing", "testimonials"],
})

const homeWrapper = useTemplateRef<HTMLElement | null>("homeWrapper")
const home = useTemplateRef<HTMLElement | null>("home")
const steps = useTemplateRef<HTMLElement | null>("steps")
const hero = useTemplateRef<HTMLElement | null>("hero")

const { scrollYProgress: stepProgress } = useScroll({
  container: homeWrapper,
  target: steps,
  offset: ["start end", "end start"],
})

const { scrollYProgress } = useScroll({
  container: homeWrapper,
  target: home,
  offset: ["start end", "end start"],
})

const progressY = ref(0)

useMotionValueEvent(scrollYProgress, "change", (latest) => {
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
    class="home-wrapper relative size-full w-full overflow-x-hidden overflow-y-scroll">
    <Hero :progress="stepProgress" :visible="heroVisible" />

    <div
      ref="hero"
      class="pointer-events-none absolute left-0 size-px overflow-hidden bg-transparent" />

    <div ref="steps">
      <LazyHomeSteps
        v-if="homeWrapper"
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
