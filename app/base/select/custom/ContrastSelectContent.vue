<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectContent
    position="popper"
    :class="cn('!w-[var(--reka-select-trigger-width)] bg-n1/83 backdrop-blur-lg border-accent text-nc **:text-nc rounded-xl', props.class) ">
    <slot />
  </SelectContent>
</template>