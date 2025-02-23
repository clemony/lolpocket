<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('!border border-b2 -b2/80 bg-b1/95 shadow-smooth rounded-xl border border-b2  backdrop-blur-md', props.class)">
    <slot />
  </div>
</template>
