<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Video
    v-auto-animate
    :class="
      cn(
        'pointer-events-none absolute inset-0 aspect-square size-full scale-110 object-cover',
        className,
      )
    "
    src="/video/prismatic-shine.webm" />
</template>
