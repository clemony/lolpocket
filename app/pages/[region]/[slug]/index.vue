<script lang="ts" setup>
import { motion } from "motion-v"

const { summoner, account } = storeToRefs(sSession())

useHead({
  titleTemplate: () => {
    if (summoner.value?.name)
      return `${summoner.value.name} - Match History | lolpocket`
    else return "lolpocket"
  },
})
definePageMeta({
  title: "Match History",
  description: "Browse through your matches with deep search tools.",
  icon: "i-history",
  class: "scale-90",
  search: false,
  order: 0,
})

const body = useTemplateRef<HTMLElement>("body")
const header = useTemplateRef<HTMLElement>("header")
const { scrollYProgress } = useScroll({
  target: body,
  offset: ["start end", "end end"],
})

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  console.log("x changed to", latest)
})
const bodyProgress = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
})

const open = shallowRef<boolean>(true)

const entries = computed(() => [
  {
    label: "Solo/Duo",
    ...summoner.value?.ranked?.solo,
  },
  { ...summoner.value?.ranked?.flex, label: "Flex" },
])
</script>

<template>
  <motion.div ref="body" class="z-auto grid grow grid-cols-[1fr_2.2fr] gap-12">
    <div class="flex w-full flex-col items-center gap-8 pt-12">
      <LazyRankCard v-for="entry in entries" :key="entry.label" :entry />
      <!--       <MatchHistoryMenu v-if="api" :api @open="e => open = e" /> -->

      <MatchChampionFilters />

      <LazyMatchAlliesFilter />
    </div>
    <div class="z-auto flex w-full grow flex-col gap-10 pt-8">
      <div
        class="sticky -inset-x-6 -top-50 z-2 flex size-full h-max w-full grow items-center gap-6 rounded-5xl bg-p1/50 mask-x-from-98% mask-x-to-100% px-6 py-4 backdrop-blur-md">
        <QueueFilters class="" />
        <LazyMatchPositionFilter class="" />
      </div>
      <LazyMatchList />
    </div>
  </motion.div>
</template>
