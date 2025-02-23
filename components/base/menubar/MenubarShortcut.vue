<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('ml-auto text-2 pr-1.5 tracking-widest text-bc/70', props.class)">
    <slot />
  </span>
</template>
