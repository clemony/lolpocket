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
  <motion.div
    ref="body"
    class="z-auto mx-auto flex max-w-[1100px] grow -translate-x-6">
    <div
      class="@container/filter [container-type:scroll-state] sticky -top-52 flex h-screen max-w-[35%] grow basis-1/4">
      <!--       <MatchHistoryMenu v-if="api" :api @open="e => open = e" /> -->
      <div
        class="max-h-[calc(100vh-100px)] w-full scrollbar-none pr-12 stuck-top:overflow-y-auto">
        <div class="h-max w-full flex-col items-center space-y-8 pt-12">
          <UCard
            :ui="{
              root: 'w-full rounded-6xl shadow-none',
              body: 'flex flex-wrap justify-evenly gap-8 p-6!',
            }">
            <LazyRankCard
              v-for="entry in entries"
              :key="entry.label"
              class="max-w-44"
              :entry />
          </UCard>
          <QueueFilters class="" />
          <LazyMatchPositionFilter class="" />
          <MatchChampionFilters />

          <LazyMatchAlliesFilter />
        </div>
      </div>
    </div>
    <div class="z-auto flex max-w-[65%] grow flex-col gap-10 pt-8">
      <LazyMatchList />
    </div>
  </motion.div>
</template>
