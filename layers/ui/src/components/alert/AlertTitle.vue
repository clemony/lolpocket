<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h5 :class="cn('mb-1 text-md leading-none font-semibold', props.class)">
    <slot />
  </h5>
</template>
