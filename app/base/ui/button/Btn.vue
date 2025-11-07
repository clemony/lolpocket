<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label
    class="btn justify-start text-3 btn-lg font-medium cursor-pointer btn-ghost relative"
    :class="cn('', props.class)">
    <slot />
  </label>
</template>
