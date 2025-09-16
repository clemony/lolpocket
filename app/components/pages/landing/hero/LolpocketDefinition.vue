<script setup lang="ts">
import type { EasingDefinition } from 'motion-v'
import { motion } from 'motion-v'

const h1Variants = {
  initial: {
    opacity: 1,
    maxWidth: '100%',
  },
  animate: {
    opacity: 0,
    letterSpacing: '-0.5em',
    maxWidth: 0,
  },
}

const h1Visibility = {
  initial: {
    opacity: 1,
    transform: 'translate(0, 0px)',
    transition: {
      duration: 0.4,
      delay: 1.5,
      ease: 'linear' as EasingDefinition,
    },
  },
  animate: {
    opacity: 0,
    transform: 'translate(0, 10px)',
    transition: {
      duration: 0.4,
      delay: 1.5,
      ease: 'linear' as EasingDefinition,
    },
  },
}
</script>

<template>
  <div class="relative grid gap-8 size-full translate-y-20 [&_svg]:text-bc">
    <div class="w-100 h-20 grid items-end relative">
      <motion.div
        class="ws-nowrap **:text-xxs2 relative font-bold items-center flex drop-shadow-sm w-full h-full origin-bottom-left">
        <h1>l</h1>

        <motion.h1
          :variants="h1Variants"
          initial="initial"
          animate="animate"
          :transition="{
            duration: 0.4,
            delay: 2,
            ease: 'linear',
          }">
          ol
        </motion.h1>

        <h1>p</h1>

        <motion.h1
          :variants="h1Variants"
          initial="initial"
          :transition="{
            duration: 0.4,
            delay: 2,
            ease: 'linear',
          }"
          animate="animate">
          ocket
        </motion.h1>
      </motion.div>
    </div>

    <motion.div
      :initial="{ opacity: 0, transform: 'translateY(10%)' }"
      :animate="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.5, delay: 2, ease: 'easeInOut' }"
      class="text-bc space-y-3 grid justify-self-start shrink-0 w-140">
      <div class="flex items-center gap-2 drop-shadow-sm">
        <h1
          class="!text-4xl">
          lolpocket
        </h1>

        <span class="text-xl font-serif italic">
          noun</span>
      </div>

      <p class="mb-3 px-1">
        [ lohl - pok - it ]
      </p>

      <div class="text-lg mt-6 flex flex-col gap-4 font-serif drop-shadow-sm">
        <p class="">
          A pocket to store your League picks, builds, and theorycrafts.
        </p>

        <p>Assists you, as a summoner, with organization and planning,</p>

        <p>
          so you can focus on the
          <span class="text-xl mt-4 ml-1 font-bold">win.</span>
        </p>
      </div>

      <slot />
    </motion.div>
  </div>
</template>
