<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  name?: string
  class?: HTMLAttributes['class']
}>()
const us = useUiStore()
/*
const variants = {
  expanded: {
    scale: 1,
  },
  collapsed: {
    scale: 1.2,
  },
    :variants="variants"
    :animate="us.sidebarExpanded ? 'expanded' : 'collapsed'"
} */
</script>

<template>
  <div
    class="size-5 relative shrink-0 !overflow-visible grid place-items-center">
    <icon v-if="props.name" :name="props.name" class="absolute shrink-0   " :class="cn('size-5 dst', props.class)" />

    <slot />
  </div>
</template>