<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <label :class="cn('input relative mt-2 h-12 rounded-lg bg-b1', className)">
    <slot />
  </label>
</template>
