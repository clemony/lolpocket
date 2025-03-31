<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  active?: boolean
}>()
</script>

<template>
  <div :class="cn('relative w-fit cursor-pointer', props.class)">
    <slot />
    <span
      class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-current group-hover/bl:w-full group-focus/bl:w-full"
      :class="{ 'w-full': props.active == true }"></span>
  </div>
</template>

<style scoped>

</style>
