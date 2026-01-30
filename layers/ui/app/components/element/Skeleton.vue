<script setup lang="ts">
interface SkeletonProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SkeletonProps>()
</script>

<template>
  <div
    data-slot="skeleton"
    :class="cn('bg-b3 animate-pulse rounded-lg', props.class)"
  />
</template>
