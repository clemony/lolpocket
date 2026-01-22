<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label
    class="
      btn relative cursor-pointer justify-start text-md font-medium btn-ghost
      btn-lg
    "
    :class="cn('', props.class)">
    <slot />
  </label>
</template>
