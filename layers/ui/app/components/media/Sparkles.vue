<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('absolute top-0 left-0 size-full object-cover', props.class)">
    <video-background
      class="aspect-square size-full object-cover"
      src="/video/sparkles.webm" />
  </div>
</template>
