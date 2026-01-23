<script lang="ts" setup>
import { motion } from 'motion-v'

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
    ease: [0.215, 0.61, 0.355, 1.0],
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
      ease: [0.55, 0.085, 0.68, 0.53],
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
      ease: [0.215, 0.61, 0.355, 1.0],
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
  <div class="flex w-full max-w-400 flex-col justify-center gap-4 px-10">
    <div class="relative h-18 w-full pr-2 pl-1">
      <div
        v-if="pathHovered"
        class="absolute size-full items-center justify-between gap-3">
        <h1
          v-if="pathHovered"
          :key="pathHovered"
          :class="
            cn('dst duration-600', {
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
            cn('dst pt-1 pr-2 text-end font-medium duration-600', {
              'animate-in fade-in ': pathHovered,
              'animate-out fade-out': !pathHovered,
            })
          ">
          {{ pathIndex.find((r) => r.name === pathHovered)?.tooltip }}
        </p>
      </div>
      <div
        v-else
        class="absolute size-full items-center justify-between gap-3">
        <h1
          key="default"
          class="dst"
          :class="
            cn('dst duration-600', {
              'animate-in fade-in blur-in-50 zoom-in-120': !pathHovered,
              'animate-out fade-out blur-out-50 zoom-out-120': pathHovered,
            })
          ">
          Runes
        </h1>
        <p
          :class="
            cn('dst pt-1 pr-2 text-end font-medium duration-600', {
              'animate-in fade-in ': !pathHovered,
              'animate-out fade-out': pathHovered,
            })
          ">
          Select your path.
        </p>
      </div>
    </div>
    <motion.div
      class="flex max-h-160 items-center justify-center gap-1.5"
      :transition="{
        delayChildren: 0.2,
      }">
      <motion.button
        v-for="(path, i) in pathIndex"
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
        class="
          after:backdrop-blur-px relative my-auto flex
          aspect-2/3 max-h-140 grow
          basis-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-black
          bg-center shadow-sm drop-shadow-sm *:opacity-0 after:absolute
          after:z-1 after:size-full after:bg-black/70 after:opacity-0 after:transition-all after:duration-400
          hover:*:opacity-100 hover:after:opacity-100
        "
        @click="handleSet(path.name, pathIndex[i === 4 ? 0 : i + 1].name)"
        @hover-start="pathHovered = path.name"
        @hover-end="pathHovered = ''">
        <Icon
          :name="`i-path-${path.name.toLowerCase()}`"
          class="z-2 size-20! text-white/30!" />
      </motion.button>
    </motion.div>
  </div>
</template>
