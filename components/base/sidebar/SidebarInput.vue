<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    class?: HTMLAttributes['class'];
  }>();
</script>

<template>
  <Input
    data-sidebar="input"
    :class="cn('focus-visible:ring-neutral/5 h-8 w-full bg-transparent shadow-none focus-visible:ring-2', props.class)">
    <slot />
  </Input>
</template>
