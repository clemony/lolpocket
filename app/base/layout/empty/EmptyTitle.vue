<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="empty-title"
    :class="cn('text-6 font-medium tracking-tight', props.class)">
    <slot />
  </div>
</template>
