<script lang="ts" setup>
const props = defineProps<{
  active?: boolean
}>()
</script>

<template>
  <span class="size-8.5 border-b3 inset-shadow-sm rounded-full flex items-center justify-center bg-b2 group-hover/btn:bg-b3/60" :class="{ 'bg-gradient-to-br from-neutral/80 to-neutral to-60% shadow-sm drop-shadow-sm  [&_img]:duration-400 [&_img]:transition [&_img]:grayscale  group-hover/trig:[&_img]:grayscale-0': active }">
    <slot />

  </span>
</template>