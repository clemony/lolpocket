<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    class?: HTMLAttributes['class'];
  }>();
</script>

<template>
  <div :class="cn('flex items-center gap-3 opacity-60', props.class)">
    <slot />

    <div class="border-b-neutral/25 h-1/2 grow self-start border-b"></div>
  </div>
</template>

<style scoped></style>
