<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3 :class="cn('title text-7 leading-none font-semibold tracking-tight', props.class)">
    <slot />
  </h3>
</template>
