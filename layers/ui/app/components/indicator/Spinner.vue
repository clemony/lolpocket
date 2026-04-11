<script setup lang="ts">
import type { HTMLAttributes } from "vue"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Icon
    name="i-lucide-loader-circle"
    role="status"
    aria-label="Loading"
    :class="cn('size-4 animate-spin **:stroke-[2.4]', props.class)" />
</template>
