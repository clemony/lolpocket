<script setup lang="ts">
import { motion } from 'motion-v'

const h1Variants = {

  initial: {
    opacity: 1,
    maxWidth: '100%',
  },
  animate: {
    opacity: 0,
    maxWidth: 0,
    transition: {
      delay: 1,
      duration: 1.5,
      type: 'spring',
      bounce: 0.25,
    },
  },
}
</script>

<template>
  <div class="relative grid gap-12 shrink-0 w-170 **:text-bc">
    <div class="**:!text-14 flex items-center **:!font-bold  w-170">
      <motion.div
        class="ws-nowrap relative items-center shrink-0 -ml-1 flex drop-shadow-sm w-170"
        :initial="{}"
        :animate="{}"
        :transition="{}">
        <h1 class="">
          l
        </h1>
        <motion.h1 :variants="h1Variants" initial="initial" animate="animate">
          ol
        </motion.h1>
        <h1 class="">
          p
        </h1>
        <motion.h1 :variants="h1Variants" initial="initial" animate="animate">
          ocket
        </motion.h1>

        <motion.div
          class="flex ml-2  gap-4 text-nowrap"
          :initial="{
            opacity: 0,
            transform: 'translateY(100%)',
          }"
          :animate="{
            opacity: 1,
            transform: 'translateY(0)' }"
          :transition="{
            delay: 2.25,
            duration: 0.5,
            type: 'spring',
            bounce: 0.25,
          }">
          up

          <motion.div
            :initial="{
              opacity: 0,
              transform: 'translateY(100%)',
            }"
            :animate="{
              opacity: 1,
              transform: 'translateY(0)' }"
            :transition="{
              delay: 2.75,
              duration: 0.5,
              type: 'spring',
              bounce: 0.25,
            }">
            <icon
              name="streamline:arrow-up-1"
              class="mt-7  size-10" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

    <div

      class="text-bc space-y-3 justify-self-start shrink-0 animate-in fade-in duration-1000 w-170">
      <div class="flex items-center gap-2 drop-shadow-sm">
        <h1 class="!text-9">
          lolpocket
        </h1>
        <span class="text-7 font-serif italic">noun</span>
      </div>
      <p class="mb-3 px-1">
        [ lohl - pok - it ]
      </p>
      <div class="text-5 flex flex-col gap-4 font-serif drop-shadow-sm">
        <p class="">
          A pocket to store your League picks, builds, and theorycrafts.
        </p>
        <p>Assists you, as a summoner, with organization and planning,</p>
        <p>
          so you can focus on the
          <span class="text-6 mt-4 ml-1 font-bold">win.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style>

</style>
