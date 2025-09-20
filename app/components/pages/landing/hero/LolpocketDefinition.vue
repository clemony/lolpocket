<script setup lang="ts">
import type { EasingDefinition } from 'motion-v'
import { motion } from 'motion-v'

const h1Variants = {
  animate: {
    maxWidth: 0,
    letterSpacing: '-0.5em',
    opacity: 0,
  },
  initial: {
    maxWidth: '100%',
    opacity: 1,
  },
}

const h1Visibility = {
  animate: {
    opacity: 0,
    transform: 'translate(0, 10px)',
    transition: {
      delay: 1.5,
      duration: 0.4,
      ease: 'linear' as EasingDefinition,
    },
  },
  initial: {
    opacity: 1,
    transform: 'translate(0, 0px)',
    transition: {
      delay: 1.5,
      duration: 0.4,
      ease: 'linear' as EasingDefinition,
    },
  },
}
</script>

<template>
  <div class="[&_svg]:text-bc relative grid size-full translate-y-20 gap-8">
    <div class="relative grid h-20 w-100 items-end">
      <motion.div
        class="ws-nowrap **:text-xxs2 relative flex h-full w-full origin-bottom-left items-center font-bold drop-shadow-sm">
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
      class="text-bc grid w-140 shrink-0 space-y-3 justify-self-start">
      <div class="flex items-center gap-2 drop-shadow-sm">
        <h1
          class="!text-4xl">
          lolpocket
        </h1>

        <span class="font-serif text-xl italic">
          noun</span>
      </div>

      <p class="mb-3 px-1">
        [ lohl - pok - it ]
      </p>

      <div class="mt-6 flex flex-col gap-4 font-serif text-lg drop-shadow-sm">
        <p class="">
          A pocket to store your League picks, builds, and theorycrafts.
        </p>

        <p>Assists you, as a summoner, with organization and planning,</p>

        <p>
          so you can focus on the
          <span class="mt-4 ml-1 text-xl font-bold">win.</span>
        </p>
      </div>

      <slot />
    </motion.div>
  </div>
</template>
