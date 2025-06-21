<script setup lang="ts">
import { AnalyzeResults, CraftABuild, CreateAPocket, PlayGames } from '#components'
import { motion } from 'motion-v'

const { scrollRef, scrollProg } = defineProps<{
  scrollRef: HTMLElement
  scrollProg: MotionValue
}>()

const progressRef = useMotionValue(scrollProg)

const progress = [
  useTransform(progressRef.get(), [0.1, 0.3], ['0%', '110%']),
  useTransform(progressRef.get(), [0.3, 0.5], ['0%', '110%']),
  useTransform(progressRef.get(), [0.5, 0.7], ['0%', '110%']),
]

const isShown = [
  ref(false),
  ref(false),
  ref(false),
  ref(false),
]

useMotionValueEvent(progress[0], 'change', (latest) => {
  latest == '0%' ? isShown[0].value = false : isShown[0].value = true
})

useMotionValueEvent(progress[1], 'change', (latest) => {
  latest == '0%' ? isShown[1].value = false : isShown[1].value = true
})

useMotionValueEvent(progress[2], 'change', (latest) => {
  latest == '0%' ? isShown[2].value = false : isShown[2].value = true
})

useMotionValueEvent(progress[2], 'change', (latest) => {
  latest == '110%' ? isShown[3].value = true : isShown[3].value = false
})

const steps = [
  {
    title: 'Create a Pocket',
    description: 'Pockets are little spaces designed to hold your builds and ideas -- similar to a pocket folder. Theorycraft within them, or use them to remember that ONE build you saw your favorite pro use. Pockets can be linked to champions or a general role.',
    component: CreateAPocket,
  },
  {
    title: 'Craft a Build',
    description: 'Choose a champion, group of champions—or even just a position. Organize items into full builds or pool them by situation. Theorycraft some new things to try, or pull out your old favorites. Create rune sets, and grab some summoner spells.', // jan 11 2025
    component: CraftABuild,
  },
  {
    title: 'Play Games',
    description: 'Send your fully cooked pockets to the rift. Export directly to the league client so your builds show up in game. Then, do what you\'re best at: Queue up and grind some LP.',
    component: PlayGames,
  },
  {
    title: 'Analyze Results',
    description: 'With a connected Riot Account, advanced statistics give you insight into the best items and champions for your specific playstyle. The meta may tell you Triforce Yuumi is 82% winrate—but according to your data, you seem to do better with a Moonstone. Easily see where meta slaving away helps or harms.',
    component: AnalyzeResults,
  },
]
</script>

<template>
  <motion.div
    class="[&_hr]:bg-b2 pt-46  bg-b1 border-b2/30 relative z-10 w-full border-t px-18 pb-6 [&_hr]:mx-16"

    :initial="{ boxShadow: '0 0 0 0 #00000000' }"
    :while-in-view="{ boxShadow: '0px -10px 20px 5px #00000010' }">
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical    ">
      <li v-for="(step, i) in steps" :key="i" class="w-full group relative -mt-1.5">
        <div class="timeline-middle drop-shadow-sm rounded-full scale-110 z-2" :class="{ 'bg-b2 ': isShown[i] && !isShown?.[i].value }">
          <Motion
            as-child
            :animate="{ scale: isShown[i] && !isShown?.[i].value ? 0 : 1.1 }"
            :transition="{
              type: 'spring',
              bounce: 0.5,
            }">
            <icon
              name="check-fill"
              class="size-5" />
          </Motion>
        </div>

        <motion.div

          :initial="{
            opacity: 0,
            transform: isEven(i) ? 'translateX(-30%)' : 'translateX(30%)',
          }"
          :while-in-view="{
            opacity: [0.4, 1],
            transform: 'translateX(0)',
          }"
          :in-view-options="{
            root: scrollRef,
            once: true,
            amount: 0.6,
          }"
          :transition="{
            type: 'spring',
            visualDuration: 0.5,
            bounce: 0.2,
          }"
          class=" group-last:ml-16 relative grid justify-center  pb-44 max-w-160 mb-10 w-full will-change-[transform,opacity]"
          :class="isEven(i) ? 'timeline-start  md:text-end' : 'timeline-end'">
          <p class="font-mono italic py-2 dst text-4">
            Step {{ i }}
          </p>

          <h2 class="dst pt-1">
            {{ step.title }}
          </h2>

          <p class="pt-6 leading-7 dst">
            {{ step.description }}
          </p>

          <div class="bg-b2/40 shadow-warm-2 shadow-black/4 drop-shadow-sm relative mt-10 h-90 w-full overflow-hidden rounded-xl">
            <component :is="step.component" :scroll-prog="scrollProg" />
          </div>
        </motion.div>

        <motion.hr
          v-if="scrollProg" class="group-last:hidden !bg/b2 !mt-1 !w-1.25  relative grid items-start">
          <motion.hr
            v-if="isShown[i] && isShown?.[i].value"
            :style="{
              scaleY: progress[i] || 0 }"
            class="group-last:hidden absolute origin-top !bg-neutral/80  size-full starting:scale-y-0 !overflow-visible !rounded-full  -top-1.5 -left-16">
          </motion.hr>
        </motion.hr>
      </li>
    </ul>
  </motion.div>
</template>

<style scoped></style>
