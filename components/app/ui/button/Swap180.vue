<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
  isOpen?: boolean
}>()
</script>

<template>
  <label class="relative *:absolute *:size-7 *:shrink-0 *:dst *:transition-all *:duration-400  transition-all duration-400" :class="cn('btn  btn-md btn-square', props.class)">
    <slot />
    <icon name="right-sm" class="peer-checked:opacity-0 peer-checked:scale-x-0 scale-x-100 opacity-100" :class="{ 'opacity-0 scale-x-0 ': !props.isOpen }" />
    <icon name="left-sm" class="opacity-0 peer-checked:opacity-100 peer-checked:scale-x-100 scale-x-0" :class="{ ' opacity-100 scale-x-100': !props.isOpen }" />
  </label>
</template>

<style scoped>
</style>