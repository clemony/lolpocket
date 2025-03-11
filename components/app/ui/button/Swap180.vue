<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
  isOpen?: boolean
  model?: boolean
}>()
</script>

<template>
  <label class="*:size-7 *:shrink-0 *:dst *:transition-all *:duration-400  transition-all duration-400" :class="cn('btn  btn-ghost btn-square', props.class)">
    <slot />
    <icon name="right-sm" class=" scale-x-100 " :class="{ '!rotate-180 peer-checked:!rotate-180 ': props.isOpen || props.model }" />
  </label>
</template>

<style scoped>
</style>