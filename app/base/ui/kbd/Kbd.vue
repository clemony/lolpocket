<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  size?: KbdVariants["size"];
  variant?: KbdVariants["variant"];
}>();
</script>

<template>
  <kbd :class="cn(kbdVariants({ size, variant }), 'w-min', props.class)">
    <slot />
  </kbd>
</template>
