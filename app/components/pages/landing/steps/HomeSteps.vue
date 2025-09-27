<script setup lang="ts">
import type { MotionValue } from 'motion-v'
import { motion } from 'motion-v'
import { useBreakpoint } from '~/utils/ui/useBreakpoints'

const { scrollProg, scrollRef } = defineProps<{
  scrollRef: HTMLElement
  scrollProg: MotionValue
}>()

const progressRef = useMotionValue(scrollProg)
const { greaterOrEqual, lessThan } = useBreakpoint('x1024')
const progress = [
  useTransform(progressRef.get(), [0.1, 0.3], ['0%', '110%']),
  useTransform(progressRef.get(), [0.3, 0.5], ['0%', '110%']),
  useTransform(progressRef.get(), [0.5, 0.7], ['0%', '110%']),
]

const isShown = [ref(false), ref(false), ref(false), ref(false)]

useMotionValueEvent(progress[0], 'change', (latest) => {
  latest === '0%' ? (isShown[0].value = false) : (isShown[0].value = true)
})

useMotionValueEvent(progress[1], 'change', (latest) => {
  latest === '0%' ? (isShown[1].value = false) : (isShown[1].value = true)
})

useMotionValueEvent(progress[2], 'change', (latest) => {
  latest === '0%' ? (isShown[2].value = false) : (isShown[2].value = true)
})

useMotionValueEvent(progress[2], 'change', (latest) => {
  latest === '110%' ? (isShown[3].value = true) : (isShown[3].value = false)
})

const steps = [
  {
    title: 'Create a Pocket',
    component: 'CreateAPocket',
    description:
      'Pockets are little spaces designed to hold your builds and ideas -- similar to a pocket folder. Theorycraft within them, or use them to remember that ONE build you saw your favorite pro use. Pockets can be linked to champions or a general role.',
  },
  {
    title: 'Craft a Build',
    component: 'CraftABuild',
    description:
      'Choose a champion, group of champions—or even just a position. Organize items into full builds or pool them by situation. Theorycraft some new things to try, or pull out your old favorites. Create rune sets, and grab some summoner spells.', // jan 11 2025
  },
  {
    title: 'Play Games',
    component: 'PlayGames',
    description:
      'Send your fully cooked pockets to the rift. Export directly to the league client so your builds show up in game. Then, do what you\'re best at: Queue up and grind some LP.',
  },
  {
    title: 'Analyze Results',
    component: 'AnalyzeResults',
    description:
      'With a connected Riot Account, advanced statistics give you insight into the best items and champions for your specific playstyle. The meta may tell you Triforce Yuumi is 82% winrate—but according to your data, you seem to do better with a Moonstone. Easily see where meta slaving away helps or harms.',
  },
]
</script>

<template>
  <motion.div
    class="[&_hr]:bg-b2 pt-46 bg-b1 border-b2/30 relative z-1 w-full border-t px-18 pb-6 [&_hr]:mx-16"
    :initial="{ boxShadow: '0 0 0 0 #00000000' }"
    :while-in-view="{ boxShadow: '0px -10px 20px 5px #00000010' }">
    <ul class="timeline timeline-snap-icon timeline-vertical">
      <li
        v-for="(step, i) in steps"
        :key="i"
        class="group relative"
        :class="cn('', { '!grid-cols-1 !justify-start !-left-20': lessThan })">
        <div
          class="timeline-middle drop-shadow-sm rounded-full scale-110 z-2"
          :class="{ 'bg-b2 ': isShown[i] && !isShown?.[i].value }">
          <Motion
            as-child
            :animate="{ scale: isShown[i] && !isShown?.[i].value ? 0 : 1.1 }"
            :transition="{
              type: 'spring',
              bounce: 0.5,
            }">
            <icon
              name="check-fill"
              class="size-5 text-bc/80" />
          </Motion>
        </div>

        <motion.div
          :initial="{
            opacity: 0,
            transform:
              isEven(i) && greaterOrEqual ? 'translateX(-30%)' : (
                'translateX(30%)'
              ),
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
          :class="
            cn(
              'group-last:ml-16 relative grid  pb-44 max-w-160 mb-10 w-full will-change-[transform,opacity] justify-start',
              isEven(i) && greaterOrEqual
                ? 'timeline-start  md:text-end'
                : 'timeline-end',
            )
          ">
          <p class="font-mono italic py-2 dst text-4">
            Step {{ i }}
          </p>

          <h2 class="dst pt-1">
            {{ step.title }}
          </h2>

          <p class="pt-6 leading-7 dst">
            {{ step.description }}
          </p>

          <div
            class="bg-b2/40 shadow-warm-2 shadow-black/4 drop-shadow-sm relative mt-10 h-90 w-full overflow-hidden rounded-xl">
            <component
              :is="step.component"
              :scroll-prog="scrollProg" />
          </div>
        </motion.div>

        <motion.hr
          v-if="scrollProg"
          class="group-last:hidden !bg/b2 !mt-2 !w-0.75 relative grid items-start !rounded-full overflow-hidden">
          <motion.hr
            v-if="isShown[i] && isShown?.[i].value"
            :style="{
              scaleY: progress[i] || 0,
            }"
            class="group-last:hidden absolute origin-top !bg-neutral/70 size-full starting:scale-y-0 !overflow-hidden !rounded-full -top-1.5 -left-16"></motion.hr>
        </motion.hr>
      </li>
    </ul>
  </motion.div>
</template>

<!-- w-1/2 after:h-600 after:absolute after:border-r after:scale-y-600   after:overflow-hidden after:border-dashed after:shrink-0 -->
<!-- linear-to-b from-neutral/40 via-neutral/70 to-neutral/30 -->
<!-- !bg-linear-to-b from-neutral/40 via-neutral/70 to-neutral/30 border-r border-dashed w-1/2  -->
<style scoped>
.bg-dashed {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}
</style>
