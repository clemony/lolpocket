<script lang="ts" setup>
import type { Easing } from 'motion-v'
import { runePaths } from '#shared/appdata/records/runes'
import { motion, stagger } from 'motion-v'

const emit = defineEmits(['update:paths'])

const variants = {
  hidden: {
    opacity: 0,
    transform: 'rotateX(80deg)',
  },
  visible: {
    opacity: 1,
    transform: 'rotateX(0deg)',
  },
}
const headerVariants = {
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    delay: 0.2,
    duration: 0.8,
    ease: [0.215, 0.61, 0.355, 1.0] as unknown as Easing[],
  },
  visible: {
    opacity: 1,
  },
}

const titleVariants = {
  exit: {
    letterSpacing: '-0.5em',
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.55, 0.085, 0.68, 0.53] as unknown as Easing[],
    },
  },
  initial: {
    letterSpacing: '1em',
    opacity: 0,
  },
  visible: {
    letterSpacing: 'normal',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1.0] as unknown as Easing[],
    },
  },
}

const tooltipVariants = {}

function handleSet(p1: string, p2: string) {
  emit('update:paths', { primary: p1, secondary: p2 })
}

const pathHovered = ref('')
</script>

<template>
  <div class="max-w-400 w-full px-10 flex flex-col justify-center gap-4">
    <div class="h-18 relative pl-1 pr-2 w-full">
      <div
        v-if="pathHovered"
        class="absolute gap-3 size-full items-center justify-between">
        <h1
          v-if="pathHovered"
          :key="pathHovered"
          :class="
            cn('dst duration-600 ', {
              'animate-in fade-in blur-in-50 zoom-in-120': pathHovered,
              'animate-out fade-out blur-out-50 zoom-out-120': !pathHovered,
            })
          ">
          {{ pathHovered }}
        </h1>
        <p
          v-if="pathHovered"
          :key="pathHovered"
          :class="
            cn('dst font-medium duration-600  pt-1 pr-2 text-end', {
              'animate-in fade-in ': pathHovered,
              'animate-out fade-out': !pathHovered,
            })
          ">
          {{ runePaths.find((r) => r.name === pathHovered)?.tooltip }}
        </p>
      </div>
      <div
        v-else
        class="absolute gap-3 size-full items-center justify-between">
        <h1
          key="default"
          class="dst"
          :class="
            cn('dst duration-600 ', {
              'animate-in fade-in blur-in-50 zoom-in-120': !pathHovered,
              'animate-out fade-out blur-out-50 zoom-out-120': pathHovered,
            })
          ">
          Runes
        </h1>
        <p
          :class="
            cn('dst font-medium duration-600 pt-1 pr-2  text-end', {
              'animate-in fade-in ': !pathHovered,
              'animate-out fade-out': pathHovered,
            })
          ">
          Select your path.
        </p>
      </div>
    </div>
    <motion.div
      class="flex items-center max-h-160 justify-center gap-1.5"
      :transition="{
        delayChildren: stagger(0.2),
      }">
      <motion.button
        v-for="(path, i) in runePaths"
        :key="path.name"
        :variants="variants"
        initial="hidden"
        while-in-view="visible"
        :transition="{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }"
        :style="{
          background: `url('/img/paths/cards/${path.name.toLowerCase()}.webp')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
        }"
        class="rounded-lg cursor-pointer flex items-center justify-center my-auto bg-center grow basis-1 max-h-140 aspect-2/3 shadow-sm drop-shadow-sm bg-black relative after:absolute overflow-hidden after:size-full after:bg-black/70 after:opacity-0 hover:after:opacity-100 hover:*:opacity-100 *:opacity-0 after:transition-all after:duration-400 after:backdrop-blur-px after:z-1"
        @click="handleSet(path.name, runePaths[i === 4 ? 0 : i + 1].name)"
        @hover-start="pathHovered = path.name"
        @hover-end="pathHovered = ''">
        <hicon
          :name="`i-path-${path.name.toLowerCase()}`"
          class="z-2 !text-white/30 !size-20" />
      </motion.button>
    </motion.div>
  </div>
</template>
