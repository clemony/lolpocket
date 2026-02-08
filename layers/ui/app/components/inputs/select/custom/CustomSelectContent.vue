<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectContent
    position="popper"
    :class="
      cn(
        'w-(--reka-select-trigger-width)! rounded-xl! border-p2 bg-p0/80! backdrop-blur-lg',
        props.class,
      )
    ">
    <slot />
  </SelectContent>
</template>
