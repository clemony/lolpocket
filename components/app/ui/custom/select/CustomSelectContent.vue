<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectContent position="popper" :class="cn('!w-[var(--reka-select-trigger-width)] !bg-b1/80 backdrop-blur-lg border-b2  !rounded-xl', props.class) ">
    <slot />
  </SelectContent>
</template>