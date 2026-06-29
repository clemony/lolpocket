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
  <motion.div ref="body" class="z-auto flex grow gap-12">
    <div
      class="@container/filter [container-type:scroll-state] sticky -top-52 flex h-max max-w-120 grow basis-1/4 flex-col items-center gap-8 pt-12">
      <!--       <MatchHistoryMenu v-if="api" :api @open="e => open = e" /> -->

      <QueueFilters class="" />
      <LazyMatchPositionFilter class="" />
      <MatchChampionFilters />

      <LazyMatchAlliesFilter />
    </div>
    <div class="z-auto flex grow flex-col gap-10 pt-8">
      <LazyMatchList />
    </div>

    <div
      class="z-auto flex max-w-44 min-w-34 basis-1/5 flex-col gap-8 pt-12 *:-translate-x-1">
      <LazyRankCard v-for="entry in entries" :key="entry.label" :entry />
    </div>
  </motion.div>
</template>
