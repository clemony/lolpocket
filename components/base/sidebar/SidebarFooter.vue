<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    class?: HTMLAttributes['class'];
  }>();
</script>

<template>
  <div
    data-sidebar="footer"
    :class="cn('text-3 flex flex-col gap-1 py-2', props.class)">
    <slot />
  </div>
</template>
