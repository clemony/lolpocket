<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <h3 :class="cn('leading-none font-bold tracking-tight', props.class)">
    <slot />
  </h3>
</template>
