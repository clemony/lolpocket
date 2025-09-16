<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  active?: boolean
  bg?: string
}>()
</script>

<template>
  <div :class="cn('relative w-fit cursor-pointer group/ul', props.class)">
    <slot />

    <span
      class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 group-hover/ul:w-full group-focus/ul:w-full"
      :class="{ 'w-full': props.active == true }"
      :style="{ backgroundColor: props.bg || 'var(--bc)' }"></span>
  </div>
</template>

<style scoped></style>
