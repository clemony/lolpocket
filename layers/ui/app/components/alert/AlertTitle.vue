<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h5 :class="cn('text-md mb-1 leading-none font-semibold', props.class)">
    <slot />
  </h5>
</template>
