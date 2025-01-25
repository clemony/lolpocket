<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('h-full px-2 py-6 pt-0', props.class)">
    <slot />
  </div>
</template>
