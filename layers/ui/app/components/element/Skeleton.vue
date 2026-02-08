<script setup lang="ts">
interface SkeletonProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SkeletonProps>()
</script>

<template>
  <div
    data-slot="skeleton"
    :class="cn('animate-pulse rounded-lg bg-p3', props.class)" />
</template>
