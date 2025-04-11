<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { motion } from 'motion-v'

const props = defineProps<{
  champion: Champion
  pocket?: pocket
  class?: HTMLAttributes['class']
}>()
/*
      v-tippy="{content: `${champion.name}`, hideOnClick: true,   delay: [100, 0]}" */

const trigger = ref(null)
const isHovered = useElementHover(trigger)
</script>

<template>
  <motion.label
    ref="trigger"
    :layout="true"
    :animate="{ scale: [0.8, 1], opacity: [0, 1] }"
    :exit="{
      scale: [1.6, 0.8],
      opacity: 0,
    }"
    :class=" cn('shadow-sm btn relative rounded-lg **:select-none p-0', props.class)">
    <div class="rounded-lg overflow-hidden size-full">
      <slot />

      <Image
        :key="props.champion.name"

        :image="`/img/champion/${champion.id}.webp`"
        :alt="`${props.champion.name} Image`"
        class="size-full scale-115" />

      <PrismaticShine v-if=" isHovered" :key="champion.id" class="absolute scale-107 top-0 left-0 z-1" />
    </div>
  </motion.label>
</template>

<style scoped></style>
