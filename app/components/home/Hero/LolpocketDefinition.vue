<script setup lang="ts">
import { AnimatePresence, motion, type EasingDefinition } from 'motion-v'

const as = useAccountStore()

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
            ease:'linear' as EasingDefinition,
          }
  },
  animate: {
    opacity: 0,
    transform: 'translate(0, 10px)',
  transition: {
            duration: 0.4,
            delay: 1.5,
            ease:'linear' as EasingDefinition,
          }
  }}
</script>

<template>
  <div class="relative grid gap-8 size-full  [&_svg]:text-bc  ">
    <div class="w-100 h-40 grid items-end  relative">
      <motion.div
        class="ws-nowrap **:text-12 relative font-bold items-center flex drop-shadow-sm w-full h-full origin-bottom-left ">

        <div class="relative w-7 grid items-center">
        <motion.h1
          :variants="h1Visibility"
          initial="initial"
          animate="animate"
          class="absolute">
          l
        </motion.h1>

        <motion.h1
          :variants="h1Visibility"
          initial="animate"
          animate="initial"
          class="absolute">
          L
        </motion.h1>
      </div>
        <motion.h1
          :variants="h1Variants"
          initial="initial"
          animate="animate"
          class="-translate-x-4"
          :transition="{
            duration: 0.4,
            delay: 0.5,
            ease:'linear',
          }">
          ol
        </motion.h1>

        <div class="relative w-7 grid items-center">
        <motion.h1
          :variants="h1Visibility"
          initial="initial"
          animate="animate"
          class="absolute -translate-x-4">
          p
        </motion.h1>

        <motion.h1
          :variants="h1Visibility"
          initial="animate"
          animate="initial"
          class="absolute">
          P
        </motion.h1>
      </div>

        <motion.h1
          :variants="h1Variants"
          initial="initial"
          class="-translate-x-4"
          :transition="{
            duration: 0.4,
            delay: 0.5,
            ease:'linear',
          }"
          animate="animate">
          ocket
        </motion.h1>
      </motion.div>

      <!-- <div
        class="ws-nowrap absolute size-full flex  top-0 items-end font-bold shrink-0 *:leading-none  drop-shadow-sm w-full  -ml-1">
        <motion.div
          class="origin-bottom-left absolute  size-20 !-bottom-4 left-1  grid items-end opacity-0"
          :animate="{
            opacity: [0, 1, 1, 1],
            scale: [0.8, 1, 1, 1],
            transform: [null, null, null, 'translateY(-32px)'],
          }"
          :transition="{
            ease: ['linear', 'linear', 'linear', [0, 1.08, .83, 1.16]],
            times: [0, 0.4, 0.8, 1],
            delay: 2,
            duration: 0.8 }">
          <i-lp-elp1 class="size-15 **:text-bc dst opacity-80" />
        </motion.div>

        <motion.div
          class="grid items-end size-20 absolute !left-1 !-bottom-4 "
          :initial="{
            display: 'none',
            opacity: 0,
            bottom: 0,
            left: 0,
            transform: 'translateY(80%)',
          }"
          :animate="{
            display: 'flex',
            opacity: 1,
            transform: 'translateY(0)',
          }"
          :transition="{
            type: 'spring',
            bounce: 0.2,
            delay: 2.7,
            duration: 0.5 }">
          <i-lp-up1 class="size-15 shrink-0  opacity-80  **:text-bc dst" />
        </motion.div>
      </div> -->
    </div>

    <motion.div
      :initial="{ opacity: 0, transform: 'translateY(10%)' }"
      :animate="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ duration: 0.5, delay: 2, ease: 'easeInOut',
      }"
      class="text-bc space-y-3 grid justify-self-start shrink-0 animate-in fade-in duration-1000 w-140">
      <div class="flex items-center gap-2 drop-shadow-sm">
        <h1 class="!text-9">
          lolpocket
        </h1>

        <span class="text-7 font-serif italic">noun</span>
      </div>

      <p class="mb-3 px-1">
        [ lohl - pok - it ]
      </p>

      <div class="text-5 mt-6 flex flex-col gap-4 font-serif drop-shadow-sm">
        <p class="">
          A pocket to store your League picks, builds, and theorycrafts.
        </p>

        <p>Assists you, as a summoner, with organization and planning,</p>

        <p>
          so you can focus on the
          <span class="text-6 mt-4 ml-1 font-bold">win.</span>
        </p>
      </div>


    <button
      v-show="!as.currentSession?.session"
      class="pointer-events-auto  justify-self-end hover:bg-neutral btn-lg mt-3 btn btn-outline border-b3 hover:text-nc text-2 w-fit self-end justify-self-end overflow-hidden shadow-xs transition-all duration-200">
Sign in
    </button>

    </motion.div>
  </div>
</template>
