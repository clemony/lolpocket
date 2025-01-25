<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('text-bc/60 ml-auto tracking-widest', props.class)">
    <slot />
  </span>
</template>
