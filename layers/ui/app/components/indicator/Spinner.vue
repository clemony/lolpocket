<script setup lang="ts">
import type { HTMLAttributes } from "vue"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <icon
    name="i-mingcute-loading-fill"
    role="status"
    aria-label="Loading"
    :class="cn('size-4 animate-spin', props.class)" />
</template>
