<script setup lang="ts">
import { AnalyzeResults, CraftABuild, CreateAPocket, PlayGames } from '#components'
import { motion } from 'motion-v'

const { scrollRef } = defineProps<{
  scrollRef: HTMLElement
}>()
const steps = [
  {
    title: 'Create a Pocket',
    description: 'Pockets are little spaces designed to hold your builds and ideas -- similar to a pocket folder. Theorycraft within them, or use them to remember that ONE build you saw your favorite pro use. Pockets can be linked to champions or a general role.',
    component: CreateAPocket,
  },
  {
    title: 'Craft a Build',
    description: 'craft bukild bflsjfl', // jan 11 2025
    component: CraftABuild,
  },
  {
    title: 'Play Games',
    description: 'Do what you\'re best at. Get on the rift and grind some LP',
    component: PlayGames,
  },
  {
    title: 'Analyze Results',
    description: 'The stuff that does stuff when you\'re done doing other stuff.',
    component: AnalyzeResults,
  },
]
</script>

<template>
  <motion.div
    class="[&_hr]:bg-b2 pt-46  bg-b1 border-b2/30 relative z-10 w-full border-y px-12 pb-36 [&_hr]:mx-12"

    :initial="{ boxShadow: '0 0 0 0 #00000000' }"
    :while-in-view="{ boxShadow: '0px -10px 20px 5px #00000010' }">
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical [&_hr]:bg/b2 [&_.timeline-end]:w-full [&_.timeline-start]:w-full [&_div]:max-w-150 [&_h1]:!font-extrabold [&_h2]:drop-shadow-sm [&_p]:drop-shadow-xs [&_svg]:drop-shadow-sm ">
      <li v-for="(step, i) in steps" :key="i" class="w-full group relative">
        <div class="timeline-middle">
          <icon
            name="check-fill"
            class="size-5" />
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
          class=" group-last:ml-12 relative  pb-44  mb-10 w-full will-change-[transform,opacity]"
          :class="isEven(i) ? 'timeline-start  md:text-end' : 'timeline-end'">
          <p class="font-mono italic">
            Step {{ i }}
          </p>

          <h2>{{ step.title }}</h2>

          <p class="pt-3">
            {{ step.description }}
          </p>
          <div class="bg-b2/40 shadow-warm-2 drop-shadow-sm relative mt-10 h-90 w-full overflow-hidden rounded-xl">
            <component :is="step.component" />
          </div>
        </motion.div>

        <hr class="group-last:hidden !mt-1.5" />

        <!-- <hr class="group-last:hidden absolute !bg-neutral scale-x-90 scale-y-20 !rounded-full !mt-1.5" /> -->
      </li>
    </ul>
  </motion.div>
</template>

<style scoped></style>
