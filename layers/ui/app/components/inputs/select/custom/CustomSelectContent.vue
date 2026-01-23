<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectContent
    position="popper"
    :class="
      cn('border-b2 bg-b1/80! w-(--reka-select-trigger-width)! rounded-xl! backdrop-blur-lg',
         props.class,
      )
    ">
    <slot />
  </SelectContent>
</template>
