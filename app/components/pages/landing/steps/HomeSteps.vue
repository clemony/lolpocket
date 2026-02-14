<script setup lang="ts">
import type { MotionValue } from "motion-v"
import { Motion, motion } from "motion-v"

const { scrollProg, scrollRef } = defineProps<{
  scrollRef: HTMLElement
  scrollProg: MotionValue<number>
}>()

const progressRef = scrollProg
const { greaterOrEqual, lessThan } = useBreakpoint("x1024")
const progress = [
  useTransform(progressRef, [0.1, 0.3], ["0%", "110%"]),
  useTransform(progressRef, [0.3, 0.5], ["0%", "110%"]),
  useTransform(progressRef, [0.5, 0.7], ["0%", "110%"]),
] as const

const isShown = [
  ref(false),
  ref(false),
  ref(false),
  ref(false),
] as [Ref<boolean>, Ref<boolean>, Ref<boolean>, Ref<boolean>]

useMotionValueEvent(progress[0], "change", (latest) => {
  isShown[0].value = latest !== "0%"
})

useMotionValueEvent(progress[1], "change", (latest) => {
  isShown[1].value = latest !== "0%"
})

useMotionValueEvent(progress[2], "change", (latest) => {
  isShown[2].value = latest !== "0%"
})

useMotionValueEvent(progress[2], "change", (latest) => {
  isShown[3].value = latest === "110%"
})

const steps = [
  {
    title: "Create a Pocket",
    component: "CreateAPocket",
    description:
      "Pockets are little spaces designed to hold your builds and ideas -- similar to a pocket folder. Theorycraft within them, or use them to remember that ONE build you saw your favorite pro use. Pockets can be linked to champions or a general role.",
  },
  {
    title: "Craft a Build",
    component: "CraftABuild",
    description:
      "Choose a champion, group of champions—or even just a position. Organize items into full builds or pool them by situation. Theorycraft some new things to try, or pull out your old favorites. Create rune sets, and grab some summoner spells.", // jan 11 2025
  },
  {
    title: "Play Games",
    component: "PlayGames",
    description:
      "Send your fully cooked pockets to the rift. Export directly to the league client so your builds show up in game. Then, do what you're best at: Queue up and grind some LP.",
  },
  {
    title: "Analyze Results",
    component: "AnalyzeResults",
    description:
      "With a connected Riot Account, advanced statistics give you insight into the best items and champions for your specific playstyle. The meta may tell you Triforce Yuumi is 82% winrate—but according to your data, you seem to do better with a Moonstone. Easily see where meta slaving away helps or harms.",
  },
]
</script>

<template>
  <motion.div
    class="relative z-1 w-full border-t border-p2/30 bg-p0 px-18 pt-46 pb-6 [&_hr]:mx-16 [&_hr]:bg-p2"
    :initial="{ boxShadow: '0 0 0 0 #00000000' }"
    :while-in-view="{ boxShadow: '0px -10px 20px 5px #00000010' }">
    <ul class="timeline timeline-vertical timeline-snap-icon">
      <li
        v-for="(step, i) in steps"
        :key="i"
        class="group relative"
        :class="cn('', { '-left-20! grid-cols-1! justify-start!': lessThan })">
        <div
          class="z-2 timeline-middle scale-110 rounded-full drop-shadow-sm"
          :class="{ 'bg-p2': isShown[i]?.value }">
          <Motion
            as-child
            :animate="{ scale: isShown[i]?.value ? 0 : 1.1 }"
            :transition="{
              type: 'spring',
              bounce: 0.5,
            }">
            <icon class="size-5 text-pc/80" name="check-fill" />
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
              'relative mb-10 grid w-full max-w-160 justify-start pb-44 will-change-[transform,opacity] group-last:ml-16',
              isEven(i) && greaterOrEqual ?
                'timeline-start md:text-end'
                : 'timeline-end'
            )
          ">
          <p class="dst py-2 font-mono text-lg italic">
            Step {{ i }}
          </p>

          <h2 class="dst pt-1">
            {{ step.title }}
          </h2>

          <p class="dst pt-6 leading-7">
            {{ step.description }}
          </p>

          <div
            class="relative mt-10 h-90 w-full overflow-hidden rounded-xl bg-p2/40 shadow-warm-2 shadow-black/4 drop-shadow-sm">
            <component :is="step.component" :scroll-prog="scrollProg" />
          </div>
        </motion.div>

        <motion.hr
          v-if="scrollProg"
          class="bg/p2! relative mt-2! grid w-0.75! items-start overflow-hidden rounded-full! group-last:hidden">
          <motion.hr
            v-if="isShown[i]?.value"
            class="absolute -top-1.5 -left-16 size-full origin-top overflow-hidden! rounded-full! bg-neutral/70! group-last:hidden starting:scale-y-0"
            :style="{
              scaleY: progress[i] || 0,
            }" />
        </motion.hr>
      </li>
    </ul>
  </motion.div>
</template>

<!-- w-1/2 after:h-600 after:absolute after:border-r after:scale-y-600   after:overflow-hidden after:border-dashed after:shrink-0 -->
<!-- linear-to-b from-neutral/40 via-neutral/70 to-neutral/30 -->
<!-- !bg-linear-to-b from-neutral/40 via-neutral/70 to-neutral/30 border-r border-dashed w-1/2  -->
