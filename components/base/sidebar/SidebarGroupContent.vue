<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    class?: HTMLAttributes['class'];
  }>();
</script>

<template>
  <div
    data-sidebar="group-content"
    :class="cn('text-3 w-full', props.class)">
    <slot />
  </div>
</template>
