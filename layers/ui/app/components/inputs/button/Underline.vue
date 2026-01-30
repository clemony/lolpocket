<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  active?: boolean
  bg?: string
}>()
</script>

<template>
  <div :class="cn('group/ul relative w-fit cursor-pointer', props.class)">
    <slot />

    <span
      class="absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover/ul:w-full group-focus/ul:w-full"
      :class="{ 'w-full': props.active === true }"
      :style="{ backgroundColor: props.bg || 'var(--bc)' }"
    />
  </div>
</template>

<style scoped></style>
