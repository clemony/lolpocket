<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
  model?: boolean
}>()
</script>

<template>
  <label  :class="cn('btn  btn-ghost btn-square', props.class)">
    <slot />
    <icon name="right" class="size-4 dst tldr-30 shrink-0 scale-x-100 " :class="{ '!rotate-180 peer-checked:!rotate-180 ':  props.model }" />
  </label>
</template>

<style scoped>
</style>