<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <SelectContent
    position="popper"
    :class="
      cn(
        `
          w-[var(--reka-select-trigger-width)]! rounded-xl! border-b2 bg-b1/80!
          backdrop-blur-lg
        `,
        props.class,
      )
    "
  >
    <slot />
  </SelectContent>
</template>
