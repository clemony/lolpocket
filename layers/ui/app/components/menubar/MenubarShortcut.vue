<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    :class="
      cn('ml-auto pr-1.5 text-sm tracking-widest text-pc/70', props.class)
    ">
    <slot />
  </span>
</template>
